import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import LightbulbScene from '../components/LightbulbScene'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const bgOverlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      taglineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(
      bottomRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.5'
    )

    // Parallax on scroll
    if (sectionRef.current && bgOverlayRef.current) {
      gsap.to(bgOverlayRef.current, {
        y: 100,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Scroll indicator fade out
    const handleScroll = () => {
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: window.scrollY > 100 ? 0 : 1,
          duration: 0.3,
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* 3D Background */}
      <LightbulbScene />

      {/* Gradient overlay for depth */}
      <div ref={bgOverlayRef} className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]/80 z-[1] pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 grid grid-rows-[1fr_auto_1fr] items-center justify-items-center h-full px-4 sm:px-6 lg:px-12 pt-24 pb-12">
        {/* Top - empty, 3D scene shows here */}
        <div />

        {/* Center - Title & Tagline */}
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-display-xl text-white opacity-0 font-serif italic tracking-wider"
            style={{ textShadow: '0 0 80px rgba(204,255,0,0.2)' }}
          >
            Prera
          </h1>
          <p ref={taglineRef} className="text-body-l text-[#808080] mt-4 opacity-0 uppercase tracking-widest font-semibold">
            From Vision To Venue
          </p>
        </div>

        {/* Bottom - CTA & Avatars */}
        <div ref={bottomRef} className="flex flex-col items-center gap-6 opacity-0">
          {/* Attendee avatars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="/images/avatar-1.jpg"
                alt="Brand"
                className="w-8 h-8 rounded-full border-2 border-[#0D0D0D] object-cover"
              />
              <img
                src="/images/avatar-2.jpg"
                alt="Brand"
                className="w-8 h-8 rounded-full border-2 border-[#0D0D0D] object-cover"
              />
              <img
                src="/images/avatar-3.jpg"
                alt="Brand"
                className="w-8 h-8 rounded-full border-2 border-[#0D0D0D] object-cover"
              />
            </div>
            <span className="text-body-s text-white">Trusted by 180+ Brands</span>
          </div>

          {/* CTA Button */}
          <a
            href="#case-studies"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 bg-[#CCFF00] text-[#0D0D0D] px-8 py-4 rounded-full text-body-s uppercase tracking-wide transition-all duration-300 hover:bg-[#E5FF00] hover:scale-[1.03] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(229,255,0,0.5)]"
          >
            Explore Our Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-[#808080] animate-scroll-indicator" />
      </div>
    </section>
  )
}
