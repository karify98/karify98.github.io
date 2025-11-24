import Container from "@/app/_components/container";
import { BlogPostsSection } from "@/app/_components/blog-posts-section";
import { getAllPosts } from "@/lib/api";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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

          <BlogPostsSection
            posts={allPosts}
            locale={locale}
            messages={{
              searchLabel: dictionary.blogs.searchLabel,
              searchPlaceholder: dictionary.blogs.searchPlaceholder,
              filterLabel: dictionary.blogs.filterLabel,
              clearFilter: dictionary.blogs.clearFilter,
              noResults: dictionary.blogs.noResults,
            }}
          />
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
