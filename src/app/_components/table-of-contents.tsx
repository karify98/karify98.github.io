import classNames from "classnames";
import type { HeadingSummary } from "@/lib/markdownToHtml";

const levelPadding: Record<number, string> = {
  1: "pl-0",
  2: "pl-2",
  3: "pl-4",
  4: "pl-6",
  5: "pl-8",
  6: "pl-10",
};

type Props = {
  headings: HeadingSummary[];
};

export function TableOfContents({ headings }: Props) {
  if (!headings.length) {
    return null;
  }

  return (
    <nav aria-label="Table of contents">
      <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        On this page
      </h2>
      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-200">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={classNames(
                "block border-l border-transparent py-1 transition-colors hover:border-blue-500 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:hover:text-blue-400",
                levelPadding[heading.level] ?? "pl-0",
              )}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
