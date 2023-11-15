import Title from "./title.component";
import Image from "next/image";

import { education_data } from "@/data/data";
import Link from "next/link";

const Education = () => {
  const datas = education_data;
  return (
    <div id="education" className="pt-16 mb-16 lg:pt-0 lg:mb-36">
      <Title text="Education" />
      <div className="flex flex-col">
        {datas.map((data) => (
          <div className="flex flex-row items-start gap-4">
            <div>
              <Image src={data.imgUrl} alt="Hacktiv8 Indonesia" width={70} height={70} />
            </div>
            <div className="flex-1">
              <Link href={data.url} className="font-bold text-cstmgreen">
                {data.name}
              </Link>
              <p className="text-sm">{data.subTitle}</p>
              <p className="text-sm opacity-70">{data.date}</p>
              <p
                className="text-sm whitespace-pre-line mt-1"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
