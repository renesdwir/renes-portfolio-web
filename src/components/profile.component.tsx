import React, { useEffect, useState } from "react";
import Nav from "./navigation.component";
import Link from "next/link";
import { profile_data, navigation_data, name } from "@/data/data";
const getHash = () =>
  typeof window !== "undefined" ? decodeURIComponent(window.location.hash) : "";

const Profile = () => {
  const { position, profileDescription } = profile_data;
  const { contacts, nav } = navigation_data;
  const [location, setLocation] = useState("");
  const handleClick = (loc: string) => {
    setLocation(`#${loc}`);
  };
  useEffect(() => {
    const hash = getHash();
    setLocation(hash !== undefined ? hash : "");
  }, []);
  console.log(location);
  return (
    <div className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24">
      <h1 className="inline-block font-extrabold text-4xl md:text-4xl lg:text-5xl tracking-tighter selection:bg-cstmgreen selection:text-cstmblack">
        <span>
          {name.map((item, idx) => (
            <span className="hover:text-cstmgreen" key={idx}>
              {item}
            </span>
          ))}
          <span className="text-cstmgreen">.</span>
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
          <Nav
            to={text}
            key={idx}
            handleClick={() => handleClick(text)}
            isActive={location === `#${text}`}
          />
        ))}
      </div>
      <div className="flex flex-row gap-5 mt-8">
        {contacts.map((contact, idx) => (
          <Link key={idx} href={contact.url} rel="noopener noreferrer" target="_blank">
            {contact.icon(
              "h-9 w-9 bg-transparent fill-slate-200  hover:fill-cstmgreen cursor-pointer"
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;
