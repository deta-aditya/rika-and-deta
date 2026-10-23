import { z } from 'zod'
import { Sections } from './section'
import { Orientations } from './orientation'
import type { Section } from './section'

// --- Unit ---

// --- Private ---

const EmphasisHeadingRaw = z.object({
  before: z.string(),
  em: z.string(),
  after: z.string(),
})

const SignatureRaw = z.object({
  lead: z.string(),
  trailing: z.string(),
  trailingAsCaption: z.boolean(),
})

const HeroSectionRaw = z.object({
  kind: z.literal('hero'),
  payload: z.object({
    bgKey: z.string(),
    eyebrow: z.string(),
    title: EmphasisHeadingRaw,
    badge: z.string(),
    dateRange: z.string(),
    scrollCue: z.string(),
    scrollTarget: z.string(),
  }),
})

const MomentSectionRaw = z.object({
  kind: z.literal('moment'),
  payload: z.object({
    bgKey: z.string(),
    orientation: z.enum(['left', 'right']),
    windowTitle: z.string(),
    photoTitle: z.string(),
    heading: EmphasisHeadingRaw,
    date: z.string(),
    body: z.array(z.string()),
    photoLabel: z.string(),
    images: z.array(z.string()),
  }),
})

const TodaySectionRaw = z.object({
  kind: z.literal('today'),
  payload: z.object({
    bgKey: z.string(),
    banner: z.string(),
    title: EmphasisHeadingRaw,
    letterTitle: z.string(),
    letterBody: z.array(z.string()),
    signature: SignatureRaw,
  }),
})

const CountdownSectionRaw = z.object({
  kind: z.literal('countdown'),
  payload: z.object({
    bgKey: z.string(),
    banner: z.string(),
    title: EmphasisHeadingRaw,
    targetDate: z.string(),
    daysLabel: z.string(),
    hoursLabel: z.string(),
    minutesLabel: z.string(),
    secondsLabel: z.string(),
    signature: SignatureRaw,
    footNote: z.string(),
  }),
})

const SectionRaw = z.discriminatedUnion('kind', [
  HeroSectionRaw,
  MomentSectionRaw,
  TodaySectionRaw,
  CountdownSectionRaw,
])

type SectionRawValue = z.infer<typeof SectionRaw>

const toSection = (raw: SectionRawValue): Section => {
  switch (raw.kind) {
    case 'hero': return Sections.hero(raw.payload)
    case 'moment': return Sections.moment({
      ...raw.payload,
      orientation: raw.payload.orientation === 'left' ? Orientations.left() : Orientations.right(),
    })
    case 'today': return Sections.today(raw.payload)
    case 'countdown': return Sections.countdown(raw.payload)
  }
}

// --- Constructors ---

export const SectionsSchema = z.array(SectionRaw).transform(raws => raws.map(toSection))
