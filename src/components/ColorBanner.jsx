import React from 'react';

function ColorBanner({ color, children, className }) {
  return (
    <div
      className={`w-100 pa5 shadow-4 flex flex-column items-center tc ${className}`}
      style={{ backgroundColor: color }}
    >
      <div>
        {children}
      </div>
    </div>
  );
}

export default ColorBanner;
