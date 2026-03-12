import React from 'react'

function Loader() {
  return (
     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-30 h-30">
        {/* Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-1 border-gray-100 border-t-blue-900 animate-spin"></div>

        {/* Logo */}
       <div className="absolute inset-0 flex items-center justify-center">
  {/* Container for the white circle */}
  <div className="bg-white rounded-full p-2 flex items-center justify-center w-15 h-15 shadow-lg">
    <img
      src="https://i.postimg.cc/c1jgTWzz/CA-India-jpg-removebg-preview.png" 
      alt="CA Logo"
      className="w-16 h-auto animate-pulse object-contain"
    />
  </div>
</div>
      </div>
    </div>
  )
}

export default Loader