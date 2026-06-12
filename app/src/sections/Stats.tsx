import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    value: '2,500+',
    label: 'Events Managed',
    icon: (
      <svg className="w-10 h-10 text-[#CCFF00] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: '180+',
    label: 'Corporate Clients',
    icon: (
      <svg className="w-10 h-10 text-[#CCFF00] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: '350+',
    label: 'Venues Covered',
    icon: (
      <svg className="w-10 h-10 text-[#CCFF00] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: '45+',
    label: 'Expert Team Members',
    icon: (
      <svg className="w-10 h-10 text-[#CCFF00] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !numbersRef.current) return

    const counters = numbersRef.current.querySelectorAll('.stat-value')
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target') || '0'
      const suffix = counter.getAttribute('data-suffix') || ''
      const hasComma = target.includes(',')
      const numericTarget = parseInt(target.replace(/,/g, ''), 10)

      gsap.fromTo(
        counter,
        { innerText: '0' },
        {
          innerText: numericTarget,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
          onUpdate: function () {
            const val = Math.round(gsap.getProperty(counter, 'innerText') as number)
            if (hasComma) {
              counter.textContent = val.toLocaleString() + suffix
            } else {
              counter.textContent = val + suffix
            }
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 lg:py-32 section-padding relative" id="stats">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent" />

      <div className="content-max-width">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-display-m text-white font-bold tracking-tight">
              We're <span className="text-[#CCFF00] italic font-serif font-light">Result</span><br />
              Driven
            </h2>
          </div>
        </ScrollReveal>

        <div ref={numbersRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1000px] mx-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="h-full">
              <div className="p-10 lg:p-14 bg-[#1A1A1A] border border-[#CCFF00] flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] hover:-translate-y-1 group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <h3
                  className="stat-value text-display-s text-[#CCFF00] font-bold mb-3"
                  data-target={stat.value.replace(/[^0-9]/g, '')}
                  data-suffix={stat.value.replace(/[0-9,]/g, '')}
                >
                  0
                </h3>
                <p className="text-body-m text-white font-semibold max-w-[140px] leading-tight">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
