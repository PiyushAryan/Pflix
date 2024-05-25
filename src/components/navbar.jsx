import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaGithub } from "react-icons/fa6";
import Dropdowns from '../components/Dropdowns';


function Navbar() {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const imgRef = useRef(null);


  window.addEventListener('click', (e) => {
    if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });



  return (
    <nav className="bg-black bg-opacity-50 border-gray-200 hover:opacity-90 fixed top-0 w-full z-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <NavLink to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Netflix Logo" />
          <ul className="font-medium flex p-0 rounded-lg flex-row space-x-8 mt-0 border-0 bg-transparent border-gray-100">
            <li>
              <NavLink to="/Home" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent border-0 hover:text-blue-700 p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent border-0 hover:text-blue-700 p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Project</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="block py-2 px-3 rounded hover:bg-gray-100 hover:bg-transparent border-0 md:hover:text-blue-700 p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 px-3 rounded hover:bg-gray-100 hover:bg-transparent border-0 md:hover:text-blue-700 p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
            </li>
          </ul>
        </NavLink>
        <ul className='space-x-4 flex-row flex p-0 mt-0' >
          <li>
            <img src="/search.svg" className="w-6 h-6 hover:bg-opacity-20" alt="Search" />
          </li>
          <li>
            <img src="/notify.png" className="w-6 h-6 hover:bg-opacity-20 relative" alt="notification" />
          </li>
          <li>
            <Link to={'https://www.github.com/PiyushAryan/'}><FaGithub className='text-white w-6 h-6 hover:bg-opacity-20 relative items-center' /></Link>
          </li>
          <li>
            <Link to={'https://www.linkedin.com/in/piyush-aryan/'}><img className='w-6 h-6 hover:bg-opacity-20 relative items-center' alt='linkedin' src='/linkedin.svg' /></Link>
          </li>
          <li>
            <div className='relative'>
              <img ref={imgRef} onClick={() => setOpen(!open)} className="relative object-cover cursor-pointer rounded" src="https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="profile" />
              {open && (
                <div ref={dropdownRef} className="bg-black bg-opacity-80 text-white  shadow-md p-4 w-52 m-10 absolute top-0 right-0">
                  <Dropdowns />
                </div>
              )}
            </div>
          </li>
          <li>
            {<ChevronDownIcon />}
          </li>
        </ul>
      </div>
    </nav>

  );
}


export default Navbar;


