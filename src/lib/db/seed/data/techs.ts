import { techsTable } from "../../schema";

export type TechInsert = typeof techsTable.$inferInsert;

const placeholderSvg =
  '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path></svg>';

export const techs: Record<string, TechInsert> = {
  react: {
    label: "React",
    url: "https://react.dev/",
    icon: {
      light: "#61DAFB",
      dark: "#61DAFB",
      svg: placeholderSvg,
    },
  },
  reactNative: {
    label: "React Native",
    url: "https://reactnative.dev/",
    icon: {
      light: "#61DAFB",
      dark: "#61DAFB",
      svg: placeholderSvg,
    },
  },
  nextjs: {
    label: "Next.js",
    url: "https://nextjs.org/",
    icon: {
      light: "#000000",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  svelte: {
    label: "Svelte",
    url: "https://svelte.dev/",
    icon: {
      light: "#FF3E00",
      dark: "#FF3E00",
      svg: placeholderSvg,
    },
  },
  typescript: {
    label: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: {
      light: "#3178C6",
      dark: "#3178C6",
      svg: placeholderSvg,
    },
  },
  tailwindcss: {
    label: "Tailwind",
    url: "https://tailwindcss.com/",
    icon: {
      light: "#06B6D4",
      dark: "#06B6D4",
      svg: placeholderSvg,
    },
  },
  shadcnui: {
    label: "Shadcn",
    url: "https://ui.shadcn.com/",
    icon: {
      light: "#000000",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  prisma: {
    label: "Prisma",
    url: "https://prisma.io/",
    icon: {
      light: "#2D3748",
      dark: "#5A67D8",
      svg: placeholderSvg,
    },
  },
  drizzle: {
    label: "Drizzle",
    url: "https://orm.drizzle.team/",
    icon: {
      light: "#EA4C46",
      dark: "#C5F74F",
      svg: placeholderSvg,
    },
  },
  postgresql: {
    label: "Postgres",
    url: "https://postgresql.org/",
    icon: {
      light: "#0064a5",
      dark: "#008bb9",
      svg: placeholderSvg,
    },
  },
  figma: {
    label: "Figma",
    url: "https://figma.com/",
    icon: {
      light: "#ff3737",
      dark: "#ff3737",
      svg: placeholderSvg,
    },
  },
  github: {
    label: "GitHub",
    url: "https://github.com/",
    icon: {
      light: "#181717",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  docker: {
    label: "Docker",
    url: "https://docker.com/",
    icon: {
      light: "#2496ED",
      dark: "#2496ED",
      svg: placeholderSvg,
    },
  },
  ubuntu: {
    label: "Ubuntu",
    url: "https://ubuntu.com/",
    icon: {
      light: "#E95420",
      dark: "#E95420",
      svg: placeholderSvg,
    },
  },
  vercel: {
    label: "Vercel",
    url: "https://vercel.com/",
    icon: {
      light: "#000000",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  supabase: {
    label: "Supabase",
    url: "https://supabase.com/",
    icon: {
      light: "#34B27B",
      dark: "#34B27B",
      svg: placeholderSvg,
    },
  },
  gemini: {
    label: "Gemini",
    url: "https://gemini.google/about/",
    icon: {
      light: "#4285F4",
      dark: "#4285F4",
      svg: placeholderSvg,
    },
  },
  antigravity: {
    label: "Antigravity",
    url: "https://antigravity.google/",
    icon: {
      light: "#4285F4",
      dark: "#4285F4",
      svg: placeholderSvg,
    },
  },
  flutter: {
    label: "Flutter",
    url: "https://flutter.dev/",
    icon: {
      light: "#02569B",
      dark: "#02569B",
      svg: placeholderSvg,
    },
  },
  dart: {
    label: "Dart",
    url: "https://dart.dev/",
    icon: {
      light: "#0175C2",
      dark: "#0175C2",
      svg: placeholderSvg,
    },
  },
  python: {
    label: "Python",
    url: "https://www.python.org/",
    icon: {
      light: "#3776AB",
      dark: "#3776AB",
      svg: placeholderSvg,
    },
  },
  expo: {
    label: "Expo",
    url: "https://expo.dev/",
    icon: {
      light: "#000020",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  fastify: {
    label: "Fastify",
    url: "https://fastify.dev/",
    icon: {
      light: "#000000",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  flask: {
    label: "Flask",
    url: "https://flask.palletsprojects.com/",
    icon: {
      light: "#000000",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
  },
  mongodb: {
    label: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: {
      light: "#47A248",
      dark: "#47A248",
      svg: placeholderSvg,
    },
  },
  firebase: {
    label: "Firebase",
    url: "https://firebase.google.com/",
    icon: {
      light: "#FFCA28",
      dark: "#FFCA28",
      svg: placeholderSvg,
    },
  },
  fastapi: {
    label: "FastAPI",
    url: "https://fastapi.tiangolo.com/",
    icon: {
      light: "#009688",
      dark: "#009688",
      svg: placeholderSvg,
    },
  },
  bootstrap: {
    label: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: {
      light: "#8312FA",
      dark: "#8312FA",
      svg: placeholderSvg,
    },
  },
  mysql: {
    label: "MySQL",
    url: "https://mysql.com/",
    icon: {
      light: "#0075BF",
      dark: "#0075BF",
      svg: placeholderSvg,
    },
  },
  laravel: {
    label: "Laravel",
    url: "https://laravel.com/",
    icon: {
      light: "#F05340",
      dark: "#F05340",
      svg: placeholderSvg,
    },
  },
};
