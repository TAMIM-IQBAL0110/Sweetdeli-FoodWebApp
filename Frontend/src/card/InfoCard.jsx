import React from 'react'
import { PiForkKnifeFill } from "react-icons/pi"; // Using Phosphor icons for that bold look

export default function InfoCard({ icon: Icon = PiForkKnifeFill, title = "Donec vitae.", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect." }) {
  return (
    <div className="max-w-[300px] bg-white p-8 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer">
      
      {/* Icon Container */}
      <div className="mb-6 text-[#1A1A1A]">
        <Icon size={56} />
      </div>

      {/* Title */}
      <h3 className="text-[#2D3E50] text-2xl font-bold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
        Nunc nunc vestibulum ect.
      </p>
      
    </div>
  );
}