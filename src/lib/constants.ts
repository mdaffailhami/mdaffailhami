import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AwardIcon,
  MailIcon,
} from "lucide-react";

import {
  SiDocker,
  SiGithub,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiLinkedin,
  SiX,
  SiInstagram,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

export const navs: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  hash: string;
}[] = [
  { label: "Home", Icon: HomeIcon, hash: "#home" }, // Hash will be removed when active
  { label: "About", Icon: UserIcon, hash: "#about" },
  { label: "Projects", Icon: BriefcaseIcon, hash: "#projects" },
  { label: "Experience", Icon: AwardIcon, hash: "#experience" },
  { label: "Contact", Icon: MailIcon, hash: "#contact" },
];

export const socialMedia: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: {
    light: string;
    dark: string;
  };
}[] = [
  {
    label: "GitHub",
    Icon: SiGithub,
    url: "https://github.com/mdaffailhami",
    color: {
      light: "#181717",
      dark: "#FFFFFF",
    },
  },
  {
    label: "LinkedIn",
    Icon: SiLinkedin,
    url: "https://linkedin.com/in/mdaffailhami",
    color: {
      light: "#0A66C2",
      dark: "#0A66C2",
    },
  },
  {
    label: "X",
    Icon: SiX,
    url: "https://x.com/mdaffailhami",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  {
    label: "Instagram",
    Icon: SiInstagram,
    url: "https://instagram.com/mdaffailhami",
    color: {
      light: "#E4405F",
      dark: "#E4405F",
    },
  },
];

export type Technology = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: {
    light: string;
    dark: string;
  };
};

export const technologies: Technology[] = [
  {
    label: "React",
    Icon: SiReact,
    color: {
      light: "#61DAFB",
      dark: "#61DAFB",
    },
  },
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  {
    label: "TypeScript",
    Icon: SiTypescript,
    color: {
      light: "#3178C6",
      dark: "#3178C6",
    },
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: {
      light: "#06B6D4",
      dark: "#06B6D4",
    },
  },
  {
    label: "Shadcn UI",
    Icon: SiShadcnui,
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  {
    label: "Prisma",
    Icon: SiPrisma,
    color: {
      light: "#2D3748",
      dark: "#5A67D8",
    },
  },
  {
    label: "PostgreSQL",
    Icon: BiLogoPostgresql,
    color: {
      light: "#0064a5",
      dark: "#008bb9",
    },
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    color: {
      light: "#181717",
      dark: "#FFFFFF",
    },
  },
  {
    label: "Docker",
    Icon: SiDocker,
    color: {
      light: "#2496ED",
      dark: "#2496ED",
    },
  },
  {
    label: "Ubuntu",
    Icon: SiUbuntu,
    color: {
      light: "#E95420",
      dark: "#E95420",
    },
  },
];

export type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  technologies: Technology[];
  buttons: {
    type: "github" | "project" | "custom";
    label: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

export type Experience = {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  images: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    companyUrl: "https://techinnovations.com",
    role: "Senior Full-Stack Developer",
    period: "2023 - Present",
    description:
      "Leading development of scalable web applications using modern tech stack. Mentoring junior developers and architecting system designs.",
    images: ["/placeholder-project.jpg", "/placeholder-project-2.jpg"],
  },
  {
    company: "Digital Solutions Co.",
    companyUrl: "https://digitalsolutions.com",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    description:
      "Built and maintained multiple client projects using React, Node.js, and cloud infrastructure. Improved application performance by 40%.",
    images: ["/placeholder-project-2.jpg", "/placeholder-project-3.jpg"],
  },
  {
    company: "Creative Agency",
    companyUrl: "https://creativeagency.com",
    role: "Frontend Developer",
    period: "2020 - 2021",
    description:
      "Developed responsive web applications and landing pages. Collaborated with design team to implement pixel-perfect UI components.",
    images: ["/placeholder-project-3.jpg", "/placeholder-project.jpg"],
  },
  // {
  //   company: "StartUp Labs",
  //   role: "Junior Developer",
  //   period: "2019 - 2020",
  //   description:
  //     "Assisted in building MVP products for various startups. Gained experience in agile development and rapid prototyping.",
  //   image: "/placeholder-project-4.jpg",
  //   technologies: [
  //     {
  //       label: "React",
  //       Icon: SiReact,
  //       color: { light: "#61DAFB", dark: "#61DAFB" },
  //     },
  //     {
  //       label: "GitHub",
  //       Icon: SiGithub,
  //       color: { light: "#181717", dark: "#FFFFFF" },
  //     },
  //   ],
  // },
];

export const projects: Project[] = [
  // Sample project data - replace with actual projects
  {
    title: "Sample Project 1",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 2",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 3",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 4",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 5",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 6",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 7",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 8",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 9",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
  {
    title: "Sample Project 10",
    shortDescription:
      "A brief description of the project that appears on the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    longDescription:
      "A more detailed description of the project that appears in the dialog. This can be much longer and provide more context about the project, its goals, challenges, and outcomes.",
    images: [
      "/placeholder-project.jpg",
      "/placeholder-project-2.jpg",
      "/placeholder-project-3.jpg",
    ],
    technologies: [
      {
        label: "React",
        Icon: SiReact,
        color: { light: "#61DAFB", dark: "#61DAFB" },
      },
      {
        label: "Next.js",
        Icon: SiNextdotjs,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "Shadcn UI",
        Icon: SiShadcnui,
        color: { light: "#000000", dark: "#FFFFFF" },
      },
      {
        label: "TypeScript",
        Icon: SiTypescript,
        color: { light: "#3178C6", dark: "#3178C6" },
      },
      {
        label: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: { light: "#06B6D4", dark: "#06B6D4" },
      },
    ],
    buttons: [
      {
        type: "github",
        label: "View on GitHub",
        url: "https://github.com/username/project",
      },
      {
        type: "project",
        label: "Open Project",
        url: "https://project-demo.com",
      },
    ],
  },
];
