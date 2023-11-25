import Link from "next/link";
import React from "react";
interface NavProps {
  to: string;
  isActive: boolean;
}
const Nav = (props: NavProps) => {
  return (
    <Link
      href={`/#${props.to}`}
      className=" ease-in-out group transition-all cursor-pointer capitalize  w-40"
    >
      <span
        className={`wrapper  relative ${
          props.isActive ? "pl-8 text-black" : ""
        } group-hover:pl-8 group-hover:text-black transition-all ease-out pr-4 duration-500 `}
      >
        <span
          className={`text capitalize group-hover:w-full absolute ${
            props.isActive ? "w-full" : "w-0"
          }   left-0 h-full inline-block  transition-all ease-out  duration-300 bg-cstmgreen -z-10`}
        ></span>
        {props.to}
      </span>
    </Link>
  );
};

export default Nav;
