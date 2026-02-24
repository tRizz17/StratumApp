'use client'

import type { Article } from '@/data/articles'
import ArticleCard from '@/components/article-card'

/** Displays the article list — articles expand inline on click */
export default function ArticleFeed({
  heroArticle,
  articles,
}: {
  heroArticle: Article
  articles: Article[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <ArticleCard article={heroArticle} isHero />
      {articles.slice(1).map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
