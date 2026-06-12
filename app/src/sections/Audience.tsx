import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const audiences = [
  {
    label: 'Designers',
    description:
      'Rethink how you prototype, test, and ship interfaces when AI is part of the product — not just a feature.',
    icon: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        <path d="M100 20L140 60L100 140L60 60L100 20Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M100 40L125 65L100 120L75 65L100 40Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="70" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="85" y1="120" x2="115" y2="120" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 140Q100 130 130 140" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Agencies',
    description:
      'Learn how top agencies are integrating AI into client work, pitches, and delivery without losing creative control.',
    icon: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        <path d="M60 80Q100 40 140 80Q100 120 60 80Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M75 80Q100 60 125 80Q100 100 75 80Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="100" y1="40" x2="100" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="140" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="60" y1="80" x2="40" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="100" y1="120" x2="100" y2="140" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Founders',
    description:
      'Get direct access to the frameworks, tools, and people helping early-stage teams move faster with AI.',
    icon: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        <path d="M100 20L120 70H80L100 20Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M100 70V130" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 100Q100 80 130 100" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="70" cy="110" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="130" cy="110" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Leaders',
    description:
      'Understand how to build AI-ready teams, manage risk, and make strategic decisions in a fast-moving landscape.',
    icon: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        <rect x="70" y="30" width="60" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="60" y="60" width="80" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="50" y="90" width="100" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="100" y1="50" x2="100" y2="60" stroke="currentColor" strokeWidth="1.5" />
        <line x1="100" y1="80" x2="100" y2="90" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Developers',
    description:
      'Go deep on implementation — real engineering challenges, production lessons, and tools that actually work at scale.',
    icon: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        <path d="M60 50L40 80L60 110" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M140 50L160 80L140 110" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="85" y1="120" x2="115" y2="40" stroke="currentColor" strokeWidth="1.5" />
        <rect x="70" y="30" width="60" height="100" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>
    ),
  },
]

export default function Audience() {
  const [activeTab, setActiveTab] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
    )
  }, [activeTab])

  return (
    <section className="bg-[#0D0D0D] section-padding section-padding-y">
      <div className="content-max-width">
        <SectionLabel text="Who should attend" light />

        <ScrollReveal>
          <h2 className="text-display-m text-white mt-6 mb-16 font-bold">
            Designed for <span className="text-[#CCFF00] italic font-serif font-light">Everyone</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
          {/* Tab Buttons */}
          <ScrollReveal>
            <div className="flex flex-row lg:flex-col gap-2">
              {audiences.map((audience, i) => (
                <button
                  key={audience.label}
                  onClick={() => setActiveTab(i)}
                  className={`text-left px-5 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeTab === i
                      ? 'bg-[#CCFF00] text-[#0D0D0D]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-body-s font-bold">{audience.label}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab Content */}
          <div ref={contentRef} className="flex flex-col items-center text-center">
            <div className="text-white/30 mb-8 transition-colors duration-300">
              {audiences[activeTab].icon}
            </div>
            <h3 className="text-display-s text-white font-bold mb-4">
              {audiences[activeTab].label}
            </h3>
            <p className="text-body-l text-[#808080] max-w-[480px] leading-relaxed">
              {audiences[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
