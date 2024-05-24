import { useState } from 'react'

function Dropdowns() {


    const Menus = ['About', 'Contact', 'GitHub', 'Linkedin']

    return (
        <>

            <ul>
                {
                    Menus.map((menu) => (
                        <li className='p-2 text-lg cursor-pointer rounded hover:bg-gray-800 hover:text-gray-300' key={menu}>
                            {menu}
                        </li>
                    ))
                }
            </ul>

        </>
    )
}

export default Dropdowns