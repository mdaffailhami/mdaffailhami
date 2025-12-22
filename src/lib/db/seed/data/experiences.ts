import { experiencesTable } from "../../schema";

export type ExperienceInsert = typeof experiencesTable.$inferInsert;

export const experiences: ExperienceInsert[] = [
  {
    company: "CryptoSharia",
    role: "Core Team & Programmer",
    start: new Date("2025-06-01"),
    end: null,
    description:
      "CryptoSharia is a community-driven Islamic crypto movement that bridges Web3 innovation with Sharia principles — helping Muslims understand, analyze, and invest in digital assets ethically and responsibly. As one of the core team members, I contribute to the overall development of CryptoSharia, especially in the technology division. I also designed and developed the official website, cryptosharia.id, using SvelteKit and Supabase, built with a clean and scalable architecture optimized for content management and performance.",
    images: ["https://picsum.photos/seed/cryptosharia/800/450"],
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://www.cryptosharia.id/",
      },
    ],
  },
  {
    company: "Superprof",
    role: "Programming Course Tutor",
    start: new Date("2025-02-01"),
    end: new Date("2025-06-30"),
    description:
      "During this period, I was working as a Programming Course Tutor. My primary focus was to help students intuitively grasp programming concepts while guiding them through hands-on coding exercises and real-world applications. I taught Programming in general & broad, covering both fundamental principles and advanced topics.",
    images: ["https://picsum.photos/seed/superprof/800/450"],
    links: [
      {
        type: "website",
        label: "Superprof Profile",
        url: "https://www.superprof.co.id/",
      },
    ],
  },
  {
    company: "CIMSA - Lambung Mangkurat University",
    role: "Web Developer",
    start: new Date("2025-01-01"),
    end: new Date("2025-02-28"),
    description:
      "During this period, I worked as a freelance web developer, primarily focusing on frontend development. The project that I worked on was the CIMSA ULM Organizational Profile Website. In this project, I was responsible for developing the frontend using React, ensuring a responsive and user-friendly experience. I also worked on integrating the REST API for seamless data communication and contributed to the backend by assisting in debugging and enhancing functionality.",
    images: ["https://picsum.photos/seed/cimsa/800/450"],
    links: [
      {
        type: "website",
        label: "University Website",
        url: "https://ulm.ac.id/",
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
    images: ["https://picsum.photos/seed/aksamedia/800/450"],
    links: [
      {
        type: "website",
        label: "Company Website",
        url: "https://aksamedia.co.id/",
      },
    ],
  },
  {
    company: "Poliban English Community (Policy)",
    role: "Core Team",
    start: new Date("2023-10-01"),
    end: new Date("2024-08-31"),
    description:
      "As a core member of the Poliban English Community, I actively participate in both the Speech and Newscasting divisions. My involvement here allows me to enhance my English language proficiency, particularly in public speaking and newscasting. Through these activities, I have not only improved my speaking skills but also developed strong organizational abilities, contributing to the planning and execution of various community events and programs.",
    images: ["https://picsum.photos/seed/policy/800/450"],
    links: [
      {
        type: "website",
        label: "Community LinkedIn",
        url: "https://www.linkedin.com/company/poliban-english-community-policy/",
      },
    ],
  },
  {
    company: "Masjid Muhammadiyah Sungai Miai",
    role: "Streaming Operator - Youth of the Mosque",
    start: new Date("2023-01-01"),
    end: new Date("2025-04-30"),
    description:
      "As a member of the Youth of the Mosque at Masjid Muhammadiyah Sungai Miai Banjarmasin, I serve as a streaming operator, ensuring that our community can connect and engage with Islamic lectures and other mosque activities online.",
    images: ["https://picsum.photos/seed/muhammadiyah/800/450"],
    links: [
      {
        type: "website",
        label: "YouTube Channel",
        url: "https://www.youtube.com/@masjidmuhammadiyahsungaimiai",
      },
    ],
  },
  {
    company: "iTech Poliban",
    role: "Senior Member",
    start: new Date("2022-09-01"),
    end: new Date("2024-08-31"),
    description:
      "As a senior member of iTech Poliban, an IT-focused community at my college, I’ve had the privilege of contributing to both education and competition initiatives. My role involves teaching and mentoring students, particularly in programming, especially web development, helping them build strong technical foundations.",
    images: ["https://picsum.photos/seed/itech/800/450"],
    links: [
      {
        type: "website",
        label: "Community LinkedIn",
        url: "https://www.linkedin.com/company/itech-poliban/",
      },
    ],
  },
];
