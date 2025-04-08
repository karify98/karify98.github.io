import Image from "next/image";
import Link from "next/link";

export function Intro() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, my name is{" "}
              <span className="text-blue-600 dark:text-blue-400">Karify98</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I build scalable and efficient backend systems.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Backend engineering, AI automation, and DevOps specialist focused on creating robust and maintainable solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="/blog"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read My Blog
              </Link>
              <Link
                href="/work"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg transform rotate-3"></div>
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
        </div>
      </div>
    </section>
  );
}
