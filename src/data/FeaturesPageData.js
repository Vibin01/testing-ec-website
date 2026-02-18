import orghub from "@/public/animation/Org.Hub Hover.json";
import Vault from "@/public/animation/Vault Hover.json";
import c360 from "@/public/animation/C 360 Hover.json";
import cSuite from "@/public/animation/C Suite Hover.json";
import explorer from "@/public/animation/Explorer Hover.json";
import pipeline from "@/public/animation/Pipeline Hover.json";
import predictor from "@/public/animation/Predictor Hover.json";
import ecInsights from "@/public/animation/EC Insights Hover.json";

const featuresPageData = {
  heading: "FEATURES",
  title: "Experience ",
  title_highlight: "Easy Hiring",
  sub_title: "Powered by EC",
  content_highlight: "Connect EC",
  content:
    " — built to transform talent acquisition with behavioral intelligence and smart automation. EC empowers hiring teams to hire faster, smarter, and easier - delivering exceptional candidate experiences and attracting top talent.",
  button_text: "Unlock EC for Free",
  button_link: "#",
  image_url: "/features/connect-ec-platform-key-features.svg",
  image_alt:
    "A graphic summary highlighting the key features and capabilities of the Connect EC ethical hiring platform.",
};

const TransformSectionData = [
  {
    animationData: orghub,
    title: "Org.Hub",
    description:
      "Centralized command center to manage recruiters, panelists, and departments.",
  },
  {
    animationData: Vault,
    title: "Vault",
    description:
      "Engaging post-offer platform to store and share media with offered talent.",
  },
  {
    animationData: pipeline,
    title: "Pipeline",
    description:
      "Track hiring flows in real time, clear bottlenecks and course correct instantly.",
  },
  {
    animationData: predictor,
    title: "Predictor",
    description:
      "An intelligent tool that surfaces early no-show risks across interviews and offers",
  },
  {
    animationData: explorer,
    title: "Explorer",
    description:
      "An innovative tool to uncover candidate sentiments and hiring trends in real-time.",
  },
  {
    animationData: c360,
    title: "C360",
    description:
      "A dynamic tool to standardize and personalize candidate feedback across all stages.",
  },
  {
    animationData: ecInsights,
    title: "EC Insights",
    description:
      "A powerful analytics engine to track hiring performance, trends, and outcomes.",
  },
  {
    animationData: cSuite,
    title: "C-Suite",
    description:
      "Trailblazing dashboard for executives to define and achieve recruitment goals.",
  },
];

const FeaturesSteps = {
  image_url_1: "/features/connect-ec-recruitment-innovation-tech.svg",
  image_alt_1:
    "Abstract graphic symbolizing the future of recruitment technology and ethical innovation powered by Connect EC.",
  image_url_2: "/features/connect-ec-innovative-c-suite-leadership.svg",
  image_alt_2:
    "Visual showing a C-Suite hiring recommendation report for executive roles, powered by real-time Connect EC data.",
  heading: "Fuel Your Hiring with Innovation",
  steps: [
    {
      id: 1,
      title: "End-to-End Hiring Orchestration",
      description:
        "EC unifies the hiring journey from sourcing to onboarding into one seamless, connected workflow. It eliminates silos, reduces manual handovers, and keeps recruiters, panels, and hiring managers perfectly aligned.",
    },
    {
      id: 2,
      title: "Data-Driven Decision Making",
      description:
        "Leverage behavioral intelligence and analytics across your hiring funnel to identify hidden patterns in candidate behavior, especially in interviews, and offer responses for faster, smarter decisions.",
    },
    {
      id: 3,
      title: "Centralized Control & Accountability",
      description:
        "Org. Hub offers leadership complete visibility and control. Assign recruiters, configure interview panels, and manage departments from one place—ensuring clear accountability, consistent execution, and smooth coordination.",
    },
    {
      id: 4,
      title: "Predictive Precision",
      description:
        "Predictor helps you forecast interviews and offer no-shows before they happen. Detect early signs of drop-off, plan backups proactively, and reduce surprises by staying one step ahead of candidate disengagement.",
    },
    {
      id: 5,
      title: "Behavioral & Performance Insights",
      description:
        "Explorer uncovers key insights from candidate drop-offs, declines, and funnel leaks. Use real-time data to identify inefficiencies, course-correct quickly, and continuously improve hiring outcomes across teams and stages.",
    },
    {
      id: 6,
      title: "Executive Visibility",
      description:
        "C-Suite, EC Insights, and Pipeline offer leadership insights that track recruiter activity, hiring velocity, and funnel performance. Stay aligned with company growth goals and keep recruitment strategies on track in real-time.",
    },
    {
      id: 7,
      title: "Branded Candidate Experience",
      description:
        "C360 standardizes personalized, structured, and transparent communication across all stages. It reinforces your employer brand and provides every candidate with a consistent, respectful, and memorable experience.",
    },
    {
      id: 8,
      title: "Post-Offer Engagement",
      description:
        "Vault delivers curated media content—photos, videos, and messages—that keeps candidates engaged post-offer. Build excitement, create a sense of belonging, and reduce early attrition even before day one begins.",
    },
  ],
};

const CTASectionData = {
  title: "Fast-Track Your Hire!",
  description:"Transform your hiring journey with one intelligent ecosystem that unifies people, data, and decisions. Predict outcomes, drive performance, and deliver excellence — all powered by behavioral science.",
  sub_title: "Start For Free. Hire Stress-Free!",
  button_text: "Unlock EC for Free",
  button_link: "#",
};

export {
  featuresPageData,
  TransformSectionData,
  FeaturesSteps,
  CTASectionData,
};
