"use client"
import { Input } from '@material-tailwind/react'
import React from 'react'

export default function MobileContact ()
{
    return (
        <div id='mobContact' className=' w-full h-[60vh] flex flex-col items-center relative bg-black'>
            <h1 className=' text-2xl font-semibold p-7 text-center w-full text-bg capitalize'>contact me</h1>
            <div className='w-[80%] h-[50%] flex flex-col gap-5'>
                <Input type='name' variant="standard" label="Name" color='teal' className='w-full text-white' />
                <Input type="email" variant="standard" label="E-mail" color='teal' className='w-full text-white' />
                <Input variant="standard" label="Message" color='teal' className='w-full text-white' />
            </div>
            <button className=' overflow-hidden btn-15 p-10 border-2 border-g text-g mt-5'>SEND MESSAGE</button>
        </div>
    )
}
