import React from "react";

const TechIcon = ({ name }: { name: string }) => {
  return (
    <div className="px-3 py-1.5 bg-cstmgreen/10 font-light font-mono text-cstmgreen text-center text-xs">
      {name}
    </div>
  );
};

export default TechIcon;
