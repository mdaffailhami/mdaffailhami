import type { StaticImageData } from "next/image";
import { techs, type Tech } from "./techs";
import { images as glosiaImages } from "@/lib/assets/projects/glosia";
import { images as secretmakerImages } from "@/lib/assets/projects/secretmaker";
import { images as cryptoshariaImages } from "@/lib/assets/projects/cryptosharia";
import { images as mdaffailhamiImages } from "@/lib/assets/projects/mdaffailhami";
import { images as cimsaUlmImages } from "@/lib/assets/projects/cimsa-ulm";
import { images as mdiTodoImages } from "@/lib/assets/projects/mdi-todo";
import { images as balabuhImages } from "@/lib/assets/projects/balabuh";
import { images as gaskuImages } from "@/lib/assets/projects/gasku";
import { images as nasiIgutHanImages } from "@/lib/assets/projects/nasi-igut-han";
import { images as marketkuImages } from "@/lib/assets/projects/marketku";

export type Project = {
  title: string;
  description: string;
  start: Date;
  end: Date | null;
  images: StaticImageData[];
  links: {
    type: "github" | "website" | "download" | "other";
    url: string;
    label: string;
    icon?: string;
  }[];
  techs: Tech[];
  order?: number;
};

export const projects: Project[] = [
  {
    title: "Glosia",
    description:
      "Glosia is an AI chatbot SaaS platform for customer service that can be embedded into any website with a single line of code. It uses a Retrieval-Augmented Generation (RAG) architecture so responses are grounded strictly in the business owner's uploaded knowledge base, with full citations to minimize hallucinations. The knowledge base supports PDF, URL, and plain text inputs.",
    start: new Date("2026-04-25"),
    end: null,
    images: glosiaImages,
    techs: [
      techs.svelte,
      techs.geminiApi,
      techs.midtrans,
      techs.tailwindcss,
      techs.postgresql,
      techs.drizzle,
      techs.zod,
    ],
    links: [
      {
        type: "website",
        label: "Website",
        url: "https://glosia.biz.id",
      },
    ],
    order: 1,
  },
  {
    title: "SecretMaker",
    description:
      "Client-side encryption utility with a PIN-locked key. The app encrypts and decrypts text directly in the browser or on Android using AES-GCM + PBKDF2; no server, no data leaves the device. The encryption key is wrapped with a PIN and stored in localStorage, unlocked only when the correct PIN is entered. Available on Web, PWA, and Android.",
    start: new Date("2026-02-01"),
    end: null,
    images: secretmakerImages,
    techs: [techs.svelte, techs.tailwindcss, techs.capacitor, techs.vite],
    links: [
      {
        type: "website",
        label: "Website",
        url: "https://secretmaker.vercel.app",
      },
      {
        type: "download",
        label: "APK",
        url: "https://github.com/mdaffailhami/secretmaker/releases",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/secretmaker",
      },
    ],
    order: 3,
  },
  {
    title: "CryptoSharia",
    description:
      "CryptoSharia is a multi-web platform ecosystem for an Islamic crypto community, consisting of a company profile, media platform (news, education, research), admin dashboard, and a centralized API serving as the backbone of the entire ecosystem. Designed with a centralized architecture so every web can access data consistently through a single source of truth. I built the centralized API and company profile website, designing the PostgreSQL schema from scratch and implementing custom authentication.",
    start: new Date("2025-09-01"),
    end: null,
    images: cryptoshariaImages,
    techs: [
      techs.svelte,
      techs.tailwindcss,
      techs.postgresql,
      techs.zod,
      techs.drizzle,
      techs.openapi,
    ],
    links: [
      {
        type: "website",
        label: "Website",
        url: "https://cryptosharia.id/",
      },
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/cryptosharia/",
      },
    ],
    order: 2,
  },
  {
    title: "Daffa's Portfolio",
    description:
      "My personal portfolio website built with Next.js App Router, using static content for optimal performance. Designed to showcase my professional profile, projects, and experience.",
    start: new Date("2021-02-01"),
    end: null,
    images: mdaffailhamiImages,
    techs: [techs.react, techs.tailwindcss, techs.shadcnui, techs.nextjs],
    links: [
      {
        type: "website",
        label: "Website",
        url: "https://dev.mdaffailhami.my.id/",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/mdaffailhami/",
      },
    ],
    order: 4,
  },
  {
    title: "CIMSA ULM",
    description:
      "The CIMSA ULM Profile Website is a digital platform introducing the CIMSA organization to the public. I built the frontend using React + Vite with a fully responsive UI across devices, and integrated it with a REST API developed in Laravel by my partner.",
    start: new Date("2024-12-01"),
    end: new Date("2025-02-01"),
    images: cimsaUlmImages,
    techs: [
      techs.react,
      techs.bootstrap,
      techs.laravel,
      techs.mysql,
      techs.vite,
    ],
    links: [
      {
        type: "website",
        label: "Website",
        url: "https://cimsa.ulm.ac.id/",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/cimsa-ulm",
      },
    ],
    order: 5,
  },
  {
    title: "MDI Todo",
    description:
      "MDI Todo that was developed using Flutter helps you stay organized and on top of your tasks. With MDI Todo, you can create a list of tasks, set deadlines, and mark tasks as completed when you're done.",
    start: new Date("2024-08-01"),
    end: new Date("2024-12-1"),
    images: mdiTodoImages,
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "download",
        label: "Download",
        url: "https://github.com/mdaffailhami/mdi-todo/releases",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/mdi-todo",
      },
    ],
  },
  {
    title: "Balabuh",
    description:
      "Balabuh is a travel booking application designed to modernize the traditional and fraud-prone travel reservation system. Instead of contacting travel services through WhatsApp or personal connections, users can now explore and book various travel services within a single platform — similar to a marketplace like Shopee, but specifically for travel transportation. I didn't build this project alone, but with my friend Bhakti Ramadhani, who worked on the backend using Fastify & MySQL.",
    start: new Date("2025-03-01"),
    end: new Date("2025-10-1"),
    images: balabuhImages,
    techs: [techs.reactNative, techs.fastify, techs.mysql, techs.expo],
    links: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/balabuh",
      },
    ],
    order: 6,
  },
  {
    title: "GasKu",
    description:
      "GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia. GasKu was created to be exhibited in the KMIPN VI competition for the E-Government category which was held in July 2024 at the Jakarta State Polytechnic (The University of Indonesia).",
    start: new Date("2024-05-01"),
    end: new Date("2024-06-01"),
    images: gaskuImages,
    techs: [
      techs.flutter,
      techs.fastapi,
      techs.mongodb,
      techs.python,
      techs.dart,
    ],
    links: [
      {
        type: "github",
        label: "Frontend Source",
        url: "https://github.com/mdaffailhami/gasku",
      },
      {
        type: "github",
        label: "Backend Source",
        url: "https://github.com/mdaffailhami/gasku_server",
      },
    ],
  },
  {
    title: "Nasi Igut Han",
    description:
      "Nasi Igut Han is a business specializing in selling rice balls. This information system was made in order to improve efficiency in sales operations and business management, as well as to expand market reach by allowing Riceball orders to be placed online.",
    start: new Date("2023-12-01"),
    end: new Date("2024-01-01"),
    images: nasiIgutHanImages,
    techs: [
      techs.flutter,
      techs.flask,
      techs.mongodb,
      techs.python,
      techs.dart,
    ],
    links: [
      {
        type: "github",
        label: "Frontend Source",
        url: "https://github.com/mdaffailhami/nasi_igut_han",
      },
      {
        type: "github",
        label: "Backend Source",
        url: "https://github.com/mdaffailhami/nasi_igut_han_server",
      },
    ],
  },
  {
    title: "MarketKu",
    description:
      "MarketKu is an e-commerce application that I created using the Flutter framework and Firebase technology. It is designed to provide a seamless and convenient shopping experience for customers who want to buy products and services online. With its user-friendly interface and advanced features, MarketKu is an excellent platform for people who want to sell their goods and services online.",
    start: new Date("2022-11-01"),
    end: new Date("2022-11-01"),
    images: marketkuImages,
    techs: [techs.flutter, techs.firebase, techs.dart],
    links: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/marketku",
      },
    ],
  },
];

export const orderedProjects = [...projects].sort((a, b) => {
  const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;
  return (b.end?.getTime() ?? Infinity) - (a.end?.getTime() ?? Infinity);
});
