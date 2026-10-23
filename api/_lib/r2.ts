import { AwsClient } from 'aws4fetch'

// --- Unit ---

export type R2Config = {
  accountId: string
  bucket: string
  accessKeyId: string
  secretAccessKey: string
}

// --- Private ---

const SIGNED_URL_SECONDS = 300

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
  const signed = await createR2Client(config).sign(new Request(url), { aws: { signQuery: true } })
  return signed.url
}

export const getObjectUrl = (config: R2Config, key: string): string =>
  createObjectUrl(config, key).toString()
