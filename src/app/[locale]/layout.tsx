import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, Locale, isLocale } from "@/lib/locales";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: [HOME_OG_IMAGE_URL],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const locale = resolveLocale(resolvedParams.locale);
  const dictionary = await getDictionary(locale);

  if (!dictionary) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeSwitcher />
      <Header locale={locale} messages={dictionary.header} />
      <div className="pt-16">{children}</div>
      <Footer messages={dictionary.footer} />
    </div>
  );
}

function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isLocale(localeParam)) {
    return localeParam;
  }

  return DEFAULT_LOCALE;
}
