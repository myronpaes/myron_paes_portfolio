import { useState, useEffect } from 'react'
import type { PageKind } from '../App'

interface NavProps {
  currentPage: PageKind
  navigate: (page: PageKind) => void
  onBack?: () => void
  isProject?: boolean
}

const NAV_LINKS: { label: string; page: PageKind }[] = [
  { label: 'About',      page: 'about'      },
  { label: 'Experience', page: 'experience' },
  { label: 'Projects',   page: 'projects'   },
  { label: 'Hobbies',    page: 'hobbies'    },
]

export default function Nav({ currentPage, navigate, onBack, isProject }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(247,246,243,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #E0DBD3' : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-8 py-5 flex items-center justify-between">
        {isProject ? (
          <button
            onClick={onBack}
            className="text-xs tracking-widest uppercase text-[#8A877F] hover:text-[#0C0C0C] transition-colors flex items-center gap-2"
          >
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>←</span> All work
          </button>
        ) : (
          <button
            onClick={() => navigate('home')}
            className="font-display italic text-xl text-[#0C0C0C] tracking-tight"
          >
            MP
          </button>
        )}

        {!isProject && (
          <div className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={label}
                onClick={() => navigate(page)}
                className={`nav-link text-xs tracking-widest uppercase transition-colors ${
                  currentPage === page
                    ? 'text-[#0C0C0C]'
                    : 'text-[#8A877F] hover:text-[#0C0C0C]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
