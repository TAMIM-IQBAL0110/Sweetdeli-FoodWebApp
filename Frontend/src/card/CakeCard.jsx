import React from 'react'
import { FaBirthdayCake } from "react-icons/fa";

export default function CakeCard({ icon: Icon = FaBirthdayCake, label = "Cupcake" }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circle Icon */}
      <div className="w-20 h-20 rounded-full border-2 border-gray-800 flex items-center justify-center">
        <Icon className="w-9 h-9 text-gray-800" />
      </div>
      {/* Label */}
      <p className="text-sm font-semibold text-gray-900">{label}</p>
    </div>
  )
}
