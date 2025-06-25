import React from 'react';
import Home from '../assets/Home.jpg';

const BannerImage = () => (
  <div className="w-full">
    <img
      src={Home}
      alt="XPLORE NON-STOP WITH INDIA’S BEST"
      className="w-[2500px] object-cover"
    />
   
  </div>
);

export default BannerImage;
