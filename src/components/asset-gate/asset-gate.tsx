import type { ReactNode } from 'react'
import { AssetStates } from './asset-gate-state'
import { LoadingOverlay } from './loading-overlay'
import { useAssetPreload } from './use-asset-preload'

type AssetGateProps = {
  urls: string[]
  children: ReactNode
}

export const AssetGate = ({ urls, children }: AssetGateProps) => {
  const state = useAssetPreload(urls)

  return AssetStates.match(state, {
    ready: () => <>{children}</>,
    loading: ({ settledCount, total }) => <LoadingOverlay settledCount={settledCount} total={total} />,
  })
}
