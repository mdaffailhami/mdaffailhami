import { settingsTable } from "../../schema";

export type SettingInsert = typeof settingsTable.$inferInsert;

export const settings: SettingInsert[] = [
  {
    key: "name",
    value: "Daffa Ilhami",
  },
  {
    key: "bio",
    value: "Tech Enthusiast | Self-taught Programmer | Fullstack Developer",
  },
  {
    key: "about",
    value: `\
I'm **Daffa**, a **Fullstack Developer** from Indonesia 🇮🇩 with **5+ years of programming experience**, focused on **end-to-end web development**.

My primary focus is frontend, clean, responsive UI and solid user experiences across devices, while also being comfortable making independent backend decisions: API architecture, database design, and choosing the right rendering strategy (SSR, CSR, SSG) for the right context.

I started programming in *madrasah aliyah* 🏫, driven purely by curiosity and self-learning, long before college became part of the story.

Over the years, I've worked with a wide range of technologies ⚙️, and today I focus mainly on fullstack frameworks, especially **SvelteKit** as my primary stack, with **Next.js** for projects that call for it, to ship web apps *end-to-end* 🚀

---

Here are some of the **technologies** I use:

📝 **Note:** *These are the technologies **I'm currently actively playing with**, not a full representation of my whole skills.*`,
  },
];
