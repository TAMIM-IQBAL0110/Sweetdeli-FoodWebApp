import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  className = "", 
  variant = "primary" 
}) => {
  // Base styles to match the "Discover Menu" image
  const baseStyles = "px-10 py-4 rounded-full font-semibold transition-all duration-200 text-base flex items-center justify-center";
  
  // Specific color variants
  const variants = {
    primary: "bg-[#121212] text-white hover:bg-gray-800 active:scale-95",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ padding: '10px 35px', fontSize: '16px' }}
    >
      {children}
    </button>
  );
};

export default Button;