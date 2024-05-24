import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // After 1 second, remove the animation class to prevent it from replaying on every render
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []); // Run only once after component mounted

  return (
    <>
      
      <div className={`flex-1 text-4xl relative mt-40 px-8 py-4 text-white text-center ${showAnimation ? 'animate-zoom-in' : ''}`}>
          <h1 className='hover:text-gray-300'>{"Who's Watching?"}</h1>
          <ul className="flex justify-center">
            <li className="mr-4 my-10">
              <Link to='/Home'><div className='group'>
                <img className='h-36 group-hover:animate-pulse shadow-gray-800 shadow-md ease-in-out duration-200 object-cover rounded ring ring-black group-hover:ring-white' src="/1679989398421.jpg" alt="Avatar" />
                <h1 className='group-hover:text-white text-slate-400 text-xl my-3'>Piyush</h1>
              </div>

              </Link>
            </li>
            <li className='my-10'>
              <Link to='/Home'><div className='group'>
                <img className='duration-200 h-36 group-hover:animate-pulse shadow-gray-800 shadow-md ease-in-out object-cover rounded ring ring-black group-hover:ring-white' src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d" alt="Netflix Avatar" />
                <h1 className='group-hover:text-white text-slate-400 text-xl my-3'>Pragya</h1>
              </div>
              </Link>
            </li>
          </ul>
        </div>
      
    </>
  );
}


export default Login;
