import { techs, TechData } from "@/lib/db/dummy-data/techs";
import { projectsTable } from "../schema";

export type ProjectData = typeof projectsTable.$inferInsert & {
  techs: TechData[];
};

export const projects: ProjectData[] = [
  {
    title: "EcoManager Pro",
    description:
      "A comprehensive sustainability tracking platform for modern enterprises, built to monitor carbon footprints in real-time.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      "https://images.unsplash.com/photo-1504868584819-f8e90526354e?auto=format&fit=crop&q=80&w=2340",
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
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2340",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1581291518655-9513b3aef19f?auto=format&fit=crop&q=80&w=2340",
    ],
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
