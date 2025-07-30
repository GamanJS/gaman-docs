// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

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
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Helpers",
          autogenerate: { directory: "helpers" },
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
});
