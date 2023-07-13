import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Title from "./title.component";
import { ProjectDataInterface } from "@/data/data-types";
import Link from "next/link";
import TechIcon from "./techIcon.component";

interface ProjectPropsTypes {
  data: ProjectDataInterface[];
}
const Project = (props: ProjectPropsTypes) => {
  const { data: datas } = props;
  return (
    <div id="projects" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <Title text="Projects" />
      <div className="flex flex-col gap-5 text-slate-200">
        {datas.map(({ desc, img, tech, title, url }, idx) => (
          <Link
            key={idx}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className=" flex flex-col-reverse md:flex-row p-3 rounded group cursor-pointer  border border-cstmgreen"
          >
            <div className="flex-1 mt-3 md:mt-0">
              <p className=" relative inline-block font-semibold text-lg">
                <span className="font-light">2023 |</span>{" "}
                <span className="text-cstmgreen">{title}</span>
                <BiArrowBack className="text-slate-200 absolute -right-5 top-2.5 rotate-[135deg] group-hover:translate-x-2 group-hover:-translate-y-2 ease-in duration-100 text-sm" />
              </p>
              <p className="my-2">{desc}</p>
              <div className="flex flex-wrap flex-row gap-2">
                {tech.map((name, idx) => (
                  <TechIcon name={name} key={idx} />
                ))}
              </div>
            </div>
            <div className=" flex items-center">
              <div className="p-7 bg-slate-200 rounded-lg">
                <Image
                  src={`/icons/${img}`}
                  alt="projects"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-20 h-20 inline-block"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
