"use client"

import
{
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
} from "@material-tailwind/react";
import
{
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { FaBookOpen, FaLaptopCode, FaSms } from "react-icons/fa";
import { Link } from 'react-scroll/modules'
export function MobileSpeed ()
{
    const labelProps = {
        variant: "small",
        color: "blue-gray",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };

    return (
        <div className="relative h-80 w-full -mb-72 z-10 m-4">
            <div className="absolute top-0 left-0">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full bg-transparent text-bg">
                            <PlusIcon className="h-8 w-8 transition-transform group-hover:rotate-45 text-2xl" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction className="relative mb-1 btn-15">
                            <Link activeClass="active" to="mobProjects" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }  >
                                <FaLaptopCode className=" h-4 w-4" />
                            </Link>
                            <Typography { ...labelProps }>Home</Typography>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative mb-1 btn-15">
                            <Link activeClass="active" to="mobCourses" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }  >
                                <FaBookOpen className=" h-4 w-4" />
                            </Link>
                            <Typography { ...labelProps }>Settings</Typography>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative mb-1 btn-15">
                            <Link activeClass="active" to="mobContact" spy={ true } smooth={ true } offset={ 50 } duration={ 500 }  >
                                <FaSms className=" h-4 w-4" />
                            </Link>
                            <Typography { ...labelProps }>Pages</Typography>
                        </SpeedDialAction>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
        </div>
    );
}