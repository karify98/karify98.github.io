'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LOCALES, type Locale } from '@/lib/locales';

type LanguageSwitcherProps = {
  currentLocale: Locale;
  labels: {
    label: string;
    en: string;
    vi: string;
  };
};

export function LanguageSwitcher({ currentLocale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocalePrefix(pathname ?? '/');

  return (
    <div className="flex items-center gap-2" aria-label={labels.label}>
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={pathWithoutLocale || '/'}
          locale={locale}
          className={`text-xs font-semibold uppercase tracking-wide border rounded px-2 py-1 transition-colors ${
            currentLocale === locale
              ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-400 dark:bg-blue-400'
              : 'border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400'
          }`}
        >
          {locale === 'en' ? labels.en : labels.vi}
        </Link>
      ))}
    </div>
  );
}

function stripLocalePrefix(pathname: string) {
  const localePattern = new RegExp(`^/(?:${LOCALES.join('|')})(?=/|$)`);
  const cleaned = pathname.replace(localePattern, '');
  if (cleaned === '' || cleaned === '/') {
    return '/';
  }

  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}
