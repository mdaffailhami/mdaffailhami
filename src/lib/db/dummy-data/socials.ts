import { socialsTable } from "../schema";

export type SocialData = typeof socialsTable.$inferInsert;

export const socials: SocialData[] = [
  {
    label: "GitHub",
    url: "https://github.com/example",
    icon: {
      light: "https://cdn.simpleicons.org/github/181717",
      dark: "https://cdn.simpleicons.org/github/FFFFFF",
    },
    order: 1,
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/company/example",
    icon: {
      light: "https://cdn.simpleicons.org/linkedin/0A66C2",
      dark: "https://cdn.simpleicons.org/linkedin/0A66C2",
    },
    order: 2,
  },
  {
    label: "Instagram",
    url: "https://instagram.com/example",
    icon: {
      light: "https://cdn.simpleicons.org/instagram/E4405F",
      dark: "https://cdn.simpleicons.org/instagram/E4405F",
    },
    order: 3,
  },
  {
    label: "Email",
    url: "mailto:hello@example.com",
    icon: {
      light: "https://cdn.simpleicons.org/gmail/EA4335",
      dark: "https://cdn.simpleicons.org/gmail/EA4335",
    },
    order: 4,
  },
];
