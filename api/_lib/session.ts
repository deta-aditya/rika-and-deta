import { createHash, createHmac, timingSafeEqual } from 'node:crypto'

// --- Private ---

const COOKIE_NAME = 'rd_session'
const SESSION_SECONDS = 60 * 60 * 24 * 30

const readEnv = (name: string): string => {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable ${name}`)
  return value
}

const sign = (payload: string): string =>
  createHmac('sha256', readEnv('SESSION_SECRET')).update(payload).digest('base64url')

const hash = (value: string): Buffer => createHash('sha256').update(value).digest()

const readCookie = (request: Request): string | null => {
  const header = request.headers.get('cookie') ?? ''
  const entry = header.split(';').map(part => part.trim()).find(part => part.startsWith(`${COOKIE_NAME}=`))
  return entry ? entry.slice(COOKIE_NAME.length + 1) : null
}

// --- Selectors ---

export const isPasswordCorrect = (input: string): boolean =>
  timingSafeEqual(hash(input), hash(readEnv('SITE_PASSWORD')))

export const hasValidSession = (request: Request): boolean => {
  const token = readCookie(request)
  if (token === null) return false

  const [expiresAt, signature] = token.split('.')
  if (!expiresAt || !signature) return false

  const expected = Buffer.from(sign(expiresAt))
  const actual = Buffer.from(signature)
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return false

  return Number(expiresAt) > Date.now() / 1000
}

export const createSessionCookie = (): string => {
  const expiresAt = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS)
  const token = `${expiresAt}.${sign(expiresAt)}`
  return `${COOKIE_NAME}=${token}; Max-Age=${SESSION_SECONDS}; Path=/; HttpOnly; Secure; SameSite=Lax`
}
