import { Project } from "@/lib/types/database";
import { techs } from "@/lib/database/techs";
import { images as PortfolioV3Images } from "@/assets/projects/mdaffailhami-v3";
import { images as PortfolioV2Images } from "@/assets/projects/mdaffailhami-v2";
import { images as BalabuhImages } from "@/assets/projects/balabuh";
import { images as NasiIgutHanImages } from "@/assets/projects/nasi-igut-han";
import { images as MarketKuImages } from "@/assets/projects/marketku";
import { images as CryptoShariaImages } from "@/assets/projects/cryptosharia";
import { images as CimsaUlmImages } from "@/assets/projects/cimsa-ulm";
import { images as MdiTodoImages } from "@/assets/projects/mdi-todo";
import { images as GasKuImages } from "@/assets/projects/gasku";

export const projects: Project[] = [
  {
    title: "Daffa's Portfolio (v3)",
    description:
      "My personal web developed using React was designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    images: PortfolioV3Images,
    techs: [techs.react, techs.nextjs, techs.tailwindcss, techs.shadcnui],
    links: [
      {
        type: "website",
        url: "https://dev.mdaffailhami.my.id/",
      },
      {
        type: "github",
        url: "https://github.com/mdaffailhami/mdaffailhami/",
      },
    ],
  },
  {
    title: "CryptoSharia",
    description:
      "CryptoSharia is an Islamic-based crypto education platform that bridges Web3 innovation with Sharia principles. It was created to help the Muslim community understand, analyze, and invest in crypto assets ethically and responsibly.",
    images: CryptoShariaImages,
    techs: [techs.svelte, techs.supabase, techs.tailwindcss],
    links: [
      {
        type: "website",
        url: "https://www.cryptosharia.id/",
      },
      {
        type: "github",
        url: "https://github.com/cryptosharia/cryptosharia/",
      },
    ],
  },
  {
    title: "CIMSA ULM",
    description:
      "The CIMSA ULM Profile Website is a digital platform designed to introduce the CIMSA organization of Lambung Mangkurat University to the public and facilitate internal information management. This was a collaborative project with my friend Dzakiy Dzakwan; he handled the backend using Laravel & MySQL, while I developed the frontend with React.js & Bootstrap and integrated the REST API.",
    images: CimsaUlmImages,
    techs: [techs.react, techs.bootstrap, techs.laravel, techs.mysql],
    links: [
      {
        type: "website",
        url: "https://cimsa.ulm.ac.id/",
      },
      {
        type: "github",
        url: "https://github.com/mdaffailhami/cimsa-ulm",
      },
    ],
  },
  {
    title: "Daffa's Portfolio (v2)",
    description:
      "My personal web developed using Flutter was designed to showcase my professional profile, skills, projects, and contact information. This web app serves as a comprehensive portfolio.",
    images: PortfolioV2Images,
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "website",
        url: "https://mdaffailhami.my.id",
      },
      {
        type: "github",
        url: "https://github.com/mdaffailhami/mdaffailhami/tree/main/v2",
      },
    ],
  },
  {
    title: "MDI Todo",
    description:
      "MDI Todo that was developed using Flutter helps you stay organized and on top of your tasks. With MDI Todo, you can create a list of tasks, set deadlines, and mark tasks as completed when you're done.",
    images: MdiTodoImages,
    techs: [techs.flutter, techs.dart],
    links: [
      {
        type: "download",
        url: "https://github.com/mdaffailhami/mdi-todo/releases",
      },
      {
        type: "github",
        url: "https://github.com/mdaffailhami/mdi-todo",
      },
    ],
  },
  {
    title: "Balabuh",
    description:
      "Balabuh is a travel booking application designed to modernize the traditional and fraud-prone travel reservation system. Instead of contacting travel services through WhatsApp or personal connections, users can now explore and book various travel services within a single platform — similar to a marketplace like Shopee, but specifically for travel transportation. I didn't build this project alone, but with my friend Bhakti Ramadhani, who worked on the backend using Fastify & MySQL.",
    images: BalabuhImages,
    techs: [techs.reactNative, techs.expo, techs.fastify, techs.mysql],
    links: [
      {
        type: "github",
        url: "https://github.com/mdaffailhami/balabuh",
      },
    ],
  },
  {
    title: "GasKu",
    description:
      "GasKu is an innovative application designed to streamline and secure the distribution of 3 kg subsidized LPG gas in Indonesia. GasKu was created to be exhibited in the KMIPN VI competition for the E-Government category which was held in July 2024 at the Jakarta State Polytechnic (The University of Indonesia).",
    images: GasKuImages,
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
        label: "GitHub (Frontend)",
        url: "https://github.com/mdaffailhami/gasku",
      },
      {
        type: "github",
        label: "GitHub (Backend)",
        url: "https://github.com/mdaffailhami/gasku_server",
      },
    ],
  },
  {
    title: "Nasi Igut Han",
    description:
      "Nasi Igut Han is a business specializing in selling rice balls. This information system was made in order to improve efficiency in sales operations and business management, as well as to expand market reach by allowing Riceball orders to be placed online.",
    images: NasiIgutHanImages,
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
        label: "GitHub (Frontend)",
        url: "https://github.com/mdaffailhami/nasi_igut_han",
      },
      {
        type: "github",
        label: "GitHub (Backend)",
        url: "https://github.com/mdaffailhami/nasi_igut_han_server",
      },
    ],
  },
  {
    title: "MarketKu",
    description:
      "MarketKu is an e-commerce application that I created using the Flutter framework and Firebase technology. It is designed to provide a seamless and convenient shopping experience for customers who want to buy products and services online. With its user-friendly interface and advanced features, MarketKu is an excellent platform for people who want to sell their goods and services online.",
    images: MarketKuImages,
    techs: [techs.flutter, techs.firebase, techs.dart],
    links: [
      {
        type: "github",
        url: "https://github.com/mdaffailhami/marketku",
      },
    ],
  },
];
