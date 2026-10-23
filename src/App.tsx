import { useMemo } from 'react'
import { AssetGate } from './components/asset-gate'
import { ErrorPage } from './components/error-page'
import { PasswordGate } from './components/password-gate'
import { AppProvider } from './contexts/app-context'
import { createBrowserMediaPreloader } from './data-gateways/browser-media-preloader'
import { createHttpSessionGateway } from './data-gateways/http-session-gateway'
import { createOpenSessionGateway } from './data-gateways/open-session-gateway'
import { Anniversary } from './screens/anniversary'
import sectionsData from './assets/sections.json'
import { createMediaUrl } from './screens/anniversary/units/media-url'
import { collectMediaPaths } from './screens/anniversary/units/section'
import { SectionsSchema } from './screens/anniversary/units/section-schema'

const sectionsResult = SectionsSchema.safeParse(sectionsData)

const mediaUrls = sectionsResult.success
  ? collectMediaPaths(sectionsResult.data).map(createMediaUrl)
  : []

const App = () => {
  const sessionGateway = useMemo(
    () => (import.meta.env.DEV ? createOpenSessionGateway() : createHttpSessionGateway()),
    [],
  )
  const mediaPreloader = useMemo(() => createBrowserMediaPreloader(), [])

  if (!sectionsResult.success) {
    return <ErrorPage message={sectionsResult.error.message} />
  }

  return (
    <AppProvider
      sessionGateway={sessionGateway}
      mediaPreloader={mediaPreloader}
      sections={sectionsResult.data}
    >
      <PasswordGate>
        <AssetGate urls={mediaUrls}>
          <Anniversary />
        </AssetGate>
      </PasswordGate>
    </AppProvider>
  )
}

export default App
