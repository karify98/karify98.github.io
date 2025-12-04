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
  fill?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
};

const CoverImage = ({
  title,
  src,
  slug,
  locale = DEFAULT_LOCALE,
  fill = false,
  sizes,
  className,
  containerClassName,
}: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "shadow-sm w-full",
        fill && "object-cover",
        {
          "hover:shadow-lg transition-shadow duration-200": slug,
        },
        className
      )}
      {...(fill
        ? { fill: true, sizes: sizes ?? "100vw" }
        : { width: 1300, height: 630, sizes })}
    />
  );

  const wrapperClassName = cn(
    "sm:mx-0",
    fill && "relative",
    containerClassName
  );

  if (!slug) {
    return <div className={wrapperClassName}>{image}</div>;
  }

  return (
    <div className={wrapperClassName}>
      <Link
        href={buildLocalizedPath(locale, `/posts/${slug}`)}
        aria-label={title}
        className={fill ? "block h-full" : undefined}
      >
        {image}
      </Link>
    </div>
  );
};

export default CoverImage;
