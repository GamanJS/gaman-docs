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
          label: "Ringkasan",
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
              link: "/docs/overview/context",
              slug: "docs/overview/context",
            },
            {
              link: "/docs/overview/responses",
              slug: "docs/overview/responses",
            },
            {
              link: "/docs/overview/cli",
              slug: "docs/overview/cli",
            },
          ],
        },
        {
          label: "Teknis",
          autogenerate: {
            directory: "docs/teknis",
          },
        },
      ],
    }),
    sitemap(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});
