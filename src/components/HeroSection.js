// HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-500 py-16 flex items-center justify-center">
      {/* Wavy background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 inset-x-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0 192l30 5.3c30 5.7 90 13.7 150 10.7s120-15.7 180-21.3c60-5.3 120-10.3 180 5.3s120 26.3 180 26.7c60 0.3 120-21.7 180-42.7s120-42.3 150-42.7l30-0.3v128H0z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Awesome Title</h1>
        <p className="text-lg md:text-xl mb-8">Some catchy subtitle goes here.</p>
        {/* Add your additional content here */}
      </div>
    </div>
  );
};

export default HeroSection;
