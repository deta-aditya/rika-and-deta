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

// Only the active background and its neighbours need to exist: sections are read in order, so the
// neighbours are the next ones to fade in or out. Mounting every background keeps a full-screen
// blurred GPU layer alive for each of them, which exhausts memory on phones.
export const collectNearbyBgKeys = (sections: Section[], activeBg: string): string[] => {
  const bgKeys = collectBgKeys(sections)
  const activeIndex = bgKeys.indexOf(activeBg)
  return bgKeys.filter((_, index) => Math.abs(index - activeIndex) <= 1)
}
