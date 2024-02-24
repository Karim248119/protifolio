"use client";
import { faFaceAngry, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { FaIcons, FaLocationArrow, FaSearchLocation } from "react-icons/fa";

export default function MobileAbout() {
  return (
    <div className=" w-full h-[40vh] ">
      <div className="   w-full h-[30vh] flex flex-cols justify-center items-center -mt-2 ">
        <div className="h-[130px] w-[130px] bg-black rounded-full flex justify-center items-center border-b-2 border-g ">
          <div className=" h-[120px] w-[120px] bg-bg rounded-full flex justify-center items-end ">
            <div className=" h-[180px] w-[130px] bg-personal rounded-b-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full  flex items-center flex-col -mt-5 text-bg">
        <h1 className="  text-xl  pb-2  ">Karim Abdel-Halim</h1>
        <p className="  pb-2 text-sm text-white">Front-End Developer</p>
        <div className=" flex items-center gap-1 text-sm ">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className=" text-white">Egypt, Cairo</p>
        </div>
      </div>
    </div>
  );
}
