import Title from "./title.component";

import { tech_data } from "@/data/data";
const Tech = () => {
  const datas = tech_data;
  return (
    <section id="skills" className="pt-16 mb-16  lg:pt-24">
      <Title text="Some Technologies I've worked with" />
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="pl-2 border-l-2 border-cstmgreen text-sm mb-3">
            Back-End Development
          </h4>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-1 lg:gap-y-1.5">
            {datas.backend.map((data, idx) => (
              <div key={idx} className="flex flex-row items-center gap-2">
                {data.icon("w-6 h-6")}
                <span className="text-xs font-mono">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="pl-2 border-l-2 border-cstmgreen text-sm mb-3">
            Front-End Development
          </h4>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-1 lg:gap-y-1.5">
            {datas.frontend.map((data, idx) => (
              <div key={idx} className="flex flex-row items-center gap-2">
                {data.icon("w-6 h-6")}
                <span className="text-xs font-mono">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="pl-2 border-l-2 border-cstmgreen text-sm mb-3">I've used it</h4>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-1 lg:gap-y-1.5">
            {datas.extra.map((data, idx) => (
              <div key={idx} className="flex flex-row items-center gap-2">
                {data.icon("w-6 h-6")}
                <span className="text-xs font-mono">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
