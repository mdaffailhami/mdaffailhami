import { MailIcon } from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const socials = [
  {
    label: "GitHub",
    Icon: SiGithub,
    url: "https://github.com/mdaffailhami",
    color: {
      light: "#181717",
      dark: "#FFFFFF",
    },
  },
  {
    label: "LinkedIn",
    Icon: SiLinkedin,
    url: "https://linkedin.com/in/mdaffailhami",
    color: {
      light: "#0A66C2",
      dark: "#0A66C2",
    },
  },
  {
    label: "Instagram",
    Icon: SiInstagram,
    url: "https://instagram.com/m.daffailhami",
    color: {
      light: "#E4405F",
      dark: "#E4405F",
    },
  },
  {
    label: "Email",
    Icon: MailIcon,
    url: "mailto:mdaffailhami@gmail.com",
    color: {
      light: "#EA4335",
      dark: "#EA4335",
    },
  },
  // {
  //   label: "Telegram",
  //   Icon: SiTelegram,
  //   url: "https://t.me/<username>",
  //   color: {
  //     light: "#0088cc",
  //     dark: "#0088cc",
  //   },
  // },
];
