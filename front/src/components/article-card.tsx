
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import type { Article } from '@/data/articles'
import ArticleBody from '@/components/article-body'

/** A single article card — expands inline on click */
export default function ArticleCard({
  article,
  isHero = false,
}: {
  article: Article
  isHero?: boolean
}) {
  return (
    <Disclosure as="article" className="border-b border-gray-200 pb-5">
      <DisclosureButton
        as="div"
        className="w-full cursor-pointer text-left"
      >
        {isHero && article.image && (
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
        <h2
          className={`${isHero ? 'mt-3' : ''} font-serif font-bold leading-tight text-gray-900 ${
            isHero ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-1 text-sm leading-snug text-gray-600">{article.subtitle}</p>
        <time className="mt-1 block text-xs text-gray-400">
          {article.date}
        </time>
      </DisclosureButton>

      <DisclosurePanel as="div">
        <DisclosureButton as="div" className="cursor-pointer">
          <ArticleBody article={article} />
          <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-400">
            <ChevronUpIcon className="size-4" />
            <span>Minimize</span>
          </div>
        </DisclosureButton>
      </DisclosurePanel>
    </Disclosure>
  )
}
