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

  // Only the active slide and its neighbours stay mounted, so a slideshow never holds every
  // photo decoded at once.
  const isNearActive = (index: number) => {
    const distance = Math.abs(index - activeIndex)
    return Math.min(distance, slideCount - distance) <= 1
  }

  const next = () => setActiveIndex(current => (current + 1) % slideCount)
  const prev = () => setActiveIndex(current => (current - 1 + slideCount) % slideCount)

  return { activeIndex, isNearActive, next, prev }
}
