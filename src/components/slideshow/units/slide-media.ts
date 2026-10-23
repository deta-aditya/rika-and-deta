import { Union, type InferUnion } from '@detaditya/yamin'

// --- Unit ---

export const SlideMedias = Union(data => ({
  image: data<{ src: string }>(),
  video: data<{ src: string }>(),
}))

export type SlideMedia = InferUnion<typeof SlideMedias>

// --- Private ---

const VIDEO_EXTENSION = /\.mp4$/i

// --- Constructors ---

export const createSlideMedia = (src: string): SlideMedia =>
  VIDEO_EXTENSION.test(src) ? SlideMedias.video({ src }) : SlideMedias.image({ src })

// --- Selectors ---

export const getSlideMediaSrc = (media: SlideMedia): string => media.payload.src
