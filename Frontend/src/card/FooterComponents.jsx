import React from "react";
import { 
  FaFacebookSquare, 
  FaLinkedin, 
  FaTwitterSquare, 
  FaInstagram, 
  FaGlobe 
} from "react-icons/fa";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export default function FooterComponents() {
  return (
    <footer className="bg-white text-gray-700 py-12 px-6 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div style={{padding:"20px 0px 0px 150px"}}>
            <h2 className="text-xl font-bold text-gray-900">Sweetdeli</h2>
        </div>
        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-50 mb-18" style={{padding:"40px 10px 40px 150px"}}>
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-gray-900">Contact us</p>
              <p>sweetdeli@gmail.com</p>
              <p>+1-2345-6789</p>
              <p>123 Ave, New York, USA</p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 text-xl text-gray-600 gap-2">
              <FaFacebookSquare className="cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700" />
              <FaTwitterSquare className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-600" />
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Products</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Auctor volutpat.</li>
              <li className="hover:underline cursor-pointer">Fermentum turpis.</li>
              <li className="hover:underline cursor-pointer">Mi consequat.</li>
              <li className="hover:underline cursor-pointer">Amet venenatis.</li>
              <li className="hover:underline cursor-pointer">Convallis porttitor.</li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:underline cursor-pointer">Egestas vitae.</li>
              <li className="hover:underline cursor-pointer">Viverra lorem ac.</li>
              <li className="hover:underline cursor-pointer">Eget ac tellus.</li>
              <li className="hover:underline cursor-pointer">Erat nulla.</li>
              <li className="hover:underline cursor-pointer">Vulputate proin.</li>
            </ul>
          </div>

          {/* Column 4: App Download */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900" style={{padding:"0px 0px 10px 0px"}}>Get the app</h3>
            <div className="space-y-3 flex flex-col items-start gap-4">
              {/* Apple Store Button */}
              <button className="flex items-center w-48 bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition" style={{padding:"10px 10px"}}>
                <IoLogoAppleAppstore className="text-3xl mr-2" />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none">Download on the</p>
                  <p className="text-lg font-semibold leading-none">App Store</p>
                </div>
              </button>
              {/* Google Play Button */}
              <button className="flex items-center w-48 bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition" style={{padding:"10px 10px"}}>
                <IoLogoGooglePlaystore className="text-3xl mr-2" />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none">Get it on</p>
                  <p className="text-lg font-semibold leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400" style={{padding:"20px 20px"}}>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600" style={{padding:"0px 0px 0px 130px"}}>
            <FaGlobe />
            <span>English</span>
            <span className="text-[8px]">▼</span>
          </div>
          <div>
            
          </div>
          <p className="mt-4 md:mt-0">Copyright © 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}