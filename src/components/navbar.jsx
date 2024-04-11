import React from 'react';
import { Link, NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 border-gray-200 fixed top-0 w-full z-10">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="src\assets\logo.png" className="h-8" alt="Netflix Logo" />
        <ul className="font-medium flex p-0 rounded-lg flex-row space-x-8 mt-0 border-0 bg-transparent border-gray-100">
          <li>
            <NavLink to="/login" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent p-0 text-blue-500" aria-current="page">Home</NavLink>
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
          <img src="src\assets\search.svg" className="h-8" alt="Search" />
          </li>
          <li>
          <img src="src\assets\notify.png" className="h-8" alt="notification" />
          </li>
          <li>
          <Link to={'https://www.github.com/PiyushAryan/'}><img className='h-8 hover:bg-opacity-20' alt='github' src='src/assets/github.svg'/></Link>
          </li> 
          <li>
          <Link to={'https://www.linkedin.com/in/piyush-aryan/'}><img className='h-8 hover:bg-opacity-20' alt='linkedin' src='src/assets/linkedin.svg'/></Link>
          </li>  
          <li>
          <img className="relative" src="https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="profile"/>
          </li>
          <li>
          <button className='hover:bg-gray-500'>
          <img className='h-4 px-0 mt-1.5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nGNgGAWjYBTQH/z//7/8P/mgnpaW1NPSJ/W0DK56sgwn0pJ6igwnYAl1DMdhCXUNh4H///83gDBcYBSMguEBAJbsFrp96dxlAAAAAElFTkSuQmCC" /></button>
          </li>
          </ul>
  </div>
</nav>

  );
}


export default Navbar;

