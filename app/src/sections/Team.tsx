import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'
import TextReveal from '../components/TextReveal'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Alex Morgan',
    title: 'Event Director',
    image: '/images/speaker-1.jpg',
  },
  {
    name: 'Priya Nair',
    title: 'Creative Head',
    image: '/images/speaker-2.jpg',
  },
  {
    name: 'Sarah Chen',
    title: 'Venue Specialist',
    image: '/images/speaker-3.jpg',
  },
  {
    name: 'James Okafor',
    title: 'Logistics Manager',
    image: '/images/speaker-4.jpg',
  },
]

export default function Team() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.team-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotateY: -5 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section id="team" className="relative">
      {/* Diagonal transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-[#0D0D0D]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0%)' }}
      />

      <div className="bg-[#0D0D0D] py-32 section-padding relative">
        <div className="content-max-width">
          <SectionLabel text="Our Experts" light />

          <TextReveal
            text="Meet the Event Management Experts."
            className="text-display-l text-white mt-4 mb-12 font-bold tracking-tight"
          />

          {/* Subheading row */}
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-20">
              <p className="text-body-l text-[#808080]">No stress. Just unforgettable events.</p>
              <p className="text-body-m text-[#808080] max-w-[360px]">
                Hand-picked planners, designers, and coordinators — dedicated to bringing your vision to life.
                Let us handle the details.
              </p>
            </div>
          </ScrollReveal>

          {/* Team grid */}
          <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
            {team.map(member => (
              <div key={member.name} className="team-card group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-[#CCFF00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-heading-m text-white group-hover:text-[#CCFF00] transition-colors">{member.name}</h3>
                <p className="text-body-s text-[#808080]">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
