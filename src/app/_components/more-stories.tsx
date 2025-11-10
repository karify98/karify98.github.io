import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { DEFAULT_LOCALE, type Locale } from "@/lib/locales";

type Props = {
  posts: Post[];
  locale?: Locale;
};

export function MoreStories({ posts, locale = DEFAULT_LOCALE }: Props) {
  return (
    <section className="mb-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        Recent Posts
      </h2>
      <div className="grid gap-12">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
