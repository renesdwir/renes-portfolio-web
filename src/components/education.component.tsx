import { EducationDataInterface } from "@/data/data-types";
import Hacktiv from "../../public/icons/hacktivsvg.svg";
import Title from "./title.component";
import Image from "next/image";
interface EducationPropsTypes {
  data: EducationDataInterface[];
}
const Education = (props: EducationPropsTypes) => {
  const { data: datas } = props;
  return (
    <div id="education" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <Title text="Education" />
      <div className="flex flex-col gap-5">
        {datas.map(({ achievement, date, desc, logo, name }, idx) => (
          <div key={idx}>
            <Image
              src={`/icons/${logo}`}
              alt={name}
              width={0}
              height={0}
              className="w-36"
            />
            <h3 className="text-lg font-semibold text-cstmgreen">{name}</h3>
            <p className="text-xs -mt-1 mb-3">{date}</p>
            <p>{achievement}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
