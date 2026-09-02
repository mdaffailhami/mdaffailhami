import type { StaticImageData } from "next/image";
import { images as glosiaImages } from "@/lib/assets/experiences/glosia";
import { images as cryptoshariaImages } from "@/lib/assets/experiences/cryptosharia";
import { images as superprofImages } from "@/lib/assets/experiences/superprof";
import { images as cimsaUlmImages } from "@/lib/assets/experiences/cimsa-ulm";
import { images as aksamediaImages } from "@/lib/assets/experiences/aksamedia";
// import { images as banuaTechImages } from "@/lib/assets/experiences/banua-tech";

export type Experience = {
  company: string;
  role: string;
  start: Date;
  end: Date | null;
  description: string;
  images: StaticImageData[];
  links: {
    type: "website" | "linkedin" | "other";
    url: string;
    label: string;
    icon?: string;
  }[];
};

export const experiences: Experience[] = [
  // {
  //   company: "Banua Tech",
  //   role: "Co-Founder & Software Engineer",
  //   start: new Date("2026-06-30"),
  //   end: null,
  //   description:
  //     "Banua Tech is an IT enthusiast community and technology organization focused on technology education, digital innovation, and collaborative IT ecosystem development. As Co-Founder & Software Engineer, I help shape the technical direction, build and maintain digital products, support learning initiatives, and contribute to community programs across areas such as web development, AI, cloud, cybersecurity, and software engineering.",
  //   images: banuaTechImages,
  //   links: [
  //     {
  //       type: "website",
  //       label: "Official Website",
  //       url: "https://banuatech.vercel.app/",
  //     },
  //   ],
  // },
  {
    company: "Glosia",
    role: "Founder, Software Engineer, & Content Creator",
    start: new Date("2026-04-01"),
    end: null,
    description:
      "Glosia is a SaaS platform that enables businesses to embed an AI-powered customer service chatbot into their website by uploading a custom knowledge base. Engineered a RAG (Retrieval-Augmented Generation) pipeline using Gemini Embeddings and Vector Database for semantic search, enabling context-aware responses grounded in business-specific documents, and implementing subscription-based billing with Midtrans.",
    images: glosiaImages,
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://glosia.biz.id/",
      },
    ],
  },
  {
    company: "CryptoSharia",
    role: "Software Engineer",
    start: new Date("2025-06-01"),
    end: null,
    description:
      "CryptoSharia is an Islamic crypto community and media platform providing sharia-based education, market research, and halal/haram screening of cryptoassets in Indonesia. As part of the tech department, I lead the overall technology-side of the community, especially building the robust & maintainable backend that serves as the backbone of the entire ecosystem.",
    images: cryptoshariaImages,
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://cryptosharia.id/",
      },
    ],
  },
  {
    company: "Superprof",
    role: "Programming Course Tutor",
    start: new Date("2025-02-01"),
    end: new Date("2025-06-30"),
    description:
      "During this period, I worked as a Programming Course Tutor, teaching privately from fundamentals (variables, data types, control flow) through OOP (classes, inheritance, encapsulation, polymorphism). Primary focus on Python, with emphasis on conceptual understanding over syntax memorization. I adapted my teaching approach based on each student's background and learning needs.",
    images: superprofImages,
    links: [
      {
        type: "website",
        label: "My Superprof Ad",
        url: "https://superprof.co.id/programming-coding-passionate-self-taught-pemrograman-dengan-pengalaman-lebih-dari-tahun.html",
      },
    ],
  },
  {
    company: "CIMSA - Lambung Mangkurat University",
    role: "Frontend Developer",
    start: new Date("2024-12-01"),
    end: new Date("2025-02-28"),
    description:
      "During this period, I worked as a freelance Frontend Developer, building the CIMSA ULM Organizational Profile Website using React + Vite. I was responsible for implementing a responsive UI across devices, integrating the frontend with a REST API developed by my partner using Laravel, and fixing bugs based on direct client feedback.",
    images: cimsaUlmImages,
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://cimsa.ulm.ac.id/",
      },
    ],
  },
  {
    company: "PT Aksamedia Mulia Digital",
    role: "Mobile Developer",
    start: new Date("2024-09-01"),
    end: new Date("2024-12-31"),
    description:
      "As a Mobile Developer intern at PT Aksamedia Mulia Digital, I focus on developing and maintaining cross-platform mobile applications. My role involves collaborating with a team to create innovative solutions, following best practices in the mobile development lifecycle, and continuously improving my skills in Flutter.",
    images: aksamediaImages,
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://aksamedia.co.id/",
      },
    ],
  },
  // {
  //   company: "Poliban English Community (Policy)",
  //   role: "Core Team",
  //   start: new Date("2023-10-01"),
  //   end: new Date("2024-08-31"),
  //   description:
  //     "As a core member of the Poliban English Community, I actively participate in both the Speech and Newscasting divisions. My involvement here allows me to enhance my English language proficiency, particularly in public speaking and newscasting. Through these activities, I have not only improved my speaking skills but also developed strong organizational abilities, contributing to the planning and execution of various community events and programs.",
  //   images: ["https://picsum.photos/seed/policy/800/450"],
  //   links: [
  //     {
  //       type: "website",
  //       label: "Community LinkedIn",
  //       url: "https://www.linkedin.com/company/poliban-english-community-policy/",
  //     },
  //   ],
  // },
  // {
  //   company: "Masjid Muhammadiyah Sungai Miai",
  //   role: "Streaming Operator - Youth of the Mosque",
  //   start: new Date("2023-01-01"),
  //   end: new Date("2025-04-30"),
  //   description:
  //     "As a member of the Youth of the Mosque at Masjid Muhammadiyah Sungai Miai Banjarmasin, I serve as a streaming operator, ensuring that our community can connect and engage with Islamic lectures and other mosque activities online.",
  //   images: ["https://picsum.photos/seed/muhammadiyah/800/450"],
  //   links: [
  //     {
  //       type: "website",
  //       label: "YouTube Channel",
  //       url: "https://www.youtube.com/@masjidmuhammadiyahsungaimiai",
  //     },
  //   ],
  // },
  // {
  //   company: "iTech Poliban",
  //   role: "Senior Member",
  //   start: new Date("2022-09-01"),
  //   end: new Date("2024-08-31"),
  //   description:
  //     "As a senior member of iTech Poliban, an IT-focused community at my college, I’ve had the privilege of contributing to both education and competition initiatives. My role involves teaching and mentoring students, particularly in programming, especially web development, helping them build strong technical foundations.",
  //   images: ["https://picsum.photos/seed/itech/800/450"],
  //   links: [
  //     {
  //       type: "website",
  //       label: "Community LinkedIn",
  //       url: "https://www.linkedin.com/company/itech-poliban/",
  //     },
  //   ],
  // },
];

export const orderedExperiences = [...experiences].sort(
  (a, b) => (b.end?.getTime() ?? Infinity) - (a.end?.getTime() ?? Infinity),
);
