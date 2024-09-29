import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
