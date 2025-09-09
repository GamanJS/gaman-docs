import Box from "../icons/box.astro";
import Code from "../icons/code.astro";
import Code1 from "../icons/code1.astro";
import Electric from "../icons/electric.astro";
import Secure from "../icons/secure.astro";

export const navbar = {
  links: [
    {
      label: "Documentations",
      url: "/docs",
    },
    {
      label: "About",
      url: "/#",
    },
    {
      label: "Blog",
      url: "/#",
    },
  ],
};

export const features = {
  description:
    "Everything you need to build reliable, scalable backend applications — all in one framework.",
  items: [
    {
      icon: Code,
      title: "TypeScript First",
      text: "End-to-end type safety out of the box.",
    },
    {
      icon: Secure,
      title: "Secure by Default",
      text: "Built-in middleware and best practices.",
    },
    {
      icon: Box,
      title: "Scalable Architecture",
      text: "From startups to enterprise apps.",
    },
    // {
    //   icon: Code1,
    //   title: "Developer Friendly",
    //   text: "Simple, minimal, and powerful API.",
    // },
    {
      icon: Electric,
      title: "Plugin System",
      text: "Extend and customize with ease.",
    },
  ],
};

const date = new Date();
export const footer = {
  title: `© ${date.getFullYear()} GamanJS. All rights reserved.`,
  documents: {
    title: "Documentation",
    links: [
      {
        label: "Getting Started",
        url: "/docs/overview/first-steps",
      },
      {
        label: "Routing",
        url: "/docs/overview/routing",
      },
      {
        label: "Controllers",
        url: "/docs/overview/controllers",
      },
      {
        label: "Middlewares",
        url: "/docs/overview/middlewares",
      },
      {
        label: "Interceptors",
        url: "/docs/overview/interceptors",
      },
    ],
  },
  community: {
    title: "Community",
    links: [
      {
        label: "Github",
        url: "https://github.com/7TogkID/gaman",
      },
      {
        label: "Discord",
        url: "https://discord.gg/CQ6fEqBe8f",
      },
      {
        label: "Whatsapp",
        url: "https://whatsapp.com/channel/0029VbB0keR7z4kgczdSZ33s",
      },
    ],
  },
  resource: {
    title: "Resources",
    links: [
      {
        label: "About",
        url: "#",
      },
      {
        label: "Blog",
        url: "#",
      },
      {
        label: "Brand Guidelines",
        url: "#",
      },
    ],
  },
  links: [
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms of Service",
      href: "/terms-of-service",
    },
  ],
};
