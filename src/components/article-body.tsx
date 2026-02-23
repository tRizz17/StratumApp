import Image from 'next/image'
import type { Article } from '@/data/articles'

/** Renders the full content of an article — used in both mobile expand and desktop detail view */
export default function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="mt-3 space-y-3">
      {article.image && (
        <div className="relative aspect-2/1 w-full overflow-hidden rounded">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      {article.body.map((paragraph, i) => (
        <p key={i} className="text-sm leading-relaxed text-gray-700">
          {paragraph}
        </p>
      ))}
    </div>
  )
}
