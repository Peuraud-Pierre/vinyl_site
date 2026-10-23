import { useEffect, useState } from 'react'

// Suit le défilement : section active (celle qui contient le milieu de l'écran),
// position verticale et avancement global de 0 à 1.
export function useScrollStop() {
  const [state, setState] = useState({ stop: 0, y: 0, progress: 0 })

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-stop]')]
    let raf = 0

    const update = () => {
      raf = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      const mid = window.innerHeight / 2
      let stop = 0
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= mid) stop = Number(s.dataset.stop)
      }
      setState({ stop, y, progress })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return state
}
