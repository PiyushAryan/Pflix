import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Modal from '../components/modal'


function Contact() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <Navbar />
    <div className='mt-20 text-center text-white font-bold text-4xl'>contact</div>
    <button onClick={() => setShowModal()} className='mx-56 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>About</button>
    {showModal && <Modal />}
    </>
  )
}

export default Contact