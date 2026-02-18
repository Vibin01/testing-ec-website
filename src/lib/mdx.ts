import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/MDXComponents";
import { notFound } from "next/navigation";

const BLOGS_PATH = path.join(process.cwd(), "src/blog_content");

export async function getBlog(slug: string) {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
    components: MDXComponents,
  });

  return { content: mdxContent, meta: data };
}

export function getAllBlogs(): {
  slug: string;
  date: string;
  heading: string;
  title: string;
}[] {
  return fs.readdirSync(BLOGS_PATH).map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fileContent = fs.readFileSync(path.join(BLOGS_PATH, file), "utf-8");
    const { data } = matter(fileContent);
    return { slug, date: data.date, heading: data.heading, title: data.title };
  });
}
