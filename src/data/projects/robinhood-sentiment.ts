import type { Project } from '../types'

const robinhoodSentiment: Project = {
  slug: 'robinhood-sentiment',
  number: '07',
  title: 'Robinhood Sentiment Analysis',
  subtitle:
    "Analyzing user discourse on X following Robinhood's trading restriction on Gamestock stock during the 2020 bull run.",
  category: 'Data Science · Analytics · Finance',
  year: '2025',
  kind: 'narrative',
  heroImage: '/assets/robinhood-preview.png',
  screenshot: '/assets/robinhood-screenshot.png',
  excerpt:
    'Comprehensive Sentiment Analysis on Robinhood operations during the 2020 Gamestop stock bull run via RAKE Analysis and Topic Modelling.',
  projectLinks: [
    { label: 'View Presentation ↗', url: '/assets/robinhood_presentation.pdf' },
  ],
  content: [
    {
      type: 'text',
      content:
        "In January 2021, a group of retail investors on Reddit's WallStreetBets forum triggered a short squeeze to push GameStop's stock from roughly $20 to nearly $500, losing prominent institutional hedge funds billions; after mobile trading app Robinhood resultantly restricted trading on GME during the pinnacle of the bull run due to clearing house limitations, public backlash was immediate and visceral, reflecting the broad antagonisation that previously stable institutions incurred during the phenomenon. My specific project does not concern the efficacy of the decision itself but rather the substance of collective user sentiment, pandering to an audience of Robinhood executives to advise communication strategy when reclamating user trust.",
    },
    {
      type: 'text',
      content:
        "The analysis drew on a corpus of X (f.k.a. Twitter) posts spanning the entire week of the trading halt, processed via RAKE (Rapid Automatic Keyword Extraction) and a Topic Model to cluster pertinent keywords and unveil underlying user commonalities without supervised labeling; overall, the sentiment arc across the week conveyed deep-rooted distrust pandering beyond mere superficial anger, characterized most notably by user calls for congressional action. Given increased multifaceted scrutiny from both public consumers and private congressional hearings, the analysis subsequently poses apologizing, rationalization, and reformation as the three core actionable insights required to rehabilitate Robinhood's brand image.",
    },
    {
      type: 'quote',
      content:
        '"The prominence of trust in Emotion Analysis conveys the full effect of the restricted trading; Robinhood users place great trust in the platform, and the events of late January violated such trust."',
    },
  ],
}

export default robinhoodSentiment
