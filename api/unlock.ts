import { createSessionCookie, isPasswordCorrect } from './_lib/session.js'

const WRONG_PASSWORD_DELAY_MS = 500

const readPassword = async (request: Request): Promise<string> => {
  const body: unknown = await request.json().catch(() => null)
  if (typeof body === 'object' && body !== null && 'password' in body && typeof body.password === 'string') {
    return body.password
  }
  return ''
}

export const POST = async (request: Request) => {
  const password = await readPassword(request)

  if (!isPasswordCorrect(password)) {
    await new Promise(resolve => setTimeout(resolve, WRONG_PASSWORD_DELAY_MS))
    return new Response(null, { status: 401, headers: { 'Cache-Control': 'no-store' } })
  }

  return new Response(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store', 'Set-Cookie': createSessionCookie() },
  })
}
