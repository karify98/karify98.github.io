import LocaleExperiencePage from "@/app/[locale]/experience/page";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default async function ExperienceDefaultPage() {
  return LocaleExperiencePage({
    params: Promise.resolve({ locale: DEFAULT_LOCALE }),
  });
}
