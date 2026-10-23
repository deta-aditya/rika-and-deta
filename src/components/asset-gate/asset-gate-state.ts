import { Union, type InferUnion } from '@detaditya/yamin'

// --- Unit ---

export const AssetStates = Union(data => ({
  loading: data<{ settledCount: number; total: number }>(),
  ready: null,
}))

export type AssetState = InferUnion<typeof AssetStates>
