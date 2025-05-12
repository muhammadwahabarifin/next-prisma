import { FaTwitter } from "react-icons/fa6";
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";

type Sosmeds = {
  title: string;
  SvgIcon: any;
  UrlDirec: string;
};
export const Sosmeds: Array<Sosmeds> = [
  {
    title: "Instagram",
    SvgIcon: SiInstagram,
    UrlDirec: "https://www.instagram.com/wahaaabbbb?",
  },
  {
    title: "Github",
    SvgIcon: SiGithub,
    UrlDirec: "https://github.com/muhammadwahabarifin",
  },
  {
    title: "LinkedIn",
    SvgIcon: SiLinkedin,
    UrlDirec:
      "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
  },
  {
    title: "Twitter",
    SvgIcon: FaTwitter,
    UrlDirec: "https://x.com/wahaaabbb?s=11",
  },
  {
    title: "Tiktok",
    SvgIcon: SiTiktok,
    UrlDirec: "https://www.tiktok.com/@wahabarf",
  },
];
