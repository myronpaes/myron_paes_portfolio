import type { Project } from '../types'

const fiveBelowTreasureHunt: Project = {
  slug: 'five-below-treasure-hunt',
  number: '01',
  title: 'Five Below Mobile Treasure Hunt',
  subtitle:
    'My Hunt prototype is currently confidential, but enjoy an article on my project workflow!',
  category: 'Product · Retail · Gaming',
  year: '2026',
  kind: 'narrative',
  heroImage: '/assets/five-below.webp',
  screenshot: '/assets/five-below-article.png',
  screenshotPosition: 'center 35%',
  excerpt:
    'Leading PM work on a gamified mobile Treasure Hunt experience for a generation that has never known a world without touchscreens.',
  projectLinks: [
    { label: 'Read the Article on Medium ↗', url: 'https://medium.com/@myronpaes/embedding-ai-into-product-workflows-my-five-below-pm-experience-5484cb721356' },
  ],
  content: [
    {
      type: 'text',
      content:
        'As the inaugural Digital Product Management Intern at Five Below during the summer of 2026, certain AI tools quickly emerged as critical conduits to the development of my project, a mobile Treasure Hunt designed to draw grade-school children into brick-and-mortar locations. As I certainly did not possess the professional experience of my Product colleagues at Five Below, strategic artificial intelligence use during development enabled me to better acclimate myself to the pace of the product lifecycle, mitigating otherwise large cross-functional gaps; however, my early observations of autonomous agent inaccuracy during ideation predicated my skepticism in AI efficacy, prompting me evaluate how best to implement AI as a new supplement rather than a detractor.',
    },
    {
      type: 'quote',
      content:
        '"My primary takeaway from my Five Below internship regarding AI usage concerns humanistic considerations rather than technical capability."',
    },
    {
      type: 'text',
      content:
        "I've opted to withhold public disclosure of the project details due to ongoing Treasure Hunt development, but instead detailed my tailored AI-integrated workflow for the project (upon request from my supervisor) on Medium; the article describes the broader cross-functional methodologies and operational nuances of the Treasure Hunt project, identifying the underlying strategies that ultimately shape decision-making in Product.",
    },
    {
      type: 'text',
      content:
        'If interested in reviewing my Five Below Treasure Hunt initiative privately, please contact me via email to schedule a call!',
    },
  ],
}

export default fiveBelowTreasureHunt
