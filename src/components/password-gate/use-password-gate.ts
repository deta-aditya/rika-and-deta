import { useEffect, useState } from 'react'
import { useApp } from '../../contexts/app-context'
import { GateStates, type GateState } from './gate-state'

export const usePasswordGate = () => {
  const { sessionGateway } = useApp()

  const [gate, setGate] = useState<GateState>(GateStates.checking())

  // Syncs with an external system: the server decides whether a session cookie already exists.
  useEffect(() => {
    let isCancelled = false
    sessionGateway.hasSession().then(hasSession => {
      if (isCancelled) return
      setGate(hasSession ? GateStates.unlocked() : GateStates.locked({ input: '', hasError: false }))
    })
    return () => {
      isCancelled = true
    }
  }, [sessionGateway])

  const handleInputChange = (input: string) =>
    setGate(GateStates.locked({ input, hasError: false }))

  const handleSubmit = async (input: string) => {
    const isUnlocked = await sessionGateway.unlock(input)
    setGate(isUnlocked ? GateStates.unlocked() : GateStates.locked({ input, hasError: true }))
  }

  return { gate, handleInputChange, handleSubmit }
}
