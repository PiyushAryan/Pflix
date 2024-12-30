import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


function Watch() {
    return (
        <>
            <div className='h-screen w-screen bg-black bg-opacity-70 relative'>
            <Link to='/Home' className="absolute top-4 left-5"><FaArrowLeft className='text-white w-10 h-10' /></Link>
            <iframe className="border-none justify-center content-center" width="100%" height="100%" src="https://www.youtube.com/embed/no4awCAdOBU" allowfullscreen></iframe>
            </div>

        </>
    )
}



export default Watch;