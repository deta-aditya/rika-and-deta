import { useEffect, useRef, useState } from 'react'
import type { RevealWrapperProps } from './reveal-wrapper'

// Reveals the wrapper the first time it scrolls into view, then stops observing.
export const useRevealWrapper = ({ delay }: RevealWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIn(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const dataAttributes = delay !== undefined ? { 'data-delay': delay } : {}

  return { ref, isIn, dataAttributes }
}
