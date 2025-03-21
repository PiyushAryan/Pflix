import React from 'react'
import { Link } from 'react-router-dom'




function Hero() {
    return (
        <>
            <div className='w-full h-[650px]'>
                <div className='w-full h-full'>
                    <div className="absolute w-full h-[650px] bg-gradient-to-t from-black"></div>
                    <img src="/pmo.jpg" alt="HeroBanner" className="h-full object-top object-cover w-full" />
                </div>
            </div>
            <div className='absolute w-full top-[35%] p-10 '>
                <h1 className='text-6xl text-white font-Cinzel font-black'>Athena</h1>
                <h2 className='text-3xl text-white font-Montserrat font-semibold mt-2'>Decentralised Cloud Storage</h2>
                <ul className='flex flex-row text-white text-sm mt-4'>
                    <li className='mr-4 mx-1 text-white'><img src='/react.svg' className='h-8'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='/firebase.svg' className='h-9'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='/nextjs.svg' className='h-9'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png' className='h-8'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='/tailwind.svg' className='h-10'/></li>
                </ul>
                <p className='text-white text-md mt-4 mr-72'>Athena is a decentralized cloud storage solution that leverages React.js and Ether.js frameworks. <br/>Built on blockchain technology, Athena provides a secure, transparent, and decentralized storage platform for digital assets.</p>
                <div className='mt-8 mb-2'>
                    <Link to='/Watch'><button className='capitalize font-bold bg-white bg-opacity-100 py-2 px-5 rounded-sm hover:bg-opacity-60'>
                    <img  className='inline mx-1 h-6 mb-0.5'src='/play-button.png'/>Play</button></Link>
                    <button className='capitlize bg-opacity-40 hover:bg-opacity-20 bg-white font-bold text-white py-2 px-5 rounded ml-4'><img  className='inline mx-1 h-6 mb-0.5' src='/info-48.png'/>More Info</button>
                </div>
            </div>
        </>
    )
}

export default Hero;