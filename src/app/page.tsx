import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 2); // show 2 most recent posts

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-neutral-800 px-6">
      <div className="max-w-4xl w-full">
        {/* Header section with image + text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-16">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Elliott Ganley"
              width={180}
              height={180}
              className="rounded-lg border border-neutral-200 shadow-sm object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl font-semibold mb-3 tracking-tight">
              Elliott Ganley
            </h1>
            <p className="text-neutral-500 mb-6">
              Exploring markets, technology, and long-term thinking.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 mb-5">
              Welcome to my website. Here you’ll find some of my writing on markets,
              technology, and ideas that I find interesting and am currently following.
              I use this space to think out loud — exploring how innovation, finance,
              and global trends shape the future.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 mb-8">
              I publish new essays every few weeks, reflecting on what I’m learning and
              observing in the world of business, investing, and emerging technologies.
            </p>

            <Link
              href="/writings"
              className="inline-block text-blue-600 hover:underline font-medium text-lg"
            >
              Read all writings →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-200 mb-10" />

        {/* Recent writings */}
        <h2 className="text-2xl font-medium mb-6">Recent Essays</h2>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-neutral-600 mb-2">
                {post.description || "No description available."}
              </p>
              <Link
                href={`/writings/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}