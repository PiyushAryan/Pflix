import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Modal from '../components/Modal'
import Dropdowns from '../components/Dropdowns';
import Footer from '../components/footer';


function Contact() {
  const [open, setOpen] = useState(false);
 
  return (
    <>
    <Navbar />
    <Dropdowns />
    <div className='mt-20 text-center text-lime-500 font-bold text-4xl'>Contact</div>
    <button onClick={() => setOpen(true)} className='mx-56 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>About</button>
    <Modal open={open} onClose={() => setOpen(false)}>
    <div className='text-center text-slate-50 w-80 h-80 border-gray-400 rounded-lg p-4'>
    <h1 className='text-2xl font-Montserrat font-normal gap-2 '>About</h1>
    <div className='font-medium font-Inter '>
        I'm Piyush Aryan, a front-end developer working primarily with React.js/Next.js and Figma.
    </div>
    <div className='font-medium font-Inter'>
        Pflix is one of my projects that acts as my portfolio and lets you discover my projects, skills, and experience through a familiar UI inspired by a popular streaming video website called Netflix.
    </div>
</div>

    </Modal>
    <Footer />
    </>
  )
}

export default Contact