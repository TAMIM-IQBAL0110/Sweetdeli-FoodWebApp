import React from 'react'
import { FaUser } from 'react-icons/fa'

export default function CustomerReview({ name = "Cha Ji-Hun", description = "Amet pharetra interdum.", text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor." }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 flex flex-col justify-between w-full min-h-[200px]">
      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{padding:"20px 20px"}}>
        {text}
      </p>

      {/* Reviewer Info */}
      <div className="flex flex-row items-center gap-3 mt-auto" style={{padding:"20px 20px"}}>
        <div className="w-10 h-10 rounded-full bg-[#E8EBEF] flex items-center justify-center shrink-0" style={{padding:"10px 10px"}}>
          <FaUser className="text-[#8890A0] w-4 h-4" />
        </div>
        <div style={{padding:"20px 20px"}}>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}
