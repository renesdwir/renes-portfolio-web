import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import Title from "./title.component";
import TechIcon from "./techIcon.component";
import { project_data } from "@/data/data";
import Link from "next/link";

const Project = () => {
  const datas = project_data;
  return (
    <section id="projects" className="pt-16 mb-16 lg:pt-24 lg:mb-36">
      <Title text="Projects" />
      <div className="flex flex-col  text-slate-200">
        {datas.map(({ desc, img, tech, title, url }, idx) => (
          <div
            key={idx}
            className="-mx-4 group p-4 pb-6 gap-x-4 gap-y-4 flex flex-col-reverse lg:flex-row  hover:bg-gray-400 rounded-md bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 transition duration-200 ease-in-out"
          >
            <div
              className={`w-52 h-28  relative group-hover:outline group-hover:outline-2 outline-gray-400/20 rounded ${
                img !== "" ? "" : "hidden lg:block"
              }`}
            >
              <Image
                alt={title + " Photo"}
                src={img !== "" ? img : "/noimage.jpg"}
                fill={true}
                sizes="(max-width:768px) 100vw, 700px"
                className="object-cover rounded text-xs"
              />
            </div>
            <div className="flex-1 flex flex-col gap-y-2">
              <div>
                <Link
                  href={url}
                  target="_blank"
                  className="font-bold relative inline-block cursor-pointer group-hover:text-cstmgreen"
                >
                  {title}
                  <BiArrowBack className="text-slate-200 absolute -right-5 top-[6.2px] rotate-[135deg] group-hover:translate-x-1 group-hover:-translate-y-1 ease-in duration-100 text-sm" />
                </Link>
              </div>
              <p className="text-sm font-light whitespace-pre-line">{desc}</p>
              <div className="flex flex-wrap flex-row gap-2">
                {tech.map((name, idx) => (
                  <TechIcon name={name} key={idx} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3 ">
        <div className=" w-full h-32 relative mb-4">
          <Image
            src="https://streak-stats.demolab.com?user=renesdwir&locale=en&mode=daily&theme=dark&hide_border=false&border_radius=5&order=3"
            alt="streak graph"
            fill={true}
            className="object-contain"
            sizes="(max-width:768px) 100vw, 700px"
          />
        </div>
        <Link
          className="text-sm underline-offset-4 underline hover:text-cstmgreen relative group"
          href={"https://github.com/renesdwir?tab=repositories"}
          target="_blank"
        >
          See all of my repositories on GitHub
          <BiArrowBack className="group:text-cstmgreen absolute -right-[17px] top-1 rotate-[180deg] group-hover:translate-x-1  ease-in duration-100 text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default Project;
