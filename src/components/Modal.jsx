import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";




const Modal = () => {
    const { isDropdownVisible, setIsDropdownVisible } = useContext(AppContext)

    return (
        <div className='text-center text-slate-50 w-[480px] h-[330px] border-gray-400 p-4'>
            <h1 className='font-Roboto px-3 py-5 text-3xl'>Welcome to Pflix!</h1>
            <div className='font-normal pb-4 font-Inter text-justify'>
                {`I'm`} Piyush Aryan, a front-end developer specializing in React.js/Next, Tailwind CSS, and Firebase
            </div>
            <div className='font-normal font-Inter text-justify'>
            Pflix is one of my project that acts as my portfolio and it lets you discover my projects, my skills and my experience thought a familiar UI inspired by a popular streaming video website I will not quote the name
            </div>
            <div>
            <button 
            onClick={() => setIsDropdownVisible(false)}
            className='bg-netflix absolute right-7 bottom-7 text-white font-Inter hover:bg-red-600 hover:bg-opacity-90 rounded-lg border-2 border-transparent focus:border-white font-bold py-2 px-7 mt-4'>{`Let's`} go!</button>
            </div>
        </div>

    )
}

export default Modal;