import { useState } from 'react'
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Modal() {



  return (
    <>
      <div className='bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center'>
        <div className='flex flex-col mt-10 gap-5 text-white'>
        <button className='place-self-end'><X size={30} /></button>
        <div className='bg-indigo-900 rounded-xl px-8 py-10 pb-4 pt-12 flex flex-col gap-5 items-center mx-5'>
          
          <span className='text-3xl font-semibold'>Welcome to Pflix</span>
          <span className='font-medium max-w-xl justify-center text-pretty'>
            I m Piyush Aryan, front-end developer working primarely with React.js/Next.js and Figma.
            <br />
            Pflix is one of my project that acts as my portfolio and it lets you discover my projects, my skills and my experience thought a familiar UI inspired by a popular streaming video website called Netflix.
          </span>
          <button><Link to='/Home'>Home</Link></button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Modal