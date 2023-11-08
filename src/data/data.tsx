import { Email, Github, Instagram, Linkedin } from "@/components/icons/Icons";
import {
  NavigationDataInterface,
  ProfileDataInterface,
  EducationDataInterface,
  ExperienceDataInterface,
  ProjectDataInterface,
  TechDataInterface,
} from "./data-types";

export const profile_data: ProfileDataInterface = {
  name: "Renes Dwi Riwanto",
  position: "Full Stack Developer",
  profileDescription: [
    "Adaptable programmers, ",
    "Quick learners, and Highly Consistent.",
  ],
};
export const name: string[] = [
  "R",
  "e",
  "n",
  "e",
  "s",
  " ",
  "D",
  "w",
  "i",
  " ",
  "R",
  "i",
  "w",
  "a",
  "n",
  "t",
  "o",
];

export const navigation_data: NavigationDataInterface = {
  nav: ["about", "experience", "skills", "education", "projects"],
  contacts: [
    {
      name: "Gmail",
      icon: (className) => <Email className={className} />,
      url: "mailto:renesriwanto@gmail.com",
    },
    {
      name: "Instagram",
      icon: (className) => <Instagram className={className} />,
      url: "https://www.instagram.com/renessdwir/",
    },
    {
      name: "Github",
      icon: (className) => <Github className={className} />,
      url: "https://github.com/renesdwir",
    },
    {
      name: "Linkedin",
      icon: (className) => <Linkedin className={className} />,
      url: "https://www.linkedin.com/in/renesdwir/",
    },
  ],
};

export const about_data: string[] = [
  `An experienced programmer proficient in JavaScript, specializing in developing websites and mobile
  applications. I have a strong skill set in server-side development using Node.js and Express.js, as well as clientside development utilizing React.js. Additionally, I am well-versed in leveraging Restful APIs.
  `,
  `I possess adaptability, a quick learning ability, and I have a deep interest in learning new technologies and a
  passion for creating websites that are responsive, interactive, and functionally robust.`,
];

export const experience_data: ExperienceDataInterface[] = [
  {
    position: "Software Engineer",
    at: "Jakarta Eye Center",
    date: "Jun `22 - Jun `23",
    link: "https://jec.co.id/id",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas at sed atque nostrum lorem20 quidem.",
    tech: ["javascript", "reactjs", "jquery"],
  },
  {
    position: "Front End Developer",
    at: "Freelance",
    date: "Jun `22 - Jun `23",
    link: "https://swadeli-profile.vercel.app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas at sed atque nostrum lorem20 quidem.",
    tech: ["javascript", "reactjs", "jquery"],
  },
];

export const tech_data: TechDataInterface[] = [
  {
    name: "javascript",
    icon: "javascript.svg",
    url: "https://www.javascript.com/",
  },
  {
    name: "reactjs",
    icon: "react.svg",
    url: "https://reactjs.org/",
  },
];

export const education_data: EducationDataInterface[] = [
  {
    logo: "hacktivsvg.svg",
    name: "Hacktiv8 Indonesia",
    date: "Jan `22 - Apr `22",
    achievement: "Graduated with a score of 95.5 /100",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit quia necessitatibus corporis qui saepe magnam, mollitia at voluptatum eum, ullam aliquam esse? Quas expedita ipsum eaque nisi neque at.",
  },
];

export const project_data: ProjectDataInterface[] = [
  {
    img: "projects.png",
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab eligendi iure esse doloremque cupiditate!",
    tech: [
      "javascript",
      "reactjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
    ],
    url: "https://github.com/renesdwir",
  },
  {
    img: "projects.png",
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab eligendi iure esse doloremque cupiditate!",
    tech: [
      "javascript",
      "reactjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
      "nextjs",
    ],
    url: "https://github.com/renesdwir",
  },
];

export const footer_data: string[] = [
  "Thank you very much for visiting my very simple portfolio website.",
  "I hope we can work together in the future",
];
