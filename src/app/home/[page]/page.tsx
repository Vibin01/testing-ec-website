import { notFound } from "next/navigation";
import { homePageData } from "@/data/HomePageData";
import BlockEasySteps from "@/components/common/BlockEasySteps";
import { TabWithDescription } from "@/components/common/TabWithDescription";
import { CTASection } from "@/components/common/CTASection";
import { HeroSection } from "./HeroSection";

const allowedPages = [
  "predictive-interview-scheduling-platform",
  "employer-reviews",
  "recruiter-motivation", 
  "job-search",
];

export async function generateStaticParams() {
  return homePageData.map((item) => ({
    page: item.path,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  if (!allowedPages.includes(page)) {
    notFound();
  }

  const pageData = homePageData.find((item) => item.path === page);

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
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  if (!allowedPages.includes(page)) {
    notFound();
  }
  const {
    HeroData,
    BlockStepsSectionData,
    TabWithDescriptionSectionData,
    CTASectionData,
  } = homePageData.filter((item) => item.path === page)[0];

  return (
    <section className="relative overflow-x-hidden ">
      <div className="lg:bg-[url('/background/homepage-sub-bg-1.svg')] bg-cover bg-no-repeat ">
        <div className=" bg-[url('/background/mobile-homesubpage-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative flex flex-col-reverse lg:flex-row items-center bg-[#FFFFFF4D] lg:py-[9%] xl:py-[11%]- 2xl:py-[10%] px-[4%] md:px-[7%]  ">
            <HeroSection HeroData={HeroData} />
          </section>
        </div>
        <div className=" bg-[url('/background/mobile-homesubpage-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative py-[5%] px-[4%] md:px-[7%] bg-transparent">
            <TabWithDescription data={TabWithDescriptionSectionData} />
          </section>
        </div>
      </div>
      <div className="lg:bg-[url('/background/homepage-sub-bg-2.svg')] bg-cover ">
        <section className="relative px-[4%] md:px-[7%] ">
          <BlockEasySteps data={BlockStepsSectionData} />
        </section>
      </div>
      <div className=" bg-[url('/background/mobile-homesubpage-part-5.svg')] lg:bg-[url('/background/homepage-sub-bg-4.svg')] bg-cover ">
        <section className="relative md:bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[4%] md:px-[7%]">
          <CTASection data={CTASectionData} />
        </section>
      </div>
    </section>
  );
}
