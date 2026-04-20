import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

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
});
