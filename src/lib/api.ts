import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { DEFAULT_LOCALE, type Locale } from "@/lib/locales";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(locale: Locale = DEFAULT_LOCALE) {
  const directory = getDirectoryForLocale(locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((entry) => entry.endsWith(".md"));
}

export function getPostBySlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const realSlug = slug.replace(/\.md$/, "");
  const localizedPost = readPostForLocale(realSlug, locale);

  if (localizedPost) {
    return localizedPost;
  }

  if (locale !== DEFAULT_LOCALE) {
    return readPostForLocale(realSlug, DEFAULT_LOCALE);
  }

  return null;
}

export function getAllPosts(locale: Locale = DEFAULT_LOCALE): Post[] {
  const localizedSlugs = new Set(
    getPostSlugs(locale).map((slug) => slug.replace(/\.md$/, ""))
  );
  const defaultSlugs = new Set(
    getPostSlugs(DEFAULT_LOCALE).map((slug) => slug.replace(/\.md$/, ""))
  );

  const allSlugs = new Set<string>([...defaultSlugs, ...localizedSlugs]);

  return Array.from(allSlugs)
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

function getDirectoryForLocale(locale: Locale) {
  return join(postsDirectory, locale);
}

function readPostForLocale(slug: string, locale: Locale): Post | null {
  const directory = getDirectoryForLocale(locale);
  const fullPath = join(directory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const normalizedHashtags = normalizeHashtags(
    (data as Record<string, unknown>).hashtags
  );

  return {
    ...data,
    hashtags: normalizedHashtags,
    slug,
    content,
  } as Post;
}

function normalizeHashtags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((tag) => String(tag).trim())
      .filter((tag) => tag.length > 0);
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  }

  return [];
}
