import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AwardIcon,
  MailIcon,
} from "lucide-react";

export const APP_TITLE = "Daffa Ilhami";
export const APP_DESCRIPTION = "Daffa Ilhami's Portfolio";

export const PROFILE = {
  name: "Daffa Ilhami",
  bio: "Tech Enthusiast | Self-taught Programmer | Software Engineer",
  about: `\
I'm **Daffa**, a **Software Engineer** from Indonesia 🇮🇩, focused on building **end-to-end web applications** 🌐

I work across the stack 🛠️: turning product ideas into usable interfaces, designing APIs, modeling databases, choosing the right rendering strategy, and deploying systems that are maintainable in production 🚀

I started programming in *high school* 🏫, driven by curiosity and self-learning. Without formal training, I learned to figure things out on my own. That shaped how I approach engineering today: understand the problem first, choose the simplest reliable solution, then keep improving it ⚡

I also work deeply with AI agents in my daily workflow 🤖, I design structured AI instructions, build reusable AI Skills, and orchestrate multiple subagents to parallelize complex tasks while maintaining quality ✨

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
