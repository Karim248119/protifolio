import React from "react";
import { FaFigma, FaGithub, FaLaptopCode } from "react-icons/fa";

export default function Icon({ git }) {
  return (
    <div className=" md:w-10 md:h-10 w-6 h-6 border-2 border-g rounded-full text-g btn-1 hover-bg-g hover:text-black relative">
      {git ? (
        <FaGithub className=" absolute md:w-6 md:h-6 w-3 h-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      ) : (
        <FaFigma className=" absolute md:w-6 md:h-6 w-3 h-3  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      )}
    </div>
  );
}
