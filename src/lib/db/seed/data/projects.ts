import { techs, TechInsert } from "./techs";
import { projectsTable } from "../../schema";

export type ProjectInsert = typeof projectsTable.$inferInsert & {
  techs: TechInsert[];
};

export const projects: ProjectInsert[] = [
  {
    title: "CryptoSharia",
    description:
      "CryptoSharia is an Islamic-based crypto education platform that bridges Web3 innovation with Sharia principles. It was created to help the Muslim community understand, analyze, and invest in crypto assets ethically and responsibly.",
    start: new Date("2025-06-01"),
    end: null,
    images: ["https://picsum.photos/seed/cryptosharia/800/450"],
    techs: [techs.svelte, techs.supabase, techs.tailwindcss],
    links: [
      {
        type: "website",
        label: "Official Website",
        url: "https://www.cryptosharia.id/",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/cryptosharia/cryptosharia/",
      },
    ],
    order: 2,
  },
  {
    title: "Daffa's Portfolio (v3)",
    description:
      "My personal web developed using React was designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    start: new Date("2024-12-01"),
    end: null,
    images: ["https://picsum.photos/seed/portfoliov3/800/450"],
    techs: [techs.react, techs.nextjs, techs.tailwindcss, techs.shadcnui],
    links: [
      {
        type: "website",
        label: "Live Demo",
        url: "https://dev.mdaffailhami.my.id/",
      },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/mdaffailhami/",
      },
    ],
    order: 1,
  },
  {
    title: "CIMSA ULM",
    description:
      "The CIMSA ULM Profile Website is a digital platform designed to introduce the CIMSA organization of Lambung Mangkurat University to the public and facilitate internal information management. This was a collaborative project with my friend Dzakiy Dzakwan; he handled the backend using Laravel & MySQL, while I developed the frontend with React.js & Bootstrap and integrated the REST API.",
    start: new Date("2025-01-01"),
    end: new Date("2025-02-28"),
    images: ["https://picsum.photos/seed/cimsaulm/800/450"],
    techs: [techs.react, techs.bootstrap, techs.laravel, techs.mysql],
    links: [
      {
        type: "website",
        label: "CIMSA ULM Website",
        url: "https://cimsa.ulm.ac.id/",
      },
      {
        type: "github",
        label: "Frontend Source",
        url: "https://github.com/mdaffailhami/cimsa-ulm",
      },
    ],
  },
  {
    title: "Daffa's Portfolio (v2)",
    description:
      "My personal web developed using Flutter was designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    start: new Date("2023-01-01"),
    end: new Date("2023-12-31"),
    images: ["https://picsum.photos/seed/portfoliov2/800/450"],
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "website",
        label: "V2 Portfolio",
        url: "https://mdaffailhami.my.id",
      },
      {
        type: "github",
        label: "Source Code (V2 Branch)",
        url: "https://github.com/mdaffailhami/mdaffailhami/tree/main/v2",
      },
    ],
  },
  {
    title: "MDI Todo",
    description:
      "MDI Todo that was developed using Flutter helps you stay organized and on top of your tasks. With MDI Todo, you can create a list of tasks, set deadlines, and mark tasks as completed when you're done.",
    start: new Date("2022-01-01"),
    end: new Date("2022-06-30"),
    images: ["https://picsum.photos/seed/mditodo/800/450"],
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "download",
        label: "Get Releases",
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
    start: new Date("2024-09-01"),
    end: new Date("2024-12-31"),
    images: ["https://picsum.photos/seed/balabuh/800/450"],
    techs: [techs.reactNative, techs.expo, techs.fastify, techs.mysql],
    links: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/balabuh",
      },
    ],
    order: 3,
  },
  {
    title: "GasKu",
    description:
      "GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia. GasKu was created to be exhibited in the KMIPN VI competition for the E-Government category which was held in July 2024 at the Jakarta State Polytechnic (The University of Indonesia).",
    start: new Date("2024-06-01"),
    end: new Date("2024-07-31"),
    images: ["https://picsum.photos/seed/gasku/800/450"],
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
    start: new Date("2024-01-01"),
    end: new Date("2024-05-31"),
    images: ["https://picsum.photos/seed/nasiiguthan/800/450"],
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
    start: new Date("2022-01-01"),
    end: new Date("2022-12-31"),
    images: ["https://picsum.photos/seed/marketku/800/450"],
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
