export const pricingPlans = [
  {
    id: 1,
    tier: "Tier 1",
    label: "Free Forever",
    price: "Free Forever",
    description:
      "Kickstart hiring with free tools to engage your hiring team and streamline recruitment.",
    features_heading: "Included Core Features",
    features: [
      { text: "Recruiter Management" },
      { text: "Panel Management" },
      { text: "Doc Vault" },
      { text: "Job Posting" },
    ],
    buttonText: "Continue",
  },
  {
    id: 2,
    tier: "Tier 2",
    label: "Standard",
    price: "36,000",
    description:
      "Unlock features to reduce candidate drop-offs and uncover candidate sentiment.",
    features_heading: "(Everything in Tier 1 +)",
    features: [
      {
        text: "Pix Vault",
        description:
          "Upload Company Logos and Photos to Personalize your Offer with Branded images",
      },
      ,
      {
        text: "Hiring Pipeline",
        description:
          "Quickly identify active and stalled positions in your pipeline, providing you with a clear overview of your current hiring status",
      },
      {
        text: "Interview No-Show Predictor",
        description:
          "Surface no-show risk 20% early and optimize interview scheduling",
      },
      {
        text: "Offer No-Show Predictor",
        description:
          "Surface no-show risk 20% early and optimize joining readiness",
      },
      {
        text: "EC Insights",
        description:
          "Gain unrivalled visibility into your hiring data, from active positions to schedules and offers across various timelines",
      },
      {
        text: "Job Posting",
        description:
          "Recruiters across the organization can post up to 100 jobs",
      },
    ],
    buttonText: "Request for Quote",
  },
  {
    id: 3,
    tier: "Tier 3",
    label: "Premium",
    price: "56,000",
    description:
      "Supercharge your hiring with premium tools, deep analytics, and executive dashboards.",
    features_heading: "(Everything in Tier 2 +)",
    features: [
      {
        text: "Vid Vault",
        description:
          "Upload custom welcome videos to engage and excite new hires using your Media Library",
      },
      {
        text: "Interview No-Show Predictor",
        description:
          "Surface no-show risk 40% early and optimize interview scheduling",
      },
      {
        text: "Offer No-Show Predictor",
        description:
          "Surface no-show risk 40% early and optimize joining readiness",
      },
      {
        text: "Hiring Explorer",
        description:
          "Gain unparalleled behavioural insights into your recruiters, interview panel, and candidates at various stages of the hiring process",
      },
      {
        text: "C360",
        description:
          "Gain Unparalleled Control and Customize Candidate Feedback templates to Shape a Personalized and reflective Candidate experience",
      },
      {
        text: "C Suite",
        description:
          "Get executive-grade hiring intelligence with actionable recommendations to remove bottlenecks and stay on track to hiring targets.",
      },
      {
        text: "Job Posting ",
        description:
          "Recruiters across the organization can post up to 250 jobs",
      },
    ],
    buttonText: "Request for Quote",
  },
];

export const comparisonData = [
  {
    id: 1,
    services: [
      { service: "Job Posting", tiers: [true, true, true] },
      { service: "Recruiter Management", tiers: [true, true, true] },
      { service: "Panel Management", tiers: [true, true, true] },
    ],
  },

  {
    id: 2,
    service_heading: "Vault",
    services: [
      { service: "Doc Vault", tiers: [true, true, true] },
      { service: "Pix Vault", tiers: [false, true, true] },
      { service: "Vid Vault", tiers: [false, false, true] },
    ],
  },
  {
    id: 3,
    service_heading: "Hiring Pipeline",
    tiers: [false, true, true],
  },
  {
    id: 4,
    service_heading: "Interview No-Show Predictor",
    services: [
      {
        service_highlight: "Basic Early Signal",
        service: "10% ahead of interview time",
        tiers: [false, true, true],
      },
      {
        service_highlight: "Advanced Early Signal",
        service: "20% ahead of interview time",
        tiers: [false, true, true],
      },
      {
        service_highlight: "Enhanced Early Signal",
        service: "40% ahead of interview time",
        tiers: [false, false, true],
      },
    ],
  },
  {
    id: 5,
    service_heading: "Offer No-Show Predictor",
    services: [
      {
        service_highlight: "Basic Early Signal",
        service: "10% ahead of the joining date",
        tiers: [false, true, true],
      },
      {
        service_highlight: "Advanced Early Signal",
        service: "20% ahead of the joining date",
        tiers: [false, true, true],
      },
      {
        service_highlight: "Enhanced Early Signal",
        service: "40% ahead of the joining date",
        tiers: [false, false, true],
      },
    ],
  },

  {
    id: 6,
    service_heading: "EC Insights",
    tiers: [false, true, true],
  },
  {
    id: 7,
    service_heading: "Hiring Explorer",
    services: [
      { service: "Interview Explorer", tiers: [false, false, true] },
      { service: "Offer Explorer", tiers: [false, false, true] },
    ],
  },
  {
    id: 8,
    service_heading: "C 360 Templates",
    services: [
      { service: "Resume", tiers: [false, false, true] },
      { service: "Interview ", tiers: [false, false, true] },
      { service: "Schedule ", tiers: [false, false, true] },
      { service: "Offer ", tiers: [false, false, true] },
    ],
  },
  {
    id: 9,
    service_heading: "C Suite",

    tiers: [false, false, true],
  },
];
