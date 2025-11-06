import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/locales";

const localePattern = new RegExp(`^/(?:${LOCALES.join("|")})(?=/|$)`);

export function stripLocaleFromPath(pathname: string): string {
  const cleaned = pathname.replace(localePattern, "");
  if (cleaned === "" || cleaned === "/") {
    return "/";
  }

  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

export function buildLocalizedPath(locale: Locale, path: string): string {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPath}`;
}

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}
