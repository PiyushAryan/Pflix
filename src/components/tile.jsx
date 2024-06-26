import { BsFillPlayFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";

export default function tile() {

  return (
    <>
      <h1 className="text-xl md:text-lg sm:text-base text-white font-bold m-10">Recent Projects</h1>
      <div className="ml-10 mb-5 group relative bg-zinc-900 col-span-1 h-[12vw] w-[25vw]">
        <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]" src='/tile1.jpg' alt="tile2" />
        <div className="sm:ml-10 opacity-0 absolute top-0 transition duration-200 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:-translate-x-[2vw] group-hover:opacity-100">
          <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" src='/tile1.jpg' alt="tile2" />
          <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
            <div className="flex flex-row items-center gap-3">
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full justify-center items-center flex transition hover:bg-neutral-300" onClick={() => { }}>
                <BsFillPlayFill size={30} />
              </div>
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full justify-center items-center flex transition hover:bg-neutral-400" onClick={() => { }}>
              <AiFillPlusCircle className="text-zinc-800" size={50} />
              </div>
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full justify-center items-center flex transition hover:bg-neutral-400" onClick={() => { }}>
              <BsHandThumbsUp className="text-zinc-800"/>
              </div>
            </div>
            <div className="text-green-500 font-bold my-1 text-xs">New</div>
            <div className="text-white text-xs lg:text-base font-semibold mt-2"></div>
            
          </div>
        </div>
      </div>
    </>
  );
}





















// function tile() {
//   return (
//     <>
//     <h1 className="text-xl md:text-lg sm:text-base text-white font-bold m-10">Recent Projects</h1>
//     <div className="relative w-[500px] cursor-pointer m-10 flex justify-center grid-cols-5">
//     <img src='https://picsum.photos/450/300' alt="tile1" className="w-full h-[200px] rounded-lg object-cover ml-5" />
//     <img src='/tile2.jpg' alt="tile2" className="w-full h-[200px] rounded-lg object-cover mx-5" />
//     <img src='https://static.sadhguru.org/d/46272/1687922125-mask-group-3.jpg' alt="tile3" className="w-full h-[200px] rounded-lg object-cover" />
//     <img src='https://picsum.photos/seed/picsum/450/300' alt="tile4" className="w-full h-[200px] rounded-lg object-cover mx-5" />
//     <img src='/tile1.jpg' alt="tile5" className="w-full h-[200px] rounded-lg object-cover mx-5" />
//     <img src='https://picsum.photos/450/300' alt="tile6" className="w-full h-[200px] rounded-lg object-cover mx-5" />
//     <img src='https://picsum.photos/seed/picsum/450/300' alt="tile7" className="w-full h-[200px] rounded-lg object-cover mx-5" />
// </div>
// </>
//   )
// }

// export default tile