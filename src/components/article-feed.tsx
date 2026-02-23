'use client'

import { useState } from 'react'
import type { Article } from '@/data/articles'
import ArticleCard from '@/components/article-card'
import ArticleBody from '@/components/article-body'

/** Manages the article list and desktop detail view */
export default function ArticleFeed({
  heroArticle,
  articles,
}: {
  heroArticle: Article
  articles: Article[]
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedArticle = articles.find((a) => a.id === selectedId) ?? null
  const remainingArticles = selectedArticle
    ? articles.filter((a) => a.id !== selectedId)
    : []

  function handleSelect(id: string) {
    // Only select on desktop — mobile uses Disclosure accordion
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setSelectedId(id)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Desktop: selected article expanded at top */}
      {selectedArticle && (
        <div className="hidden lg:block border-b border-gray-200 pb-5">
          <article>
            <time className="block text-xs text-gray-400">{selectedArticle.date}</time>
            <h1 className="mt-1 font-serif text-2xl font-bold leading-tight text-gray-900">
              {selectedArticle.title}
            </h1>
            <p className="mt-1 text-sm leading-snug text-gray-600">{selectedArticle.subtitle}</p>
            <ArticleBody article={selectedArticle} />
          </article>
        </div>
      )}

      {/* Desktop: remaining articles below the selected one */}
      {selectedArticle && (
        <div className="hidden lg:flex flex-col gap-5">
          {remainingArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isHero={article.id === heroArticle.id}
              hideImage
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}

      {/* Desktop: default full list when nothing is selected */}
      {!selectedArticle && (
        <div className="hidden lg:flex flex-col gap-5">
          <ArticleCard article={heroArticle} isHero onSelect={handleSelect} />
          {articles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} onSelect={handleSelect} />
          ))}
        </div>
      )}

      {/* Mobile: always shows full feed with accordion expand */}
      <div className="flex flex-col gap-5 lg:hidden">
        <ArticleCard article={heroArticle} isHero onSelect={handleSelect} />
        {articles.slice(1).map((article) => (
          <ArticleCard key={article.id} article={article} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  )
}
