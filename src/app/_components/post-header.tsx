import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  hashtags?: string[];
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  hashtags = [],
}: Props) {
  const uniqueHashtags = Array.from(new Set(hashtags)).filter(
    (tag) => tag.length > 0
  );

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        {uniqueHashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {uniqueHashtags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
