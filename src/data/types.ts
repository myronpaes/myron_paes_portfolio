// ─────────────────────────────────────────────────────────────────────────────
// types.ts — shared TypeScript interfaces for all portfolio data
// ─────────────────────────────────────────────────────────────────────────────

export interface ContentBlock {
  type: 'text' | 'image' | 'quote'
  content?: string   // text / quote
  src?: string       // image URL
  alt?: string       // image alt text
  caption?: string   // image caption
}

export interface ProjectLink {
  label: string
  url: string
}

/** 'narrative' → opens a full case-study page inside the app
 *  'external'  → opens an external URL (GitHub, Drive, etc.)
 *  'pdf'       → opens an in-app PDF viewer */
export type ProjectKind = 'narrative' | 'external' | 'pdf'

export interface Project {
  slug: string
  number: string
  title: string
  subtitle: string
  category: string
  year: string
  heroImage: string         // used on project cards / homepage grid
  screenshot?: string       // full-width image shown on the PDP below the button bar
  screenshotPosition?: string // CSS object-position for the screenshot (default: 'center')
  excerpt: string
  kind: ProjectKind
  externalUrl?: string      // only used when kind === 'external'
  pdfUrl?: string           // only used when kind === 'pdf'
  projectLinks?: ProjectLink[]  // links shown at the bottom of a narrative page
  content: ContentBlock[]
}

export interface ExpItem {
  company: string
  role: string
  period: string
  location: string
  type: string
  bullets: string[]
  /** Optional photo gallery shown alongside the role description */
  gallery?: string[]
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface HobbyItem {
  title: string
  description: string
  image: string
  link: string
  linkLabel: string
  rotation: number
}
