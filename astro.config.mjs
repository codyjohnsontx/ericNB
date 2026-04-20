import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// Replace with your production domain before launch (canonicals + OG URLs).
export default defineConfig({
  site: "https://example.com",
  trailingSlash: "never",

  build: {
    format: "file",
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  output: "hybrid",
  adapter: cloudflare()
});