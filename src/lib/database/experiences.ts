import { Experience } from "@/lib/types/database";
import { images as cryptoShariaImages } from "@/assets/experiences/cryptosharia";
import { images as superprofImages } from "@/assets/experiences/superprof";
import { images as cimsaUlmImages } from "@/assets/experiences/cimsa-ulm";
import { images as aksamediaImages } from "@/assets/experiences/aksamedia";
import { images as policyImages } from "@/assets/experiences/policy";
import { images as muhammadiyahImages } from "@/assets/experiences/muhammadiyah";
import { images as iTechImages } from "@/assets/experiences/itech";

export const experiences: Experience[] = [
  {
    company: "CryptoSharia",
    companyUrl: "https://www.cryptosharia.id/",
    role: "Core Team & Programmer",
    period: "Jun 2025 - Present",
    description:
      "CryptoSharia is a community-driven Islamic crypto movement that bridges Web3 innovation with Sharia principles — helping Muslims understand, analyze, and invest in digital assets ethically and responsibly. As one of the core team members, I contribute to the overall development of CryptoSharia, especially in the technology division. I also designed and developed the official website, cryptosharia.id, using SvelteKit and Supabase, built with a clean and scalable architecture optimized for content management and performance.",
    images: cryptoShariaImages,
  },
  {
    company: "Superprof",
    companyUrl: "https://www.superprof.co.id/",
    role: "Programming Course Tutor",
    period: "Feb 2025 - Jun 2025",
    description:
      "During this period, I was working as a Programming Course Tutor. My primary focus was to help students intuitively grasp programming concepts while guiding them through hands-on coding exercises and real-world applications. I taught Programming in general & broad, covering both fundamental principles and advanced topics.",
    images: superprofImages,
  },
  {
    company: "CIMSA - Lambung Mangkurat University",
    companyUrl: "https://ulm.ac.id/",
    role: "Web Developer",
    period: "Jan 2025 - Feb 2025",
    description:
      "During this period, I worked as a freelance web developer, primarily focusing on frontend development. The project that I worked on was the CIMSA ULM Organizational Profile Website. In this project, I was responsible for developing the frontend using React, ensuring a responsive and user-friendly experience. I also worked on integrating the REST API for seamless data communication and contributed to the backend by assisting in debugging and enhancing functionality.",
    images: cimsaUlmImages,
  },
  {
    company: "PT Aksamedia Mulia Digital",
    companyUrl: "https://aksamedia.co.id/",
    role: "Mobile Developer",
    period: "Sep 2024 - Dec 2024",
    description:
      "As a Mobile Developer intern at PT Aksamedia Mulia Digital, I focus on developing and maintaining cross-platform mobile applications. My role involves collaborating with a team to create innovative solutions, following best practices in the mobile development lifecycle, and continuously improving my skills in Flutter.",
    images: aksamediaImages,
  },
  {
    company: "Poliban English Community (Policy)",
    companyUrl:
      "https://www.linkedin.com/company/poliban-english-community-policy/",
    role: "Core Team",
    period: "Oct 2023 - Aug 2024",
    description:
      "As a core member of the Poliban English Community, I actively participate in both the Speech and Newscasting divisions. My involvement here allows me to enhance my English language proficiency, particularly in public speaking and newscasting. Through these activities, I have not only improved my speaking skills but also developed strong organizational abilities, contributing to the planning and execution of various community events and programs.",
    images: policyImages,
  },
  {
    company: "Masjid Muhammadiyah Sungai Miai",
    companyUrl: "https://www.youtube.com/@masjidmuhammadiyahsungaimiai",
    role: "Streaming Operator - Youth of the Mosque",
    period: "Jan 2023 - Apr 2025",
    description:
      "As a member of the Youth of the Mosque at Masjid Muhammadiyah Sungai Miai Banjarmasin, I serve as a streaming operator, ensuring that our community can connect and engage with Islamic lectures and other mosque activities online.",
    images: muhammadiyahImages,
  },
  {
    company: "iTech Poliban",
    companyUrl: "https://www.linkedin.com/company/itech-poliban/",
    role: "Senior Member",
    period: "Sep 2022 - Aug 2024",
    description:
      "As a senior member of iTech Poliban, an IT-focused community at my college, I’ve had the privilege of contributing to both education and competition initiatives. My role involves teaching and mentoring students, particularly in programming, especially web development, helping them build strong technical foundations.",
    images: iTechImages,
  },
];
