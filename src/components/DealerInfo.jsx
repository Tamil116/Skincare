import React from 'react';

const DealerInfo = () => (
  <div className="bg-white p-4 shadow-md w-full md:w-96 lg:w-[450px] min-h-96">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
      Exide Care - Sri Kalpana Battery Works
    </h2>
    <p className="text-base md:text-lg text-gray-600 mb-3">
      No 191/2, Asikaran Complex, Birds Road, Cantonment, Trichy - 620001
    </p>
    <ul className="text-base md:text-lg text-gray-700 mt-2 space-y-2">
      <li><span role="img" aria-label="phone">📞</span> +91-9361464688</li>
      <li><span role="img" aria-label="mobile">📱</span> +91-7502569116</li>
      <li><span role="img" aria-label="email">✉️</span> trichyexide@gmail.com</li>
    </ul>
    <button className="mt-5 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 text-sm md:text-base flex items-center justify-center">
      <span role="img" aria-label="pin" className="mr-2">📍</span> Get Directions
    </button>
  </div>
);

export default DealerInfo;
