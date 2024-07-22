/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Btn = ({ color, bg, icon, title, className }) => {
  return (
    <div>
      <button 
        style={{ background: bg, color: color,fontSize:'13px' }} 
        className={`p-1 rounded-3xl h-9 flex items-center text-center pl-7 gap-1 w-40 ${className} `}
      >
        {icon} {title}
      </button>
    </div>
  );
}

export default Btn;
