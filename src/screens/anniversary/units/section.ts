import { Union, type InferUnion } from '@detaditya/yamin'
import type { HeroPayload } from './hero-payload'
import type { MomentPayload } from './moment-payload'
import type { TodayPayload } from './today-payload'
import type { CountdownPayload } from './countdown-payload'

// --- Unit ---

export const Sections = Union(data => ({
  hero: data<HeroPayload>(),
  moment: data<MomentPayload>(),
  today: data<TodayPayload>(),
  countdown: data<CountdownPayload>(),
}))

export type Section = InferUnion<typeof Sections>

// --- Selectors ---

export const collectBgKeys = (sections: Section[]): string[] =>
  sections.map(section => section.payload.bgKey)
