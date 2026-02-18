import { notFound } from "next/navigation";
import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import { CTASection } from "@/components/common/CTASection";
import { hiring_excellence_data } from "@/data/EmployerHiringExcellenceData";
import { TabWithDescription } from "@/components/common/TabWithDescription";
import BlockEasySteps from "@/components/common/BlockEasySteps";

const allowedPages = [
  "empower-hiring-teams",
  "explore-hiring-trends",
  "engage-talent",
  "exceed-hiring-targets",
];

export async function generateStaticParams() {
  return hiring_excellence_data.map((item) => ({
    name: item.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!allowedPages.includes(name)) {
    notFound();
  }

  const pageData = hiring_excellence_data.find((item) => item.name === name);

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
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!allowedPages.includes(name)) {
    notFound();
  }

  const {
    BlockStepsSectionData,
    HeroData,
    CTASectionData,
    TabWithDescriptionSectionData,
  } = hiring_excellence_data.filter((item) => item.name === name)[0];

  return (
    <section className="relative overflow-x-hidden">
      <div className="lg:bg-[url('/background/employer-dynamic-1.svg')] bg-cover bg-center">
        <div className=" bg-[url('/background/mobile-employer-subpage-part-1.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative flex lg:bg-[#FFFFFF4D] py-[9%] xl:py-[11%] 2xl:py-[13%] px-[4%] md:px-[7%] ">
            <div className="lg:w-[90%] ">
              <HeroTextContainerSection data={HeroData} />
            </div>
            <div className="lg:w-[10%] "></div>
          </section>
        </div>
        <div className=" bg-[url('/background/mobile-employer-subpage-part-2.svg')] lg:bg-none bg-cover bg-no-repeat">
          <section className="relative py-[5%] px-[2%] md:px-[7%] bg-transparent">
            <TabWithDescription data={TabWithDescriptionSectionData} />
          </section>
        </div>
      </div>
      <div className="lg:bg-[url('/background/employer-dynamic-2.svg')] bg-cover bg-center">
        <section className="relative overflow-hidden- px-[4%] md:px-[7%]">
          <BlockEasySteps data={BlockStepsSectionData} />
        </section>
      </div>

      <div className="bg-[url('/background/mobile-employer-subpage-cta.svg')] lg:bg-[url('/background/employer-dynamic-3.svg')] bg-cover bg-center">
        <section className="relative lg:bg-[#FFFFFF33] border-b border-[#FFFFFF] py-[5%] px-[7%]">
          <CTASection data={CTASectionData} />
        </section>
      </div>
    </section>
  );
}
