"use client"
import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { FaClosedCaptioning, FaXRay } from 'react-icons/fa'

export function MobileAlert ( { url, location } )
{
    const [ open, setOpen ] = React.useState( false );

    return (
        <div className=" absolute -mx-2 top-9 w-[250px] h-[150px]  flex flex-col justify-start items-center" style={ { alignSelf: location } }>
            { !open && (
                <button className="  rounded-full p-10 btn-15 w-10 h-5 flex justify-center items-center" onClick={ () => setOpen( true ) }>
                    <span className=" text-[7px]">
                        Show
                    </span>
                </button>

            ) }
            <Alert open={ open } onClose={ () => setOpen( false ) } className="w-[250px] h-[150px] bg-img z-20 relative" style={ { backgroundImage: `url(${ url })` } }>

            </Alert>
        </div>
    );
}