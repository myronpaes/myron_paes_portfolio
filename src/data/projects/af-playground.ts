import type { Project } from '../types'

const afPlayground: Project = {
  slug: 'af-playground',
  number: '02',
  title: 'Abercrombie & Fitch Playground',
  subtitle: 'A modular and bold boys streetwear collection winning the 2026 A&F Sophomore Summit!',
  category: 'Marketing · Brand · Retail',
  year: '2026',
  kind: 'narrative',
  heroImage: '/assets/A&F/af-playground.webp',
  screenshot: '/assets/A&F/af-playground-screenshot.png',
  excerpt:
    'Bold modular streetwear clothing line for boys, winning the A&F Sophomore Summit Design Challenge. Engineered omni-channel marketing via AI outfit curation.',
  projectLinks: [
    { label: 'View Presentation ↗', url: '/assets/A&F/A&F_Playground_Presentation.pdf' },
  ],
  content: [
    {
      type: 'text',
      content:
        'Selected for the 2026 A&F Sophomore Summit amongst a diverse pool of students, my team of ten students endured a rapid two day sprint to pitch a holistic clothing campaign to Abercrombie management, including clothing designs, omni-channel marketing strategy, inventory allocation/distribution, and financial projections. Despite our initial enthusiasm, our team quickly reached an impasse while brainstorming; with so many existing premium products, what design concept would best match the Abercrombie brand image and catalogue?',
    },
    {
      type: 'text',
      content:
        'After much discussion, our answer lay in direct investment into a generation of new and young parents desiring a contemporary look for their children. Our A&F Playground Boys clothing line is youthful, bold, and fun, setting the tone for cool kids on the block by allowing mix-and-match selections! Considering the marketing focus of the event, our project also heavily prioritized omni-channel engagement to better retain our target demographic: AI outfit curation crafts personalized outfits for parent-child pairings, and national "playdate" activation events allows kids to proudly wear their clothing for fellow Abercrombie enthusiasts!',
    },
    {
      type: 'quote',
      content:
        '"Children are meant to feel confident, express themselves, and make memories that last long after they outgrow their clothes."',
    },
    {
      type: 'text',
      content:
        "The ultimate victory of the Playground collection in the Sophomore Summit competition was validation of my team's diligence in ideation and execution; embracing a cross-functional approach forced all lifecycle stages to be developed, thus providing the complete framework for a collection launch rather than a mere concept!",
    },
  ],
}

export default afPlayground
