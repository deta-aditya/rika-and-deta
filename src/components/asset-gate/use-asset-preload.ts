import { useEffect, useState } from 'react'
import { useApp } from '../../contexts/app-context'
import { AssetStates, type AssetState } from './asset-gate-state'

// Avoids a one-frame flash of the loading screen when everything is already cached.
const MIN_LOADING_MS = 400

const wait = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export const useAssetPreload = (urls: string[]) => {
  const { mediaPreloader } = useApp()
  const [state, setState] = useState<AssetState>(() =>
    AssetStates.loading({ settledCount: 0, total: urls.length }),
  )

  // Syncs with an external system: the network and the browser media cache.
  useEffect(() => {
    let isCancelled = false
    const startedAt = Date.now()

    const handleProgress = (settledCount: number) => {
      if (!isCancelled) setState(AssetStates.loading({ settledCount, total: urls.length }))
    }

    mediaPreloader
      .preload(urls, handleProgress)
      .then(() => wait(Math.max(0, MIN_LOADING_MS - (Date.now() - startedAt))))
      .then(() => {
        if (!isCancelled) setState(AssetStates.ready())
      })

    return () => {
      isCancelled = true
    }
  }, [mediaPreloader, urls])

  return state
}
