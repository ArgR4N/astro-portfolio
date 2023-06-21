import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['tailwindcss']
    }
  },
  output: "static",
  integrations: [mdx(), sitemap(),react(), tailwind()],
  adapter: vercel()
});