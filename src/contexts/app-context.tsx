import { createContext, useContext } from 'react'
import type { PropsWithChildren } from 'react'
import type { MediaPreloader } from '../data-gateways/media-preloader'
import type { SessionGateway } from '../data-gateways/session-gateway'
import type { Section } from '../screens/anniversary/units/section'

type AppContextValue = {
  sessionGateway: SessionGateway
  mediaPreloader: MediaPreloader
  sections: Section[]
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ sessionGateway, mediaPreloader, sections, children }: PropsWithChildren<AppContextValue>) => (
  <AppContext.Provider value={{ sessionGateway, mediaPreloader, sections }}>
    {children}
  </AppContext.Provider>
)

export const useApp = (): AppContextValue => {
  const value = useContext(AppContext)
  if (value === null) throw new Error('useApp must be used within AppProvider')
  return value
}
