import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE } from "@/lib/locales";
import type { ReactNode } from "react";

export default async function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  const dictionary = await getDictionary(DEFAULT_LOCALE);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeSwitcher />
      <Header locale={DEFAULT_LOCALE} messages={dictionary.header} />
      <div className="pt-16">{children}</div>
      <Footer messages={dictionary.footer} />
    </div>
  );
}
