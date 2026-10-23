import type { ReactNode } from 'react'
import { GateStates } from './gate-state'
import { PasswordOverlay } from './password-overlay'
import { usePasswordGate } from './use-password-gate'

type PasswordGateProps = {
  children: ReactNode
}

export const PasswordGate = ({ children }: PasswordGateProps) => {
  const { gate, handleInputChange, handleSubmit } = usePasswordGate()

  return GateStates.match(gate, {
    checking: () => null,
    unlocked: () => <>{children}</>,
    locked: ({ input, hasError }) => (
      <PasswordOverlay
        value={input}
        hasError={hasError}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    ),
  })
}
