import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="relative inline-block text-left">
                <button onClick={toggleDropdown} type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Dropdown
                </button>
            </div>

            {isOpen && (
                <div className='absolute z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                    <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                        <Link to="/about" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>About</Link>
                        <Link to="/settings" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>Settings</Link>
                        <Link to="/login" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>Log out</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Dropdown;

