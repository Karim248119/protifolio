"use client";
import {
  faBook,
  faLocationDot,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaBookOpen, FaLaptopCode, FaSms } from "react-icons/fa";
import { Link } from "react-scroll/modules";
import "../Animation.css";

export default function HomePage() {
  return (
    <div className="h-[100vh] w-full relative">
      <div className=" h-[105vh] w-[4px] shadow-bg bg-bg absolute right-[25%]"></div>
      <div className="h-[15%] w-full NAV flex justify-center items-center gap-5 text-gray-400 "></div>
      <div className="grid grid-cols-2 h-[85%]">
        <div className=" w-full h-full  md:pl-20 pl-8 pt-20">
          <h1 className=" md:text-5xl text-xl  pb-5 text-gray-400  slideTop">
            Hello, I'm
          </h1>
          <h1 className=" md:text-5xl text-xl  pb-5 text-bg slideLeft">
            Karim Abdel-Halim
          </h1>
          <p className=" text-white ml-1 pb-20">Front-End Developer</p>
          <div className=" flex items-center gap-3  ml-1  pb-5 text-g  slideRight">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className=" text-white">Egypt, Cairo</p>
          </div>
          <div className=" flex items-center gap-2  ml-1 text-g  slideRight">
            <FontAwesomeIcon icon={faPhone} />
            <p className=" text-white">01023096263</p>
          </div>
        </div>
        <div className=" flex justify-center items-aroundz-10 ">
          <div className=" relative h-[250px] w-[250px]  justify-end flex ">
            <div className="h-[250px] w-[125px] shadow-bg bg-bg rounded-r-full rounded-l-none  bottom-[300px] left-1/2 flex justify-end" />
            <div className="h-[244px] absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[244px] bg-black rounded-full  flex justify-center items-center  ">
              <div className=" h-[230px] w-[230px] shadow-bg bg-bg rounded-full flex justify-center items-end relative">
                <div className=" h-[330px] w-[230px] bg-personal rounded-b-full" />
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" absolute -left-14 -top-14 Nav-hover slide-bl"
                >
                  <div className="p-4 border-2 border-g rounded-full text-g btn-1 hover-bg-g hover:text-black relative">
                    <FaLaptopCode />
                    <p className=" absolute top-1/2 -translate-y-1/2 left-0 opacity-0 text-bg ">
                      Projects
                    </p>
                  </div>
                </Link>

                <Link
                  activeClass="active"
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" absolute -left-40 top-24 Nav-hover slide-l"
                >
                  <div className="p-4 border-2 border-g rounded-full text-g btn-1 hover-bg-g hover:text-black relative">
                    <FaBookOpen className="" />
                    <p className=" absolute top-1/2 -translate-y-1/2 left-0 opacity-0 text-bg ">
                      Courses
                    </p>
                  </div>
                </Link>

                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" absolute -left-14 -bottom-14 Nav-hover slide-tl"
                >
                  <div className="p-4 border-2 border-g rounded-full text-g btn-1 hover-bg-g hover:text-black relative">
                    <FaSms className="" />
                    <p className=" absolute top-1/2 -translate-y-1/2 left-0 opacity-0 text-bg ">
                      Contact
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
