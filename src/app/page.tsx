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
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("");
  console.log(currentSection);
  useEffect(() => {
    const handleScroll = () => {
      // Mendapatkan posisi scroll vertikal
      const scrollPosition = window.scrollY;

      // Mendapatkan semua elemen section di halaman
      const sections = document.querySelectorAll("section");

      // Iterasi melalui setiap elemen section dan memeriksa posisi scroll
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Memeriksa apakah posisi scroll berada di dalam batas section tertentu
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Mengatur ID section saat ini
          setCurrentSection(section.id);
        }
      });
    };

    // Menambahkan event listener untuk memantau perubahan scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada unmount komponen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // useEffect hanya dijalankan sekali pada mount komponen

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
