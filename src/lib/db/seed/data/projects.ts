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
    start: new Date("2025-09-01"),
    end: null,
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cryptosharia/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cryptosharia/image-2.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cryptosharia/image-3.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cryptosharia/image-4.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cryptosharia/image-5.jpeg",
    ],
    techs: [techs.svelte, techs.tailwindcss, techs.postgresql, techs.supabase],
    links: [
      {
        type: "website",
        label: "Website",
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
    title: "Daffa's Portfolio",
    description:
      "My personal web developed using React was designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    start: new Date("2021-02-01"),
    end: null,
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdaffailhami/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdaffailhami/image-2.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdaffailhami/image-3.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdaffailhami/image-4.png",
    ],
    techs: [
      techs.react,
      techs.tailwindcss,
      techs.postgresql,
      techs.drizzle,
      techs.shadcnui,
      techs.supabase,
      techs.nextjs,
    ],
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
    order: 1,
  },
  {
    title: "CIMSA ULM",
    description:
      "The CIMSA ULM Profile Website is a digital platform designed to introduce the CIMSA organization of Lambung Mangkurat University to the public and facilitate internal information management. This was a collaborative project with my friend Dzakiy Dzakwan; he handled the backend using Laravel & MySQL, while I developed the frontend with React.js & Bootstrap and integrated the REST API.",
    start: new Date("2024-12-01"),
    end: new Date("2025-02-01"),
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cimsa-ulm/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cimsa-ulm/image-2.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cimsa-ulm/image-3.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cimsa-ulm/image-4.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/cimsa-ulm/image-5.jpeg",
    ],
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
    order: 3,
  },
  {
    title: "MDI Todo",
    description:
      "MDI Todo that was developed using Flutter helps you stay organized and on top of your tasks. With MDI Todo, you can create a list of tasks, set deadlines, and mark tasks as completed when you're done.",
    start: new Date("2024-08-01"),
    end: new Date("2024-12-1"),
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdi-todo/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdi-todo/image-2.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdi-todo/image-3.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/mdi-todo/image-4.jpeg",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-2.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-3.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-4.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-5.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-6.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-7.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-8.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-9.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-10.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-11.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-12.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-13.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-14.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-15.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-16.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-17.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-18.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-19.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-20.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/balabuh/image-21.jpg",
    ],
    techs: [techs.reactNative, techs.fastify, techs.mysql, techs.expo],
    links: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/mdaffailhami/balabuh",
      },
    ],
    order: 4,
  },
  {
    title: "GasKu",
    description:
      "GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia. GasKu was created to be exhibited in the KMIPN VI competition for the E-Government category which was held in July 2024 at the Jakarta State Polytechnic (The University of Indonesia).",
    start: new Date("2024-05-01"),
    end: new Date("2024-06-01"),
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/gasku/image-1.jpeg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/gasku/image-2.jpeg",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-2.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-3.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-4.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-5.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-6.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-7.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-8.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-9.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/nasi-igut-han/image-10.jpg",
    ],
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
    images: [
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-1.png",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-2.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-3.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-4.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-5.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-6.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-7.jpg",
      "https://wrkmncssawszpcdmgbra.supabase.co/storage/v1/object/public/main/projects/marketku/image-8.jpg",
    ],
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
