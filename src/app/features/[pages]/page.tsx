import { notFound } from "next/navigation";
import { subFeaturesPagesData } from "@/data/FeaturesSubPagesData";
import { FeaturesSubPage } from "./FeaturesSubPage";

const allowedPages = [
  "org-hub",
  "vault",
  "pipeline",
  "predictor",
  "explorer",
  "c360",
  "ec-insights",
  "c-suite",
];

export async function generateStaticParams() {
  return subFeaturesPagesData.map((item) => ({
    pages: item.path,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages } = await params;

  if (!allowedPages.includes(pages)) {
    notFound();
  }

  const pageData = subFeaturesPagesData.find((item) => item.path === pages);

  if (!pageData) {
    notFound();
  }

  const { MetaData } = pageData;

  return {
    title: MetaData?.metaTitle,
    description: MetaData?.metaDescription,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const { pages } = await params;

  if (!allowedPages.includes(pages)) {
    notFound();
  }

  return <FeaturesSubPage pages={pages} />;
}
