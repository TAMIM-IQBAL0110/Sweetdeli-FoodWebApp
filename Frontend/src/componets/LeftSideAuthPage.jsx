import React from 'react'
import { FaImage } from 'react-icons/fa'

const LeftSideAuthPage = () => {
  return (
    <div className="h-full w-half flex flex-col justify-between " style={{ backgroundColor: '#2D3142', padding: '40px' }}>
      
      {/* Logo - Top Left */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white rounded-full" style={{ padding: '12px 24px' }}>
          <span className="text-lg font-bold text-gray-900">★</span>
          <span className="font-bold text-sm text-gray-900">LOGO</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-3xl font-bold">Welcome to Sweetdeli!</h1>
        <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut laoreet velit ma.
        </p>
      </div>

      {/* Bottom Image Placeholder */}
      <div className="flex justify-center">
        <div className="w-50 h-40 bg-white rounded-xl flex items-center justify-center">
          <FaImage className="w-25 h-25 text-gray-700" />
        </div>
      </div>

    </div>
  )
}

export default LeftSideAuthPage
