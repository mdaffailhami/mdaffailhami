import { Project } from "@/lib/types/database";
import { techs } from "@/lib/database/techs";

export const projects: Project[] = [
  {
    title: "CryptoSharia",
    description:
      "CryptoSharia is an Islamic-based crypto education platform that bridges Web3 innovation with Sharia principles. It was created to help the Muslim community understand, analyze, and invest in crypto assets ethically and responsibly.",
    images: [],
    techs: [techs.svelte, techs.supabase, techs.typescript, techs.tailwindcss],
    links: [
      {
        type: "project",
        label: "Website",
        url: "https://www.cryptosharia.id",
      },
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/cryptosharia/cryptosharia",
      },
    ],
  },
  {
    title: "CIMSA ULM",
    description:
      "The CIMSA ULM Profile Website is a digital platform designed to introduce the CIMSA organization of the Lambung Mangkurat University to the public and facilitate internal information management. Built with React.js & Laravel.",
    images: [],
    techs: [techs.react, techs.tailwindcss, techs.restapi],
    links: [],
  },
  {
    title: "Portfolio Web",
    description:
      "My personal web that is developed using Flutter is designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    images: [],
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "project",
        label: "Website",
        url: "https://mdaffailhami.github.io",
      },
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/mdaffailhami/mdaffailhami",
      },
    ],
  },
  {
    title: "MDI Todo",
    description:
      "MDI Todo that was developed using Flutter helps you stay organized and on top of your tasks. With MDI Todo, you can create a list of tasks, set deadlines, and mark tasks as completed when you're done.",
    images: [],
    techs: [techs.flutter, techs.dart],
    links: [],
  },
  {
    title: "Balabuh",
    description:
      "Balabuh is a travel booking application designed to modernize the traditional and fraud-prone travel reservation system. Instead of contacting travel services through WhatsApp or personal connections, users can now explore and book various travel services within a single platform — similar to a marketplace like Shopee, but specifically for travel transportation.",
    images: [],
    techs: [techs.react, techs.expo, techs.fastify],
    links: [
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/mdaffailhami/balabuh",
      },
    ],
  },
  {
    title: "GasKu",
    description:
      "GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia. GasKu was created to be exhibited in the KMIPN VI competition for the E-Government category which was held in July 2024 at the Jakarta State Polytechnic (The University of Indonesia).",
    images: [],
    techs: [techs.flutter, techs.python, techs.fastapi, techs.mongodb],
    links: [
      {
        type: "github",
        label: "Client",
        url: "https://github.com/mdaffailhami/gasku",
      },
      {
        type: "github",
        label: "Server",
        url: "https://github.com/mdaffailhami/gasku_server",
      },
    ],
  },
  {
    title: "Nasi Igut Han",
    description:
      "Nasi Igut Han is a business specializing in selling rice balls. This information system was made in order to improve efficiency in sales operations and business management, as well as to expand market reach by allowing Riceball orders to be placed online.",
    images: [],
    techs: [techs.flutter, techs.python, techs.flask, techs.mongodb],
    links: [
      {
        type: "github",
        label: "Client",
        url: "https://github.com/mdaffailhami/nasi_igut_han",
      },
      {
        type: "github",
        label: "Server",
        url: "https://github.com/mdaffailhami/nasi_igut_han_server",
      },
    ],
  },
  {
    title: "MarketKu",
    description:
      "MarketKu is an e-commerce application that I created using the Flutter framework and Firebase technology. It is designed to provide a seamless and convenient shopping experience for customers who want to buy products and services online. With its user-friendly interface and advanced features, MarketKu is an excellent platform for people who want to sell their goods and services online.",
    images: [],
    techs: [techs.flutter, techs.firebase],
    links: [
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/mdaffailhami/marketku",
      },
    ],
  },
];
