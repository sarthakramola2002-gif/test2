import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionLabelProps {
  text: string
  light?: boolean
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const brackets = ref.current.querySelectorAll('.bracket')
    gsap.fromTo(
      brackets,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  const textColor = light ? 'text-[#808080]' : 'text-[#6B6560]'

  return (
    <div ref={ref} className="relative inline-block mb-8">
      <span className={`bracket absolute -top-2 -left-3 text-lg ${textColor}`}>┌</span>
      <span className={`bracket absolute -top-2 -right-3 text-lg ${textColor}`}>┐</span>
      <span className={`text-caption ${textColor}`}>{text}</span>
      <span className={`bracket absolute -bottom-2 -left-3 text-lg ${textColor}`}>└</span>
      <span className={`bracket absolute -bottom-2 -right-3 text-lg ${textColor}`}>┘</span>
    </div>
  )
}
