import Link from "next/link";
import React, { useEffect, useState } from "react";
const getHash = () =>
  typeof window !== "undefined" ? decodeURIComponent(window.location.hash) : undefined;
const Nav = ({ to }: { to: string }) => {
  const [location, setLocation] = useState(getHash());
  console.log(location);
  const handleChangeLocation = () => {
    setLocation(getHash());
  };
  // const NavItem = [
  //   {
  //     name: "About",
  //     path: `/#about`,
  //     current: router.pathname === "#about",
  //   },
  //   {
  //     name: "Experience",
  //     path: `/#experience`,
  //     current: router.pathname === "/#experience",
  //   },
  //   {
  //     name: "Skills",
  //     path: `/#skills`,
  //     current: router.pathname === "/#skills",
  //   },
  // ];
  // useEffect(() => {
  //   // NavItem.forEach((nav) => {
  //   //   nav.current = nav.path === router.pathname;
  //   // });
  //   console.log(router);
  // }, [router.pathname]);
  return (
    <Link
      href={`/#${to}`}
      className=" ease-in-out transition-all cursor-pointer capitalize"
      onClick={handleChangeLocation}
    >
      <span className="wrapper relative  transition-all ease-out  duration-500">
        <span className="text capitalize  absolute w-0 left-0 h-full inline-block  transition-all ease-out  duration-300 bg-cstmgreen -z-10"></span>
        {to}
      </span>
    </Link>
    // <Link
    //   to={to}
    //   activeClass="active-link"
    //   className=" ease-in-out transition-all cursor-pointer capitalize"
    //   spy={true}
    //   smooth={true}
    //   duration={450}
    //   offset={-100}
    // >
    //   <span className="wrapper relative  transition-all ease-out  duration-500">
    //     <span className="text capitalize  absolute w-0 left-0 h-full inline-block  transition-all ease-out  duration-300 bg-cstmgreen -z-10"></span>
    //     {to}
    //   </span>
    // </Link>
  );
};

export default Nav;
