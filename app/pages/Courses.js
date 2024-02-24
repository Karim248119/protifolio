"use client";
import {} from "@material-tailwind/react";
import {
  FaCircle,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { AlertDismissible } from "./Alert";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const textref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textref,
    offset: ["0 1", "1 0.8"],
  });
  const opactiy = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textx = useTransform(scrollYProgress, [0.1, 0.7], ["100", "-100"]);
  const textx4scale = useTransform(
    scrollYProgress,
    [0.6, 0.8, 1],
    [0.6, 0.8, 1]
  );
  return (
    <div id="courses" className="w-full h-[350vh] bg-black ">
      <h1 className=" text-5xl font-bold p-14 pb-40 text-center w-full text-bg capitalize">
        Courses
      </h1>
      <div className="w-full h-full bg-black grid grid-cols-11 relative ">
        <div className=" absolute h-[80%] w-1 bg-g left-1/2 -translate-x-1/2 rounded-b-full"></div>
        <div
          ref={ref}
          className="h-[80%]  col-span-5 border-red-500 grid grid-rows-temp justify-items-end gap-2"
        >
          <div></div>
          <div
            ref={textref}
            style={{
              scale: textx4scale,
              opacity: opactiy,
            }}
            className=" relative flex flex-col  h-full"
            data-aos="fade-up"
          >
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              The Complete Web Development Course with HTML5
            </h1>
            <AlertDismissible
              className="self-end"
              url="/pics/courses/html.jpg"
            />
          </div>
          <div></div>
          {/*//////////////////////////////////////////////////////// css///////////////////////////////////////////// */}
          <p
            ref={textref}
            style={{
              scale: textx4scale,
              opacity: opactiy,
            }}
            className=" text-white w-[70%]  text-end  h-full "
          >
            This training course is designed to get you acquainted with CSS and
            how to best implement it.
          </p>

          <div
            ref={textref}
            style={{
              scale: textx4scale,
              opacity: opactiy,
            }}
            className=" relative flex flex-col   h-full "
          >
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              Master CSS & CSS3 | Frontend Course
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/grid.jpg"
            />
          </div>

          <p className=" text-white w-[70%]  text-end  h-full ">
            This course helps to master the CSS Transforms and It's a starting
            point to unlock ways to further build unique and engaging interfaces
            from scratch.
          </p>
          <div></div>
          {/*//////////////////////////////////////////////////////// js///////////////////////////////////////////// */}

          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              JavaScript for Intermediate Level
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/js-mid.jpg"
            />
          </div>

          <p className=" text-white w-[70%]  text-end  h-full ">
            Creating interactive websites after gaining more knowledge about
            JavaScript and guidance on building different visually appealing
            websites depending on your own.
          </p>
          <div></div>
          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              Introduction to React Native & Expo
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/native.jpg"
            />
          </div>

          <div></div>

          <p className=" text-white w-[70%]  text-end  h-full ">
            Identify how to use Git, GitHub, and Markdown. Then, you will learn
            to track and record code changes and avoid losing important files
            and parts with Git and GitHub.
          </p>
        </div>
        <div className="h-[80%]  col-span-1 z-10 grid grid-rows-temp items-start justify-items-center border-blue-600 gap-2">
          <div className="p-4 border-2 border-g rounded-full text-g bg-black text-3xl ">
            <FaHtml5 />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className=" p-4 border-2 border-g rounded-full text-g bg-black text-3xl ">
            <FaCss3 />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className="  w-16 h-16 font-semi-bold flex justify-center items-center border-2 border-g rounded-full text-g bg-black text-2xl ">
            Js
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
          <div className=" p-4 border-2 border-g rounded-full text-g bg-black text-3xl ">
            <FaReact />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>

          <div className=" p-4 border-2 border-g rounded-full text-g bg-black text-3xl ">
            <FaGithub />
          </div>
          <div className=" p-3 border-2 border-g rounded-full text-g bg-black text-sm ">
            <FaCircle />
          </div>
        </div>
        <div className="h-[80%]  col-span-5 border-red-500 grid grid-rows-temp justify-items-start gap-2">
          <div></div>
          <p
            ref={textref}
            style={{ scale: textx4scale }}
            className=" text-white w-[70%] h-full "
          >
            Throughout this training course, I've got acquainted with HTML from
            the very beginning, starting from how to set up the work environment
            and all the way to creating tables, lists, links, and more.
          </p>
          <div></div>
          {/*//////////////////////////////////////////////////////// css///////////////////////////////////////////// */}

          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              {" "}
              Master CSS & CSS3 | Frontend Course
            </h1>
            <AlertDismissible
              className="self-start"
              url="/pics/courses/css.jpg"
            />
          </div>

          <p className=" text-white w-[70%] h-full ">
            How to exploit the properties of CSS Grid to create advanced
            layouts, together with how to use the software to produce various
            basic and complex designs.
          </p>

          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              CSS Animations Creativity Course
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/animation.jpg"
            />
          </div>
          <div></div>
          {/*//////////////////////////////////////////////////////// js///////////////////////////////////////////// */}

          <p className=" text-white w-[70%] h-full ">
            The coures aims to convert the complex JavaScript code into a simple
            one and build projects with, which reflect on improving your core
            development skills and achieving more progress.
          </p>

          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              JavaScript for Expert Level
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/js.jpg"
            />
          </div>
          <div></div>
          <p className=" text-white w-[70%] h-full ">
            This courses is designed to teach you about React Native that
            enables developers to utilize the very same code base to
            effortlessly build native applications.
          </p>
          <div></div>
          <div className=" relative flex flex-col h-full ">
            <h1 className="text-xl font-bold  w-full text-g capitalize">
              {" "}
              Git, GitHub & MD
            </h1>
            <AlertDismissible
              className="self-center"
              url="/pics/courses/git.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
