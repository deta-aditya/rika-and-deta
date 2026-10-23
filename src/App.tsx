import { useMemo } from 'react'
import { ErrorPage } from './components/error-page'
import { PasswordGate } from './components/password-gate'
import { AppProvider } from './contexts/app-context'
import { createHttpSessionGateway } from './data-gateways/http-session-gateway'
import { createOpenSessionGateway } from './data-gateways/open-session-gateway'
import { Anniversary } from './screens/anniversary'
import sectionsData from './assets/sections.json'
import { SectionsSchema } from './screens/anniversary/units/section-schema'

const sectionsResult = SectionsSchema.safeParse(sectionsData)

const App = () => {
  const sessionGateway = useMemo(
    () => (import.meta.env.DEV ? createOpenSessionGateway() : createHttpSessionGateway()),
    [],
  )

  if (!sectionsResult.success) {
    return <ErrorPage message={sectionsResult.error.message} />
  }

  return (
    <AppProvider sessionGateway={sessionGateway} sections={sectionsResult.data}>
      <PasswordGate>
        <Anniversary />
      </PasswordGate>
    </AppProvider>
  )
}

export default App
