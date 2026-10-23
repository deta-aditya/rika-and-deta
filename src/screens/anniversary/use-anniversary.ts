import { useEffect, useState } from 'react'
import { useApp } from '../../contexts/app-context'

// Tracks which section is at the viewport center via its `data-bg` key.
export const useAnniversary = () => {
  const { sections } = useApp()
  const [activeBg, setActiveBg] = useState(sections[0].payload.bgKey)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[data-bg]')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const bgKey = (entry.target as HTMLElement).dataset.bg
        if (bgKey) setActiveBg(bgKey)
      })
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return { activeBg, sections }
}
