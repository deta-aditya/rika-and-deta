import type { SessionGateway } from './session-gateway'

// --- Constructors ---

export const createHttpSessionGateway = (): SessionGateway => ({
  hasSession: () =>
    fetch('/api/session').then(response => response.ok, () => false),
  unlock: password =>
    fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }).then(response => response.ok, () => false),
})
