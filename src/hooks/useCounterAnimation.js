import { useEffect, useRef, useState } from 'react'

export function useCounterAnimation(target) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 2000
        const frameDuration = 1000 / 60
        const totalFrames = Math.round(duration / frameDuration)
        let frame = 0

        const interval = setInterval(() => {
          frame++
          const easeProgress = 1 - Math.pow(1 - frame / totalFrames, 3)
          setCount(Math.round(easeProgress * target))
          if (frame === totalFrames) {
            clearInterval(interval)
            setCount(target)
          }
        }, frameDuration)

        observer.unobserve(el)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return { ref, count }
}
