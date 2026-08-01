// ─────────────────────────────────────────────────────────────────────────────
// portfolio.ts — aggregator: imports from modular subfolders and re-exports
// the same public API consumed by all pages. Do not change export names here.
//
// To add or edit content:
//   Projects  →  src/data/projects/<slug>.ts
//   Professional roles  →  src/data/experience/professional/<company>.ts
//   Leadership roles    →  src/data/experience/leadership/<org>.ts
//   Everything else (bio, about, skills, hobbies) → edit directly below.
// ─────────────────────────────────────────────────────────────────────────────

// ── Re-export shared types so existing imports from 'portfolio' keep working ──
export type { ContentBlock, ProjectLink, ProjectKind, Project, ExpItem, SkillGroup, HobbyItem } from './types'

// ── Experience imports ────────────────────────────────────────────────────────

// Professional
import fiveBelow from './experience/professional/five-below'
import tapyocaMusic from './experience/professional/tapyoca-music'
import virtuaHealth from './experience/professional/virtua-health'
import njCourts from './experience/professional/nj-courts'

// Leadership
import njitEntrepreneursSociety from './experience/leadership/njit-entrepreneurs-society'

// ── Project imports ───────────────────────────────────────────────────────────
import fiveBelowTreasureHunt from './projects/five-below-treasure-hunt'
import afPlayground from './projects/af-playground'
import tiktokHeroAd from './projects/tiktok-hero-ad'
import creatorCopilot from './projects/creator-copilot'
import openInnovationResearch from './projects/open-innovation-research'
import catanAnalysis from './projects/catan-analysis'
import robinhoodSentiment from './projects/robinhood-sentiment'

// ── Featured project slugs (shown on homepage in this order) ──────────────────
// To change which 4 projects appear on the homepage, edit this array.
export const FEATURED_SLUGS = [
  'five-below-treasure-hunt',
  'tiktok-hero-ad',
  'af-playground',
  'creator-copilot',
] as const

// ── Experience ────────────────────────────────────────────────────────────────
// Order here controls display order within each tab on the Experience page.
export const experiences = [
  // Professional
  fiveBelow,
  tapyocaMusic,
  virtuaHealth,
  njCourts,
  // Leadership
  njitEntrepreneursSociety,
]

// ── Projects ──────────────────────────────────────────────────────────────────
// Order here controls display order on the Projects page and number labels.
export const projects = [
  fiveBelowTreasureHunt,
  afPlayground,
  tiktokHeroAd,
  creatorCopilot,
  openInnovationResearch,
  catanAnalysis,
  robinhoodSentiment,
]

// ── Hero Bio ──────────────────────────────────────────────────────────────────
export const heroBio =
  "As a lifelong thinker and dreamer, I aim to further develop proficiency in Product Management methodologies while embracing my passions for technology, gaming, media, and entertainment; my professional skillset marries holistic ideation with technical analytics, and I work now to secure a role in which I can best drive immediate impact!"

export const heroTagline = 'Product, Marketing, and Data'

// ── About ─────────────────────────────────────────────────────────────────────
export const aboutParagraphs: string[] = [
  "As an aspiring Product Manager, my studies are focused primarily on management, product marketing, data analysis methodologies, and research writing, all facets which enable me to work efficiently.",
  "I hold a lifelong commitment to sustained excellence and improvement, whether that be in the classroom, the office, or the home. My studies at NJIT (both managerial and technical) foster my ability to engage in critical development, and my professional experience validates my effective management of high-fidelity projects.",
  "My most prominent traits are my critical thinking and creativity, aspects of my life applicable beyond my work life; I'm a habitual reader and photographer in my spare time, observing beauty in both abstractions and visuals.",
]

export const skillGroups = [
  {
    title: 'Product Tools & Methodologies',
    skills: ['Agile & Scrum', 'Jira', 'Figma', 'Google Analytics', 'AI Literacy'],
  },
  {
    title: 'Advanced Marketing Practices',
    skills: ['A/B Testing', 'Positioning', 'User Segmentation', 'Sentiment Analysis'],
  },
  {
    title: 'Technical Skills',
    skills: ['Python (NumPy, Pandas, Scikit, PyTorch)', 'Java & C++', 'Excel & Data Visualization'],
  },
  {
    title: 'Data Science Methods',
    skills: ['Neural Networks', 'Regression', 'NLP', 'KNN', 'Random Forest', 'Feature Engineering'],
  },
]

// ── Hobbies ───────────────────────────────────────────────────────────────────
export const hobbies = [
  {
    title: 'Photography',
    description:
      "There's a discipline to the intricasy of photography; one picture can capture an entire experience.",
    image:
      'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.instagram.com',
    linkLabel: 'View my Collection',
    rotation: -2.2,
  },
  {
    title: 'Literature',
    description:
      "For the hours of engagement that a movie provides, a quality book provides weeks!",
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.goodreads.com',
    linkLabel: 'GoodReads Profile Coming Soon!',
    rotation: 1.5,
  },
  {
    title: 'Running',
    description:
      "Tempered due to concussion recovery, but I still savor the mental clarity of a long walk!",
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.strava.com',
    linkLabel: 'Strava Account Lost... :(',
    rotation: -1,
  },
  {
    title: 'Media',
    description:
      "I love media capturing nuance and leveraging all sensory inputs, further augmenting the beauty of books!",
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=480&fit=crop&auto=format',
    link: 'https://letterboxd.com',
    linkLabel: 'Letterboxd Profile Coming Soon!',
    rotation: 2,
  },
]
