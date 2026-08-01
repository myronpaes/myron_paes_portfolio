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
  "Hi! My name is Myron, and I am a rising Junior pursuing a dual undergraduate degree in Data Science and Business at NJIT. As a lifelong thinker and dreamer, I aim to further develop proficiency in marketing methodologies while embracing my passions for technology, gaming, media, and entertainment; my professional skillset marries holistic ideation with technical analytics, and I work now to secure a role in which I can best drive immediate impact!"

export const heroTagline = 'Product, Marketing, and Data'

// ── About ─────────────────────────────────────────────────────────────────────
export const aboutParagraphs: string[] = [
  "As an aspiring Product Marketing Manager, my studies are focused primarily on product marketing, data analysis methodologies, and technical writing — all facets which enable me to work efficiently.",
  "I am committed to sustained excellence and improvement, whether that be in the classroom, the office, or the home. My studies (both technical and entrepreneurial) at NJIT foster my ability to effectively manage high-stake projects.",
  "I am currently working as the lead product manager for a gamified mobile application designed to enhance mobile user conversion, engagement, and retention amongst Generation Alpha consumers — implementing agile methodologies and comprehensive cross-functional collaboration to streamline development.",
  "As Lead Product Manager at Tapyoca Music, I led product development for a unique subsidiary focused on financial tracking for creatives; I concurrently graduated from the NSF I-Corps Regional cohort, conducting 40 customer discovery sessions to better validate market fit for the product.",
  "The most effective change stems from home, and I am proud to contribute towards developing NJIT's student body as President of the Entrepreneurs Society. Through accessible student workshops and collaborative networking events, we aim to spread entrepreneurship one student at a time.",
  "My skillset spans Agile/Scrum, Figma, A/B testing, Python (NumPy, Pandas), statistical analysis (ANOVA, Chi-Squared), and technical writing. I'm most effective in environments where the problem isn't clearly defined yet.",
]

export const skillGroups = [
  {
    title: 'Product Tools & Methodologies',
    skills: ['Agile & Scrum', 'Waterfall', 'Asana & Jira', 'Figma Design', 'Google Keywords'],
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
    title: 'Advanced Statistical Methods',
    skills: ['Applied Statistics', 'ANOVA', 'Neyman-Pearson Lemma Test', 'Chi-Squared Test'],
  },
]

// ── Hobbies ───────────────────────────────────────────────────────────────────
export const hobbies = [
  {
    title: 'Film Photography',
    description:
      "There's a discipline to 35mm that digital removes entirely. You get 36 frames. You think before you shoot.",
    image:
      'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.instagram.com',
    linkLabel: 'See some shots',
    rotation: -2.2,
  },
  {
    title: 'Literature',
    description:
      "Fiction, essays, whatever grabs me. Reading is how I slow down and think sideways.",
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.goodreads.com',
    linkLabel: 'See my shelf',
    rotation: 1.5,
  },
  {
    title: 'Running',
    description:
      "Early mornings, bad weather, no headphones. The best thinking I've done has happened mid-run.",
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=480&fit=crop&auto=format',
    link: 'https://www.strava.com',
    linkLabel: 'Find me on Strava',
    rotation: -1,
  },
  {
    title: 'Media',
    description:
      "Games, TV, movies — I track everything I watch and play. Ratings are opinions made permanent.",
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=480&fit=crop&auto=format',
    link: 'https://letterboxd.com',
    linkLabel: 'See my ratings',
    rotation: 2,
  },
]
