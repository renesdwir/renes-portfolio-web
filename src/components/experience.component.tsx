import { ExperienceDataInterface } from "@/data/data-types";
import Title from "./title.component";
import Link from "next/link";
import TechIcon from "./techIcon.component";
interface ExperiencePropsTypes {
  data: ExperienceDataInterface[];
}
const Experience = (props: ExperiencePropsTypes) => {
  const { data: datas } = props;
  return (
    <div id="experience" className="pt-16 mb-16 lg:pt-0 lg:mb-36 ">
      <Title text="Experience" />
      <div className="flex flex-col gap-8">
        {datas.map(({ at, date, description, link, position, tech }, idx) => (
          <Link
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className=" bg-cstmgreen  pl-1 rounded-md"
            key={idx}
          >
            <div className="card bg-cstmblack p-4 flex flex-col gap-4 text-slate-200 ">
              <div className="">
                <h3 className="text-lg font-semibold">
                  <span className="text-cstmgreen">{position}</span> @{at}
                </h3>
                <p className="text-xs -mt-1">{date}</p>
              </div>
              <div>{description}</div>
              <div className="flex flex-wrap flex-row gap-2">
                {tech.map((name, i) => (
                  <TechIcon name={name} key={i} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
