import { IoShareSocialSharp } from "react-icons/io5";
import { PiPenNibStraight } from "react-icons/pi";
import {
  TbCloudComputing,
  TbHome,
  TbPhoneOutgoing,
  TbStack2,
} from "react-icons/tb";

type Project = {
  label: string;
  Svg: any;
  pathName: string;
};

export const Menu: Array<Project> = [
  {
    label: "Home",
    Svg: TbHome,
    pathName: "/",
  },
  {
    label: "About",
    Svg: TbCloudComputing,
    pathName: "/about",
  },
  {
    label: "All Projects",
    Svg: TbStack2,
    pathName: "/project",
  },
  {
    label: "contact",
    Svg: TbPhoneOutgoing,
    pathName: "/contact",
  },
  {
    label: "Socials",
    Svg: IoShareSocialSharp,
    pathName: "/social",
  },
  {
    label: "Blogs",
    Svg: PiPenNibStraight,
    pathName: "/blog",
  },
];
