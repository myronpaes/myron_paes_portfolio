import type { Project } from '../types'

const catanAnalysis: Project = {
  slug: 'catan-analysis',
  number: '06',
  title: 'Catan ML Data Analysis',
  subtitle:
    'An empirical machine learning study to identify player strategy in Settlers of Catan, the classic board game!',
  category: 'Data Science · Machine Learning',
  year: '2025',
  kind: 'narrative',
  heroImage: '/assets/catan.webp',
  screenshot: '/assets/catan-screenshot.png',
  screenshotPosition: 'center top',
  excerpt:
    'Analyzing statistically-optimal Catan settlement placements using Logistic Regression, KNN, Random Forests, and Feature Engineering.',
  projectLinks: [
    { label: 'View Report ↗', url: '/assets/catan_report.pdf' },
  ],
  content: [
    {
      type: 'text',
      content:
        "The conception of this specific machine learning project harbors a guilty confession of mine: I am highly competitive in my friends' Board Game Nights and wanted to optimize my game decision-making in Settlers of Catan, the popular settlement building game. Catan's continuous dice-rolling, player-to-player trading, and resource allocation render the game a broader resource optimization problem, making it an ideal subject for an intensive data analysis!",
    },
    {
      type: 'text',
      content:
        "Collaborating with two friends on the Catan Data Analysis as a final project for our shared Machine Learning course, the study employed a myriad of diverse machine learning techniques on public datasets to effectively isolate relevant trends from extraneous information. Qualitatively, the key player insight the project ultimately identified lies in developing economies of scale; high resource volume and frequent resource trading predicated the majority of wins within the dataset, thus informing that prioritizing high probability \"city\" resources during initial settlement placement significantly boosts winning odds!",
    },
    {
      type: 'quote',
      content:
        '"Features pertinent to card quantity (e.g. Total Loss) comprise the bulk of the important features, reaffirming that a player\'s card quantity is one of the most significant predictors of their end outcome."',
    },
  ],
}

export default catanAnalysis
