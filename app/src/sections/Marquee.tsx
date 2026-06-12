const partners = [
  'Cvent',
  'Eventbrite',
  'Bizzabo',
  'Hopin',
  'Whova',
  'Splash',
  'Aventri',
  'MeetingPlay',
  'Socio',
  'Grip',
  'vFairs',
  'EventMobi',
  'Swapcard',
  'Hubilo',
]

export default function Marquee() {
  const allPartners = [...partners, ...partners, ...partners]

  return (
    <section className="bg-[#F5F0E8] py-20 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee" style={{ width: 'max-content' }}>
        {allPartners.map((name, i) => (
          <span
            key={i}
            className="font-display font-light text-[clamp(36px,4vw,64px)] text-[#1A1612]/20 mx-12 select-none hover:text-[#CCFF00] transition-colors duration-500 cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
