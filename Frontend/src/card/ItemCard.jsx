import React from "react";
import { FaImage } from "react-icons/fa";
import Button from "../componets/Button";

export default function ItemCard({ name = "Neque volutpat morbi.", description = "Et blandit non sit ac egestas risus non.", price = "$20" }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between min-w-[300px] min-h-[200px]">
      {/* Item Image */}
      <div className="w-full aspect-[4/3] bg-gray-300 flex items-center justify-center rounded-t-2xl">
        <FaImage className="text-white w-16 h-16 opacity-80" />
      </div>

      {/* Item Info */}
      <div className="p-5 flex flex-col gap-3" style={{padding:"20px 20px"}}>
        <div className="flex items-start justify-between">
          <h3 className="text-base font-bold text-gray-900">{name}</h3>
          <span className="text-base font-semibold text-gray-900 shrink-0 ml-2">{price}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        <div className="mt-1">
          <Button variant="primary">Order Now</Button>
        </div>
      </div>
    </div>
  );
}
