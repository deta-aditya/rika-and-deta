// --- Private ---

const MEDIA_ROUTE = '/api/media'

// --- Constructors ---

// In production, media lives in a private bucket behind the session-checked /api/media route.
// `vite dev` has no such route, so it serves the files straight from public/.
export const createMediaUrl = (path: string): string =>
  import.meta.env.DEV ? path : `${MEDIA_ROUTE}${path}`

export const createBgPath = (bgKey: string): string => `/bg-${bgKey}.jpg`
