import { TechDataInterface } from "@/data/data-types";
import Image from "next/image";
import Link from "next/link";
import Title from "./title.component";
interface TechPropsTypes {
  data: TechDataInterface[];
}
const Tech = (props: TechPropsTypes) => {
  const { data: datas } = props;
  return (
    <div id="skills" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <Title text="Some Technologies I've worked with" />
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
