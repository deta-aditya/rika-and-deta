import type { EmphasisHeading } from './emphasis-heading'
import type { Orientation } from './orientation'

// --- Unit ---

export type MomentPayload = {
  bgKey: string
  orientation: Orientation
  windowTitle: string
  photoTitle: string
  heading: EmphasisHeading
  date: string
  body: string[]
  photoLabel: string
  images: string[]
}
