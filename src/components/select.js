// src/components/ui/select.js

import React from 'react';

export const Select = ({ value, onValueChange, children }) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="border border-gray-300 rounded-md p-2"
    >
      {children}
    </select>
  );
};

export const SelectContent = ({ children }) => (
  <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
    {children}
  </div>
);

export const SelectItem = ({ value, children }) => (
  <option value={value} className="p-2 hover:bg-gray-100">
    {children}
  </option>
);

export const SelectTrigger = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectValue = ({ placeholder }) => (
  <option value="" disabled>
    {placeholder}
  </option>
);
