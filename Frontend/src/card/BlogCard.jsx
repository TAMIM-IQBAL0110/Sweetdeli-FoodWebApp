import React from "react";
import { FaImage } from "react-icons/fa";


const BlogCard = () => {
  return (
    <div className="min-h-[calc(100vh-90px)] flex items-center bg-white-700">
      <div
        className="w-full flex flex-col lg:flex-row items-center justify-between"
        style={{ padding: "0 80px" }}
      >
        {/* Left Image */}
        <div className="flex-shrink-0 mt-10 lg:mt-0">
          <div
            className="w-72 h-56 md:w-80 md:h-64 lg:w-96 lg:h-72 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#8890A0" }}
          >
            <FaImage className="w-32 h-32 md:w-36 md:h-36 text-white opacity-80" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start max-w-xl ml-8 lg:ml-16 gap-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Bibendum et <br />
            sit aliquam!
          </h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est
            felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
