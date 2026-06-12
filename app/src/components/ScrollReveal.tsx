import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 50,
  duration = 0.9,
  stagger = 0,
  start = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const elements = stagger > 0 ? ref.current.children : [ref.current]
    gsap.fromTo(
      elements,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
      }
    )
  }, [delay, y, duration, stagger, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
