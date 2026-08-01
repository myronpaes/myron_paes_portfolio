import { useEffect } from 'react'
import { projects } from '../data/portfolio'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import type { PageKind } from '../App'

interface ProjectsPageProps {
  navigate: (page: PageKind) => void
  onProjectSelect: (slug: string) => void
}

export default function ProjectsPage({ navigate, onProjectSelect }: ProjectsPageProps) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  // Display order is controlled by the `projects` array in src/data/portfolio.ts —
  // reorder entries there to change how they appear here.

  const handleClick = (slug: string, kind: string, externalUrl?: string) => {
    if (kind === 'external' && externalUrl) {
      window.open(externalUrl, '_blank', 'noreferrer')
    } else {
      onProjectSelect(slug)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Nav currentPage="projects" navigate={navigate} />

      <div className="pt-32 pb-4 px-8 max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-4">Work</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#0C0C0C]">
          Everything I've built,
          <br />
          <span className="italic font-light">studied, and shipped.</span>
        </h1>
      </div>

      <section className="py-10 px-8 max-w-5xl mx-auto border-t border-[#E0DBD3] mt-8">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => handleClick(project.slug, project.kind, project.externalUrl)}
                className="project-card group relative overflow-hidden bg-[#EFEDE8] focus:outline-none"
                style={{ aspectRatio: '1 / 1' }}
                title={project.kind === 'external' ? 'Opens external link ↗' : undefined}
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: 'brightness(0.75) saturate(0.9)' }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(12,12,12,0.85) 0%, rgba(12,12,12,0.3) 50%, rgba(12,12,12,0.05) 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-[9px] tracking-widest uppercase text-[#C8C3BB] mb-1 leading-none">
                    {project.category.split(' · ')[0]}
                    {project.kind === 'external' && ' ↗'}
                  </p>
                  <h3 className="font-display text-sm md:text-base leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-[#A09C95] mt-0.5">{project.year}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-display italic text-sm text-white/60">{project.number}</span>
                </div>
              </button>
            ))}
          </div>
      </section>

      <Footer />
    </div>
  )
}
