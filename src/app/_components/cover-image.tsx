import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import { DEFAULT_LOCALE, type Locale } from "@/lib/locales";
import { buildLocalizedPath } from "@/lib/paths";

type Props = {
  title: string;
  src: string;
  slug?: string;
  locale?: Locale;
};

const CoverImage = ({ title, src, slug, locale = DEFAULT_LOCALE }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );

  if (!slug) {
    return <div className="sm:mx-0">{image}</div>;
  }

  return (
    <div className="sm:mx-0">
      <Link href={buildLocalizedPath(locale, `/posts/${slug}`)} aria-label={title}>
        {image}
      </Link>
    </div>
  );
};

export default CoverImage;
