import { ArrowRight, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

const vipFeatures = [
  'Full VIP access to all sessions & keynotes',
  'Exclusive backstage networking lounge',
  'Priority front-row seating at all events',
  'Dedicated event concierge & concierge service',
  'Complimentary premium dining & drinks',
  'Post-event recordings & highlight reel',
]

const standardFeatures = [
  'Full access to all talks, panels & workshops',
  'Entry to networking sessions & exhibitions',
  'Digital event program & session recordings',
  'Access to the networking app & matchmaking',
]

export default function Tickets() {
  return (
    <section id="tickets" className="relative">
      {/* Diagonal transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-[#0D0D0D]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }}
      />

      <div className="bg-[#0D0D0D] section-padding section-padding-y">
        <div className="content-max-width">
          <SectionLabel text="Get Tickets" light />

          <ScrollReveal>
            <h2 className="text-display-m text-white mt-4 mb-4">Pick Your Experience</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body-l text-[#808080] max-w-[480px] mb-16">
              Join the most anticipated event of the year. Choose the pass that fits how
              you want to experience it.
            </p>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* VIP Pass */}
            <ScrollReveal delay={0.15}>
              <div className="bg-[#1A1A1A] border border-[#333333] rounded-2xl p-8 lg:p-12 h-full flex flex-col relative overflow-hidden">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="flex justify-between items-start mb-8">
                  <span className="text-body-s text-white">VIP Pass</span>
                  <span className="text-display-m text-white">$599</span>
                </div>

                {/* Abstract illustration */}
                <div className="flex-1 flex items-center justify-center py-8">
                  <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
                    <path d="M40 100L80 20L120 100" stroke="#CCFF00" strokeWidth="1.5" fill="none" opacity="0.5" />
                    <path d="M50 100L80 40L110 100" stroke="#CCFF00" strokeWidth="1.5" fill="none" opacity="0.4" />
                    <path d="M60 100L80 60L100 100" stroke="#CCFF00" strokeWidth="1.5" fill="none" opacity="0.3" />
                    <line x1="30" y1="100" x2="130" y2="100" stroke="#CCFF00" strokeWidth="1" opacity="0.3" />
                  </svg>
                </div>

                <ul className="space-y-3 mb-8">
                  {vipFeatures.map(f => (
                    <li key={f} className="flex items-center gap-3 text-body-m text-[#808080]">
                      <Check className="w-4 h-4 text-[#CCFF00] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="group w-full flex items-center justify-center gap-3 bg-[#CCFF00] text-[#0D0D0D] py-4 rounded-full text-body-s uppercase tracking-wide transition-all duration-300 hover:bg-[#E5FF00] hover:scale-[1.02] neon-glow hover:neon-glow-strong">
                  Buy Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>

            {/* Standard Pass */}
            <ScrollReveal delay={0.25}>
              <div className="bg-[#F5F0E8] border border-[rgba(26,22,18,0.15)] rounded-2xl p-8 lg:p-12 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-body-s text-[#1A1612]">Standard Pass</span>
                  <span className="text-display-m text-[#1A1612]">$299</span>
                </div>

                {/* Cube illustration */}
                <div className="flex-1 flex items-center justify-center py-8">
                  <svg width="160" height="120" viewBox="0 0 160 120" fill="none">
                    <path d="M80 20L130 45V95L80 120L30 95V45L80 20Z" stroke="#1A1612" strokeWidth="1.5" fill="none" opacity="0.4" />
                    <path d="M80 20V70" stroke="#1A1612" strokeWidth="1" opacity="0.3" />
                    <path d="M30 45L80 70L130 45" stroke="#1A1612" strokeWidth="1" opacity="0.3" />
                  </svg>
                </div>

                <ul className="space-y-3 mb-8">
                  {standardFeatures.map(f => (
                    <li key={f} className="flex items-center gap-3 text-body-m text-[#6B6560]">
                      <Check className="w-4 h-4 text-[#1A1612] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="group w-full flex items-center justify-center gap-3 bg-[#0D0D0D] text-white py-4 rounded-full text-body-s uppercase tracking-wide transition-all duration-300 hover:bg-[#CCFF00] hover:text-[#0D0D0D]">
                  Buy Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
