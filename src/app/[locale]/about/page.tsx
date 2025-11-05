import Container from "@/app/_components/container";
import Image from "next/image";

import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage(props: PageProps) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const dictionary = await getDictionary(locale);
  const { about } = dictionary;

  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {about.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg transform rotate-3"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden border-4 border-yellow-500/20">
                  <Image
                    src="/images/profile.jpg"
                    alt="Karify98"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{about.roleHeading}</h2>
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{about.skillsTitle}</h2>

              <div className="space-y-8">
                {about.skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <div
                          key={skill}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{about.approachTitle}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {about.approachCards.map((card) => (
                  <div key={card.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
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