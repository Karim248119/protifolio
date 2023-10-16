"use client"

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export default function TopButton ()
{
    const [ backToTop, setBackToTop ] = useState( false )
    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.scrollY > 850 )
            {
                setBackToTop( true )
            }
            else
            {
                setBackToTop( false )
            }
        } )
    }, [] )
    const scrollUp = () =>
    {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } )
    }
    return (
        <div>
            { backToTop && <button onClick={ scrollUp } className='md:w-10 md:h-10 h-6 w-6 text-[10px] md:text-lg font-bold flex justify-center items-center bg-g rounded-full text-white fixed md:bottom-10 md:right-10 bottom-5 right-5'>
                <FontAwesomeIcon icon={ faChevronUp } />
            </button> }</div>
    )
}
