import type { ComponentType, SVGProps } from "react";
import {
  SiBootstrap,
  SiBootstrapHex,
  SiCapacitor,
  SiCapacitorHex,
  SiDart,
  SiDartHex,
  SiDocker,
  SiDockerHex,
  SiDrizzle,
  SiDrizzleHex,
  SiExpo,
  SiExpoHex,
  SiFastapi,
  SiFastapiHex,
  SiFastify,
  SiFastifyHex,
  SiFirebase,
  SiFirebaseHex,
  SiFlask,
  SiFlaskHex,
  SiFlutter,
  SiFlutterHex,
  SiGooglegemini,
  SiGooglegeminiHex,
  SiLaravel,
  SiLaravelHex,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiOpenapiinitiative,
  SiOpenapiinitiativeHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPython,
  SiPythonHex,
  SiRedis,
  SiRedisHex,
  SiReact,
  SiReactHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiSvelte,
  SiSvelteHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiUbuntu,
  SiUbuntuHex,
  SiVercel,
  SiVercelHex,
  SiVite,
  SiViteHex,
  SiVitest,
  SiVitestHex,
  SiZod,
  SiZodHex,
  SiXendit,
  SiXenditHex,
} from "@icons-pack/react-simple-icons";

export type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & {
    color?: string;
    size?: string | number;
    title?: string;
  }
>;

export type IconData = {
  light: string;
  dark: string;
} & (
  | {
      type: "component";
      icon: IconComponent;
    }
  | {
      type: "custom";
      icon: string;
    }
);

export type Tech = {
  label: string;
  url: string;
  icon: IconData;
};

const componentIcon = (
  icon: IconComponent,
  light: string,
  dark = light,
): IconData => ({ type: "component", icon, light, dark });

const svgIcon = (svg: string, light: string, dark = light): IconData => ({
  type: "custom",
  icon: svg,
  light,
  dark,
});

const opencodeSvg =
  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>OpenCode</title><path d="M22 24H2V0h20zM17 4.8H7v14.4h10z"/></svg>';

export const techs = {
  react: {
    label: "React",
    url: "https://react.dev/",
    icon: componentIcon(SiReact, SiReactHex),
  },
  reactNative: {
    label: "React Native",
    url: "https://reactnative.dev/",
    icon: componentIcon(SiReact, SiReactHex),
  },
  nextjs: {
    label: "Next.js",
    url: "https://nextjs.org/",
    icon: componentIcon(SiNextdotjs, SiNextdotjsHex, "#FFFFFF"),
  },
  svelte: {
    label: "Svelte+Kit",
    url: "https://svelte.dev/",
    icon: componentIcon(SiSvelte, SiSvelteHex),
  },
  tailwindcss: {
    label: "Tailwind",
    url: "https://tailwindcss.com/",
    icon: componentIcon(SiTailwindcss, SiTailwindcssHex),
  },
  shadcnui: {
    label: "Shadcn",
    url: "https://ui.shadcn.com/",
    icon: componentIcon(SiShadcnui, SiShadcnuiHex, "#FFFFFF"),
  },
  zod: {
    label: "Zod",
    url: "https://zod.dev/",
    icon: componentIcon(SiZod, SiZodHex),
  },
  openapi: {
    label: "OpenAPI",
    url: "https://www.openapis.org/",
    icon: componentIcon(SiOpenapiinitiative, SiOpenapiinitiativeHex),
  },
  vitest: {
    label: "Vitest",
    url: "https://vitest.dev/",
    icon: componentIcon(SiVitest, SiVitestHex),
  },
  drizzle: {
    label: "Drizzle",
    url: "https://orm.drizzle.team/",
    icon: componentIcon(SiDrizzle, "#EA4C46", SiDrizzleHex),
  },
  postgresql: {
    label: "Postgres",
    url: "https://postgresql.org/",
    icon: componentIcon(SiPostgresql, SiPostgresqlHex),
  },
  redis: {
    label: "Redis",
    url: "https://redis.io/",
    icon: componentIcon(SiRedis, SiRedisHex),
  },
  docker: {
    label: "Docker",
    url: "https://docker.com/",
    icon: componentIcon(SiDocker, SiDockerHex),
  },
  ubuntu: {
    label: "Ubuntu",
    url: "https://ubuntu.com/",
    icon: componentIcon(SiUbuntu, SiUbuntuHex),
  },
  vercel: {
    label: "Vercel",
    url: "https://vercel.com/",
    icon: componentIcon(SiVercel, SiVercelHex, "#FFFFFF"),
  },
  opencode: {
    label: "OpenCode",
    url: "https://opencode.ai/",
    icon: svgIcon(opencodeSvg, "#0B0B0B", "#FFFFFF"),
  },
  geminiApi: {
    label: "Gemini API",
    url: "https://ai.google.dev/gemini-api",
    icon: componentIcon(SiGooglegemini, SiGooglegeminiHex),
  },
  midtrans: {
    label: "Midtrans",
    url: "https://midtrans.com/",
    icon: componentIcon(SiXendit, SiXenditHex),
  },
  flutter: {
    label: "Flutter",
    url: "https://flutter.dev/",
    icon: componentIcon(SiFlutter, SiFlutterHex),
  },
  dart: {
    label: "Dart",
    url: "https://dart.dev/",
    icon: componentIcon(SiDart, SiDartHex),
  },
  python: {
    label: "Python",
    url: "https://www.python.org/",
    icon: componentIcon(SiPython, SiPythonHex),
  },
  expo: {
    label: "Expo",
    url: "https://expo.dev/",
    icon: componentIcon(SiExpo, SiExpoHex, "#FFFFFF"),
  },
  fastify: {
    label: "Fastify",
    url: "https://fastify.dev/",
    icon: componentIcon(SiFastify, SiFastifyHex, "#FFFFFF"),
  },
  flask: {
    label: "Flask",
    url: "https://flask.palletsprojects.com/",
    icon: componentIcon(SiFlask, SiFlaskHex),
  },
  mongodb: {
    label: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: componentIcon(SiMongodb, SiMongodbHex),
  },
  firebase: {
    label: "Firebase",
    url: "https://firebase.google.com/",
    icon: componentIcon(SiFirebase, SiFirebaseHex),
  },
  fastapi: {
    label: "FastAPI",
    url: "https://fastapi.tiangolo.com/",
    icon: componentIcon(SiFastapi, SiFastapiHex),
  },
  bootstrap: {
    label: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: componentIcon(SiBootstrap, SiBootstrapHex),
  },
  mysql: {
    label: "MySQL",
    url: "https://mysql.com/",
    icon: componentIcon(SiMysql, SiMysqlHex, "#F29111"),
  },
  laravel: {
    label: "Laravel",
    url: "https://laravel.com/",
    icon: componentIcon(SiLaravel, SiLaravelHex),
  },
  vite: {
    label: "Vite",
    url: "https://vite.dev/",
    icon: componentIcon(SiVite, SiViteHex),
  },
  capacitor: {
    label: "Capacitor",
    url: "https://capacitorjs.com/",
    icon: componentIcon(SiCapacitor, SiCapacitorHex),
  },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof techs;
