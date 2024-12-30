import { X } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';



// eslint-disable-next-line react/prop-types
function CustomModal({ children }) {

  const { isDropdownVisible, setIsDropdownVisible } = useContext(AppContext)


  console.log(open)
  return (
    <div className='absolute z-40 top-14'>
      <div
        onClick={() => setIsDropdownVisible(false)}
        className={`fixed flex justify-center items-center transition-colors inset-0 ${isDropdownVisible ? 'visible bg-black/20' : 'invisible'}`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-black opacity-95 rounded-[5px] shadow p-6 transition-all scale-100 `}>
          <button
            onClick={() => setIsDropdownVisible(false)}
            className='fixed top-2 right-2 rounded-full p-1 text-white bg-transparent hover:bg-gray-50 hover:bg-opacity-10'>
            <X className='h-4 w-4 ' />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomModal;





































