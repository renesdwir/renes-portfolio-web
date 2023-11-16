import { TechDataInterface } from "@/data/data-types";
import Image from "next/image";
import Link from "next/link";
import Title from "./title.component";

import { tech_data } from "@/data/data";
import {
  Express,
  Graphql,
  Javascript,
  Jwt,
  Mongodb,
  Mongoose,
  Nextjs,
  Postgresql,
  Prisma,
  Reactjs,
  Redux,
  Tailwind,
  Vue,
} from "./icons/Icons";
const Tech = () => {
  const datas = tech_data;
  return (
    <div id="skills" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <Title text="Some Technologies I've worked with" />
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="pl-2 border-l-2 border-cstmgreen text-sm mb-3">
            Back-End Development
          </h4>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-1 lg:gap-y-1.5">
            {datas.backend.map((data) => (
              <div className="flex flex-row items-center gap-2">
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
            {datas.frontend.map((data) => (
              <div className="flex flex-row items-center gap-2">
                {data.icon("w-6 h-6")}
                <span className="text-xs font-mono">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="pl-2 border-l-2 border-cstmgreen text-sm mb-3">I've used it</h4>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-1 lg:gap-y-1.5">
            {datas.extra.map((data) => (
              <div className="flex flex-row items-center gap-2">
                {data.icon("w-6 h-6")}
                <span className="text-xs font-mono">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row gap-4 flex-wrap mt-20">
        {datas.map(({ icon, name, url }, idx) => (
          <Link href={url} rel="noopener noreferrer" target="_blank" key={idx}>
            <Image
              src={`/icons/${icon}`}
              alt={name}
              width={0}
              height={0}
              className=" border  border-cstmgreen  p-1 w-12 h-12  hover:scale-110 transition-all ease-in duration-100   rounded"
            />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default Tech;
