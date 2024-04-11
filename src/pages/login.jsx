import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  return (

    <div className='flex-1 text-4xl relative mt-40 px-8 py-4 text-white text-center'>
      <h1 className='hover:text-gray-300'>{"Who's Watching?"}</h1>
      <ul className="flex justify-center">
        <li className="mr-4 my-10">
          <Link to='/'><div>
            <img className='h-36 bg-opacity-100 hover:bg-opacity-40 rounded' src="src/assets/1679989398421.jpg" alt="Netflix Avatar" />
            <h1 className='hover:text-gray-300 text-xl my-3'>Piyush</h1>
          </div>
          </Link>
        </li>
        <li className='my-10'>
          <Link to='/'><div>
            <img className='h-36 mr-4 rounded bg-opacity-100 hover:bg-opacity-40' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
            <h1 className='hover:text-gray-300 text-xl my-3'>Satakshi</h1>
          </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default Login;
