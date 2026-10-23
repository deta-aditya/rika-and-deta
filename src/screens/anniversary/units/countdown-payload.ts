import type { EmphasisHeading } from './emphasis-heading'
import type { Signature } from './signature'

// --- Unit ---

export type CountdownPayload = {
  bgKey: string
  banner: string
  title: EmphasisHeading
  targetDate: string
  daysLabel: string
  hoursLabel: string
  minutesLabel: string
  secondsLabel: string
  signature: Signature
  footNote: string
}
