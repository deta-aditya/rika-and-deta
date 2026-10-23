import { createContext, useContext } from 'react'
import type { PropsWithChildren } from 'react'
import type { SessionGateway } from '../data-gateways/session-gateway'
import type { Section } from '../screens/anniversary/units/section'

type AppContextValue = {
  sessionGateway: SessionGateway
  sections: Section[]
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ sessionGateway, sections, children }: PropsWithChildren<AppContextValue>) => (
  <AppContext.Provider value={{ sessionGateway, sections }}>
    {children}
  </AppContext.Provider>
)

export const useApp = (): AppContextValue => {
  const value = useContext(AppContext)
  if (value === null) throw new Error('useApp must be used within AppProvider')
  return value
}
