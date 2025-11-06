import { Metadata } from "next";
import { notFound } from "next/navigation";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/locales";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Post(props: Params) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const post = getPostBySlug(params.slug, locale);

  if (!post) {
    return notFound();
  }

  const contentHtml = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody contentHtml={contentHtml} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const post = getPostBySlug(params.slug, locale);

  if (!post) {
    return notFound();
  }

  const dictionary = await getDictionary(locale);
  const title = `${post.title} | ${dictionary.posts.metadataSuffix}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];

  for (const locale of LOCALES) {
    const posts = getAllPosts(locale);
    posts.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  }

  return params;
}

function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isLocale(localeParam)) {
    return localeParam;
  }

  return DEFAULT_LOCALE;
}
