import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  events: [
    { label: 'Conferences', href: '#' },
    { label: 'Product Launches', href: '#' },
    { label: 'Award Ceremonies', href: '#' },
    { label: 'Trade Shows', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Work', href: '#case-studies' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Event Planning Guide', href: '#' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A]">
      <div className="content-max-width section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-[#CCFF00] rounded-full animate-pulse-glow opacity-60" />
                <div className="absolute inset-1 bg-[#0D0D0D] rounded-full" />
                <div className="absolute inset-2.5 bg-[#CCFF00] rounded-full" />
              </div>
              <span className="text-heading-m text-white font-bold tracking-tight">Prera</span>
            </div>
            <p className="text-body-m text-[#808080] mb-6 max-w-[280px]">
              Full-service event management for brands that demand unforgettable experiences.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center text-[#808080] hover:text-[#CCFF00] hover:border-[#CCFF00] transition-all duration-300"
                >
                  <span className="text-caption">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-body-s text-white font-bold uppercase tracking-widest mb-6">Events</h4>
            <ul className="space-y-3">
              {footerLinks.events.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-m text-[#808080] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-body-s text-white font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-m text-[#808080] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-body-s text-white font-bold uppercase tracking-widest mb-6">Get in Touch</h4>
            <p className="text-body-m text-[#808080] mb-4">
              Ready to plan your next event?
            </p>
            <a
              href="mailto:hello@prera.events"
              className="inline-flex items-center gap-2 text-body-s text-[#CCFF00] hover:text-[#E5FF00] transition-colors group"
            >
              hello@prera.events
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-[#808080]">
            &copy; 2026 Prera Events. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className="text-caption text-[#808080] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
