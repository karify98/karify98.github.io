import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import type { Locale } from "@/lib/locales";
import { buildLocalizedPath } from "@/lib/paths";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  locale: Locale;
  hashtags?: string[];
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  locale,
  hashtags = [],
}: Props) {
  const postHref = buildLocalizedPath(locale, `/posts/${slug}`);
  const uniqueHashtags = Array.from(new Set(hashtags)).filter(
    (tag) => tag.length > 0
  );

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        <CoverImage title={title} src={coverImage} slug={slug} locale={locale} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={postHref} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </Link>
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        {uniqueHashtags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {uniqueHashtags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
