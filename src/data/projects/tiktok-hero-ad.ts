import type { Project } from '../types'

const tiktokHeroAd: Project = {
  slug: 'tiktok-hero-ad',
  number: '03',
  title: 'TikTok Hero Ad Feature',
  subtitle: 'A novel mobile advertising proposal to drive TikTok Shop adoption among small businesses and boutiques.',
  category: 'Product · Advertising · Strategy',
  year: '2026',
  kind: 'narrative',
  heroImage: '/assets/tiktok-hero.webp',
  screenshot: '/assets/tiktok-screenshot.png',
  screenshotPosition: 'center top',
  excerpt:
    'Developed a novel TikTok "Hero" Ad display to augment CVRs and drive TikTok Shop adoption amongst small businesses. Executive-ready pitch deck included.',
  projectLinks: [
    { label: 'View Content ↗', url: 'https://drive.google.com/drive/folders/1xklAI-nbrDAu-4BR5yRj2lI6oIHx-s1r?usp=drive_link' },
  ],
  content: [
    {
      type: 'text',
      content:
        "While leisurely browsing TikTok in my free time, I observed that ads promptly redirecting to external storefronts quickly lost my focus as a consumer, posing both an underlying business gap. As TikTok Shop (the platform's integrated e-commerce page) commissions only comprise a small fragment of their total revenue, the opportunity exists to convert small businesses running TikTok external ads into TikTok Shop stores, establishing an additional revenue stream from individual businesses.",
    },
    {
      type: 'text',
      content:
        'As I do not have access to internal TikTok metrics, I based my project on the core assumption that small businesses running TikTok external ads see low sales conversion due to high user friction, thus preventing business TikTok Shop adoption; I believe that novice business owners engage most strongly within tangible results, meaning that optimizing user conversion on external redirection ads would improve downstream TikTok Shop adoption amongst such business owners!',
    },
    {
      type: 'quote',
      content:
        '"No effective "middle ground" exists for small businesses wanting to pilot TikTok Shop before full adoption."',
    },
    {
      type: 'text',
      content:
        'My presentation provides a high-level overview of the project, including the associated market opportunity, operational prototype, business implications, and strategic risks; if interested in learning more, please select the "View Content" button above to access the pitch deck and dedicated product demonstration videos!',
    },
  ],
}

export default tiktokHeroAd
