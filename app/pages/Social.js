"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Social() {
  const phoneNumber = "01023066263"; // Replace this with the desired phone number
  const message = "Hello!";
  return (
    <div>
      <div className=" md:h-[30vh] h-[15vh] w-full flex justify-center items-start lg-gb md:items-center md:text-3xl md:gap-10 gap-5">
        <a
          href="https://www.facebook.com/kareem.kemo.75098364?locale=ar_AR"
          className=" md:p-4 p-2 border-2 border-g rounded-full text-g btn-1 hover-bg-g text-gb"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/sora_00013/"
          className=" md:p-4 p-2 border-2 border-g rounded-full text-g btn-1 hover-bg-g text-gb"
        >
          <FaInstagram />
        </a>

        <a
          href="https://github.com/Karim248119"
          className=" md:p-4 p-2 border-2 border-g rounded-full text-g btn-1 hover-bg-g text-gb"
        >
          <FaGithub className="hover:text-gb" />
        </a>

        <a
          className=" md:p-4 p-2 border-2 border-g rounded-full text-g btn-1 hover-bg-g text-gb"
          onClick={() => {
            window.open(
              `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`,
              "_blank"
            );
          }}
        >
          <FaWhatsapp className="hover:text-gb" />
        </a>
      </div>
      <div className=" flex items-center gap-2 justify-center -mt-8 mb-10 -ml-2 text-g md:hidden ">
        <FontAwesomeIcon icon={faPhone} className="hover:text-gb" />
        <p className=" text-white">01023096263</p>
      </div>
    </div>
  );
}
