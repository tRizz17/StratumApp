const mostViewed = [
  { title: 'Fed Signals Pause on Rate Cuts', date: 'Feb 22', views: 84200 },
  { title: 'Tesla Recalls 1.2 Million Vehicles Over Software Flaw', date: 'Feb 22', views: 71500 },
  { title: 'Why Your 401(k) Is Underperforming This Year', date: 'Feb 21', views: 63800 },
  { title: 'China Exports Surge Despite Tariff Threats', date: 'Feb 21', views: 58100 },
  { title: 'Apple Plans Foldable iPhone for Late 2026', date: 'Feb 20', views: 52400 },
  { title: 'Banks Brace for Wave of Commercial Real Estate Defaults', date: 'Feb 20', views: 47900 },
  { title: 'Supreme Court to Hear Social Media Censorship Case', date: 'Feb 19', views: 41300 },
  { title: 'Nvidia Revenue Tops $40 Billion in Record Quarter', date: 'Feb 19', views: 38700 },
  { title: 'The Remote Work Debate Is Over. Offices Won.', date: 'Feb 18', views: 34200 },
  { title: 'Airlines Slash Summer Fares as Fuel Costs Drop', date: 'Feb 18', views: 29800 },
]

function formatViews(views: number) {
  return views >= 1000 ? `${(views / 1000).toFixed(1)}k` : String(views)
}

function MostViewedItem({ rank, title, date, views }: { rank: number; title: string; date: string; views: number }) {
  return (
    <li className="flex gap-3 border-b border-gray-100 pb-3">
      <span className="text-2xl font-serif font-bold text-gray-300 leading-none">{rank}</span>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 leading-tight">{title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
          <time>{date}</time>
          <span>{formatViews(views)} views</span>
        </div>
      </div>
    </li>
  )
}

export default function MostViewedList() {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Most Viewed</h2>
      <ol className="flex flex-col gap-3">
        {mostViewed.map((item, i) => (
          <MostViewedItem key={item.title} rank={i + 1} {...item} />
        ))}
      </ol>
    </div>
  )
}
