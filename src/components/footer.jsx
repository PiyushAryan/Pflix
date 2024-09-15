import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-5 py-8 bg-gradient-to-t from-black to-neutral-900 border-t top-full sticky flex items-center justify-between w-full">
            <span className="text-white">Made with ❤ &amp; 🍺 by Victor Garcia</span>
            <div className="flex mr-10">
            <a href='https://www.github.com/PiyushAryan'><FaGithub className='text-white mx-4 w-6 h-6 hover:bg-opacity-20 relative items-center'/></a>
            <a href='https://www.linkedin.com/in/piyush-aryan'><FaLinkedin className='text-white mx-4 w-6 h-6 hover:bg-opacity-20 relative items-center'/></a>
            </div>

        </footer>
    );
};

export default Footer;
