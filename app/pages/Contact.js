"use client"
import React, { useRef, useState } from 'react'

export default function Contact ()
{
    const [ inputValue, setInputValue ] = useState( ' ' );
    const [ bol, setbol ] = useState( false )

    const [ inputValue2, setInputValue2 ] = useState( ' ' );
    const [ bol2, setbol2 ] = useState( false )

    const [ inputValue3, setInputValue3 ] = useState( ' ' );
    const [ bol3, setbol3 ] = useState( false )

    const handleInputChange = ( e ) =>
    {
        e.preventDefault();
        setInputValue( e.target.value );
        if ( inputValue.trim() !== '' )
        {
            // The input has a value, you can proceed with your logic here
            setbol( true )
        }

        if ( inputValue.trim() === '' )
        {
            // The input is empty
            setbol( false )
        }
    };

    const handleInputChange2 = ( e ) =>
    {
        e.preventDefault();
        setInputValue2( e.target.value );
        if ( inputValue2.trim() !== '' )
        {
            // The input has a value, you can proceed with your logic here
            setbol2( true )
        }

        if ( inputValue2.trim() === '' )
        {
            // The input is empty
            setbol2( false )
        }
    };

    const handleInputChange3 = ( e ) =>
    {
        e.preventDefault();
        setInputValue3( e.target.value );
        if ( inputValue3.trim() !== '' )
        {
            // The input has a value, you can proceed with your logic here
            setbol3( true )
        }

        if ( inputValue3.trim() === '' )
        {
            // The input is empty
            setbol3( false )
        }
    };

    const styles = {
        color: bol && "teal",
        scale: bol && 0.7,
        color: bol && "#0ee7cb",
        bottom: bol && "40px",
        transition: bol && "0.5s ease",
    }

    const styles2 = {
        color: bol2 && "teal",
        scale: bol2 && 0.7,
        color: bol2 && "#0ee7cb",
        bottom: bol2 && "40px",
        transition: bol2 && "0.5s ease",
    }
    const styles3 = {
        color: bol3 && "teal",
        scale: bol3 && 0.7,
        color: bol3 && "#0ee7cb",
        bottom: bol3 && "40px",
        transition: bol3 && "0.5s ease",
    }
    return (
        <div className=' w-full h-[70vh] flex flex-col items-center relative bg-black' id='contact'>
            <h1 className=' text-5xl font-bold p-14 text-center w-full text-bg capitalize'>contact me</h1>
            <div className='w-[80%] h-[50%] relative'>
                <div className=' w-full h-[25%] flex justify-between mb-10'>
                    <div className=' w-[45%] relative  container'>
                        <input value={ inputValue3 } onChange={ handleInputChange3 } className='text-white w-full absolute bottom-0 pl-2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus-border-g'></input>
                        <p className=' absolute bottom-2 text-gray-400' style={ styles3 } >Name</p>
                    </div>
                    <div className='w-[45%] relative container' >
                        <input value={ inputValue2 } onChange={ handleInputChange2 } type='e-mail' className='text-white w-full absolute bottom-0 pl-2  bg-transparent border-b-2 border-gray-400 focus:outline-none focus-border-g'></input>
                        <p className=' absolute bottom-2 text-gray-400' style={ styles2 } >E-mail</p>
                    </div>
                </div>
                <div className='h-[25%] relative container' >
                    <input value={ inputValue }
                        onChange={ handleInputChange } className='text-white w-full absolute bottom-0 pl-2 bg-transparent border-b-2 border-gray-400 focus:outline-none focus-border-g'></input>
                    <p className=' absolute bottom-2 text-gray-400' style={ styles }>Message</p>
                </div>
            </div>
            <button className=' overflow-hidden h-14 btn-15 p-10 border-2 border-g text-g  '>SEND MESSAGE</button>
        </div>
    )
}
