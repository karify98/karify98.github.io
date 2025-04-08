import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={`/posts/${slug}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </Link>
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
