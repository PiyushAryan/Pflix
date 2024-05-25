import { Link } from 'react-router-dom'
import { TiPencil } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { GrUser } from "react-icons/gr";

function Dropdowns() {


    const Menus = [{name:'Manage Profiles', link:'/', imgSrc: <TiPencil className='w-6 h-6 mr-3' />},{name:'GitHub', link:'https://github.com/PiyushAryan', imgSrc:<FaGithub className='w-6 h-6 mr-3' />}, {name:'Contact', link:'/contact', imgSrc: <MdOutlineContactSupport className='w-6 h-6 mr-3' />}, {name:'About', link:'/error', imgSrc: <GrUser className='w-6 h-6 mr-3' />}]
    const ImgMenus = [{name: 'Piyush', link:'/Home', imgSrc: '/1679989398421.jpg'},{name: 'Children', link:'/Home', imgSrc: 'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR7GBzHNeGCVNky_Hk1aST16wOCCdPJJmbDA81kML6mu60veAEDdhPgJmILK-hlPCDgULvxtEAqegEdHro6gTeMqt4uexdWvp5Ah.png?r=54d'}]

    return (
        <>

            <ul>
            {ImgMenus.map((menus) => (

            <li className='p-1 ml-0 m-2 mr-2 text-sm cursor-pointer rounded hover:underline hover:underline-offset-0 hover:text-gray-300' key={menus.name}>
                <Link to={menus.link} className='flex items-center'>
                <img className='h-7 w-7 mr-2 rounded' src={menus.imgSrc} alt={menus.name} />
                {menus.name}
                </Link>
            </li>))
            }

                {
                    Menus.map((menu) => (
                        <li className='p-2 text-sm cursor-pointer rounded hover:underline hover:underline-offset-0 hover:text-gray-300' key={menu.name}>
                        <Link to={menu.link} className='flex items-center'>
                        {menu.imgSrc}
                            {menu.name} 
                            </Link>
                        </li>
                        
                    ))
                }
            </ul>
            <hr className='h-px border-0 bg-gray-500' />
            <ul>
            <li className='pt-2 justify-center text-center text-sm cursor-pointer rounded hover:underline hover:underline-offset-auto'>
                    <Link to={'/'}>Sign out of Pflix</Link>
                </li>
            </ul>


        </>
    )
}

export default Dropdowns