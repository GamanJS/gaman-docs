// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: ['gaman.7togk.id']
    },
    plugins: [tailwindcss()],
  },

  site: 'https://gaman.7togk.id',

  server: {
    port: 3521,
    host: "0.0.0.0"
  },

  integrations: [
    starlight({
      
      plugins: [
        starlightThemeObsidian({
          debug: false,
        }),
      ],
      title: "Gaman.JS",
      favicon: "/img/gaman-big.png",
      customCss: ["./src/styles/custom.css"],
      disable404Route: true,
      
      social: [
        {
          icon: "github",
          label: "Github",
          href: "https://github.com/7TogkID/gaman",
        },
      ],
      sidebar: [
        {
          link: "/",
          slug: "index",
        },
        {
          label: "Overview",
          items: [
            {
              link: "/overview/first-steps",
              slug: "overview/first-steps",
            },
            {
              link: "/overview/module",
              slug: "overview/module",
            },
            {
              link: "/overview/context",
              slug: "overview/context",
            },
            {
              link: "/overview/routing",
              slug: "overview/routing",
              badge: {
                text: "NEW",
                variant: 'success'
              }
            },
            {
              link: "/overview/middleware",
              slug: "overview/middleware",
            },
            {
              link: "/overview/response",
              slug: "overview/response",
            },
          ],
          
        },
        {
          label: "Module",
          items: [
            {
              link: "/module/block",
              slug: "module/block",
              badge: {
                text: "NEW",
                variant: 'success'
              }
            },
            {
              link: "/module/service",
              slug: "module/service",
              badge: {
                text: "NEW",
                variant: 'success'
              }
            },
            {
              link: "/module/routes",
              slug: "module/routes",
              badge: {
                text: "NEW",
                variant: 'success'
              } 
            },
          ],
        },
        {
          label: "Essentials",
          autogenerate: { directory: "essentials" },
        },
        {
          label: "Security",
          autogenerate: { directory: "security" },
        },
        {
          label: "Packages",
          autogenerate: { directory: "packages" },
        },
        {
          label: "API",
          autogenerate: { directory: "api" },
        },
      ],
    }),
    sitemap(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});