import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AwardIcon,
  MailIcon,
} from "lucide-react";

export const APP_TITLE = "Daffa Ilhami";
export const APP_DESCRIPTION = "Muhammad Daffa Ilhami's Portfolio";

export const PROFILE = {
  name: "Daffa Ilhami",
  bio: "Tech Enthusiast | Self-taught Programmer | Software Engineer",
  about: `\
I’m **Daffa**, a **Software Engineer** from Indonesia 🇮🇩, focused on **end-to-end web app development**.

My primary focus is frontend, clean, responsive UI and solid user experiences across devices, while also being comfortable making independent backend decisions: API architecture, database design, and choosing the right rendering strategy (SSR, CSR, SSG) for the right context.

I started programming in *madrasah aliyah* 🏫, driven purely by curiosity and self-learning, long before college became part of the story.

Over the years, I've worked with a wide range of technologies ⚙️, and today I focus mainly on fullstack frameworks, especially **SvelteKit** as my primary stack, with **Next.js** for projects that call for it, to ship web apps *end-to-end* 🚀

---

Here are some of the **technologies** I use:

📝 **Note:** *These are the technologies **I'm currently actively playing with**, not a full representation of my whole skills.*`,
};

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
