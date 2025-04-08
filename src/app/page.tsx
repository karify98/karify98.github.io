import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { Header } from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <Intro />

        {/* Recent Posts Section */}
        {allPosts.length > 0 && (
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <Container>
              <h2 className="text-3xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">
                Recent Posts
              </h2>
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
            </Container>
          </section>
        )}
      </main>
    </>
  );
}
