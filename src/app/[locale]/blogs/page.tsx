import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "@/lib/api";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogsPage(props: PageProps) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const dictionary = await getDictionary(locale);
  const allPosts = getAllPosts(locale);

  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            {dictionary.blogs.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            {dictionary.blogs.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <HeroPost
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isLocale(localeParam)) {
    return localeParam;
  }

  return DEFAULT_LOCALE;
}