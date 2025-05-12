import { desc } from "framer-motion/client";
import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Icon = {
  SvgIcon: any;
  title: string;
  class: string;
};

type Project = {
  title: string;
  description: string;
  urlDirect: string;
  logos: any;
  srcImage: string;
  icons: Array<Icon>;
};

export const PROJECTS: Array<Project> = [
  {
    title: "Aoshi Platform",
    description: "Aoshi-AI is the link management platform for businesses.",
    urlDirect: "https://aoshi-management-platform-for-businesses.vercel.app/",
    srcImage: "/project/project1.png",
    logos: [
      {
        desc: "Web Developer",
      },
      {
        desc: "Landing Page",
      },
    ],

    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiFramer,
        title: "FramerMotion",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-800 rounded",
      },
      {
        SvgIcon: SiTailwindcss,
        title: "TailwindCSS",
        class: "fill-blue-400",
      },
      {
        SvgIcon: SiShadcnui,
        title: "ShadcnUI",
        class: "fill-black dark:fill-white",
      },
    ],
  },
  {
    title: "Evara E-commerce",
    description: "E-commerce website project with HTML CSS Javascript.",
    urlDirect: "https://evara-ecommerce-phi.vercel.app/",
    srcImage: "/project/project2.png",
    logos: [
      {
        desc: "Ecommerce",
      },
    ],
    icons: [
      {
        SvgIcon: SiHtml5,
        title: "HTML5",
        class: "fill-orange-600",
      },
      {
        SvgIcon: SiCss3,
        title: "CSS3",
        class: "fill-blue-600 rounded",
      },
      {
        SvgIcon: SiJavascript,
        title: "Javascript",
        class: "fill-yellow-400",
      },
    ],
  },
  {
    title: "Liquid Hotel",
    description:
      "Beautiful and Luxury Hotels in Bali with Exclusive Restaurants",
    urlDirect: "https://liquid-hotel.vercel.app/",
    srcImage: "/project/project3.png",
    logos: [
      {
        desc: "GSAP",
      },
      {
        desc: "Decorations",
      },
      {
        desc: "UI/UX",
      },
    ],
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiFramer,
        title: "FramerMotion",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-600 rounded",
      },
      {
        SvgIcon: SiStyledcomponents,
        title: "StyledComponents",
        class: "fill-amber-400",
      },
    ],
  },
  {
    title: "Blog",
    description:
      "A Next.js 14 Blog using Server Components & Backed by Wisp CMS",
    urlDirect: "https://14-blog-server-components-gold.vercel.app/",
    srcImage: "/project/project4.png",
    logos: [
      {
        desc: "Wisp",
      },
      {
        desc: "NextJs App Router",
      },
      {
        desc: "Dark Mode",
      },
    ],
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-600 rounded",
      },
      {
        SvgIcon: SiShadcnui,
        title: "ShadcnUI",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiTailwindcss,
        title: "TailwindCSS",
        class: "fill-blue-400",
      },
    ],
  },
  {
    title: "Launch UI",
    description: "The pages created make your website feel premium",
    urlDirect: "/404",
    srcImage: "/project/project5.png",

    logos: [
      {
        desc: "Radix UI",
      },
      {
        desc: "Launch UI",
      },
      {
        desc: "UI/UX",
      },
      {
        desc: "TailwindCss",
      },
    ],
    icons: [
      {
        SvgIcon: SiNextdotjs,
        title: "NextJS",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiTypescript,
        title: "Typescript",
        class: "fill-blue-600 rounded",
      },
      {
        SvgIcon: SiShadcnui,
        title: "ShadcnUI",
        class: "fill-black dark:fill-white",
      },
      {
        SvgIcon: SiPrisma,
        title: "Prisma",
        class: "fill-black dark:fill-white",
      },
    ],
  },
];
