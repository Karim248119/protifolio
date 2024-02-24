"use client";
import React from "react";
import { FaFigma, FaReact } from "react-icons/fa";
import Icon from "./Icon";

export default function ProjectCard({ title, imgSrc, figmaLINK, githubLink }) {
  return (
    <div className=" w-full h-full relative flex justify-center items-center card  s-shadow rounded-lg ">
      <img className=" w-[100%] h-full " src={imgSrc}></img>
      <div className=" h-full w-full opacity-0 absolute z-10 flex items-end innrShadow hover:opacity-100 transition-all delay-100 rounded-lg">
        <div className="w-full flex justify-between items-center flex-row pb-3 md:px-8 px-4">
          <p className=" font-semibold text-white md:text-2xl">{title}</p>
          <div className="flex flex-row gap-2">
            {figmaLINK && (
              <a href={figmaLINK}>
                <Icon git={false} />
              </a>
            )}
            {githubLink && (
              <a href={githubLink}>
                <Icon git={true} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
