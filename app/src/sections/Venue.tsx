import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

export default function Venue() {
  return (
    <section id="venue" className="relative">
      {/* Diagonal transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-[#F5F0E8]"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0%)' }}
      />

      <div className="bg-[#F5F0E8] section-padding section-padding-y">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
            {/* Left column */}
            <div>
              <SectionLabel text="Location" />

              <ScrollReveal>
                <h2 className="text-display-m text-[#1A1612] mt-4 mb-4">
                  Silicon Valley, California
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-body-m text-[#6B6560] mb-4">
                  North Star Building, San Mateo County, CA, 94080
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex items-center gap-2 text-body-s text-[#6B6560] mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono">15–16 MAR 2026</span>
                  <span className="mx-2">·</span>
                  <Clock className="w-4 h-4" />
                  <span className="font-mono">9:00 AM to 2:00 PM</span>
                </div>
              </ScrollReveal>

              {/* Map Embed */}
              <ScrollReveal delay={0.2}>
                <div className="rounded-xl overflow-hidden border border-[rgba(26,22,18,0.1)] mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.097717130!2d-122.32368492362794!3d37.56303562199436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e0e4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sSan%20Mateo%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Venue Map"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <a
                  href="https://maps.google.com/?q=San+Mateo+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body-s text-[#1A1612] hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </ScrollReveal>
            </div>

            {/* Right column - Venue Photo */}
            <ScrollReveal delay={0.2} className="flex items-start">
              <div className="rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] w-full">
                <img
                  src="/images/venue.jpg"
                  alt="North Star Building conference venue"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
