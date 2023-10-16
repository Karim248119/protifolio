import React from 'react'
import Slide from './Slide'
import "../Animation.css"
export default function Skills ()
{
    return (
        <div className=' relative w-full h-36  overflow-hidden -mt-6'>
            <div className=' w-[110%] h-12 shadow-bg bg-bg rotate-3 absolute bottom-10 -left-2'>

            </div>
            <div className=' h-20 bg-gray-400 -rotate-12 absolute bottom-8 -left-10 flex gap-24 justify-center items-center overflow-hidden skills'>
                {/* <img className='h-[69%]' src='/pics/skills/html5-icon-png-1.jpg'></img> */ }
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
            </div>
        </div>
    )
}
