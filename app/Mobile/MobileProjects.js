"use client";
import React from "react";
import {
  FaBeer,
  SiTailwindcss,
  BiLogoTailwindCss,
  TbBrandTailwind,
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaJsSquare,
} from "react-icons/fa";
import ProjectCard from "../Components/ProjectCard";
export default function MobileProjects() {
  return (
    <div id="mobProjects" className="p-7">
      <h1 className=" text-2xl font-semibold tracking-wide pb-7 text-center w-full text-bg capitalize">
        Web projects
      </h1>
      <div className=" h-[75vh] w-full grid grid-cols-1 grid-rows-3 px-5 gap-7 relative text-black">
        <div className=" w-full h-full  relative flex justify-center items-center card shadow rounded-3xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/k-store.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className="  p-2 text-center bg-black w-full font-bold text-g self-center ">
              K-Store{" "}
            </h1>
            <ul className=" text-sm font-bold mt-5  flex justify-center gap-2">
              <li className=" flex items-center ">
                <img
                  className=" h-3 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a
              href="https://k-commerce.netlify.app/"
              className="self-center mt-3"
            >
              <button className=" rounded-full btn-15 w-20 h-7 flex justify-center items-center">
                <span className=" text-[10px]"> View Page</span>
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>

        <div className=" w-full h-full  relative flex justify-center items-center card shadow rounded-3xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/TOP20.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className="  p-2 text-center bg-black w-full font-bold text-g self-center ">
              Top-20{" "}
            </h1>
            <ul className=" text-sm font-bold mt-5  flex justify-center gap-2">
              <li className=" flex items-center ">
                <img
                  className=" h-3 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a href="https://top-20.netlify.app/" className="self-center mt-3">
              <button className=" rounded-full btn-15 w-20 h-7 flex justify-center items-center">
                <span className=" text-[10px]"> View Page</span>
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full h-full bg-white relative flex justify-center items-center card shadow rounded-3xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/witcher.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className="  p-2 text-center bg-black w-full font-bold text-g self-center ">
              Watch List{" "}
            </h1>
            <ul className=" text-sm font-bold mt-5  flex justify-center gap-2">
              <li className=" flex items-center ">
                <img
                  className=" h-3 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a
              href="https://kwatchlist.netlify.app/"
              className="self-center mt-3"
            >
              <button className=" rounded-full btn-15 w-20 h-7 flex justify-center items-center">
                <span className=" text-[10px]"> View Page</span>

                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <h1 className=" text-2xl font-semibold tracking-wide pb-7 pt-12 text-center w-full text-bg capitalize">
        Mobile projects
      </h1>
      <div className=" h-[75vh] w-full grid grid-cols-1 grid-rows-3 px-5 gap-7 relative text-black">
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/Ringfill.png"}
          title={"Ringfill"}
          figmaLINK={
            "https://www.figma.com/file/bTtKG6F851WaOB8n4aVxhA/RF-mobile?type=design&node-id=0%3A1&mode=design&t=4LITcOJmjmkbSFZV-1"
          }
          githubLink={"https://github.com/aheart500/Ringfill"}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/MedC.jpg"}
          title={"MedC"}
          githubLink={"https://github.com/Karim248119/MedC"}
        />
        <ProjectCard
          imgSrc={"../../pics/nativeProjects/night activities.png"}
          title={"NA"}
          githubLink={true}
          figmaLINK={
            "https://www.figma.com/file/evOWv5bNFT0ptlfrLXJ3kr/NA?type=design&node-id=0%3A1&mode=design&t=TiKMq5ENLJHivG2P-1"
          }
        />
      </div>
    </div>
  );
}
