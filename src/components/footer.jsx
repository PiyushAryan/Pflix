import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="px-5 py-8 bg-black border-t top-full sticky flex items-center justify-between w-full">
            <span className="text-white">Made with ❤ &amp; 🍺 by Victor Garcia</span>
            <div className="flex">
            <a href='https://www.github.com/PiyushAryan/'><FaGithub className='text-white w-6 h-6 hover:bg-opacity-20 relative items-center' /></a>
            </div>
        </footer>
    );
};

export default Footer;
