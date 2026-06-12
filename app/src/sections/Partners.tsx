import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const partners = [
  { name: 'Cvent', tier: 'platinum' },
  { name: 'Eventbrite', tier: 'platinum' },
  { name: 'Bizzabo', tier: 'gold' },
  { name: 'Hopin', tier: 'gold' },
  { name: 'Whova', tier: 'gold' },
  { name: 'Splash', tier: 'silver' },
  { name: 'Aventri', tier: 'silver' },
  { name: 'MeetingPlay', tier: 'silver' },
  { name: 'Socio', tier: 'silver' },
  { name: 'Grip', tier: 'silver' },
  { name: 'vFairs', tier: 'bronze' },
  { name: 'EventMobi', tier: 'bronze' },
  { name: 'Swapcard', tier: 'bronze' },
  { name: 'Boomset', tier: 'bronze' },
  { name: 'Hubilo', tier: 'bronze' },
  { name: 'Airmeet', tier: 'bronze' },
]

export default function Partners() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll('.partner-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: {
          each: 0.04,
          from: 'center',
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  const tierColors: Record<string, { border: string; hover: string; text: string }> = {
    platinum: { border: 'border-white/10', hover: 'hover:border-[#CCFF00]/50', text: 'text-white/50' },
    gold: { border: 'border-white/8', hover: 'hover:border-[#CCFF00]/40', text: 'text-white/40' },
    silver: { border: 'border-white/5', hover: 'hover:border-[#CCFF00]/30', text: 'text-white/35' },
    bronze: { border: 'border-white/5', hover: 'hover:border-[#CCFF00]/25', text: 'text-white/30' },
  }

  return (
    <section className="bg-[#0D0D0D] section-padding section-padding-y border-t border-[#1A1A1A] relative">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CCFF00]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="content-max-width relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <SectionLabel text="Trusted by Industry Leaders" light />
            <h2 className="text-display-m text-white mt-6 font-bold">
              Event <span className="text-[#CCFF00] italic font-serif font-light">Partners</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body-l text-[#808080] max-w-[560px] mx-auto mt-4">
              We collaborate with the world's leading event technology platforms to deliver
              seamless, data-driven experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Partner Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#1A1A1A]">
          {partners.map((partner, i) => {
            const colors = tierColors[partner.tier]
            return (
              <div
                key={i}
                className={`partner-card flex items-center justify-center h-24 lg:h-28 bg-[#0D0D0D] ${colors.border} border-b border-r transition-all duration-300 cursor-default group hover:bg-[#CCFF00]/5 ${colors.hover}`}
              >
                <span
                  className={`font-display font-bold tracking-widest text-xs lg:text-sm ${colors.text} group-hover:text-[#CCFF00] transition-colors duration-300 select-none`}
                >
                  {partner.name.toUpperCase()}
                </span>
              </div>
            )
          })}
        </div>

        {/* Tier legend */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center gap-8 mt-8">
            {['Platinum', 'Gold', 'Silver', 'Bronze'].map(tier => (
              <div key={tier} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  tier === 'Platinum' ? 'bg-white/50' :
                  tier === 'Gold' ? 'bg-[#CCFF00]/60' :
                  tier === 'Silver' ? 'bg-white/30' :
                  'bg-white/20'
                }`} />
                <span className="text-caption text-[#808080]">{tier}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
