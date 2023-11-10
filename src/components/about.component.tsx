import Title from "./title.component";
import { about_data } from "@/data/data";

const About = () => {
  const datas = about_data;
  return (
    <div id="about" className="pt-16  lg:pt-0 lg:mb-36">
      <Title text="About" />
      <div className="space-y-4">
        {datas.map((data, idx) => (
          <p key={idx}>{data}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
