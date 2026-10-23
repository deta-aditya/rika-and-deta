// --- Unit ---

// Data gateway contract for the media session. The password is verified by the
// server, so nothing secret ever ships in the client bundle. The shell provides
// the implementation and wires it at the composition root.
export type SessionGateway = {
  hasSession: () => Promise<boolean>
  unlock: (password: string) => Promise<boolean>
}
