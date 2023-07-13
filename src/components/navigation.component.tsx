import React from "react";
import { Link } from "react-scroll";

const Nav = ({ to }: { to: string }) => {
  return (
    <div>
      <Link
        to={to}
        activeClass="active-link"
        className=" ease-in-out transition-all cursor-pointer capitalize"
        spy={true}
        smooth={true}
        duration={450}
        offset={-100}
      >
        <span className="wrapper relative  transition-all ease-out  duration-500">
          <span className="text capitalize  absolute w-0 left-0 h-full inline-block  transition-all ease-out  duration-300 bg-cstmgreen -z-10"></span>
          {to}
        </span>
      </Link>
    </div>
  );
};

export default Nav;
