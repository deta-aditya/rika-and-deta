import { hasValidSession } from './_lib/session.js'

export const GET = (request: Request) =>
  new Response(null, {
    status: hasValidSession(request) ? 204 : 401,
    headers: { 'Cache-Control': 'no-store' },
  })
