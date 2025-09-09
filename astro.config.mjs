// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

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
      locales: {
        root: {
          lang: "id",
          label: "Indonesia",
        },
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
          link: "/docs",
          slug: "docs",
        },
        {
          label: "Overview",
          items: [
            {
              link: "/docs/overview/first-steps",
              slug: "docs/overview/first-steps",
            },
            {
              link: "/docs/overview/routing",
              slug: "docs/overview/routing",
            },
            {
              link: "/docs/overview/controllers",
              slug: "docs/overview/controllers",
            },
            {
              link: "/docs/overview/middlewares",
              slug: "docs/overview/middlewares",
            },
            {
              link: "/docs/overview/interceptors",
              slug: "docs/overview/interceptors",
            },
            {
              link: "/docs/overview/exceptions",
              slug: "docs/overview/exceptions",
            },
            {
              link: "/docs/overview/responses",
              slug: "docs/overview/responses",
            },
          ],
        },
        {
          label: "Technical",
          items: [
            {
              link: "/docs/technical/context",
              slug: "docs/technical/context",
            },
            {
              link: "/docs/technical/cookies",
              slug: "docs/technical/cookies",
            },
            {
              link: "/docs/technical/logging",
              slug: "docs/technical/logging",
            },
            {
              link: "/docs/technical/static-serve",
              slug: "docs/technical/static-serve",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
            {
              link: "/docs/technical/textformat",
              slug: "docs/technical/textformat",
            },
          ],
        },
        {
          label: "Security",

          items: [
            {
              link: "/docs/security/cors",
              slug: "docs/security/cors",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
            {
              link: "/docs/security/basic-auth",
              slug: "docs/security/basic-auth",
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
            {
              link: "/docs/view-engine/nunjucks",
              slug: "docs/view-engine/nunjucks",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
            {
              link: "/docs/view-engine/ejs",
              slug: "docs/view-engine/ejs",
              badge: {
                text: "Baru",
                variant: "success",
              },
            },
          ],
        },
        {
          label: "CLI",
          link: "/docs/cli",
          slug: "docs/cli",
        },
      ],
    }),
    sitemap(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});
