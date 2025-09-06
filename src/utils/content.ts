import Box from "../icons/box.astro";
import Code from "../icons/code.astro";
import Code1 from "../icons/code1.astro";
import Electric from "../icons/electric.astro";
import Secure from "../icons/secure.astro";

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
