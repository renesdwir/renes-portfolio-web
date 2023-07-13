import React from "react";

const TechIcon = ({ name }: { name: string }) => {
  return (
    <div className="px-3 py-1 bg-cstmgreen/10 text-cstmgreen text-center text-xs rounded-md">
      {name}
    </div>
  );
};

export default TechIcon;
