import Container from "@/app/_components/container";

import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ContactPage(props: PageProps) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const dictionary = await getDictionary(locale);
  const { contact } = dictionary;

  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {contact.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">{contact.subtitle}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{contact.availability}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contact.methods.map((method) => (
              <div
                key={`${method.label}-${method.value}`}
                className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 flex flex-col"
              >
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-300">{method.label}</div>
                <a
                  href={method.href}
                  className="mt-2 text-2xl font-bold text-gray-900 dark:text-white break-words hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {method.value}
                </a>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 flex-1">{method.helper}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

function resolveLocale(localeParam: string | undefined): Locale {
  if (localeParam && isLocale(localeParam)) {
    return localeParam;
  }

  return DEFAULT_LOCALE;
}
