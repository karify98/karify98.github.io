import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Index(props: PageProps) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const dictionary = await getDictionary(locale);
  const allPosts = getAllPosts(locale);

  return (
    <main className="bg-white dark:bg-gray-900">
      <Intro messages={dictionary.intro} locale={locale} />

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
                  locale={locale}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}

function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isLocale(localeParam)) {
    return localeParam;
  }

  return DEFAULT_LOCALE;
}
