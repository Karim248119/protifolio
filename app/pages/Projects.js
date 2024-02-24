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
export default function Projects() {
  return (
    <div id="projects">
      <h1 className=" text-5xl font-bold p-14 text-center w-full text-bg capitalize">
        Web projects
      </h1>
      <div className="  w-full grid grid-cols-3 grid-rows-2 gap-10 px-40 py-20 relative bg-img2">
        <div className=" h-full w-full absolute opacity-80 bg-bg top-0 left-0"></div>
        <div className=" w-full h-full bg-white relative flex justify-center items-center card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/k-store.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              K-Store{" "}
            </h1>
            <ul className=" text-2xl font-bold mt-10  flex justify-center gap-8">
              <li className=" flex items-center ">
                <img
                  className=" h-5 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a
              href="https://k-commerce.netlify.app/"
              className="self-center mt-10"
            >
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>

        <div className=" w-full h-full bg-white flex justify-center items-center relative card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/Untitled.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            {/* <div className='flex text-center justify-center items-center'>
                        <img src='/pics/Projects/png/33483-4-house-lannister-transparent-image.png' className='w-10 h-10 mr-1' ></img>
                        <h1 className=' text-xl got text-yellow-600 self-end'>House Lannister </h1>
                    </div> */}
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              Petadopt{" "}
            </h1>
            <ul className=" text-2xl font-bold mt-10 flex justify-center items-center gap-8">
              <li className=" flex items-center">
                <img
                  className=" h-5 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <img
                  className=" h-10 brightness-0"
                  src="/pics/skills/next-js-logo-7929BCD36F-seeklogo.com.png"
                ></img>
              </li>
            </ul>
            <a
              href="https://k-petadopt.netlify.app/"
              className="self-center mt-10"
            >
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full h-full bg-white relative flex justify-center items-center card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/TOP20.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              Top-20{" "}
            </h1>
            <ul className=" text-2xl font-bold mt-10  flex justify-center gap-8">
              <li className=" flex items-center ">
                <img
                  className=" h-5 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a href="https://top-20.netlify.app/" className="self-center mt-10">
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full h-full bg-white relative flex justify-center items-center card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/witcher.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              Watch List{" "}
            </h1>
            <ul className=" text-2xl font-bold mt-10  flex justify-center gap-8">
              <li className=" flex items-center ">
                <img
                  className=" h-5 brightness-0"
                  src="/pics/skills/Tailwind_CSS_logo.svg.png"
                ></img>
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a
              href="https://kwatchlist.netlify.app/"
              className="self-center mt-10"
            >
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>

        <div className=" w-full h-full bg-white relative flex justify-center items-center overflow-hidden card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/history.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              House Lannister{" "}
            </h1>
            <ul className=" text-2xl font-bold mt-10  flex justify-center gap-8">
              <li className=" flex items-center ">
                <FaCss3 className="mr-2" />
                Css
              </li>
              <li className=" flex items-center">
                <FaReact className="mr-2" /> React js
              </li>
            </ul>
            <a
              href="https://lannister.netlify.app/#/"
              className="self-center mt-10"
            >
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
        <div className=" w-full h-full bg-white relative flex justify-center items-center card s-shadow rounded-xl">
          <img
            className=" w-[100%] h-full"
            src="/pics/Projects/page/antichristos.png"
          ></img>
          <div className=" h-0 w-0 opacity-0 absolute z-10 bg-white  flex flex-col info ">
            <h1 className=" text-3xl p-5 text-center bg-black w-full font-bold text-g self-center ">
              Anti-Christos
            </h1>
            <ul className=" text-2xl font-bold mt-10  flex justify-center gap-8">
              <li className=" flex items-center">
                <FaHtml5 className="mr-2" /> Html
              </li>
              <li className=" flex items-center ">
                <FaCss3 className="mr-2" />
                Css
              </li>
              <li className=" flex items-center">
                <FaJsSquare className="mr-2 scale-150" />{" "}
              </li>
            </ul>
            <a
              href="https://mpeetl3vwnqdw0tp5nz38q.on.drv.tw/%D8%A7%D9%86%D8%AA%D9%8A%D8%AE%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D8%B3%20/index%20.html"
              className="self-center mt-10"
            >
              <button className=" rounded-full btn-15">
                View Page
                <span class="first"></span>
                <span class="second"></span>
                <span class="third"></span>
                <span class="fourth"></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
