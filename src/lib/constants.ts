import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AwardIcon,
  MailIcon,
} from "lucide-react";

export const APP_TITLE = "Daffa Ilhami";
export const APP_DESCRIPTION = "Muhammad Daffa Ilhami's Portfolio";

export const NAVS: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  hash: string;
}[] = [
  { label: "Home", Icon: HomeIcon, hash: "#home" }, // Hash will be removed when active
  { label: "About", Icon: UserIcon, hash: "#about" },
  { label: "Projects", Icon: BriefcaseIcon, hash: "#projects" },
  { label: "Experience", Icon: AwardIcon, hash: "#experience" },
  { label: "Contact", Icon: MailIcon, hash: "#contact" },
];
