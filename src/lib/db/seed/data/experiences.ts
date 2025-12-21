import { experiencesTable } from "../../schema";

export type ExperienceInsert = typeof experiencesTable.$inferInsert;

export const experiences: ExperienceInsert[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Architect",
    start: new Date("2023-01-01"),
    end: null,
    description:
      "Leading the digital transformation of cloud-native applications for Fortune 500 clients. Specialized in scaling microservices architecture.",
    images: ["https://picsum.photos/seed/tech1/800/450"],
    links: [
      { type: "website", label: "Company Portal", url: "https://technova.net" },
      {
        type: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/company/technova",
      },
    ],
  },
  {
    company: "Pixel Perfect Agency",
    role: "Frontend Specialist",
    start: new Date("2021-06-01"),
    end: new Date("2022-12-31"),
    description:
      "Delivering pixel-perfect, high-performance web experiences with a focus on animation and accessible design.",
    images: ["https://picsum.photos/seed/pixel1/800/450"],
    links: [
      {
        type: "website",
        label: "Agency Portfolio",
        url: "https://pixelperfect.io",
      },
    ],
  },
  {
    company: "Swift Startup Inc.",
    role: "Junior Developer",
    start: new Date("2020-09-01"),
    end: new Date("2021-05-31"),
    description:
      "Fast-paced agile environment developing MVP features and maintaining core internal tooling.",
    images: ["https://picsum.photos/seed/swift1/800/450"],
    links: [
      {
        type: "linkedin",
        label: "Company Profile",
        url: "https://linkedin.com/company/swiftstartup",
      },
    ],
  },
];
