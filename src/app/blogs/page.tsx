import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "@/lib/api";
import { Header } from "@/app/_components/header";

export default function BlogsPage() {
  const allPosts = getAllPosts();

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <Container>
          <section className="py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Blog Posts
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Thoughts, experiences, and technical insights from my journey in software development.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <HeroPost
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
} 