import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Users, Star, TrendingUp } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import ScrollReveal from '../components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    title: 'TechNexus Summit',
    subtitle: 'Global Developer Conference',
    category: 'Corporate Conference',
    image: '/images/gallery-1.jpg',
    stats: [
      { icon: <Users className="w-4 h-4" />, value: '5,000+', label: 'Attendees' },
      { icon: <Star className="w-4 h-4" />, value: '98%', label: 'Satisfaction' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '3x', label: 'ROI Increase' },
    ],
    description: 'A 3-day developer conference spanning 4 stages, 120+ speakers, and hands-on workshops — designed to be the most talked-about tech event of the year.',
    tags: ['Conference', 'Multi-Venue', 'Hybrid'],
    featured: true,
  },
  {
    title: 'Lumina Brand Launch',
    subtitle: 'Product Unveiling Experience',
    category: 'Product Launch',
    image: '/images/gallery-2.jpg',
    stats: [
      { icon: <Users className="w-4 h-4" />, value: '500+', label: 'VIP Guests' },
      { icon: <Star className="w-4 h-4" />, value: '40M', label: 'Social Reach' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '200%', label: 'Media Coverage' },
    ],
    description: 'An immersive product reveal with AR activations, live performances, and curated press experiences — generating global buzz overnight.',
    tags: ['Launch', 'Experiential', 'Press'],
    featured: false,
  },
  {
    title: 'Global Innovators Gala',
    subtitle: 'Annual Awards Ceremony',
    category: 'Award Ceremony',
    image: '/images/gallery-3.jpg',
    stats: [
      { icon: <Users className="w-4 h-4" />, value: '1,200+', label: 'Delegates' },
      { icon: <Star className="w-4 h-4" />, value: '50+', label: 'Awards' },
      { icon: <TrendingUp className="w-4 h-4" />, value: '95%', label: 'Return Rate' },
    ],
    description: 'A black-tie awards gala celebrating innovation across industries — complete with red carpet, live orchestra, and 4K livestream.',
    tags: ['Gala', 'Awards', 'Luxury'],
    featured: false,
  },
]

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const parallaxImgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Parallax on featured image
    if (parallaxImgRef.current) {
      gsap.fromTo(
        parallaxImgRef.current,
        { y: -40 },
        {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxImgRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )
    }

    // Stagger tags on featured card
    if (featuredRef.current) {
      const tags = featuredRef.current.querySelectorAll('.study-tag')
      gsap.fromTo(
        tags,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 70%',
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 lg:py-32 section-padding relative" id="case-studies">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#CCFF00]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="content-max-width relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel text="Our Work" light />
              <h2 className="text-display-m text-white mt-6 font-bold tracking-tight">
                Featured <span className="text-[#CCFF00] italic font-serif font-light">Case Studies</span>
              </h2>
              <p className="text-body-m text-[#808080] mt-4 max-w-[420px]">
                Real events, real results. See how we transform visions into unforgettable experiences.
              </p>
            </div>
            <button className="flex items-center gap-2 text-body-s font-bold text-white hover:text-[#CCFF00] transition-colors group pb-2 border-b border-white/20 hover:border-[#CCFF00]/50">
              View All Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* Layout: 1 featured + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Featured Case Study - Large */}
          <ScrollReveal delay={0.1}>
            <div ref={featuredRef} className="group cursor-pointer relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                {/* Image with parallax */}
                <div ref={parallaxImgRef} className="absolute inset-0">
                  <img
                    src={caseStudies[0].image}
                    alt={caseStudies[0].title}
                    className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
                {/* Hover accent */}
                <div className="absolute inset-0 bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/5 transition-colors duration-500" />

                {/* Top badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[#CCFF00] text-[#0D0D0D] text-caption font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {caseStudies[0].category}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="text-body-s text-[#CCFF00] font-semibold mb-2 uppercase tracking-wider">
                    {caseStudies[0].subtitle}
                  </p>
                  <h3 className="text-display-s text-white font-bold mb-4 group-hover:text-[#CCFF00] transition-colors">
                    {caseStudies[0].title}
                  </h3>
                  <p className="text-body-s text-[#808080] mb-5 max-w-[400px] leading-relaxed">
                    {caseStudies[0].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudies[0].tags.map(tag => (
                      <span
                        key={tag}
                        className="study-tag text-caption border border-white/20 text-white/70 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-8 pt-5 border-t border-white/10">
                    {caseStudies[0].stats.map(stat => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="text-[#CCFF00]">{stat.icon}</span>
                        <div>
                          <span className="text-body-s text-white font-bold block">{stat.value}</span>
                          <span className="text-caption text-[#808080]">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - 2 stacked cards */}
          <div className="flex flex-col gap-6">
            {caseStudies.slice(1).map((study, i) => (
              <ScrollReveal key={study.title} delay={0.2 + i * 0.15}>
                <div className="group cursor-pointer relative flex-1">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden h-full">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-[#0D0D0D]/40 to-transparent" />
                    {/* Hover accent */}
                    <div className="absolute inset-0 bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/5 transition-colors duration-500" />

                    {/* Category badge */}
                    <div className="absolute top-5 left-5 z-20">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-caption font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                        {study.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <p className="text-caption text-[#CCFF00] font-semibold mb-1 uppercase tracking-wider">
                        {study.subtitle}
                      </p>
                      <h3 className="text-heading-m text-white font-bold mb-3 group-hover:text-[#CCFF00] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-body-s text-[#808080] mb-4 line-clamp-2">
                        {study.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-caption border border-white/15 text-white/60 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 pt-4 border-t border-white/10">
                        {study.stats.map(stat => (
                          <div key={stat.label} className="flex items-center gap-1.5">
                            <span className="text-[#CCFF00]">{stat.icon}</span>
                            <span className="text-body-s text-white font-bold">{stat.value}</span>
                            <span className="text-caption text-[#808080] hidden sm:inline">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00]">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0D0D0D] transition-colors" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
