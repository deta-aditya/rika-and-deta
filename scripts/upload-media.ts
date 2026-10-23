// Uploads the web-sized media in media-optimized/ to the private R2 bucket.
// Run: npm run optimize-media, then npm run upload-media   (reads credentials from .env.local)

import { readdir, readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { createR2Client, getObjectUrl, readR2Config } from '../api/_lib/r2.ts'

const MEDIA_DIRECTORY = 'media-optimized'
const MEDIA_PATTERN = /^(bg|moment)-.+\.(jpe?g|mp4)$/i

// Browsers cache the object under its signed URL, so the file itself can be cached for good.
const CACHE_CONTROL = 'private, max-age=31536000, immutable'

const CONTENT_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.mp4': 'video/mp4',
}

const config = readR2Config()
const client = createR2Client(config)

const fileNames = (await readdir(MEDIA_DIRECTORY)).filter(name => MEDIA_PATTERN.test(name))

for (const fileName of fileNames) {
  const key = fileName.toLowerCase()
  const body = await readFile(join(MEDIA_DIRECTORY, fileName))
  const response = await client.fetch(getObjectUrl(config, key), {
    method: 'PUT',
    headers: { 'Content-Type': CONTENT_TYPES[extname(key)], 'Cache-Control': CACHE_CONTROL },
    body,
  })

  if (!response.ok) throw new Error(`Upload failed for ${key}: ${response.status} ${await response.text()}`)
  console.log(`uploaded ${key}`)
}

console.log(`Done, ${fileNames.length} files.`)
