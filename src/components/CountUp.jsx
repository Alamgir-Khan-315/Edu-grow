import { useEffect, useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useInView(0.1)
  const hasStarted = useRef(false)

  // Parse end value to get number and suffix
  // Handles formats like "200+", "50K+", "98%", "10M+"
  const match = String(end).match(/(\d+)([^\d]*)/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (visible && !hasStarted.current) {
      hasStarted.current = true
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        
        // Easing function (easeOutExpo)
        const easeOutExpo = 1 - Math.pow(2, -10 * progress)
        const currentCount = Math.floor(easeOutExpo * target)
        
        setCount(currentCount)
        
        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(target) // Ensure final value is exact
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [visible, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
