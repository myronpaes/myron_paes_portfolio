import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { hobbies } from '../data/portfolio'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import type { PageKind } from '../App'

interface HobbiesPageProps {
  navigate: (page: PageKind) => void
}

export default function HobbiesPage({ navigate }: HobbiesPageProps) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const ref = useReveal()

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Nav currentPage="hobbies" navigate={navigate} />

      <div className="pt-32 pb-4 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-4">Hobbies</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#0C0C0C]">
          Off the clock,
          <br />
          <span className="italic font-light">still paying attention.</span>
        </h1>
      </div>

      <section className="py-16 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3] mt-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
          {hobbies.map((hobby, i) => (
            <div
              key={i}
              className="polaroid cursor-pointer"
              style={{
                transform: `rotate(${hobby.rotation}deg)`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = 'rotate(0deg) scale(1.02)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = `rotate(${hobby.rotation}deg)`)
              }
            >
              <div className="bg-[#EFEDE8]" style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'sepia(30%) contrast(108%) brightness(97%) saturate(85%)' }}
                />
              </div>
              <div className="pt-3 px-1">
                <p className="font-display text-[13px] text-[#0C0C0C] mb-1 leading-snug">
                  {hobby.title}
                </p>
                <p className="text-[11px] text-[#8A877F] leading-relaxed font-light mb-3">
                  {hobby.description}
                </p>
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors"
                >
                  {hobby.linkLabel} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
