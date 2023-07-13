import { AboutDataInterface } from "@/data/data-types";
import Title from "./title.component";
interface AboutPropsTypes {
  data: string[];
}
const About = (props: AboutPropsTypes) => {
  const { data: datas } = props;
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
