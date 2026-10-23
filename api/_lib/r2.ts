import { AwsClient } from 'aws4fetch'

// --- Unit ---

export type R2Config = {
  accountId: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
}

// --- Private ---

// The signing time is rounded down to the hour, so every request within that hour gets the
// identical signed URL. That keeps the browser cache valid between preloading and rendering.
// The URL stays valid for at least one hour after any request in that window.
const SIGNED_URL_SECONDS = 2 * 60 * 60
const SIGNING_WINDOW_MS = 60 * 60 * 1000

const getSigningDatetime = (): string => {
  const windowStart = new Date(Math.floor(Date.now() / SIGNING_WINDOW_MS) * SIGNING_WINDOW_MS)
  return windowStart.toISOString().replace(/[:-]|\.\d{3}/g, '')
}

const readEnv = (name: string): string => {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable ${name}`)
  return value
}

const createObjectUrl = (config: R2Config, key: string): URL =>
  new URL(`https://${config.accountId}.r2.cloudflarestorage.com/${config.bucket}/${key}`)

// --- Constructors ---

export const readR2Config = (): R2Config => ({
  accountId: readEnv('R2_ACCOUNT_ID'),
  bucket: readEnv('R2_BUCKET'),
  accessKeyId: readEnv('R2_ACCESS_KEY_ID'),
  secretAccessKey: readEnv('R2_SECRET_ACCESS_KEY'),
})

export const createR2Client = (config: R2Config): AwsClient =>
  new AwsClient({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    service: 's3',
    region: 'auto',
  })

// --- Selectors ---

export const getSignedObjectUrl = async (config: R2Config, key: string): Promise<string> => {
  const url = createObjectUrl(config, key)
  url.searchParams.set('X-Amz-Expires', String(SIGNED_URL_SECONDS))
  const signed = await createR2Client(config).sign(new Request(url), {
    aws: { signQuery: true, datetime: getSigningDatetime() },
  })
  return signed.url
}

export const getObjectUrl = (config: R2Config, key: string): string =>
  createObjectUrl(config, key).toString()
