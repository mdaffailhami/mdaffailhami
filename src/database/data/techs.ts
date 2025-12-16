import { Tech } from "@/database/schema";

import GoogleAntigravityIcon from "@/assets/icons/antigravity";
import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGooglegemini,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const techs: Record<string, Tech> = {
  react: {
    label: "React",
    icon: SiReact,
    url: "https://react.dev/",
    color: {
      light: "#61DAFB",
      dark: "#61DAFB",
    },
  },
  nextjs: {
    label: "Next.js",
    icon: SiNextdotjs,
    url: "https://nextjs.org/",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  svelte: {
    label: "Svelte",
    icon: SiSvelte,
    url: "https://svelte.dev/",
    color: {
      light: "#FF3E00",
      dark: "#FF3E00",
    },
  },
  typescript: {
    label: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
    color: {
      light: "#3178C6",
      dark: "#3178C6",
    },
  },
  tailwindcss: {
    label: "Tailwind",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
    color: {
      light: "#06B6D4",
      dark: "#06B6D4",
    },
  },
  shadcnui: {
    label: "Shadcn",
    icon: SiShadcnui,
    url: "https://ui.shadcn.com/",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  prisma: {
    label: "Prisma",
    icon: SiPrisma,
    url: "https://www.prisma.io/",
    color: {
      light: "#2D3748",
      dark: "#5A67D8",
    },
  },
  postgresql: {
    label: "Postgres",
    icon: BiLogoPostgresql,
    url: "https://www.postgresql.org/",
    color: {
      light: "#0064a5",
      dark: "#008bb9",
    },
  },
  figma: {
    label: "Figma",
    icon: SiFigma,
    url: "https://www.figma.com/",
    color: {
      light: "#ff3737",
      dark: "#ff3737",
    },
  },
  github: {
    label: "GitHub",
    icon: SiGithub,
    url: "https://github.com/",
    color: {
      light: "#181717",
      dark: "#FFFFFF",
    },
  },
  docker: {
    label: "Docker",
    icon: SiDocker,
    url: "https://www.docker.com/",
    color: {
      light: "#2496ED",
      dark: "#2496ED",
    },
  },
  ubuntu: {
    label: "Ubuntu",
    icon: SiUbuntu,
    url: "https://ubuntu.com/",
    color: {
      light: "#E95420",
      dark: "#E95420",
    },
  },
  vercel: {
    label: "Vercel",
    icon: SiVercel,
    url: "https://vercel.com/",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  supabase: {
    label: "Supabase",
    icon: SiSupabase,
    url: "https://supabase.com/",
    color: {
      light: "#34B27B",
      dark: "#34B27B",
    },
  },
  gemini: {
    label: "Gemini",
    icon: SiGooglegemini,
    url: "https://gemini.google/about/",
    color: {
      light: "#4285F4",
      dark: "#4285F4",
    },
  },
  antigravity: {
    label: "Antigravity",
    icon: GoogleAntigravityIcon,
    url: "https://antigravity.google/",
    color: {
      light: "#4285F4",
      dark: "#4285F4",
    },
  },
};
