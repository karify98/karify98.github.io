import type { HeadingSummary } from "@/lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css";
import { TableOfContents } from "./table-of-contents";

type Props = {
  contentHtml: string;
  headings: HeadingSummary[];
};

export function PostBody({ contentHtml, headings }: Props) {
  return (
    <div className="max-w-5xl mx-auto lg:flex lg:gap-10">
      {headings.length > 0 && (
        <aside className="lg:w-64 mb-8 lg:mb-0 lg:sticky lg:top-24">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/60">
            <TableOfContents headings={headings} />
          </div>
        </aside>
      )}
      <div className="min-w-0 flex-1 max-w-2xl">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}
