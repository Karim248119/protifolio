"use client"
import React from "react";
import
{
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Badge,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
// import { MultiLevelSidebar } from "./SideBar";

function StickyNavbar ()
{
    const [ openNav, setOpenNav ] = React.useState( false );

    React.useEffect( () =>
    {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav( false )
        );
    }, [] );

    const navList = (
        <ul className=" flex flex-col gap-2 -ml-2 lg:flex-row lg:items-center lg:gap-6 nav bg-black z-50 " >
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal self-center"
            >
                <a className="flex items-center p-2">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal self-center"
            >
                <a className="flex items-center p-2">
                    Men
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal self-center"
            >
                <a className="flex items-center p-2">
                    Women
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal self-center"
            >
                <a to="/Accessories" className="flex items-center p-2">
                    Accessories
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal self-center"
            >
                <a to="/Electronics" className="flex items-center p-2">
                    Electronics
                </a>
            </Typography>
        </ul>
    );
    return (
        <div className="  max-h-[60px] w-full  NAV bg-black">
            <Navbar blurred={ false } shadow={ false } className=" sticky top-0 z-50 h-max max-w-full rounded-none px-0 border-none lg:px-8 lg:py bg-black bg-white-800 text-white grid">

                <div className="flex items-center justify-between text-white-800">


                    <div className="flex items-center gap-4 md:mx-auto md:pt-10">
                        <div className="mr-4 hidden lg:block ">{ navList }</div>
                        <div className="hidden md:block">


                        </div>



                        <IconButton
                            variant="text"
                            className="  ml-3 mt-1 text-inherit hover:bg-transparent text-white-900 focus:bg-transparent active:bg-transparent text-2xl"
                            ripple={ true }
                            onClick={ () => setOpenNav( !openNav ) }
                        >
                            { openNav ? (
                                <div>  ✖</div>
                            ) : (

                                <FaBars />
                            ) }
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={ openNav }>
                    { navList }
                    <div className="ml-44 hidden">
                        <Badge content="0" placement="bottom-end ">
                            <a to="/Cart" className=" mx-auto border-white-900 border-2  text-white-900 rounded-full p-3 hover:bg-white-900  hover:text-white-500">
                                <FaBars />
                            </a>
                        </Badge>
                    </div>
                </MobileNav>
            </Navbar>

            <div className="mx-auto max-w-screen-md py-12">
                <Typography
                    variant="h2"
                    color="white"
                    className="mb-2"
                ></Typography>
            </div>
        </div>
    );
}
export default StickyNavbar;
