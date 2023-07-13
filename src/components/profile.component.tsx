import React from "react";
import Icon from "./icon.component";
import { Link } from "react-scroll";
import {
  NavigationDataInterface,
  ProfileDataInterface,
} from "@/data/data-types";
import Nav from "./navigation.component";
interface ProfilePropsTypes {
  data: ProfileDataInterface;
  navigation: NavigationDataInterface;
}

const Profile = (props: ProfilePropsTypes) => {
  const { name, position, profileDescription } = props.data;
  const { contacts, nav } = props.navigation;
  return (
    <div className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24">
      <h1 className="inline-block font-extrabold text-4xl md:text-4xl lg:text-5xl tracking-tighter">
        <span>
          {name}
          <span className="text-cstmgreen ml-1">.</span>
        </span>
      </h1>
      <p className="my-3 font-semibold text-lg text-cstmgreen">{position}</p>
      <div>
        {profileDescription.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
      <div className="flex-col my-6 hidden lg:flex gap-2">
        {nav.map((text, idx) => (
          <Nav to={text} key={idx} />
        ))}
      </div>
      <div className="flex flex-row gap-5 mt-8">
        {contacts.map((contact, idx) => (
          <Icon
            key={idx}
            className="flex items-center hover:text-cstmgreen text-4xl cursor-pointer"
            iconName={contact.icon}
            href={contact.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
