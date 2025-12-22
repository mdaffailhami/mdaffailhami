import { settingsTable } from "../../schema";

export type SettingInsert = typeof settingsTable.$inferInsert;

export const settings: SettingInsert[] = [
  {
    key: "name",
    value: "Lorem Ipsum",
  },
  {
    key: "bio",
    value: "Lorem Ipsum | Dolor Sit Amet | UWU Wadidaw",
  },
  {
    key: "about",
    value: `\
I’m **Lorem Ipsum**, a *passionate programmer* from **Indonesia** 🇮🇩 with over **5 years** of experience in the field.

I started **programming** while I was still in **madrasah aliyah** 🏫 — so the trigger was actually **my own interest**, not college.

I’ve experimented with a **wide range of technologies** ⚙️ — including *React*, *Flutter*, *React Native*, *Svelte*, *Java*, *Python*, *FastAPI*, *Express*, *Firebase*, *MongoDB*, **and more**.

My journey is driven by **self-learning**, **curiosity**, and a **commitment to continuous growth** 🚀

---

Here are some of the **technologies** that I use:

📝 **Note:** *These are the technologies **I'm currently actively playing with**, not a full representation of my whole skills.*`,
  },
];
