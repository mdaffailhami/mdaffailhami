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
I’m **Daffa**, a **Fullstack Programmer (frontend & backend generalist)** from Indonesia 🇮🇩 with **5+ years of hands-on coding experience**, building projects across *personal, community, and freelance* work.

I started programming back in *madrasah aliyah* 🏫, driven purely by **curiosity** and **self-learning**, long before college became part of the story.

Over the years, I’ve worked with a wide range of technologies ⚙️, and today I focus mainly on fullstack frameworks like **SvelteKit** and **Next.js** to ship web apps *end-to-end*.

I’m used to building **clean, responsive UI** across different screen sizes, integrating **databases and APIs**, deploying to production, and collaborating with solid **Git workflows** 🚀

---

Here are some of the **technologies** I use:

📝 **Note:** *These are the technologies **I'm currently actively playing with**, not a full representation of my whole skills.*`,
  },
];
