"use client";
import { Input } from "@material-tailwind/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function MobileContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9mbngfc", "template_2n13ek8", form.current, {
        publicKey: "JTlpYoyrrGRpqcC0r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="mobContact"
      className=" w-full h-[60vh] flex flex-col items-center relative bg-black"
    >
      <h1 className=" text-2xl font-semibold p-7 text-center w-full text-bg capitalize">
        contact me
      </h1>
      <form className="w-[80%] h-[50%] flex flex-col gap-5" ref={form}>
        <Input
          type="name"
          variant="standard"
          label="Name"
          color="teal"
          className="w-full text-white"
          name="user_name"
        />
        <Input
          type="email"
          variant="standard"
          label="E-mail"
          color="teal"
          className="w-full text-white"
          name="user_email"
        />
        <Input
          variant="standard"
          label="Message"
          color="teal"
          className="w-full text-white"
          name="message"
        />
      </form>
      <button
        className=" overflow-hidden btn-15 p-10 border-2 border-g text-g mt-5"
        onClick={sendEmail}
      >
        SEND MESSAGE
      </button>
    </div>
  );
}
