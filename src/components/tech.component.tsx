import { TechDataInterface } from "@/data/data-types";
import Image from "next/image";
import Link from "next/link";
interface TechPropsTypes {
  data: TechDataInterface[];
}
const Tech = (props: TechPropsTypes) => {
  const { data: datas } = props;
  return (
    <div id="skills" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <div className="font-bold  uppercase sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto  lg:px-0 lg:py-0 lg:bg-transparent  ">
        Some Technologies I've worked with
        <span className="text-cstmgreen ml-1">:</span>
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
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
      </div>
    </div>
  );
};

export default Tech;
