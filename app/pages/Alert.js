"use client"
import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { FaClosedCaptioning, FaXRay } from 'react-icons/fa'

export function AlertDismissible ( { url } )
{
    const [ open, setOpen ] = React.useState( false );

    return (
        <div className=" absolute  self-center top-14 w-[750px] h-[550px] flex flex-col justify-start items-center">
            { !open && (
                <button className="  rounded-full p-10 btn-15" onClick={ () => setOpen( true ) }>
                    Show Certification
                </button>

            ) }
            <Alert open={ open } onClose={ () => setOpen( false ) } className="w-[750px] h-[500px] bg-img z-20 relative" style={ { backgroundImage: `url(${ url })` } }>
                <div className=" w-8 h-8 flex justify-center items-center rounded-full right-3 top-3 bg-black text-g  border-g border-2 absolute -z-0">
                    ✖
                </div>
            </Alert>
        </div>
    );
}