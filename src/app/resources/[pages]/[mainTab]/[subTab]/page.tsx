import { notFound } from "next/navigation";
import EmployerTabs from "./EmployerTabs";
import { solutionTabs } from "@/data/ResourcesPageData";

export async function generateStaticParams() {
  return solutionTabs.map((item) => ({
    pages: item.path,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string; mainTab: string; subTab: string }>;
}) {
  const { pages, mainTab, subTab } = await params;

  const pageData = solutionTabs
    .find((item) => item.path === pages)
    ?.tabs.filter((tab) => tab.path === mainTab)[0]
    .subTabs.filter((sub) => sub.path === subTab)
    .find((sub) => sub.path === subTab);

  if (!pageData) {
    notFound();
  }
  const { MetaData, image, image_alt } = pageData;
  return {
    metadataBase: new URL(process.env.BASE_URl || "https://connectec.app"),
    title: MetaData.metaTitle,
    description: MetaData.metaDescription,
    openGraph: {
      title: MetaData.metaTitle,
      description: MetaData.metaDescription,
      images: {
        url: image,
        width: 1200,
        height: 640,
        alt: image_alt,
      },
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages } = await params;

  const filterData = solutionTabs.find((item) => item.path === pages);

  if (!filterData) {
    notFound();
  }

  return (
    <div className="relative">
      <div className="bg-[url('/background/mobile-resources-subpage-bg.svg')] lg:bg-[url('/background/chronicles-bg.svg')] pb-8 bg-cover bg-no-repeat">
        <EmployerTabs employerTabs={filterData.tabs || []} />
      </div>
    </div>
  );
}
