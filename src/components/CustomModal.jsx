import { X } from 'lucide-react';




function CustomModal({ onClose, children, open }) {

  return (

    <div onClick={onClose} className={`fixed flex justify-center items-center transition-colors insert-0 ${open ? 'visible bg-black/20' : 'invisible'}`}>
      <div onClick={(e) => e.stopPropagation()} className={`bg-red-800 rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
      
      <button  onClick={onClose} className='absolute top-2 right-2 p-1 rounded-full text-gray-400 bg-gray-600 hover:bg-gray-50 hover:text-gray-600'>
        <X className='h-6 w-6' />
      </button>
        {children}
        
      </div>
    </div>
  )
}

export default CustomModal;






































