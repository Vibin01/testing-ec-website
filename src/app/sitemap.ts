import { hiring_excellence_data } from "@/data/EmployerHiringExcellenceData";
import { subFeaturesPagesData } from "@/data/FeaturesSubPagesData";
import { homePageData } from "@/data/HomePageData";
import { solutionTabs } from "@/data/ResourcesPageData";
import { getAllBlogs } from "@/lib/mdx";
import { MetadataRoute } from "next";

const blogs = await getAllBlogs();

function getBiWeeklyDate(): Date {
  const now = new Date();
  const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;

  return new Date(
    Math.floor(now.getTime() / twoWeeksInMs) * twoWeeksInMs
  );
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resourceRoutes: MetadataRoute.Sitemap = [];

  const BI_WEEKLY_DATE = getBiWeeklyDate();


  blogs.forEach((b) => {
    const url = `${process.env.BASE_URL}/resources/blog/${b.slug}`;
    resourceRoutes.push({
      url: url,
      lastModified: b.date,
    });
  });

  solutionTabs.forEach((page) => {
    const pageUrl = `${process.env.BASE_URL}/resources/${page.path}`;
    page.tabs.forEach((mainTab) => {
      const mainTabUrl = `${pageUrl}/${mainTab.path}`;

      mainTab.subTabs.forEach((subTab) => {
        const subTabUrl = `${mainTabUrl}/${subTab.path}`;
        resourceRoutes.push({
          url: subTabUrl,
          lastModified: BI_WEEKLY_DATE,
            changeFrequency: "monthly",
priority: 0.8
        });
      });
    });
  });

  subFeaturesPagesData.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/features/${page.path}`,
      lastModified: BI_WEEKLY_DATE,
      changeFrequency: "monthly",
priority: 0.7

    });
  });

  hiring_excellence_data.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/employers/${page.name}`,
      lastModified: BI_WEEKLY_DATE,
    });
  });

  homePageData.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/home/${page.path}`,
      lastModified: BI_WEEKLY_DATE,
    });
  });

  return [
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: BI_WEEKLY_DATE,
        changeFrequency: "monthly",
  priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/employers`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/candidates`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/recruiters`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/features`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/resources`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/pricing`,
      lastModified: BI_WEEKLY_DATE,
    },
    {
      url: `${process.env.BASE_URL}/contact-us`,
      lastModified: BI_WEEKLY_DATE,
    },
  

    ...resourceRoutes,
  ];
}
