import {
  SiAmazonec2,
  SiAmazonrds,
  SiBootstrap,
  SiCodeigniter,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFacebook,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubpages,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSanity,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Item = {
  tooltip: string;
  SvgIcon: any;
  class?: string;
};

type Skills = {
  language?: Array<Item>;
  frontend?: Array<Item>;
  backend?: Array<Item>;
};

export const Skills = {
  language: [
    {
      SvgIcon: SiHtml5,
      tooltip: "HTML5",
      class: "fill-orange-500",
    },
    {
      SvgIcon: SiCss3,
      tooltip: "CSS3",
      class: "fill-blue-400",
    },
    {
      SvgIcon: SiJavascript,
      tooltip: "Javascript",
      class: "fill-yellow-400 rounded",
    },
    {
      SvgIcon: SiTypescript,
      tooltip: "Typescript",
      class: "fill-blue-600 rounded",
    },
  ],
  frontend: [
    {
      SvgIcon: SiNextdotjs,
      tooltip: "NextJs",
      class: "fill-black dark:fill-white",
    },
    {
      SvgIcon: SiReact,
      tooltip: "ReactJs",
      class: "fill-blue-500",
    },
    {
      SvgIcon: SiShadcnui,
      tooltip: "ShadcnUI",
      class: "fill-black dark:fill-white",
    },
    {
      SvgIcon: SiTailwindcss,
      tooltip: "TailwindCSS",
      class: "fill-blue-400",
    },
  ],
  backend: [
    {
      SvgIcon: SiPrisma,
      tooltip: "Prisma",
      class: "fill-black dark:fill-white",
    },
    {
      SvgIcon: SiNodedotjs,
      tooltip: "NodeJs",
      class: "fill-green-500",
    },
    // {
    //     SvgIcon: SiSanity,
    //     tooltip: "Sanity",
    //     class: "fill-orange-500",
    // },
    // {
    //     SvgIcon: SiMongodb,
    //     tooltip: "MongoDB",
    //     class: "fill-green-500",
    // },
  ],
  devops: [
    {
      SvgIcon: SiGit,
      tooltip: "Git",
      class: "fill-red-600",
    },
    {
      SvgIcon: SiVercel,
      tooltip: "Vercel",
      class: "fill-black dark:fill-white",
    },
  ],
};
