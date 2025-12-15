import { Metadata } from "next";
import daffa1 from "@/assets/mdaffailhami-1.png";

const about = `\
I’m **Daffa**, a *self-taught programmer* from **Indonesia** 🇮🇩 with over **5 years** of experience in the field.

I started **programming** while I was still in **madrasah aliyah** 🏫 — so the trigger was actually **my own interest**, not college.

I’ve experimented with a **wide range of technologies** ⚙️ — including *React*, *Flutter*, *React Native*, *Svelte*, *Express*, *Python*, *FastAPI*, *Firebase*, *MongoDB*, *PostgreSQL*, **and more**.

My journey is driven by **self-learning**, **curiosity**, and a **commitment to continuous growth** 🚀

---

Here are some of the **technologies** that I use:

📝 **Note:** *These are the technologies **I'm currently actively playing with**, not a full representation of my whole skills.*`;

const APP_TITLE = "Daffa Ilhami";
const APP_DESCRIPTION = "Muhammad Daffa Ilhami's Portfolio";

export const config = {
  name: "Daffa Ilhami",
  bio: "Tech Enthusiast | Self-Taught Programmer | Lifelong Learner",
  about: about,
  metadata: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: APP_TITLE,
      title: APP_TITLE,
      description: APP_DESCRIPTION,
      countryName: "Indonesia",
      emails: "mdaffailhami@gmail.com",
      images: [
        {
          url: daffa1.src,
          width: daffa1.width,
          height: daffa1.height,
          alt: APP_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: APP_TITLE,
      description: APP_DESCRIPTION,
      images: [daffa1.src],
    },
  } as Metadata,
};
