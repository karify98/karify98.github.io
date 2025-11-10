import { Header } from "@/app/_components/header";
import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default async function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary(DEFAULT_LOCALE);
  return (
    <>
      <Header locale={DEFAULT_LOCALE} messages={dictionary.header} />
      {children}
    </>
  );
}
