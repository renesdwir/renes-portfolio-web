import Link from "next/link";
import React, { useEffect, useState } from "react";
interface NavProps {
  to: string;
  handleClick: () => void;
  isActive: boolean;
}
const Nav = (props: NavProps) => {
  return (
    <Link
      onClick={props.handleClick}
      href={`/#${props.to}`}
      className=" ease-in-out transition-all cursor-pointer capitalize"
    >
      <span
        className={`wrapper relative ${
          props.isActive ? "pl-8 text-black" : ""
        } transition-all ease-out pr-4 duration-500`}
      >
        <span
          className={`text capitalize  absolute ${
            props.isActive ? "w-full" : "w-0"
          } left-0 h-full inline-block  transition-all ease-out  duration-300 bg-cstmgreen -z-10`}
        ></span>
        {props.to}
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
