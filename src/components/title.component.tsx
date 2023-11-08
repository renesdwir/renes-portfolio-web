import React from "react";
interface TitlePropsTypes {
  text: string;
}
const Title = (props: TitlePropsTypes) => {
  const { text } = props;
  return (
    <div className="font-bold group uppercase sticky top-0 z-20 -mx-6 mb-4 bg-cstmblack/60 px-6 py-5 backdrop-blur lg:backdrop-blur-none md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto  lg:px-0 lg:py-0 lg:bg-transparent  ">
      <span className="group-hover:text-cstmgreen">{text}</span>
      <span className="group-hover:text-slate-200 text-cstmgreen ml-1">.</span>
    </div>
  );
};

export default Title;
