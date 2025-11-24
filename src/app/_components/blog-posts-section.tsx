"use client";

import { useMemo, useState } from "react";
import { HeroPost } from "@/app/_components/hero-post";
import type { Post } from "@/interfaces/post";
import type { Locale } from "@/lib/locales";

type Messages = {
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  clearFilter: string;
  noResults: string;
};

type Props = {
  posts: Post[];
  locale: Locale;
  messages: Messages;
};

export function BlogPostsSection({ posts, locale, messages }: Props) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.replace(/^#/, "").trim().toLowerCase();

  const allHashtags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.hashtags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!normalizedQuery) {
      return posts;
    }

    return posts.filter((post) =>
      post.hashtags.some((tag) =>
        tag.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [posts, normalizedQuery]);

  const handleTagClick = (tag: string) => {
    const normalizedTag = tag.toLowerCase();

    if (normalizedQuery === normalizedTag) {
      setQuery("");
      return;
    }

    setQuery(`#${tag}`);
  };

  const shouldShowClearButton = query.trim().length > 0;

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="hashtag-search"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {messages.searchLabel}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            id="hashtag-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={messages.searchPlaceholder}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          {shouldShowClearButton && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
            >
              {messages.clearFilter}
            </button>
          )}
        </div>
      </div>

      {allHashtags.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {messages.filterLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {allHashtags.map((tag) => {
              const isActive = normalizedQuery === tag.toLowerCase();
              const baseClasses =
                "text-sm font-medium px-3 py-1 rounded-full border transition-colors";
              const activeClasses = isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50";

              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <HeroPost
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              hashtags={post.hashtags}
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{messages.noResults}</p>
      )}
    </div>
  );
}
