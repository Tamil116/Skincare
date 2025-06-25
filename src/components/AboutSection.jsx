import React from 'react';
import about from '../assets/about.jpg'; 
import logo from '../assets/Exide.png'; // Assuming this is the correct path for your logo
const AboutSection = () => {
  return (
    <div id='about' className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          About <span className="text-red-600">Exide</span>
        </h2>
      </div>

      {/* Background Image and Logo */}
      <div className="relative">
        <img
          src={about} 
          alt="Exide Factory"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-red-600 py-4 flex justify-center">
          <img
            src= {logo}
            alt="Exide Logo"
            className="h-12"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white px-6 md:px-12 py-10 mt-6 text-gray-700 text-base leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <p>
          As the leading battery brand in the country for over 75 years, Exide has always
          focused on putting you, the customer, first. Manufacturing quality products and
          giving the best in service, availability and accessibility, Exide has always tried to
          offer the best value in the market.
        </p>
        <p>
          Exide Care outlets, Exide has forever been the most trusted brand in the category.
          This ever-increasing network of Exide Care outlets across the country ensure a
          smart and safe retail experience in this new normal. <br />
          The address of this dealer is No 19/1, Kalpana Complex, Birds Road, Cantonment...
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
