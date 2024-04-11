import React from 'react'


function Hero() {
    return (
        <>
            <div className='w-full h-[650px]'>
                <div className='w-full h-full'>
                    <div className="absolute w-full h-[650px] bg-gradient-to-t from-black"></div>
                    <img src="src\assets\hero.jpg" alt="HeroBanner" className="h-full object-top object-cover w-full" />
                </div>
            </div>

            

            <div className='absolute w-full top-[35%] p-10 '>
                <h1 className='text-5xl text-white font-Ns-Bold font-bold'>Varanasi</h1>
                <h2 className='text-3xl text-white font-Ns-Bold font-semibold mt-2'>Kashi Vishwanath Temple</h2>
                <ul className='flex flex-row text-white text-sm mt-4'>
                    <li className='mr-4 mx-1 text-white'><img src='src/assets/react.svg' className='h-8'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='src/assets/firebase.svg' className='h-9'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='src/assets/nextjs.svg' className='h-9'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png' className='h-8'/></li>
                    <li className='mr-4 mx-1 text-white'><img src='src/assets/tailwind.svg' className='h-10'/></li>
                </ul>
                <p className='text-white text-sm mt-4 mr-72'>The Kashi Vishwanath Temple is a Hindu temple dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples. The main deity is known by the name Vishwanatha or Vishweshwara, meaning Ruler of the Universe.</p>
                <div className='mt-8 mb-2'>
                    <button className=' capitalize font-bold bg-white bg-opacity-100 py-2 px-5 rounded-sm hover:bg-opacity-60'>
                    <img  className='inline mx-1 h-6 mb-0.5'src='src/assets/play-button.png'/>Play</button>
                    <button className='capitlize bg-opacity-40 hover:bg-opacity-20 bg-white font-bold text-white py-2 px-5 rounded ml-4'><img  className='inline mx-1 h-6 mb-0.5' src='src/assets/info-48.png'/>More Info</button>
                </div>
            </div>
        </>
    )
}

export default Hero;