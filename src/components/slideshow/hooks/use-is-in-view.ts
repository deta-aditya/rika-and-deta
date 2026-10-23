import { useEffect, useRef, useState } from 'react'

const VISIBLE_RATIO = 0.5

export const useIsInView = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (element === null) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: VISIBLE_RATIO },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
