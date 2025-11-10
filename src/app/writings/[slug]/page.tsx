import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const writingsDir = path.join(process.cwd(), "content/writings");

export async function generateStaticParams() {
  const files = fs.readdirSync(writingsDir);
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params; // ✅ unwrap the Promise here

  const fullPath = path.join(writingsDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <article className="prose mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}