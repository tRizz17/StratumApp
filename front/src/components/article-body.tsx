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
      {article.body.map((block, i) =>
        block.startsWith('## ') ? (
          <h3 key={i} className="text-base font-serif font-bold text-gray-900 pt-2">
            {block.slice(3)}
          </h3>
        ) : (
          <p key={i} className="text-sm leading-relaxed text-gray-700">
            {block}
          </p>
        )
      )}
      <p className="text-xs text-gray-400">
        Source:{' '}
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="underline hover:text-gray-600 transition-colors"
        >
          {article.source}
        </a>
      </p>
    </div>
  )
}
