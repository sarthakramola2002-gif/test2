import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#CCFF00]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <p className="text-caption text-[#808080] mb-4 md:mb-6">
          <span className="text-[#CCFF00] font-bold">PRERA</span> — FROM VISION TO VENUE
        </p>

        <div ref={textRef} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-16">
          <div className="md:w-[55%] text-left">
            <p className="text-[clamp(22px,3vw,42px)] md:text-display-m text-white font-serif italic tracking-tight leading-[1.15]">
              The only agency <span className="bg-[#CCFF00] text-[#0D0D0D] px-2 md:px-3 py-0.5 rounded font-sans not-italic font-bold">built</span> for brands who refuse to let their events stay in the dark.
            </p>
          </div>
          <div ref={imagesRef} className="md:w-[35%]">
            <img
              src="/images/mission-1.jpg"
              alt="Event planning"
              className="inline-img w-full h-auto min-h-[120px] md:min-h-[180px] rounded-2xl object-cover shadow-2xl opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
