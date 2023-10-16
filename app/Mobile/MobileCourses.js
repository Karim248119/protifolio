"use client"
import { } from "@material-tailwind/react";
import { FaCircle, FaCss3, FaGithub, FaHtml5, FaJs, FaJsSquare, FaReact } from "react-icons/fa";
import { MobileAlert } from "./MobileAlert";

export default function MobileCourses ()
{
    return (
        <div id="mobCourses" className="w-full h-[200vh] bg-gb ">
            <h1 className=" text-2xl font-semibold p-7 text-center w-full text-bg capitalize">Courses</h1>
            <div className="w-full h-full bg-gb grid grid-cols-11 relative">
                <div className=" absolute h-[90%] w-1 bg-g left-1/2 -translate-x-1/2"></div>
                <div className="h-[90%]  col-span-5 border-red-500 grid grid-rows-temp justify-items-end gap-2">
                    <div></div>
                    <div className=" relative flex flex-col w-[90%] h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize text-end" > Web Development Course with HTML5</h1>
                        <MobileAlert location='start' url='/pics/courses/html.jpg' />
                    </div>
                    <div></div>
                    {/*//////////////////////////////////////////////////////// css///////////////////////////////////////////// */ }
                    <p className=" text-white text-[8px] w-[85%]  text-end  h-full ">
                        This training course is designed to get you acquainted with CSS and how to best implement it.
                    </p>

                    <div className=" relative flex flex-col w-[90%]   h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize text-end" >Master CSS & CSS3 | Frontend Course</h1>
                        <MobileAlert location='start' url='/pics/courses/grid.jpg' />
                    </div>

                    <p className=" text-white text-[8px] w-[85%]  text-end  h-full ">
                        This course helps to master the CSS Transforms and It's a starting point to unlock ways to further build unique and engaging interfaces from scratch.
                    </p>
                    <div></div>
                    {/*//////////////////////////////////////////////////////// js///////////////////////////////////////////// */ }
                    <p className=" text-white text-[8px] w-[85%]  text-end  h-full ">
                        Creating interactive websites after gaining more knowledge about JavaScript and guidance on building different visually appealing websites depending on your own.
                    </p>

                    <div className=" relative flex flex-col w-[90%]   h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize text-end" >JavaScript for Expert   Level</h1>
                        <MobileAlert location='start' url='/pics/courses/js.jpg' />
                    </div>
                    <div></div>
                    <div className=" relative flex flex-col w-[90%]   h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize text-end" >Introduction to React Native & Expo</h1>
                        <MobileAlert location='start' url='/pics/courses/native.jpg' />
                    </div>
                    <div></div>
                    <p className=" text-white text-[8px] w-[85%]  text-end  h-full ">
                        Identify how to use Git, GitHub, and Markdown. Then, you will learn to track and record code changes and avoid losing important files and parts with Git and GitHub.
                    </p>


                </div>
                <div className="h-[90%]  col-span-1 z-10 grid grid-rows-temp items-start justify-items-center border-blue-600 gap-2">
                    <div className=" p-2 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaHtml5 />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>
                    <div className=" p-2 border-2 border-g rounded-full text-g bg-gb text-[10px] ">
                        <FaCss3 />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>
                    <div className="  w-8 h-8 font-semi-bold flex justify-center items-center border-2 border-g rounded-full text-g bg-gb text-2[10px] ">
                        Js
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>

                    <div className=" p-2 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaReact />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>

                    <div className=" p-2 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaGithub />
                    </div>
                    <div className=" p-1 border-2 border-g rounded-full text-g bg-gb text-[10px]">
                        <FaCircle />
                    </div>

                </div>
                <div className="h-[90%]  col-span-5 border-red-500 grid grid-rows-temp justify-items-start gap-2">
                    <div></div>
                    <p className=" text-white text-[8px] w-[85%] h-full ">
                        Throughout this training course, I've got acquainted with HTML from the very beginning, starting from how to set up the work environment and all the way to creating tables, lists, links, and more.
                    </p>
                    <div></div>
                    {/*//////////////////////////////////////////////////////// css///////////////////////////////////////////// */ }

                    <div className=" relative flex flex-col w-[90%] h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize" > Master CSS & CSS3 | Frontend Course</h1>
                        <MobileAlert location='end' url='/pics/courses/css.jpg' />
                    </div>

                    <p className=" text-white text-[8px] w-[85%] h-full ">
                        How to exploit the properties of CSS Grid to create advanced layouts, together with how to use the software to produce various basic and complex designs.
                    </p>

                    <div className=" relative flex flex-col w-[90%] h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize" >CSS Animations Creativity Course</h1>
                        <MobileAlert location='end' url='/pics/courses/animation.jpg' />
                    </div>
                    <div></div>
                    {/*//////////////////////////////////////////////////////// js///////////////////////////////////////////// */ }
                    <div className=" relative flex flex-col w-[90%] h-full ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize" >JavaScript for Intermediate Level</h1>
                        <MobileAlert location='end' url='/pics/courses/js-mid.jpg' />
                    </div>

                    <p className=" text-white text-[8px] w-[85%] h-full ">
                        The coures aims to convert the complex JavaScript code into a simple one and build projects with, which reflect on improving your core development skills and achieving more progress.
                    </p>

                    <div></div>
                    <p className=" text-white text-[8px] w-[85%] h-full ">
                        This courses is designed to teach you about React Native that enables developers to utilize the very same code base to effortlessly build native applicati
                    </p>

                    <div></div>
                    <div className=" relative flex flex-col w-[90%] ">
                        <h1 className="text-[10px] font-bold  w-full text-g capitalize" >Git, GitHub & MD</h1>
                        <MobileAlert location='end' url='/pics/courses/git.jpg' />
                    </div>
                </div>
            </div>
        </div>

    );
}