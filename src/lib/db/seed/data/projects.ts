import { techs, TechInsert } from "./techs";
import { projectsTable } from "../../schema";

export type ProjectInsert = typeof projectsTable.$inferInsert & {
  techs: TechInsert[];
};

export const projects: ProjectInsert[] = [
  {
    title: "EcoManager Pro",
    description:
      "A comprehensive sustainability tracking platform for modern enterprises, built to monitor carbon footprints in real-time.",
    start: new Date("2023-01-01"),
    end: new Date("2023-06-30"),
    images: [
      "https://picsum.photos/seed/eco1/800/450",
      "https://picsum.photos/seed/eco2/800/450",
    ],
    techs: [techs.react, techs.tailwindcss, techs.postgresql],
    links: [
      { type: "website", label: "Live Demo", url: "https://example.com" },
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/example/eco",
      },
    ],
  },
  {
    title: "Nova Stream",
    description:
      "A decentralized video streaming service leveraging Web3 technologies for peer-to-peer content delivery.",
    start: new Date("2023-07-01"),
    end: null, // Ongoing
    images: ["https://picsum.photos/seed/nova1/800/450"],
    techs: [techs.nextjs, techs.typescript, techs.drizzle],
    links: [
      { type: "website", label: "Watch Now", url: "https://novastream.io" },
      {
        type: "github",
        label: "Nova Core",
        url: "https://github.com/example/nova",
      },
    ],
  },
  {
    title: "Zenith UI Kit",
    description:
      "A high-performance design system and component library built for speed and accessibility.",
    start: new Date("2022-01-01"),
    end: new Date("2022-12-31"),
    images: ["https://picsum.photos/seed/zenith1/800/450"],
    techs: [techs.react, techs.tailwindcss, techs.typescript],
    links: [
      {
        type: "download",
        label: "NPM Package",
        url: "https://npmjs.com/package/zenith",
      },
      {
        type: "github",
        label: "Zenith Source",
        url: "https://github.com/example/zenith",
      },
    ],
  },
];
