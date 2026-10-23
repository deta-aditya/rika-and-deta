import { Union, type InferUnion } from '@detaditya/yamin'

// --- Unit ---

export const Orientations = Union(() => ({
  left: null,
  right: null,
}))

export type Orientation = InferUnion<typeof Orientations>
