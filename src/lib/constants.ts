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
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

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

export const tools = [
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
    Icon: SiPostgresql,
    color: {
      light: "#4169E1",
      dark: "#4169E1",
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
