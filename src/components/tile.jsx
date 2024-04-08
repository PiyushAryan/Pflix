import React from 'react'

function tile() {
  return (
    <>
    <h1 className="text-xl md:text-lg sm:text-base text-white font-bold m-10">Recent Projects</h1>
    <div className="relative w-[500px] cursor-pointer m-10 flex justify-center">
    <img src='src/assets/tile1.jpg' alt="tile1" className="w-full h-[200px] rounded-lg object-cover ml-5" />
    <img src='src/assets/tile2.jpg' alt="tile2" className="w-full h-[200px] rounded-lg object-cover mx-5" />
    <img src='src/assets/tile3.jpg' alt="tile3" className="w-full h-[200px] rounded-lg object-cover" />
</div>
</>
  )
}

export default tile