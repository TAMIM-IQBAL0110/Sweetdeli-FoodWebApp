import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPerson, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const navbarItem = ["Home", "Discover", "Blog", "About Us", "Contact"];
  const location = useLocation();
  const [cartCount] = useState(2);

  const isActive = (path) =>
    location.pathname === path
      ? "text-gray-900 font-medium"
      : "text-gray-500 hover:text-gray-800";

  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-200">
      {/* Container */}
      <div
        className="flex justify-between items-center h-[90px] w-full"
        style={{ padding: "0 80px" }}
      >
        {/* Logo , Divider and Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/home"
            className="flex items-center gap-3 bg-gray-200 rounded-3xl hover:bg-gray-300 transition-colors"
            style={{ padding: "10px 25px" }}
          >
            <span className="text-xl font-bold">★</span>
            <span className="font-bold text-lg text-gray-900">LOGO</span>
          </Link>

          {/* Vertical Divider */}
          <div className="w-px h-10 bg-gray-300"></div>

          {/* Navigation Links */}
          {navbarItem.map((item) => {
            const path = `/${item.toLowerCase().replace(" ", "")}`;
            return (
              <Link
                key={item}
                to={path}
                className={`text-lg transition-colors ${isActive(path)}`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Link to="/addCard" className="p-2">
            <button className="relative p-2">
              <MdShoppingCart className="w-8 h-8 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>


          <Link to="/profile" className="p-2">
            <button className="relative p-2">
              <MdPerson className="w-8 h-8 text-gray-600" />
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
