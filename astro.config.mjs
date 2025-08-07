// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(), // ✅ Limpio y correcto
  integrations: [tailwind(), react()],
});
