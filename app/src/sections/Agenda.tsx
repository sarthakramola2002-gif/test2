import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const day1Sessions = [
  {
    time: '09:00 – 09:30',
    title: 'Registration & Welcome Coffee',
    description: 'Check in, grab coffee, and connect with fellow attendees in the welcome lounge.',
    tags: ['Introduction', 'Networking'],
    host: 'Event Team',
    hostImg: '/images/host-1.jpg',
    duration: '30 mins',
  },
  {
    time: '09:30 – 10:30',
    title: 'Opening Keynote: The Future of Event Experiences',
    description: 'A visionary look at how technology and creativity are reshaping the events industry.',
    tags: ['Keynote', 'Industry'],
    host: 'Alex Morgan',
    hostImg: '/images/host-2.jpg',
    duration: '60 mins',
  },
  {
    time: '11:00 – 12:00',
    title: 'Panel: Scaling Events from 100 to 10,000 Attendees',
    description: 'Industry leaders share lessons learned from growing events while maintaining quality.',
    tags: ['Panel', 'Growth'],
    host: 'Priya Nair',
    hostImg: '/images/host-3.jpg',
    duration: '60 mins',
  },
  {
    time: '13:00 – 14:00',
    title: 'Workshop: Event Design Masterclass',
    description: 'Hands-on session on creating immersive event experiences with limited budgets.',
    tags: ['Workshop', 'Design'],
    host: 'Sarah Chen',
    hostImg: '/images/host-4.jpg',
    duration: '60 mins',
  },
  {
    time: '15:00 – 16:00',
    title: 'Networking: Sponsor Meet & Greet',
    description: 'Connect with our event technology partners and explore innovative solutions.',
    tags: ['Networking', 'Sponsors'],
    host: 'James Okafor',
    hostImg: '/images/host-5.jpg',
    duration: '60 mins',
  },
]

const day2Sessions = [
  {
    time: '09:30 – 10:00',
    title: 'Morning Coffee & Check-In',
    description: 'Ease into the day with coffee and informal conversations before sessions begin.',
    tags: ['Networking', 'Coffee'],
    host: 'Event Team',
    hostImg: '/images/host-1.jpg',
    duration: '30 mins',
  },
  {
    time: '10:00 – 11:00',
    title: 'Keynote: Measuring Event ROI in the Digital Age',
    description: 'Data-driven approaches to proving event value and optimizing future experiences.',
    tags: ['Keynote', 'Analytics'],
    host: 'Alex Morgan',
    hostImg: '/images/host-3.jpg',
    duration: '60 mins',
  },
  {
    time: '11:30 – 12:30',
    title: 'Panel: Sustainability in Event Management',
    description: 'How top organizers are reducing environmental impact without compromising experience.',
    tags: ['Panel', 'Sustainability'],
    host: 'Priya Nair',
    hostImg: '/images/host-2.jpg',
    duration: '60 mins',
  },
  {
    time: '14:00 – 15:00',
    title: 'Workshop: Hybrid Event Production',
    description: 'Technical deep-dive into livestreaming, virtual networking, and hybrid logistics.',
    tags: ['Workshop', 'Hybrid'],
    host: 'James Okafor',
    hostImg: '/images/host-4.jpg',
    duration: '60 mins',
  },
  {
    time: '16:00 – 17:00',
    title: 'Closing Ceremony & Awards',
    description: 'Celebrate the best events of the year and network at the closing reception.',
    tags: ['Ceremony', 'Awards'],
    host: 'Sarah Chen',
    hostImg: '/images/host-5.jpg',
    duration: '60 mins',
  },
]

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(1)
  const sessions = activeDay === 1 ? day1Sessions : day2Sessions
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('.agenda-item')
    gsap.fromTo(
      items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
      }
    )
  }, [activeDay])

  return (
    <section id="agenda" className="bg-[#F5F0E8] section-padding section-padding-y">
      <div className="content-max-width">
        <SectionLabel text="Event schedule" />

        <ScrollReveal>
          <h2 className="text-display-m text-[#1A1612] mb-12">Event Agenda</h2>
        </ScrollReveal>

        {/* Day Selector */}
        <ScrollReveal>
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setActiveDay(1)}
              className={`flex items-center gap-3 rounded-full pl-2 pr-6 py-2 transition-all duration-300 ${
                activeDay === 1
                  ? 'bg-[#CCFF00] text-[#0D0D0D]'
                  : 'bg-[#1A1A1A] text-white'
              }`}
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-caption ${
                  activeDay === 1 ? 'bg-[#0D0D0D] text-[#CCFF00]' : 'bg-[#333333] text-white'
                }`}
              >
                1 MAR
              </span>
              <div className="text-left">
                <div className="text-body-s font-medium">Day 1</div>
                <div className="text-caption opacity-70">Keynotes & Workshops</div>
              </div>
            </button>

            <button
              onClick={() => setActiveDay(2)}
              className={`flex items-center gap-3 rounded-full pl-2 pr-6 py-2 transition-all duration-300 ${
                activeDay === 2
                  ? 'bg-[#CCFF00] text-[#0D0D0D]'
                  : 'bg-[#1A1A1A] text-white'
              }`}
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-caption ${
                  activeDay === 2 ? 'bg-[#0D0D0D] text-[#CCFF00]' : 'bg-[#333333] text-white'
                }`}
              >
                2 MAR
              </span>
              <div className="text-left">
                <div className="text-body-s font-medium">Day 2</div>
                <div className="text-caption opacity-70">Panels & Closing</div>
              </div>
            </button>
          </div>
        </ScrollReveal>

        {/* Agenda List */}
        <div ref={listRef}>
          {sessions.map((session, i) => (
            <div
              key={`${activeDay}-${i}`}
              className="agenda-item grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-4 lg:gap-8 py-8 border-t border-[rgba(26,22,18,0.1)]"
            >
              {/* Time */}
              <div className="text-body-s text-[#6B6560] font-mono">{session.time}</div>

              {/* Content */}
              <div>
                <h3 className="text-heading-m text-[#1A1612] mb-2">{session.title}</h3>
                <p className="text-body-m text-[#6B6560] mb-3">{session.description}</p>
                <div className="flex flex-wrap gap-2">
                  {session.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-caption border border-[rgba(26,22,18,0.2)] rounded-full px-3 py-1.5 text-[#6B6560]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Host */}
              <div className="flex lg:flex-col items-center lg:items-end gap-3">
                <img
                  src={session.hostImg}
                  alt={session.host}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="text-right">
                  <div className="text-body-s text-[#6B6560]">
                    hosted by <span className="text-[#1A1612]">{session.host}</span>
                  </div>
                  <div className="text-caption text-[#6B6560]">Duration {session.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
