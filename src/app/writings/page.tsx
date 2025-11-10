import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingsPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-neutral-800">
      <h1 className="text-4xl font-semibold mb-10 text-center">Writings</h1>

      {posts.length === 0 ? (
        <p className="text-neutral-600 text-center">No posts yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
                <p className="text-sm text-neutral-500 mb-2">{post.date}</p>
                <p className="text-neutral-700 mb-3">
                  {post.description || "No description available."}
                </p>
                <Link
                  href={`/writings/${post.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}