import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


function Watch() {
    return (
        <>
            <div className='h-screen w-screen bg-black bg-opacity-70 flex flex-row gap-8 m-5'>
            <Link to='/Home'><FaArrowLeft className='text-white w-10 h-10' /></Link>
            {/* <h1 className='text-white flex justify-center items-center'> Hello Watch </h1> */}
            <iframe className="border- h-screen flex justify-center content-center" width="100%" height="100%" src="https://www.youtube.com/embed/no4awCAdOBU" frameBorder="0"  allowfullscreen></iframe>
            </div>

        </>
    )
}



export default Watch;