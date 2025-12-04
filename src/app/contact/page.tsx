import LocaleContactPage from "@/app/[locale]/contact/page";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default async function ContactDefaultPage() {
  return LocaleContactPage({
    params: Promise.resolve({ locale: DEFAULT_LOCALE }),
  });
}
