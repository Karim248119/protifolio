import React from "react";

export default function MobileSkills() {
  return (
    <>
      <div className="h-[100vh] p-8 pt-0 w-full bg-g  text-xs  font-semibold wavy-bg">
        <h1 className="  pb-7 text-center text-2xl text-black font-bold tracking-wide pt-32">
          Skills
        </h1>
        <div className=" h-[60vh] w-full grid grid-cols-2 grid-rows-5 gap-5">
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-2 ">
            <img
              className=" h-[50%]"
              src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
            ></img>
            <p className=" ">HTML</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-2">
            <img
              className=" h-[50%]"
              src="https://img.icons8.com/?size=80&id=pB8mjNJpo2FG&format=png"
            ></img>
            <p className=" ">CSS</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black  ">
            <img
              className=" h-[60%]"
              src="https://img.icons8.com/?size=48&id=108784&format=png"
            ></img>
            <p className=" ">Java Script</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-1 ">
            <img
              className=" h-[50%]"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
            ></img>
            <p className=" ">Type Script</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-1 ">
            <img
              className=" h-[50%]"
              src="https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png"
            ></img>
            <p className=" ">tailwind</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-1">
            <img
              className=" h-[50%]"
              src="https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png"
            ></img>
            <p className=" ">React js</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-2 ">
            <img
              className=" h-[60%]"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
            ></img>
            <p className=" ">figma</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-1">
            <img
              className="h-[65%]"
              src="https://img.icons8.com/?size=64&id=AU6Wc7r56Fxz&format=png"
            ></img>
            <p className=" ">Next js</p>
          </div>
          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black p-1">
            <img
              className=" h-[70%]"
              src="https://img.icons8.com/?size=64&id=t4YbEbA834uH&format=png"
            ></img>
            <p className=" ">React Native</p>
          </div>

          <div className="h-full w-full flex justify-center items-center rounded s-shadow bg-black gap-2 ">
            <img
              className=" h-[60%]"
              src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png"
            ></img>
            <p className=" ">Git hub</p>
          </div>
        </div>
      </div>
    </>
  );
}
