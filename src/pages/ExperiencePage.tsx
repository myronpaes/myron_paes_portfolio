import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { experiences } from '../data/portfolio'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import type { PageKind } from '../App'

interface ExperiencePageProps {
  navigate: (page: PageKind) => void
}

/** Horizontal scrollable photo strip for a role */
function GalleryStrip({ images }: { images: string[] }) {
  const stripRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!stripRef.current) return
    stripRef.current.scrollBy({ left: dir === 'right' ? 220 : -220, behavior: 'smooth' })
  }

  return (
    <div className="relative mt-5 group/gallery">
      {/* Strip */}
      <div ref={stripRef} className="gallery-strip">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery photo ${i + 1}`}
            className="gallery-strip__img"
          />
        ))}
      </div>

      {/* Prev / Next buttons — visible on hover */}
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll gallery left"
        className="gallery-arrow gallery-arrow--left opacity-0 group-hover/gallery:opacity-100"
      >
        ←
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Scroll gallery right"
        className="gallery-arrow gallery-arrow--right opacity-0 group-hover/gallery:opacity-100"
      >
        →
      </button>
    </div>
  )
}

type Tab = 'professional' | 'leadership'

const professionalExperiences = experiences.filter(e => e.type !== 'Leadership')
const leadershipExperiences = experiences.filter(e => e.type === 'Leadership')

export default function ExperiencePage({ navigate }: ExperiencePageProps) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  const ref = useReveal()
  const [activeTab, setActiveTab] = useState<Tab>('professional')

  const displayed = activeTab === 'professional' ? professionalExperiences : leadershipExperiences

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Nav currentPage="experience" navigate={navigate} />

      <div className="pt-32 pb-4 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-4">Experience</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#0C0C0C]">
          Where I've worked,
          <br />
          <span className="italic font-light">and what I built there.</span>
        </h1>
      </div>

      <section className="py-16 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3] mt-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Toggle — replaces the static "Timeline" label */}
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => setActiveTab('professional')}
              className={`text-left text-xs tracking-widest uppercase transition-colors ${
                activeTab === 'professional'
                  ? 'text-[#0C0C0C]'
                  : 'text-[#B0AB9F] hover:text-[#8A877F]'
              }`}
            >
              {activeTab === 'professional' ? '— ' : ''}Professional
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`text-left text-xs tracking-widest uppercase transition-colors ${
                activeTab === 'leadership'
                  ? 'text-[#0C0C0C]'
                  : 'text-[#B0AB9F] hover:text-[#8A877F]'
              }`}
            >
              {activeTab === 'leadership' ? '— ' : ''}Leadership
            </button>
          </div>

          <div className="flex-1">
            {displayed.map((exp, i) => (
              <div key={i} className="exp-entry py-8 first:pt-0">
                {/* Header row */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-0.5">
                  <h3 className="font-display text-2xl text-[#0C0C0C]">{exp.company}</h3>
                  <p className="text-xs tracking-widest uppercase text-[#B0AB9F]">{exp.period}</p>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                  <p className="text-sm text-[#4A4845]">{exp.role}</p>
                  <p className="text-[10px] text-[#B0AB9F]">{exp.location}</p>
                </div>

                {/* Bullets + gallery side by side on md+ */}
                <div className={`grid grid-cols-1 gap-6 items-start${exp.gallery && exp.gallery.length > 0 ? ' md:grid-cols-[280px_1fr]' : ''}`}>
                  {/* Gallery */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <GalleryStrip images={exp.gallery} />
                  )}

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#4A4845] leading-relaxed font-light">
                        <span className="text-[#D4CFC8] flex-shrink-0 mt-[3px]">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
