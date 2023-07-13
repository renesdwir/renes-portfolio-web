"use client";
import About from "@/components/about.component";
import Education from "@/components/education.component";
import Experience from "@/components/experience.component";
import Footer from "@/components/footer.component";
import Profile from "@/components/profile.component";
import Project from "@/components/project.component";
import Tech from "@/components/tech.component";
import {
  profile_data,
  navigation_data,
  about_data,
  experience_data,
  education_data,
  footer_data,
  project_data,
  tech_data,
} from "@/data/data";

export default function Home() {
  return (
    <main className="font-poppins mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Profile data={profile_data} navigation={navigation_data} />
        <div className="lg:w-1/2 lg:py-24 mt-10 lg:mt-0">
          <About data={about_data} />
          <Experience data={experience_data} />
          <Tech data={tech_data} />
          <Education data={education_data} />
          <Project data={project_data} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
