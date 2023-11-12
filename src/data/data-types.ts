export interface ProfileDataInterface {
  name: string;
  position: string;
  profileDescription: string[];
}
export interface Contact {
  name: string;
  icon: (className: string) => JSX.Element;
  url: string;
}

export interface NavigationDataInterface {
  nav: string[];
  contacts: Contact[];
}

export interface ExperienceDataInterface {
  position: string;
  at: string;
  date: string;
  link: string;
  description: string[];
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
