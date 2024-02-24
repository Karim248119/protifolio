"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TopButton from "./pages/TopButton";
import Courses from "./pages/Courses";
import MobileAbout from "./Mobile/MobileAbout";
import MobileSkills from "./Mobile/MobileSkills";
import MobileProjects from "./Mobile/MobileProjects";
import MobileCourses from "./Mobile/MobileCourses";
import MobileContact from "./Mobile/MobileContact";
import Social from "./pages/Social";
import { MobileSpeed } from "./Mobile/MobileSpeed";
import NativeProjects from "./pages/NativeProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between">
      <div className=" hidden md:block">
        <HomePage />
        <Skills />
        <Projects />
        <NativeProjects />
        <Courses />
        <Contact />
        <Social />
      </div>
      <div className=" block md:hidden w-full text-white">
        <MobileSpeed />
        <MobileAbout />
        <MobileSkills />
        <MobileProjects />
        <MobileCourses />
        <MobileContact />
        <Social />
      </div>

      <TopButton />
    </main>
  );
}
