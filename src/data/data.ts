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
  position: "Junior Software Engineer",
  profileDescription: [
    "Adaptable programmers, ",
    "Quick learners, and Highly Consistent.",
  ],
};

export const navigation_data: NavigationDataInterface = {
  nav: ["about", "experience", "skills", "education", "projects"],
  contacts: [
    {
      name: "Instagram",
      icon: "FaInstagram",
      url: "https://www.instagram.com/renessdwir/",
    },
    {
      name: "Github",
      icon: "FaGithub",
      url: "https://github.com/renesdwir",
    },
    {
      name: "Linkedin",
      icon: "FaLinkedin",
      url: "https://www.linkedin.com/in/renesdwir/",
    },
  ],
};

export const about_data: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat elementum congue. Nunc commodo congue tortor ac euismod. Mauris vulputate justo eros, ut pulvinar urna pharetra sed. Mauris auctor scelerisque imperdiet. Nunc tincidunt felis at consectetur vehicula. Aliquam et massa id est feugiat venenatis. Aliquam erat volutpat. Mauris tempor efficitur elit, at.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mollis sapien. Pellentesque tincidunt viverra dignissim. Fusce semper maximus finibus. Donec sed ornare sem. Aliquam dignissim vestibulum tellus sit amet rutrum. Morbi interdum magna et tellus lacinia, ut feugiat ligula laoreet. Etiam ac.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit ipsum nec urna interdum bibendum ut vitae diam. Curabitur et nulla eget massa tempor interdum. Fusce.",
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
