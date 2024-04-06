import React from 'react';

function Navbar() {
  return (
    <nav className="bg-transparent border-gray-200 fixed flex-nowrap top-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="src\assets\logo.png" className="h-8" alt="Netflix Logo" />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row space-x-8  mt-0 border-0  bg-transparent border-gray-100">
            <li>
              <a href="#" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent p-0 text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent border-0 hover:text-blue-700 p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Project</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:bg-transparent border-0 md:hover:text-blue-700 p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
            </li>
            
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:bg-transparent border-0 md:hover:text-blue-700 p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;


