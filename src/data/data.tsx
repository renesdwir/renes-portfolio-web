import {
  Bootstrap,
  Docker,
  Ejs,
  Email,
  Express,
  Github,
  Graphql,
  Instagram,
  Javascript,
  Jwt,
  Linkedin,
  Mongodb,
  Nestjs,
  Nextjs,
  Nodejs,
  Postgresql,
  Prisma,
  ReactNative,
  Reactjs,
  Redis,
  Redux,
  Tailwind,
  Typescript,
  Vue,
} from "@/components/icons/Icons";
import {
  NavigationDataInterface,
  ProfileDataInterface,
  EducationDataInterface,
  ExperienceDataInterface,
  ProjectDataInterface,
  TechDataInterface,
  TechData,
} from "./data-types";
import MoongoseIcon from "@/components/icons/Mongoose";

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
    date: "Jun ` 22 - Jun ` 23",
    link: "https://jec.co.id/id",
    description: [
      "Developed a total of 5 features specific to JEC's internal website and HIS (Hospital Information System), such as Dashboard, Patient Management, Appointment, Supply Chain, Finance.",
      "User guides, tutorials, and FAQs are documented for end users, improving their experience and Ensure smooth orientation.",
    ],
    tech: ["JavaScript", "React", "Tailwind"],
  },
  {
    position: "Front End Developer",
    at: "Freelance",
    date: "Jun ` 22 - Jun ` 23",
    link: "https://swadeli-profile.vercel.app",
    description: [
      "Developed a profile website and dashboard for a client based on a UI design that was already created by a UI/UX designer and approved by the client.",
    ],
    tech: ["JavaScript", "Next", "Tailwind"],
  },
];

export const tech_data: TechData = {
  backend: [
    { name: "NodeJs", icon: (className) => <Nodejs className={className} /> },
    { name: "ExpressJs", icon: (className) => <Express className={className} /> },
    { name: "NestJs", icon: (className) => <Nestjs className={className} /> },
    { name: "EJS", icon: (className) => <Ejs className={className} /> },
    { name: "Prisma", icon: (className) => <Prisma className={className} /> },
    { name: "Moongose", icon: (className) => <MoongoseIcon className={className} /> },
    { name: "JSON Web Token", icon: (className) => <Jwt className={className} /> },
  ],
  frontend: [
    { name: "React", icon: (className) => <Reactjs className={className} /> },
    { name: "React Native", icon: (className) => <ReactNative className={className} /> },
    { name: "NextJs", icon: (className) => <Nextjs className={className} /> },
    { name: "Redux", icon: (className) => <Redux className={className} /> },
    { name: "Vue", icon: (className) => <Vue className={className} /> },
    { name: "Tailwind", icon: (className) => <Tailwind className={className} /> },
    { name: "Bootstrap", icon: (className) => <Bootstrap className={className} /> },
  ],
  extra: [
    { name: "JavaScript", icon: (className) => <Javascript className={className} /> },
    { name: "TypeScript", icon: (className) => <Typescript className={className} /> },
    { name: "PostgreSQL", icon: (className) => <Postgresql className={className} /> },
    { name: "MongoDB", icon: (className) => <Mongodb className={className} /> },
    { name: "GraphQl", icon: (className) => <Graphql className={className} /> },
    { name: "Docker", icon: (className) => <Docker className={className} /> },
    { name: "Redis", icon: (className) => <Redis className={className} /> },
  ],
};

export const education_data: EducationDataInterface[] = [
  {
    name: "Hacktiv8 Indonesia",
    subTitle: "Fullstack JavaScript Immersive",
    imgUrl:
      "https://pbs.twimg.com/profile_images/1303645505465974785/BAedfmOT_400x400.jpg",
    url: "https://www.hacktiv8.com/",
    date: "Jan 2022 - Apr 2022",
    desc: `Predicate : 95.5/100 (Teachers Awards) \n During the 4-month program, I gained valuable expertise in various aspects of JavaScript development, including Interaction workflow, API consumption, and deployment. Learning these technologies: React.js, Redux, Apollo Client, Tailwind CSS, Vue.js, jQuery, Node.js, Express.js, and PostgreSQL, GraphQL, Redis, Firebase, and MongoDB.`,
  },
];

export const project_data: ProjectDataInterface[] = [
  {
    img: "/ss2.png",
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab eligendi iure esse doloremque cupiditate!",
    tech: ["JavaScript", "ReactJs", "NextJs", "Tailwind"],
    url: "https://github.com/renesdwir",
  },
  {
    img: "/ss2.png",
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
