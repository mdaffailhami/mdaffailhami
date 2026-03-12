import { experiencesTable } from "../../schema";

export type ExperienceInsert = typeof experiencesTable.$inferInsert;

export const experiences: ExperienceInsert[] = [
  {
    company: "CryptoSharia",
    role: "Fullstack Lead Developer",
    start: new Date("2025-06-01"),
    end: null,
    description:
      "CryptoSharia is a multi-web platform ecosystem for an Islamic crypto community, consisting of a company profile, media platform (news, education, research), admin dashboard, and a centralized API. As Fullstack Lead Developer, I designed and built the centralized REST API using SvelteKit with pure TypeScript, framework-agnostic, heavily focused on backend engineering and type safety. I designed the PostgreSQL schema, implemented custom database-based authentication without third-party libraries, and applied SSR for content-heavy pages to optimize SEO and performance. I also led technical direction for the team including Git workflow standards and code review.",
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/cryptosharia/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/cryptosharia/image-2.jpeg",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/superprof/image-1.png",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/cimsa-ulm/image-1.webp",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/aksamedia/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/experiences/aksamedia/image-2.jpg",
    ],
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
