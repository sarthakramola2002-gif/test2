import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  highlightWords?: string[]
  className?: string
  highlightClassName?: string
}

export default function TextReveal({
  text,
  highlightWords = [],
  className = '',
  highlightClassName = 'bg-[rgba(204,255,0,0.2)] px-3 py-0.5 rounded',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const words = ref.current.querySelectorAll('.reveal-word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    )
  }, [text])

  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(
          hw => word.toLowerCase().replace(/[^a-z]/g, '') === hw.toLowerCase()
        )
        return (
          <span
            key={i}
            className={`reveal-word inline-block mr-[0.3em] ${isHighlight ? highlightClassName : ''}`}
          >
            {word}
          </span>
        )
      })}
    </div>
  )
}
