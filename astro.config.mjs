import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://argr4n.github.io',
  base: '/astro-portfolio',
  vite: {
    ssr: {
      noExternal: ['tailwindcss']
    }
  },
  output: "static",
  adapter: vercel()
});