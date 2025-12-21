import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
