import MostViewedList from '@/components/most-viewed'
import TopPicksList from '@/components/top-picks'
import ArticleFeed from '@/components/article-feed'
import { heroArticle, articles } from '@/data/articles'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="hidden lg:block lg:w-1/4">
          <MostViewedList />
        </aside>
        <section className="lg:w-1/2">
          <ArticleFeed heroArticle={heroArticle} articles={articles} />
        </section>
        <aside className="hidden lg:block lg:w-1/4">
          <TopPicksList />
        </aside>
      </div>
    </main>
  );
}
