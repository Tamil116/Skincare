import React from 'react';
import exide from '../assets/Exide.png'; // Assuming this path is correct for your project

const  TopHeader = () => (
  <div id="home" className="bg-red-700 text-white px-4 py-2">
    <div  className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
      {/* Brand Name */}
      <span className="font-bold text-lg sm:text-xl mb-2 sm:mb-0">
        <img src={exide} alt="Exide Logo" className="h-8 md:h-10 inline-block mr-2" />
      </span>

      {/* Navigation and Language Selector */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-3 md:space-x-6">
          <a href="#home"  className="hover:underline text-base md:text-lg  text-white">Home</a>
          <a href="#inverter" className="hover:underline text-base md:text-lg  text-white">Inverter</a>
          <a href="#line" className="hover:underline text-base md:text-lg  text-white">Timeline</a>
          <a href="#about" className="hover:underline text-base md:text-lg  text-white">About</a>
          <a href="#deal" className="hover:underline text-base md:text-lg  text-white">Dealers</a>
          <a href="#contact" className="hover:underline text-base md:text-lg  text-white">Contact Us</a>

        </div>

        {/* Language Selector */}
        <select className="bg-red-700 text-white border border-white rounded px-2 py-1 mt-2 sm:mt-0 sm:ml-2 text-sm md:text-base">
          <option>English</option>
          <option>Tamil</option>
        </select>
      </div>
    </div>
  </div>
);

export default TopHeader;