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
      favicon: "/img/gaman-big.png",
      defaultLocale: "en",
      locales: {
        en: { label: "English", lang: "en", dir: "ltr" },
        id: { label: "Indonesian", lang: "id", dir: "ltr" },
      },
      social: [
        {
          icon: "github",
          label: "Github",
          href: "https://github.com/7TogkID/gaman",
        },
        {
          icon: "comment",
          label: "WhatsApp",
          href: "https://whatsapp.com/channel/0029VbB0keR7z4kgczdSZ33s",
        },
      ],
      logo: {
        src: "/public/img/gaman-big.png",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Overview",
          items: [
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
          badge: {
            text: "Baru",
            variant: "success",
          },
          items: [
            { label: "CORS", link: "/security/cors" },
            { label: "Basic Auth", link: "/security/basic-auth" },
            {
              label: "Rate Limit",
              link: "/security/rate-limit",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
            {
              label: "JWT (Json Web Token)",
              link: "/security/jwt",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
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
