import React from 'react';

function HeroBanner({ img, children }) {
  return (
    <div
      style={{
        background: `url(${img}) center`
      }}
      className="cover relative db"
      id="hero-banner"
    >
      <div>
        {children}
      </div>
  </div>
);
}

export default HeroBanner;
