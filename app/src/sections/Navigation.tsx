import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Services', href: '#experience' },
  { label: 'Speakers', href: '#team' },
  { label: 'Schedule', href: '#agenda' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="content-max-width flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#CCFF00] rounded-full animate-pulse-glow opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-1 bg-[#0D0D0D] rounded-full" />
              <div className="absolute inset-2.5 bg-[#CCFF00] rounded-full" />
            </div>
            <span className="text-heading-m text-white font-bold tracking-tight">Prera</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-body-s text-white/70 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#CCFF00] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#tickets')}
              className="bg-[#CCFF00] text-[#0D0D0D] px-5 py-2 rounded-full text-body-s font-bold uppercase tracking-wide hover:bg-[#E5FF00] transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              Get Tickets
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => scrollToSection(link.href)}
            className="text-display-m text-white font-bold hover:text-[#CCFF00] transition-colors"
            style={{ transitionDelay: isMobileOpen ? `${i * 80}ms` : '0ms' }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('#tickets')}
          className="bg-[#CCFF00] text-[#0D0D0D] px-8 py-4 rounded-full text-body-s font-bold uppercase tracking-wide mt-4"
        >
          Get Tickets
        </button>
      </div>
    </>
  )
}
