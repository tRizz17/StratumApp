export type Article = {
  id: string
  title: string
  subtitle: string
  date: string
  body: string[]
  image?: string
}

export const heroArticle: Article = {
  id: 'fed-signals-pause-rate-cuts',
  title: 'Fed Signals Pause on Rate Cuts Amid Persistent Inflation Concerns',
  subtitle: 'Central bank officials suggest patience as consumer prices remain above target',
  date: 'February 22, 2026',
  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
  body: [
    'Federal Reserve officials indicated they are in no rush to lower interest rates further, citing stubbornly elevated inflation that continues to exceed the central bank\'s 2% target. The remarks, made during testimony before Congress, signal a shift in tone from the more dovish stance adopted late last year.',
    'Chair Jerome Powell emphasized that the economy remains resilient, with a strong labor market and steady consumer spending providing little urgency to ease monetary policy. "We need to see more progress on inflation before adjusting our stance," Powell told lawmakers.',
    'Markets reacted swiftly, with Treasury yields climbing and equity futures dipping as investors recalibrated expectations for rate cuts in the first half of the year. Fed funds futures now price in fewer than two quarter-point reductions by year-end, down from four just weeks ago.',
  ],
}

export const articles: Article[] = [
  heroArticle,
  {
    id: 'big-tech-earnings-ai-spending',
    title: 'Big Tech Earnings Surge as AI Spending Reshapes Corporate Budgets',
    subtitle: 'Companies pour billions into infrastructure while investors question long-term returns',
    date: 'February 21, 2026',
    body: [
      'The largest technology companies reported record quarterly revenues driven by surging demand for artificial intelligence services, but investors remain cautious about the massive capital expenditure required to build out AI infrastructure.',
      'Alphabet, Microsoft, and Amazon each disclosed billions of dollars in planned spending on data centers and specialized chips, raising questions about when these investments will translate into sustained profit growth.',
      'Analysts note that while cloud-based AI products are growing rapidly, the competitive landscape is intensifying as smaller players and open-source alternatives gain traction.',
    ],
  },
  {
    id: 'housing-market-cools-mortgage-rates',
    title: 'Housing Market Cools as Mortgage Rates Hover Near 7%',
    subtitle: 'First-time buyers retreat from bidding wars as affordability gap widens',
    date: 'February 21, 2026',
    body: [
      'The U.S. housing market is showing signs of cooling as mortgage rates remain stubbornly high, deterring first-time buyers and slowing price appreciation in many metropolitan areas.',
      'Existing home sales fell for the third consecutive month, while new listings ticked up as some homeowners test the market before conditions deteriorate further. The median home price still sits well above pre-pandemic levels.',
      'Real estate economists expect a prolonged period of stagnation rather than a sharp correction, as limited inventory continues to put a floor under prices even as demand softens.',
    ],
  },
  {
    id: 'oil-prices-drop-global-demand',
    title: 'Oil Prices Drop on Weakening Global Demand Forecasts',
    subtitle: 'OPEC+ weighs production adjustments as economic slowdown fears mount',
    date: 'February 20, 2026',
    body: [
      'Crude oil prices fell sharply after the International Energy Agency revised its global demand forecast downward, citing slowing economic growth in China and Europe.',
      'OPEC+ members are reportedly considering extending production cuts to stabilize prices, but disagreements among member nations have complicated negotiations.',
      'Energy analysts warn that a prolonged period of lower oil prices could impact investment in new exploration and production, potentially setting the stage for supply shortages in future years.',
    ],
  },
  {
    id: 'retail-sales-disappoint-january',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'U.S. retail sales unexpectedly declined in January, marking the first monthly drop in six months and reigniting fears that the economy may be losing momentum.',
      'The Commerce Department reported a 0.4% decrease in overall retail spending, with weakness concentrated in discretionary categories like electronics, furniture, and dining out.',
      'Economists point to rising household savings rates and tighter credit conditions as factors weighing on consumer confidence, though the labor market remains a bright spot.',
    ],
  },
  {
    id: 'retail-sales-savings-rate-impact',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'Consumer spending showed unexpected weakness in the latest retail sales report, with economists debating whether the dip represents a temporary pause or the start of a broader slowdown.',
      'The personal savings rate has climbed to its highest level in two years, suggesting households are becoming more cautious about discretionary spending amid economic uncertainty.',
    ],
  },
  {
    id: 'retail-sales-credit-conditions',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'Tighter credit conditions are beginning to weigh on consumer spending, with credit card delinquencies rising and approval rates for new accounts declining.',
      'Retailers are responding by expanding promotional activity and loyalty programs, but foot traffic at major shopping centers remained below year-ago levels throughout January.',
    ],
  },
  {
    id: 'retail-sales-labor-market',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'Despite the weak retail sales figures, the labor market continues to show resilience, with unemployment holding steady at 3.9% and initial jobless claims remaining near historic lows.',
      'Some economists argue the spending slowdown is a healthy normalization after years of pandemic-driven excess, rather than a signal of impending recession.',
    ],
  },
  {
    id: 'retail-sales-regional-trends',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'Regional data shows significant variation in retail performance, with Sun Belt states continuing to outperform the Northeast and Midwest in both foot traffic and online sales.',
      'E-commerce sales held up better than brick-and-mortar retail, though growth rates have moderated from the double-digit pace seen during the pandemic years.',
    ],
  },
  {
    id: 'retail-sales-outlook',
    title: 'Retail Sales Disappoint in January, Raising Recession Worries',
    subtitle: 'Consumer spending dips for the first time in six months as savings rates climb',
    date: 'February 19, 2026',
    body: [
      'Wall Street analysts are divided on the outlook for consumer spending, with some predicting a rebound in spring driven by seasonal hiring and tax refunds.',
      'Others warn that the combination of elevated interest rates, shrinking pandemic savings, and rising household debt could keep a lid on discretionary spending through the first half of the year.',
    ],
  },
]
