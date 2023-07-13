import React from "react";
import * as Icons from "react-icons/fa";
import Link from "next/link";

interface IconPropsTypes {
  className: string;
  iconName: string;
  href: string;
}
const Icon = (props: IconPropsTypes) => {
  const { className, iconName, href } = props;
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return (
    <Link
      href={href}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
    >
      {IconComponent && <IconComponent />}
    </Link>
  );
};

export default Icon;
