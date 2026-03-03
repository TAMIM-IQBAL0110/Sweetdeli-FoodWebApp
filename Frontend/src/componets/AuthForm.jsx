import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa6';

const AuthForm = ({ title, subtitle, footerText, footerLinkText, onFooterClick, onSubmit, children, submitText }) => {
  return (
    <div className="flex flex-col w-full max-w-[440px] px-6 mx-auto">

      {/* Header Section */}
      <div className="mb-14 text-left" style={{ padding: "20px 0px 50px 0px" }}>
        <h1 className="text-[32px] font-bold text-[#1A1A1A] mb-2 tracking-tight">
          {title}
        </h1>
        <p className="text-[#4B5563] text-base">
          {subtitle}
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        {children}

        <button
          type="submit"
          className="w-full bg-[#121212] text-white py-4 rounded-full font-bold text-base hover:bg-black transition-all mt-4"
          style={{ padding: "10px 10px" }}
        >
          {submitText}
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100"></div>
        </div>
        <span className="relative px-4 bg-white text-[13px] text-[#8C97A8]" style = {{padding:"20px 10px"}}>
          ------or do it via other accounts --------
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5">
        <button className="w-14 h-14 flex items-center justify-center border border-gray-100 rounded-full hover:bg-gray-50 transition-all shadow-sm">
          <FcGoogle size={24} />
        </button>
        <button className="w-14 h-14 flex items-center justify-center border border-gray-100 rounded-full hover:bg-gray-50 transition-all shadow-sm">
          <FaApple size={24} className="text-[#1A1A1A]" />
        </button>
        <button className="w-14 h-14 flex items-center justify-center border border-gray-100 rounded-full hover:bg-gray-50 transition-all shadow-sm">
          <FaFacebook size={24} className="text-[#1877F2]" />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm"style={{padding:"20px 20px"}}>
        <span className="text-[#8C97A8] font-medium">{footerText} </span>
        <button 
          onClick={onFooterClick}
          className="text-[#1A1A1A] font-bold hover:underline"
        >
          {footerLinkText}
        </button>
      </div>
    </div>
  );
};

export const AuthInput = ({ label, placeholder, type = "text", name, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[#6B7280] font-medium text-[14px]">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full min-h-[40px] bg-[#F0F5F9] border-none rounded-lg py-4 px-5 text-[15px] text-[#1A1A1A] placeholder-[#9CA3AF] focus:ring-1 focus:ring-gray-300 outline-none transition-all"
      style={{padding:"10px 10px"}}
    />
  </div>
);

export default AuthForm;