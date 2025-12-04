import { remark } from "remark";
import html from "remark-html";

export type HeadingSummary = {
  id: string;
  title: string;
  level: number;
};

export default async function markdownToHtml(markdown: string) {
  const headings: HeadingSummary[] = [];

  const result = await remark()
    .use(() => (tree: any) => {
      const slugCounts = new Map<string, number>();

      const slugify = (value: string) =>
        value
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, "");

      const ensureUniqueSlug = (slug: string) => {
        const count = slugCounts.get(slug) ?? 0;
        slugCounts.set(slug, count + 1);
        return count === 0 ? slug : `${slug}-${count}`;
      };

      const extractText = (node: any): string => {
        if (!node) {
          return "";
        }

        if (node.type === "text" || node.type === "inlineCode") {
          return node.value ?? "";
        }

        if (Array.isArray(node.children)) {
          return node.children.map(extractText).join("");
        }

        return "";
      };

      const visitNode = (node: any) => {
        if (node.type === "heading") {
          const title = extractText(node).trim();

          if (title) {
            const baseSlug = slugify(title) || "section";
            const uniqueSlug = ensureUniqueSlug(baseSlug);
            node.data = node.data || {};
            node.data.hProperties = {
              ...(node.data.hProperties || {}),
              id: uniqueSlug,
            };
            node.data.id = uniqueSlug;
            headings.push({ id: uniqueSlug, title, level: node.depth });
          }
        }

        if (Array.isArray(node.children)) {
          node.children.forEach(visitNode);
        }
      };

      visitNode(tree);
    })
    .use(html)
    .process(markdown);

  return { html: result.toString(), headings };
}
