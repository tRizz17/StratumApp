const topPicks = [
  { title: 'How One Investor Turned $10K Into a Real Estate Empire', date: 'Feb 22' },
  { title: 'The Hidden Cost of Free Returns in Online Shopping', date: 'Feb 22' },
  { title: 'Why Japan\'s Stock Market Is the Trade of the Decade', date: 'Feb 21' },
  { title: 'Inside the Boardroom Battle at Disney', date: 'Feb 21' },
  { title: 'The Case for Buying Bonds Before the Next Recession', date: 'Feb 20' },
  { title: 'How AI Is Quietly Reshaping Wall Street Hiring', date: 'Feb 20' },
  { title: 'A Small-Town Bank\'s Big Bet on Crypto Custody', date: 'Feb 19' },
  { title: 'The New Rules of Retirement Planning After 50', date: 'Feb 19' },
  { title: 'Why Luxury Brands Are Fleeing Department Stores', date: 'Feb 18' },
  { title: 'The Surprising Winners of the EV Price War', date: 'Feb 18' },
]

function TopPickItem({ rank, title, date }: { rank: number; title: string; date: string }) {
  return (
    <li className="flex gap-3 border-b border-gray-100 pb-3">
      <span className="text-2xl font-serif font-bold text-gray-300 leading-none">{rank}</span>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">{title}</h3>
        <time className="mt-1 block text-xs text-gray-400">{date}</time>
      </div>
    </li>
  )
}

export default function TopPicksList() {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Top Picks</h2>
      <ol className="flex flex-col gap-3">
        {topPicks.map((item, i) => (
          <TopPickItem key={item.title} rank={i + 1} {...item} />
        ))}
      </ol>
    </div>
  )
}
