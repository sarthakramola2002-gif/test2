import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Conference main stage', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-2.jpg', alt: 'Networking event', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-3.jpg', alt: 'Workshop session', span: 'col-span-1 row-span-1' },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return

    const items = gridRef.current.querySelectorAll('.gallery-item')
    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="w-full">
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`gallery-item overflow-hidden ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-110 hover:brightness-110 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
