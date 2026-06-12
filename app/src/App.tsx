import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import Stats from './sections/Stats'
import CaseStudies from './sections/CaseStudies'
import Experience from './sections/Experience'
import Marquee from './sections/Marquee'
import Team from './sections/Team'
import Audience from './sections/Audience'
import Agenda from './sections/Agenda'
import Partners from './sections/Partners'
import Gallery from './sections/Gallery'
import FAQ from './sections/FAQ'
import Tickets from './sections/Tickets'
import Venue from './sections/Venue'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
    }
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <CaseStudies />
        <Mission />
        <Experience />
        <Marquee />
        <Team />
        <Audience />
        <Agenda />
        <Partners />
        <Gallery />
        <FAQ />
        <Tickets />
        <Venue />
      </main>
      <Footer />
    </div>
  )
}
