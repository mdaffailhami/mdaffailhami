import { techsTable } from "../../schema";

export type TechInsert = typeof techsTable.$inferInsert;

export const techs: Record<string, TechInsert> = {
  svelte: {
    label: "Svelte",
    url: "https://svelte.dev/",
    icon: {
      light: "https://cdn.simpleicons.org/svelte/FF3E00",
      dark: "https://cdn.simpleicons.org/svelte/FF3E00",
    },
  },
  react: {
    label: "React",
    url: "https://react.dev/",
    icon: {
      light: "https://cdn.simpleicons.org/react/61DAFB",
      dark: "https://cdn.simpleicons.org/react/61DAFB",
    },
  },
  nextjs: {
    label: "Next.js",
    url: "https://nextjs.org/",
    icon: {
      light: "https://cdn.simpleicons.org/nextdotjs/000000",
      dark: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    },
  },
  tailwindcss: {
    label: "Tailwind",
    url: "https://tailwindcss.com/",
    icon: {
      light: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      dark: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
  },
  typescript: {
    label: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: {
      light: "https://cdn.simpleicons.org/typescript/3178C6",
      dark: "https://cdn.simpleicons.org/typescript/3178C6",
    },
  },
  postgresql: {
    label: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: {
      light: "https://cdn.simpleicons.org/postgresql/4169E1",
      dark: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
  },
  drizzle: {
    label: "Drizzle",
    url: "https://orm.drizzle.team/",
    icon: {
      light: "https://cdn.simpleicons.org/drizzle/C5F74F",
      dark: "https://cdn.simpleicons.org/drizzle/C5F74F",
    },
  },
};
