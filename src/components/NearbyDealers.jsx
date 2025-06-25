import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const dealers = [
  {
    name: 'Exide Care - Shree Abirami Marketing',
    addressLine1: 'Contonment',
    addressLine2: 'Tiruchirappalli - 620001',
    rating: 5,
  },
  {
    name: 'Exide Care - Asswin Battery House',
    addressLine1: 'Thiruverumbur',
    addressLine2: 'Tiruchirappalli - 620014',
    rating: 4.5,
  },
  {
    name: 'Exide Care - Ranga Batteries',
    addressLine1: 'Gandhi Road',
    addressLine2: 'Tiruchirappalli - 620006',
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div id='deal' className="flex justify-center text-orange-500 text-xl mb-2">
      {Array(fullStars).fill().map((_, i) => <FaStar key={`full-${i}`} />)}
      {hasHalfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill().map((_, i) => <FaRegStar key={`empty-${i}`} />)}
    </div>
  );
};

const DealerCard = ({ dealer }) => (
  <div className="bg-white shadow-md rounded-lg px-6 py-4 text-center min-w-[280px]">
    <h3 className="font-semibold text-lg mb-2">{dealer.name}</h3>
    <StarRating rating={dealer.rating} />
    <hr className="my-2" />
    <p>{dealer.addressLine1}</p>
    <p>{dealer.addressLine2}</p>
  </div>
);

const DealerCarousel = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        NEARBY DEALERS OF <span className="text-red-600">EXIDE</span>
      </h2>
      <div className="relative flex items-center justify-center">
        <button className="absolute left-2 text-red-500 text-2xl">
          <IoIosArrowBack />
        </button>
        <div className="flex gap-4 overflow-x-auto px-8 scrollbar-hide">
          {dealers.map((dealer, index) => (
            <DealerCard key={index} dealer={dealer} />
          ))}
        </div>
        <button className="absolute right-2 text-red-500 text-2xl">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default DealerCarousel;
