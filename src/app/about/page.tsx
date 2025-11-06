import LocaleAboutPage from "@/app/[locale]/about/page";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default async function AboutDefaultPage() {
  return LocaleAboutPage({
    params: Promise.resolve({ locale: DEFAULT_LOCALE }),
  });
}
