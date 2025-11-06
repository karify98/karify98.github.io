'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LanguageSwitcher } from '@/app/_components/language-switcher';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/locales';
import { buildLocalizedPath, stripLocaleFromPath } from '@/lib/paths';

type HeaderProps = {
  locale: Locale;
  messages: Dictionary['header'];
};

export function Header({ locale, messages }: HeaderProps) {
  const pathname = usePathname();
  const normalizedPath = stripLocaleFromPath(pathname ?? '/');

  const navigation = [
    { name: messages.navigation.home, path: '/' },
    { name: messages.navigation.about, path: '/about' },
    { name: messages.navigation.experience, path: '/experience' },
    { name: messages.navigation.blog, path: '/blogs' },
    { name: messages.navigation.contact, path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={buildLocalizedPath(locale, '/')} className="text-2xl font-bold text-blue-900 dark:text-blue-400">
          {messages.brand}
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const href = buildLocalizedPath(locale, item.path);
            return (
              <Link
                key={item.path}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  normalizedPath === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher
            currentLocale={locale}
            labels={{
              label: messages.language.label,
              en: messages.language.en,
              vi: messages.language.vi,
            }}
          />
          <button className="md:hidden text-gray-600 dark:text-gray-300" aria-label="Toggle navigation">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
