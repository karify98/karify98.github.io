import LocaleBlogsPage from "@/app/[locale]/blogs/page";
import { DEFAULT_LOCALE } from "@/lib/locales";

export default async function BlogsDefaultPage() {
  return LocaleBlogsPage({
    params: Promise.resolve({ locale: DEFAULT_LOCALE }),
  });
}
