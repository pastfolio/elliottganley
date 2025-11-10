import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingsDir = path.join(process.cwd(), "content/writings");

export function getAllPosts() {
  const files = fs.readdirSync(writingsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(writingsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
      };
    });
}

export function getPost(slug: string) {
  const fullPath = path.join(writingsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { content, data } = matter(fileContent);
  return { content, data };
}