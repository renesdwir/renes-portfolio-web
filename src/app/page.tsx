"use client";
import {
  About,
  Education,
  Experience,
  Footer,
  Profile,
  Project,
  Tech,
} from "@/components/components";

export default function Home() {
  return (
    <main className="font-poppins mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Profile />
        <div className="lg:w-1/2 lg:py-24 mt-10 lg:mt-0">
          <About />
          <Experience />
          <Tech />
          <Education />
          <Project />
          <Footer />
        </div>
      </div>
    </main>
  );
}
