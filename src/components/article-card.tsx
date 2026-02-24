
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import type { Article } from '@/data/articles'
import ArticleBody from '@/components/article-body'

/** A single article card — expands on mobile, calls onSelect for desktop detail view */
export default function ArticleCard({
  article,
  isHero = false,
  hideImage = false,
  onSelect,
}: {
  article: Article
  isHero?: boolean
  hideImage?: boolean
  onSelect: (id: string) => void
}) {
  return (
    <Disclosure as="article" className="border-b border-gray-200 pb-5">
      <DisclosureButton
        as="div"
        className="w-full cursor-pointer text-left"
        onClick={() => onSelect(article.id)}
      >
        {isHero && !hideImage && article.image && (
          <div className="relative aspect-2/1 w-full overflow-hidden rounded">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <time className={`${isHero ? 'mt-3' : ''} block text-xs text-gray-400`}>
          {article.date}
        </time>
        <h2
          className={`mt-1 font-serif font-bold leading-tight text-gray-900 ${
            isHero ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-1 text-sm leading-snug text-gray-600">{article.subtitle}</p>
      </DisclosureButton>

      {/* Mobile-only accordion panel */}
      <DisclosurePanel className="lg:hidden">
        <ArticleBody article={article} />
      </DisclosurePanel>
    </Disclosure>
  )
}
