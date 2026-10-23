import { getSignedObjectUrl, readR2Config } from '../_lib/r2.js'
import { hasValidSession } from '../_lib/session.js'

// Keys are stored lowercase in R2, so the request is lowercased too.
const SAFE_FILE_NAME = /^[a-z0-9][a-z0-9._-]*\.(jpe?g|png|mp4)$/

// Must stay under one hour (the minimum remaining life of a signed URL) so a cached
// redirect never points at an expired URL.
const REDIRECT_CACHE_SECONDS = 3000

const readFileName = (request: Request): string => {
  const lastSegment = new URL(request.url).pathname.split('/').pop() ?? ''
  try {
    return decodeURIComponent(lastSegment).toLowerCase()
  } catch {
    return ''
  }
}

export const GET = async (request: Request) => {
  if (!hasValidSession(request)) return new Response(null, { status: 401 })

  const fileName = readFileName(request)
  if (!SAFE_FILE_NAME.test(fileName)) return new Response(null, { status: 404 })

  const location = await getSignedObjectUrl(readR2Config(), fileName)

  return new Response(null, {
    status: 302,
    headers: { Location: location, 'Cache-Control': `private, max-age=${REDIRECT_CACHE_SECONDS}` },
  })
}
