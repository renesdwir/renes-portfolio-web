import useHash from "@/hooks/useHash";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Nav = ({ to }: { to: string }) => {
  const [location, setLocation] = useState("");
  const hash = useHash();
  // console.log(hash);
  console.log(location, "location");
  useEffect(() => {
    setLocation(window.location.hash);
    // console.log("Hash:", window.location.hash);
  }, []);
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
