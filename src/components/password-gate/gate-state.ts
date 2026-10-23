import { Union, type InferUnion } from '@detaditya/yamin'

// --- Unit ---

export const GateStates = Union(data => ({
  checking: null,
  locked: data<{ input: string; hasError: boolean }>(),
  unlocked: null,
}))

export type GateState = InferUnion<typeof GateStates>
