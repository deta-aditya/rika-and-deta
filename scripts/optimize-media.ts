// Writes web-sized copies of the media in public/ to media-optimized/ (originals are untouched).
// Run: npm run optimize-media, then npm run upload-media

import { copyFile, mkdir, readdir, stat } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const SOURCE_DIRECTORY = 'public'
const OUTPUT_DIRECTORY = 'media-optimized'
const MEDIA_PATTERN = /^(bg|moment)-.+\.(jpe?g|mp4)$/i

// Backgrounds are shown blurred, so they can be much smaller than the photos.
const BACKGROUND_MAX_WIDTH = 1600
const MOMENT_MAX_WIDTH = 1800
const JPEG_QUALITY = 80

const getMaxWidth = (fileName: string): number =>
  fileName.startsWith('bg-') ? BACKGROUND_MAX_WIDTH : MOMENT_MAX_WIDTH

const formatMegabytes = (bytes: number): string => `${(bytes / 1024 / 1024).toFixed(1)} MB`

await mkdir(OUTPUT_DIRECTORY, { recursive: true })

const fileNames = (await readdir(SOURCE_DIRECTORY)).filter(name => MEDIA_PATTERN.test(name))

let totalBefore = 0
let totalAfter = 0

for (const fileName of fileNames) {
  const sourcePath = join(SOURCE_DIRECTORY, fileName)
  const outputPath = join(OUTPUT_DIRECTORY, fileName.toLowerCase())

  if (extname(fileName).toLowerCase() === '.mp4') {
    await copyFile(sourcePath, outputPath)
    continue
  }

  // rotate() bakes in the EXIF orientation, because the metadata is dropped on output
  const info = await sharp(sourcePath)
    .rotate()
    .resize({ width: getMaxWidth(fileName), withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(outputPath)

  const { size: sizeBefore } = await stat(sourcePath)
  totalBefore += sizeBefore
  totalAfter += info.size
  console.log(`${fileName}: ${formatMegabytes(sizeBefore)} -> ${formatMegabytes(info.size)}`)
}

console.log(`Images: ${formatMegabytes(totalBefore)} -> ${formatMegabytes(totalAfter)}`)
