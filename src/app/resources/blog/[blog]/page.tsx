import { getAllBlogs, getBlog } from "@/lib/mdx";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((b) => ({ blog: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { meta } = await getBlog((await params).blog);

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
  };
}

export default async function BlogPage(props: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await props.params;
  const { content } = await getBlog(blog);

  return (
    <article className="bg-[url('/background/mobile-blog-bg.svg')] lg:bg-[url('/background/blog-bg.svg')] bg-cover bg-center">
      <div className=" px-[7%]">{content}</div>
    </article>
  );
}
