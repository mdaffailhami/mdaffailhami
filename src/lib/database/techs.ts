import { Tech } from "@/lib/types/database";

import { GoogleAntigravityIcon } from "@/assets/icons";
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
  SiFlutter,
  SiDart,
  SiPython,
  SiExpo,
  SiFastify,
  SiFlask,
  SiMongodb,
  SiFirebase,
  SiFastapi,
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
    url: "https://prisma.io/",
    color: {
      light: "#2D3748",
      dark: "#5A67D8",
    },
  },
  postgresql: {
    label: "Postgres",
    icon: BiLogoPostgresql,
    url: "https://postgresql.org/",
    color: {
      light: "#0064a5",
      dark: "#008bb9",
    },
  },
  figma: {
    label: "Figma",
    icon: SiFigma,
    url: "https://figma.com/",
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
    url: "https://docker.com/",
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
  flutter: {
    label: "Flutter",
    icon: SiFlutter,
    url: "https://flutter.dev/",
    color: {
      light: "#02569B",
      dark: "#02569B",
    },
  },
  dart: {
    label: "Dart",
    icon: SiDart,
    url: "https://dart.dev/",
    color: {
      light: "#0175C2",
      dark: "#0175C2",
    },
  },
  python: {
    label: "Python",
    icon: SiPython,
    url: "https://www.python.org/",
    color: {
      light: "#3776AB",
      dark: "#3776AB",
    },
  },
  expo: {
    label: "Expo",
    icon: SiExpo,
    url: "https://expo.dev/",
    color: {
      light: "#000020",
      dark: "#FFFFFF",
    },
  },
  fastify: {
    label: "Fastify",
    icon: SiFastify,
    url: "https://fastify.dev/",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  flask: {
    label: "Flask",
    icon: SiFlask,
    url: "https://flask.palletsprojects.com/",
    color: {
      light: "#000000",
      dark: "#FFFFFF",
    },
  },
  mongodb: {
    label: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
    color: {
      light: "#47A248",
      dark: "#47A248",
    },
  },
  firebase: {
    label: "Firebase",
    icon: SiFirebase,
    url: "https://firebase.google.com/",
    color: {
      light: "#FFCA28",
      dark: "#FFCA28",
    },
  },
  fastapi: {
    label: "FastAPI",
    icon: SiFastapi,
    url: "https://fastapi.tiangolo.com/",
    color: {
      light: "#009688",
      dark: "#009688",
    },
  },
};
