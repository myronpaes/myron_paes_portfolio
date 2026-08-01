import { useState, useRef } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import HobbiesPage from './pages/HobbiesPage'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'

// ── Routing ───────────────────────────────────────────────────────────────────
// To add a new page: extend PageKind, add a render case below, and add a nav
// entry in src/components/Nav.tsx.

export type PageKind = 'home' | 'about' | 'experience' | 'hobbies' | 'projects' | 'project'

type AppState =
  | { page: Exclude<PageKind, 'project'> }
  | { page: 'project'; slug: string }

export default function App() {
  const [state, setState] = useState<AppState>({ page: 'home' })
  const homeScrollPos = useRef(0)

  const navigate = (page: PageKind) => {
    if (page === 'project') return
    window.scrollTo({ top: 0, behavior: 'instant' })
    setState({ page })
  }

  const openProject = (slug: string) => {
    homeScrollPos.current = window.scrollY
    setState({ page: 'project', slug })
  }

  const goBack = () => {
    setState({ page: 'home' })
    requestAnimationFrame(() => {
      window.scrollTo({ top: homeScrollPos.current, behavior: 'instant' })
    })
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  const pageKey = state.page === 'project' ? `project-${state.slug}` : state.page

  const content = (() => {
    if (state.page === 'project') {
      return (
        <ProjectPage
          slug={state.slug}
          onBack={goBack}
          onNavigate={(slug) => setState({ page: 'project', slug })}
          navigate={navigate}
        />
      )
    }

    if (state.page === 'about')      return <AboutPage navigate={navigate} />
    if (state.page === 'experience') return <ExperiencePage navigate={navigate} />
    if (state.page === 'hobbies')    return <HobbiesPage navigate={navigate} />
    if (state.page === 'projects')   return <ProjectsPage navigate={navigate} onProjectSelect={openProject} />

    return (
      <div className="min-h-screen bg-[#F7F6F3]">
        <Nav currentPage="home" navigate={navigate} />
        <HomePage navigate={navigate} onProjectSelect={openProject} />
        <Footer />
      </div>
    )
  })()

  return (
    <div key={pageKey} className="page-enter">
      {content}
    </div>
  )
}
