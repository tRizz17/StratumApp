export type Article = {
  id: string
  title: string
  subtitle: string
  date: string
  body: string[]
  image?: string
  source: string
  sourceUrl: string
}

export const heroArticle: Article = {
  id: 'white-house-phosphorus-glyphosate',
  title: 'White House Orders Protection of Key Farm Chemical Supply',
  subtitle: 'The U.S. has one producer of a critical military and agricultural chemical — and Washington just put a shield around it',
  date: 'February 18, 2026',
  image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
  body: [
    '## Summary',
    'On February 18, 2026, President Trump signed an executive order directing the federal government to protect and prioritize the domestic supply of two materials: elemental phosphorus and glyphosate, the active ingredient in weed killers like Roundup.',
    'Elemental phosphorus is used in military equipment — smoke grenades, sensors, radar, and batteries — and is also the key ingredient in making glyphosate, the most widely used weed killer in American farming. The government acknowledges there is currently only one company in the United States that produces both of these materials, and that company cannot fully meet the country\'s annual demand. The U.S. imports more than 6 million kilograms of phosphorus from other countries each year, much of it from China.',
    'The order uses the Defense Production Act — the same law used to prioritize vaccine and medical equipment production during national emergencies — to give the Secretary of Agriculture broad power to direct resources and issue regulations that keep these materials in domestic production. The order also explicitly instructs the Secretary not to issue any rule that could threaten the financial survival of that single domestic producer, and grants it legal protections from certain lawsuits.',
    '## What this means for everyday Americans',
    'Farmers who rely on glyphosate — particularly those growing corn, soybeans, and cotton — could see input costs rise if the protected domestic producer raises prices, facing little competitive pressure. Those costs tend to flow downstream to grocery stores. At the same time, the order is designed to prevent a worst-case supply collapse, which would be far more disruptive than a price increase.',
    '## The single-producer problem',
    'The most economically significant detail in this order is hiding in plain sight: the entire domestic supply of both elemental phosphorus and glyphosate runs through one company. That company now has federal protection from regulations that could threaten its viability, legal immunity for actions taken under this order, and de facto status as a national security asset. This is an extraordinarily strong market position, and it creates ripple effects across agriculture, defense manufacturing, and technology supply chains simultaneously.',
    '## Concrete business and investment opportunities',
    'Domestic phosphate mining and processing. The order creates a clear policy tailwind for anyone looking to develop or invest in U.S. phosphate production. Viable phosphate rock deposits exist in Florida, Idaho, Utah, and North Carolina. A company that can demonstrate a credible path to producing elemental phosphorus domestically is now operating in a policy environment actively seeking alternatives to the current single-supplier bottleneck. This is a strong position from which to pursue government contracts, offtake agreements with agricultural companies, or defense procurement deals.',
    'Alternative and complementary herbicides. If glyphosate prices rise — a likely outcome when a single protected producer faces no competitive ceiling — farmers will look for ways to stretch their herbicide budget. Companies that make or distribute alternative herbicides, herbicide mixtures, or resistance-management products are positioned to capture market share. An entrepreneur with agrochemical distribution experience could build a business specifically targeting row-crop farmers looking to reduce glyphosate dependence.',
    'Precision agriculture and application technology. Higher input costs make efficiency tools more valuable. Businesses that help farmers apply herbicides more precisely — through drone application services, variable-rate technology, or AI-driven weed detection — become more financially attractive to farmers when the cost of the chemical itself rises. A service company offering drone-based precision herbicide application in the corn belt, for example, could see its value proposition strengthen considerably.',
    'Defense and semiconductor supply chain consulting. Phosphorus is a critical input for semiconductors, radar systems, and lithium-ion batteries used in weapons systems. Defense contractors and semiconductor manufacturers who currently source phosphorus internationally now have a policy reason to re-examine their supply chains. A consulting firm or procurement specialist that helps these companies audit their phosphorus exposure and identify compliant domestic sources would be filling a gap that this order effectively just created.',
    'Covered call and options strategies on agricultural inputs. For investors rather than operators, the protected monopoly structure created by this order makes the single domestic producer — and its competitors in the glyphosate supply chain — worth watching closely. A rising price floor on glyphosate benefits the producer\'s margins directly. Investors comfortable with options strategies might consider positions that profit from reduced volatility in the producer\'s stock, given the new layer of federal protection underneath it.',
  ],
  source: 'Federal Register',
  sourceUrl: 'https://www.federalregister.gov/documents/2026/02/21/2026-03628/promoting-the-national-defense-by-ensuring-an-adequate-supply-of-elemental-phosphorus-and-glyphosate',
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
    source: 'Wall Street Journal',
    sourceUrl: 'https://www.wsj.com',
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
    source: 'Bloomberg',
    sourceUrl: 'https://www.bloomberg.com',
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
    source: 'Financial Times',
    sourceUrl: 'https://www.ft.com',
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
    source: 'Associated Press',
    sourceUrl: 'https://apnews.com',
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
    source: 'CNBC',
    sourceUrl: 'https://www.cnbc.com',
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
    source: 'Reuters',
    sourceUrl: 'https://www.reuters.com',
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
    source: 'Bloomberg',
    sourceUrl: 'https://www.bloomberg.com',
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
    source: 'Wall Street Journal',
    sourceUrl: 'https://www.wsj.com',
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
    source: 'Financial Times',
    sourceUrl: 'https://www.ft.com',
  },
]
