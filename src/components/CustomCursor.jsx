import { useEffect, useRef, useCallback } from 'react'

/**
 * CustomCursor
 * - Small filled dot that snaps to mouse position instantly
 * - Larger ring that lags behind (lerp) for a smooth trailing effect
 * - Expands on hover over interactive elements
 * - Hides on touch-only devices (CSS media query handles this)
 */
export default function CustomCursor({ theme: t }) {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const raf     = useRef(null)

  const lerp = (a, b, n) => a + (b - a) * n

  const tick = useCallback(() => {
    ring.current.x = lerp(ring.current.x, pos.current.x, 0.14)
    ring.current.y = lerp(ring.current.y, pos.current.y, 0.14)

    if (dotRef.current) {
      dotRef.current.style.left = pos.current.x + 'px'
      dotRef.current.style.top  = pos.current.y + 'px'
    }
    if (ringRef.current) {
      ringRef.current.style.left = ring.current.x + 'px'
      ringRef.current.style.top  = ring.current.y + 'px'
    }
    raf.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const onMove = e => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const onEnter = e => {
      const el = e.target.closest('a,button,[data-cursor-expand]')
      if (el) {
        dotRef.current?.classList.add('expanded')
        ringRef.current?.classList.add('expanded')
      }
    }
    const onLeave = () => {
      dotRef.current?.classList.remove('expanded')
      ringRef.current?.classList.remove('expanded')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [tick])

  const accent = t?.accent ?? '#0e69be'

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ background: accent, color: accent }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ borderColor: accent, color: accent }}
      />
    </>
  )
}
