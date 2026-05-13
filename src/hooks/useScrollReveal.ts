import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      nodes.forEach((node) => {
        node.setAttribute('data-reveal-visible', 'true')
      })
      return
    }

    const revealOnLoad = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        nodes.forEach((node) => {
          node.setAttribute('data-reveal-visible', 'true')
        })
      })
    })

    return () => window.cancelAnimationFrame(revealOnLoad)
  }, [])
}
