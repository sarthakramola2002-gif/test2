import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const faqs = [
  {
    q: 'What types of events do you manage?',
    a: 'We manage corporate conferences, product launches, award ceremonies, charity galas, trade shows, hybrid events, and everything in between. From intimate boardroom summits to multi-day festivals, we handle events of all scales.',
  },
  {
    q: 'How far in advance should I book your services?',
    a: 'We recommend reaching out 3-6 months before your event date for optimal planning. However, we also specialize in fast-turnaround events and can accommodate shorter timelines when needed.',
  },
  {
    q: 'Do you handle virtual and hybrid events?',
    a: 'Absolutely. We build end-to-end hybrid experiences with livestreaming, virtual networking, interactive Q&A, and seamless integration between in-person and remote attendees.',
  },
  {
    q: 'What is included in your event management package?',
    a: 'Our full-service package includes venue sourcing, vendor management, event design, branding, logistics coordination, on-site management, post-event analytics, and dedicated project management throughout.',
  },
  {
    q: 'Can you work within our budget?',
    a: 'Yes. We offer scalable solutions that adapt to your budget. Whether you\'re planning a premium experience or a cost-effective event, we maximize impact at every price point.',
  },
  {
    q: 'How do you measure event success?',
    a: 'We track KPIs including attendee satisfaction, engagement rates, lead generation, social media reach, sponsor ROI, and post-event survey results — delivering a comprehensive success report after every event.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[rgba(26,22,18,0.1)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-heading-m text-[#1A1612] pr-8 group-hover:text-[#1F51FF] transition-colors">{q}</span>
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#1A1612] transition-transform duration-300">
          {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-body-m text-[#6B6560] max-w-[600px]">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#F5F0E8] section-padding section-padding-y">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <ScrollReveal>
              <h2 className="text-display-m text-[#1A1612] mb-6">
                Answers for Your Event Questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-m text-[#6B6560]">
                Find answers to common questions about our event management services, planning timelines, and how we bring your vision to life.
              </p>
            </ScrollReveal>
          </div>

          {/* Right column - Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
