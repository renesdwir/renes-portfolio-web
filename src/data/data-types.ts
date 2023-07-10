export interface ProfileDataInterface {
  name: string;
  position: string;
  profileDescription: string[];
}
export interface NavigationDataInterface {
  nav: string[];
  contacts: {
    name: string;
    icon: string;
    url: string;
  }[];
}
export interface AboutDataInterface {
  [index: number]: string;
}
export interface ExperienceDataInterface {
  position: string;
  at: string;
  date: string;
  link: string;
  description: string;
  tech: string[];
}
export interface TechDataInterface {
  name: string;
  icon: string;
  url: string;
}
export interface EducationDataInterface {
  logo: string;
  name: string;
  date: string;
  achievement: string;
  desc: string;
}
export interface ProjectDataInterface {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  url: string;
}
export interface FooterDataInterface {
  [index: number]: string;
}
