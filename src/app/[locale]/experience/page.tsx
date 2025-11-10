import Container from "@/app/_components/container";

import { getDictionary } from "@/lib/dictionaries";
import { DEFAULT_LOCALE, LOCALES, type Locale, isLocale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ExperiencePage(props: PageProps) {
  const params = await props.params;
  const locale = resolveLocale(params.locale);
  const dictionary = await getDictionary(locale);
  const { experience } = dictionary;

  return (
    <main className="bg-white dark:bg-gray-900">
      <Container>
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">{experience.title}</h1>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-4 sm:translate-x-16"></div>

              <div className="space-y-12">
                {experience.timeline.map((item) => (
                  <div key={`${item.period}-${item.role}`} className="relative pl-8 sm:pl-32 py-6">
                    <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2"></div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-col sm:flex-row items-start mb-4">
                        <time className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3 sm:mb-0 sm:mr-4">
                          {item.period}
                        </time>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</div>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 mb-4 font-medium">{item.company}</div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <ul className="list-disc pl-5 space-y-2">
                          {item.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{experience.educationTitle}</h2>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.education.degreeTitle}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{experience.education.institution}</p>
                    </div>
                    <div className="inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mt-2 md:mt-0">
                      {experience.education.timeframe}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{experience.education.description}</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.approachTitle}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.approachIntro}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.recognitionIntro}</p>
                  <div className="flex flex-wrap gap-3">
                    {experience.recognitions.map((recognition) => (
                      <div
                        key={recognition}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {recognition}
                      </div>
                    ))}
                  </div>
                </div>
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
