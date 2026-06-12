import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '../components/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Animate inline images
    if (imagesRef.current) {
      const imgs = imagesRef.current.querySelectorAll('.inline-img')
      gsap.fromTo(
        imgs,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }

    // Parallax text on scroll
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0D0D0D] section-padding relative overflow-hidden"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#CCFF00]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <SectionLabel text="About the agency" light />

        <div ref={textRef} className="text-display-xl text-white font-serif italic tracking-wide leading-tight">
          <span className="inline">The only agency </span>
          <span ref={imagesRef} className="inline">
            <img
              src="/images/mission-1.jpg"
              alt="Event planning"
              className="inline-img inline-block w-20 h-12 rounded-lg object-cover align-middle mx-1 shadow-sm opacity-0"
            />
          </span>
          <span className="inline"> </span>
          <span className="inline bg-[#CCFF00] text-[#0D0D0D] px-3 py-0.5 rounded font-sans not-italic font-bold">built</span>
          <span className="inline"> for brands who refuse to let their events stay in the dark.</span>
        </div>
      </div>
    </section>
  )
}
