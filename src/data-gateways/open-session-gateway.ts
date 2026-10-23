import type { SessionGateway } from './session-gateway'

// --- Constructors ---

// Used by `vite dev`, which has no /api routes. Media is served from public/ there.
export const createOpenSessionGateway = (): SessionGateway => ({
  hasSession: async () => true,
  unlock: async () => true,
})
