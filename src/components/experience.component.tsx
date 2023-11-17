import Title from "./title.component";
import Link from "next/link";
import TechIcon from "./techIcon.component";
import { experience_data } from "@/data/data";

const Experience = () => {
  const datas = experience_data;
  return (
    <div id="experience" className="pt-16 mb-16 lg:pt-0 lg:mb-36 ">
      <Title text="Experience" />
      <div className="flex flex-col ">
        {datas.map(({ at, date, description, link, position, tech }, idx) => (
          <div
            key={idx}
            className="-mx-4 group p-4 pb-6 flex flex-col gap-4 hover:bg-gray-400 rounded-md bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 transition duration-200 ease-in-out"
          >
            <div className="">
              <Link href={link} className="text-lg font-semibold cursor-pointer">
                <span className="group-hover:text-cstmgreen text-cstmgreen lg:text-slate-200">
                  {position}{" "}
                </span>
                · {at}
              </Link>
              <p className="text-xs">{date}</p>
            </div>
            <div className="text-sm flex flex-col gap-2">
              {description.map((desc, idx) => (
                <span key={idx}>{desc}</span>
              ))}
            </div>
            <div className="flex flex-wrap flex-row gap-2">
              {tech.map((item, idx) => (
                <TechIcon key={idx} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
