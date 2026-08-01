import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { aboutParagraphs, skillGroups } from '../data/portfolio'
import Footer from '../components/Footer'
import type { PageKind } from '../App'
import Nav from '../components/Nav'

interface AboutPageProps {
  navigate: (page: PageKind) => void
}

export default function AboutPage({ navigate }: AboutPageProps) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const bioRef  = useReveal()
  const skillRef = useReveal()
  const eduRef   = useReveal()

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Nav currentPage="about" navigate={navigate} />

      <div className="pt-32 pb-4 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-4">About</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#0C0C0C]">
          Setting the bar high,
          <br />
          <span className="italic font-light">and dreaming higher.</span>
        </h1>
      </div>

      {/* ── Bio ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3] mt-8">
        <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#8A877F] pt-1">Bio</p>
          </div>
          <div className="max-w-2xl space-y-5 text-[#2D2B29] leading-[1.85] font-light text-[15px]">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3]">
        <div ref={skillRef} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#8A877F] pt-1">Skills</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-base text-[#0C0C0C] mb-3">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm text-[#4A4845] font-light">
                      <span className="text-[#D4CFC8] flex-shrink-0 mt-[3px]">—</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────────────── */}
      <section className="py-16 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3]">
        <div ref={eduRef} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-[#8A877F] pt-1">Education</p>
          </div>
          <div className="space-y-10">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-2xl text-[#0C0C0C]">New Jersey Institute of Technology</h3>
                <span className="text-xs tracking-widest uppercase text-[#B0AB9F]">Expected 2028</span>
              </div>
              <p className="text-sm text-[#4A4845] mb-3">
                B.S. in Data Science &amp; B.S. in Business (Marketing)
              </p>
              <ul className="space-y-2">
                {[
                  'Full-ride Merit Scholarship via Albert Dorman Honors College.',
                  'Enrolled in accelerated BS/MBA and Dual Degree programs.',
                  'Key Classes: Data-driven Marketing Decision Making, Business Data Analytics, Machine Learning, Statistical Methods.',
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#4A4845] leading-relaxed font-light">
                    <span className="text-[#D4CFC8] flex-shrink-0 mt-[3px]">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '1px solid #E0DBD3', paddingTop: '2rem' }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-2xl text-[#0C0C0C]">Cherokee High School</h3>
                <span className="text-xs tracking-widest uppercase text-[#B0AB9F]">2020 – 2024</span>
              </div>
              <p className="text-sm text-[#4A4845] mb-3">High School Diploma</p>
              <ul className="space-y-2">
                {[
                  'Varsity Cross Country & Track, Varsity Chess Team.',
                  'Project Lead the Way, Aeronautics Club President, Future Business Leaders of America.',
                ].map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#4A4845] leading-relaxed font-light">
                    <span className="text-[#D4CFC8] flex-shrink-0 mt-[3px]">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
