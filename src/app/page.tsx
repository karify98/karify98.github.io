import Container from "@/app/_components/container";
import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import { getAllPosts } from "@/lib/api";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE } from "@/lib/locales";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(DEFAULT_LOCALE);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [HOME_OG_IMAGE_URL],
    },
  };
}

export default async function RootPage() {
  const dictionary = await getDictionary(DEFAULT_LOCALE);
  const allPosts = getAllPosts(DEFAULT_LOCALE);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeSwitcher />
      <Header locale={DEFAULT_LOCALE} messages={dictionary.header} />

      <div className="pt-16">
        <main className="bg-white dark:bg-gray-900">
          <Intro messages={dictionary.intro} locale={DEFAULT_LOCALE} />

          {allPosts.length > 0 && (
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
              <Container>
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">
                  {dictionary.home.recentPosts}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allPosts.map((post) => (
                    <HeroPost
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      hashtags={post.hashtags}
                      locale={DEFAULT_LOCALE}
                    />
                  ))}
                </div>
              </Container>
            </section>
          )}
        </main>
      </div>

      <Footer messages={dictionary.footer} />
    </div>
  );
}
