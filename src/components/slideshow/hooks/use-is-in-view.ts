import { useEffect, useRef, useState } from 'react'

const VISIBLE_RATIO = 0.5
// One viewport above and below counts as "near", so media is ready before it scrolls into view.
const NEAR_MARGIN = '100% 0px'

export const useIsInView = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isNearView, setIsNearView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (element === null) return

    const inViewObserver = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: VISIBLE_RATIO },
    )
    const nearViewObserver = new IntersectionObserver(
      ([entry]) => setIsNearView(entry.isIntersecting),
      { rootMargin: NEAR_MARGIN },
    )
    inViewObserver.observe(element)
    nearViewObserver.observe(element)
    return () => {
      inViewObserver.disconnect()
      nearViewObserver.disconnect()
    }
  }, [])

  return { ref, isInView, isNearView }
}
