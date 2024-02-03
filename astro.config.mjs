import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import node from '@astrojs/node';


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output:'static',
  site:'http://kwame121.github.io',
  adapter:node({
    mode:'standalone'
  }),
  integrations: [tailwind(), image(), react()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ['path-to-regexp'],

    }
  },
});