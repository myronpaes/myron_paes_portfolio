import { useEffect } from 'react'
import { projects } from '../data/portfolio'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import type { PageKind } from '../App'

interface ProjectPageProps {
  slug: string
  onBack: () => void
  onNavigate: (slug: string) => void
  navigate: (page: PageKind) => void
}

export default function ProjectPage({ slug, onBack, onNavigate, navigate }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button onClick={onBack} className="text-sm text-[#8A877F]">
          ← Back
        </button>
      </div>
    )
  }

  const otherProjects = projects.filter((p) => p.slug !== slug && p.kind === 'narrative')

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <Nav currentPage="home" navigate={navigate} isProject onBack={onBack} />

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-0">
        <div className="max-w-3xl mx-auto px-8 pb-10">
          <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-5">{project.category}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight text-[#0C0C0C] mb-4">
            {project.title}
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-[#4A4845] font-light leading-snug mb-8">
            {project.subtitle}
          </p>
          {/* Project link buttons — or meta fallback if no links defined */}
          {project.projectLinks && project.projectLinks.length > 0 ? (
            <div className="border-t border-b border-[#E0DBD3] py-3 flex flex-wrap items-center gap-3">
              {project.projectLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-[#0C0C0C] text-[#0C0C0C] px-4 py-2 hover:bg-[#0C0C0C] hover:text-[#F7F6F3] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <div className="border-t border-b border-[#E0DBD3] py-3 flex items-center gap-4">
              <span className="text-xs tracking-widest uppercase text-[#B0AB9F]">{project.year}</span>
              <span className="text-[#E0DBD3]">·</span>
              <span className="text-xs tracking-widest uppercase text-[#B0AB9F]">{project.category}</span>
            </div>
          )}
        </div>

        {/* PDP screenshot — set `screenshot` in the project's data file to replace this */}
        {project.screenshot ? (
          <div className="max-w-3xl mx-auto px-8">
            <div style={{ overflow: 'hidden', maxHeight: '520px' }}>
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
                style={{
                  maxHeight: '520px',
                  objectPosition: project.screenshotPosition ?? 'center',
                  filter: 'brightness(0.97) contrast(1.02)',
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className="w-full mx-auto"
            style={{ maxWidth: '768px', padding: '0 2rem' }}
          >
            <div
              className="w-full flex flex-col items-center justify-center gap-3 text-center"
              style={{
                height: '260px',
                border: '1.5px dashed #D4CFC8',
                background: '#EFEDE8',
              }}
            >
              <span style={{ fontSize: '28px', opacity: 0.35 }}>⌗</span>
              <p className="text-xs tracking-widest uppercase text-[#B0AB9F]">Project screenshot</p>
              <p className="text-[11px] text-[#C4BFB8] font-light">
                Add&nbsp;
                <code className="font-mono bg-[#E6E2DC] px-1 py-0.5 rounded text-[#8A877F]">
                  screenshot: "..."
                </code>
                &nbsp;in&nbsp;
                <code className="font-mono bg-[#E6E2DC] px-1 py-0.5 rounded text-[#8A877F]">
                  src/data/projects/{project.slug}.ts
                </code>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Article body ─────────────────────────────────────────────────── */}
      <article className="max-w-2xl mx-auto px-8 py-14 blog-body">
        {project.content.map((block, i) => {
          if (block.type === 'text') {
            return (
              <p key={i} className="text-[16px] text-[#1a1a1a] leading-[1.85] mb-7 font-light">
                {block.content}
              </p>
            )
          }

          if (block.type === 'quote') {
            return (
              <blockquote
                key={i}
                className="my-10 pl-6"
                style={{ borderLeft: '3px solid #0C0C0C' }}
              >
                <p className="font-display italic text-xl md:text-2xl text-[#0C0C0C] leading-relaxed">
                  {block.content}
                </p>
              </blockquote>
            )
          }

          if (block.type === 'image') {
            return (
              <figure key={i} className="my-12 -mx-8 md:-mx-20">
                <div className="bg-[#EFEDE8] overflow-hidden">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full object-cover"
                    style={{ maxHeight: '440px', filter: 'brightness(0.97) contrast(1.02)' }}
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-xs text-[#8A877F] mt-3 px-8 md:px-20 text-center tracking-wide">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          }

          return null
        })}

        {/* ── More work ─────────────────────────────────────────────────── */}
        {otherProjects.length > 0 && (
          <div className="border-t border-[#E0DBD3] mt-14 pt-10">
            <p className="text-xs tracking-widest uppercase text-[#8A877F] mb-6">More work</p>
            <div className="space-y-0">
              {otherProjects.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    onNavigate(p.slug)
                  }}
                  className="project-row w-full text-left py-5 flex items-center gap-6 group"
                  style={{ borderTop: '1px solid #E0DBD3' }}
                >
                  <span className="font-display italic text-2xl text-[#D4CFC8] group-hover:text-[#B0AB9F] transition-colors leading-none w-10 flex-shrink-0">
                    {p.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-lg text-[#0C0C0C]">{p.title}</h4>
                    <p className="text-xs text-[#8A877F] mt-0.5">{p.year}</p>
                  </div>
                  <span className="arrow text-[#8A877F]">→</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  )
}
