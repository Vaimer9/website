import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: ['rust'],
      wrap: true
    }
  },
  integrations: [mdx()],
  // experimental: { assets: true }
});
