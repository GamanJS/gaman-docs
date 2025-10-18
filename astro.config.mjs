// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["gaman.7togk.id"],
    },
    plugins: [tailwindcss()],
  },

  site: "https://gaman.7togk.id",
  server: {
    port: 3521,
    host: "0.0.0.0",
  },
  integrations: [
    starlight({
      title: "Gaman Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/GamanJS/gaman-docs",
        },
      ],
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
          direction: "ltr",
        },
        id: {
          label: "Bahasa Indonesia",
          lang: "id",
          direction: "ltr",
        },
      },
      sidebar: [
        {
          label: "Overview",
          items: [
            // Each item in this array is a link to a page.
            { label: "First Steps", link: "/overview/first-steps" },
            { label: "Routing", link: "/overview/routing" },
            { label: "Controllers", link: "/overview/controllers" },
            { label: "Responses", link: "/overview/responses" },
            { label: "Middlewares", link: "/overview/middlewares" },
            { label: "Interceptors", link: "/overview/interceptors" },
            { label: "Exceptions", link: "/overview/exceptions" },
            { label: "CLI", link: "/overview/cli" },
          ],
        },
        {
          label: "Technical",
          items: [
            { label: "Context", link: "/technical/context" },
            { label: "Session", link: "/technical/session" },
            { label: "Cookies", link: "/technical/cookies" },
            { label: "Logging", link: "/technical/logging" },
            { label: "Static Serve", link: "/technical/static-serve" },
            { label: "Text Format", link: "/technical/textformat" },
          ],
        },
        {
          label: "Security",
          items: [
            { label: "CORS", link: "/security/cors" },
            { label: "Basic Auth", link: "/security/basic-auth" },
            { label: "Rate Limit", link: "/security/rate-limit" },
          ],
        },
        {
          label: "View Engine",
          items: [
            { label: "EJS", link: "/view-engine/ejs" },
            { label: "Nunjucks", link: "/view-engine/nunjucks" },
          ],
        },
        {
          label: "Websocket",
          items: [
            { label: "Internal", link: "/websocket/internal" },
            { label: "External", link: "/websocket/external" },
          ],
        },
      ],
    }),
    sitemap(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
