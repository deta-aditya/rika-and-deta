import { Union, type InferUnion } from '@detaditya/yamin'
import type { HeroPayload } from './hero-payload'
import type { MomentPayload } from './moment-payload'
import type { TodayPayload } from './today-payload'
import type { CountdownPayload } from './countdown-payload'
import { createBgPath } from './media-url'

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

// Every file the page needs to look complete: backgrounds first, then the moment media.
export const collectMediaPaths = (sections: Section[]): string[] => {
  const backgroundPaths = collectBgKeys(sections).map(createBgPath)
  const momentPaths = sections.flatMap(section =>
    Sections.match(section, { moment: ({ images }) => images, _: () => [] }),
  )
  return [...new Set([...backgroundPaths, ...momentPaths])]
}
