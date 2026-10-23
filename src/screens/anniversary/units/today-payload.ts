import type { EmphasisHeading } from './emphasis-heading'
import type { Signature } from './signature'

// --- Unit ---

export type TodayPayload = {
  bgKey: string
  banner: string
  title: EmphasisHeading
  letterTitle: string
  letterBody: string[]
  signature: Signature
}
