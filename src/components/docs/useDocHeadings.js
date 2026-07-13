import { useEffect, useState } from 'react'

export function useDocHeadings(containerRef, watchKey) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return undefined
    }

    const nodes = Array.from(container.querySelectorAll('h2[id], h3[id]'))
    const nextHeadings = nodes.map((node) => ({
      id: node.id,
      text: node.textContent || '',
      level: node.tagName === 'H3' ? 3 : 2,
    }))
    setHeadings(nextHeadings)
    setActiveId(nextHeadings[0]?.id || '')

    if (typeof IntersectionObserver === 'undefined' || nodes.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [containerRef, watchKey])

  return { headings, activeId }
}
