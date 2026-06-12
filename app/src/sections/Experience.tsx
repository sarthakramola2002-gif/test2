import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    number: '01',
    title: 'Concept',
    description:
      'We start with your vision and business goals — crafting a strategic blueprint that turns objectives into immersive event experiences.',
    icon: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="mx-auto mb-6">
        <circle cx="60" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="35" cy="55" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="85" cy="55" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="60" cy="65" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="48" y1="38" x2="42" y2="47" stroke="currentColor" strokeWidth="1.5" />
        <line x1="72" y1="38" x2="78" y2="47" stroke="currentColor" strokeWidth="1.5" />
        <line x1="52" y1="62" x2="56" y2="60" stroke="currentColor" strokeWidth="1.5" />
        <line x1="68" y1="62" x2="64" y2="60" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Curation',
    description:
      'From venue sourcing to speaker coordination and sponsor management — we curate every detail to create moments that resonate.',
    icon: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="mx-auto mb-6">
        <path d="M60 15L75 30L60 45L45 30L60 15Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M60 25L70 35L60 45L50 35L60 25Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M60 35L65 40L60 45L55 40L60 35Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="35" y1="55" x2="85" y2="55" stroke="currentColor" strokeWidth="1.5" />
        <line x1="30" y1="60" x2="90" y2="60" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Production',
    description:
      'Flawless on-site execution with real-time management. You enjoy the event while our team handles every detail behind the scenes.',
    icon: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="mx-auto mb-6">
        <path
          d="M60 15C80 15 95 30 95 45C95 60 80 70 60 70C40 70 25 60 25 45C25 30 40 15 60 15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M85 25L95 20L90 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M35 25L25 20L30 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M60 35V55" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 45H70" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.exp-card')
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] section-padding relative" style={{ paddingBottom: '160px' }}>
      {/* Glow effect in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="content-max-width relative z-10">
        {/* Two column header */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-20 mb-20 items-end">
          <ScrollReveal>
            <h2 className="text-display-l text-white font-bold leading-tight">
              Learn how we are actually driving <span className="text-[#CCFF00] italic font-serif font-light">Business Growth</span> through events.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-l text-[#808080]">
              Every event is designed around brand application — so you leave with tangible ROI
              and unforgettable experiences that elevate your market presence.
            </p>
          </ScrollReveal>
        </div>

        {/* Experience cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {experiences.map((exp) => (
            <div
              key={exp.number}
              className="exp-card group bg-[#1A1A1A] border border-[#333333] rounded-xl p-8 lg:p-10 transition-all duration-500 hover:border-[#CCFF00] hover:shadow-[0_0_40px_rgba(204,255,0,0.12)] hover:-translate-y-2"
            >
              <span className="text-caption text-[#808080] font-mono tracking-widest block mb-6">{exp.number}</span>
              <div className="text-white group-hover:text-[#CCFF00] transition-colors duration-500">
                {exp.icon}
              </div>
              <h3 className="text-heading-m text-white font-bold mb-4 group-hover:text-[#CCFF00] transition-colors">{exp.title}</h3>
              <p className="text-body-m text-[#808080] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
