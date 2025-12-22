import { socialsTable } from "../../schema";

export type SocialInsert = typeof socialsTable.$inferInsert;

const placeholderSvg =
  '<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path></svg>';

export const socials: SocialInsert[] = [
  {
    label: "GitHub",
    url: "https://github.com/mdaffailhami",
    icon: {
      light: "#181717",
      dark: "#FFFFFF",
      svg: placeholderSvg,
    },
    order: 1,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/mdaffailhami",
    icon: {
      light: "#0A66C2",
      dark: "#0A66C2",
      svg: placeholderSvg,
    },
    order: 2,
  },
  {
    label: "Instagram",
    url: "https://instagram.com/m.daffailhami",
    icon: {
      light: "#E4405F",
      dark: "#E4405F",
      svg: placeholderSvg,
    },
    order: 3,
  },
  {
    label: "Email",
    url: "mailto:mdaffailhami@gmail.com",
    icon: {
      light: "#EA4335",
      dark: "#EA4335",
      svg: placeholderSvg,
    },
    order: 4,
  },
];
