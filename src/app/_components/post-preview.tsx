import Link from "next/link";

import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";
import type { Locale } from "@/lib/locales";
import { buildLocalizedPath } from "@/lib/paths";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  author: Author;
  locale: Locale;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  author,
  locale,
}: Props) {
  const postHref = buildLocalizedPath(locale, `/posts/${slug}`);

  return (
    <article className="group">
      <div className="mb-4">
        <CoverImage slug={slug} title={title} src={coverImage} locale={locale} />
      </div>
      <h3 className="text-2xl mb-2">
        <Link href={postHref} className="hover:text-gray-600 transition-colors">
          {title}
        </Link>
      </h3>
      <div className="text-gray-600 mb-3">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-gray-700 leading-relaxed">{excerpt}</p>
    </article>
  );
}
