import { useEffect, useState } from 'react'
import { SlideMedias, type SlideMedia } from '../units/slide-media'

const ADVANCE_INTERVAL_MS = 4000

// Images advance on a timer; a video advances itself through its own `ended` event.
export const useSlideshow = (slides: SlideMedia[]) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const slideCount = slides.length
  const isActiveVideo = slideCount > 0 && SlideMedias.isVideo(slides[activeIndex])

  useEffect(() => {
    if (slideCount <= 1 || isActiveVideo) return
    const id = setTimeout(
      () => setActiveIndex(current => (current + 1) % slideCount),
      ADVANCE_INTERVAL_MS,
    )
    return () => clearTimeout(id)
  }, [activeIndex, slideCount, isActiveVideo])

  const next = () => setActiveIndex(current => (current + 1) % slideCount)
  const prev = () => setActiveIndex(current => (current - 1 + slideCount) % slideCount)

  return { activeIndex, next, prev }
}
