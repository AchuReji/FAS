import React from 'react'

function Loader() {
  return (
     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-30 h-30">
        {/* Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-1 border-gray-100 border-t-blue-900 animate-spin"></div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/Bn1yyB6Y/Untitled-design-removebg-preview.png" 
            alt="PSV"
            className="w-full animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}

export default Loader