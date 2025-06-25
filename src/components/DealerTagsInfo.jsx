import React from 'react';
import Qr from "../assets/Qr.png"; // Assuming the QR code image is in the assets folder
const DealerInfo = () => {
  const reviews = [
    {
      name: 'VIMALATHITHAN VIMAL',
      date: '22-06-2025',
      rating: 4.5,
      comment: 'Good service',
    },
    {
      name: 'Arwinson Raja',
      date: '21-06-2025',
      rating: 5,
      comment: 'Excellent service for the people of Trichy Dist and all over the world. Completely satisfied.',
    },
  ];

  const nearby = [
    'Williams Road', 'McDonalds Road', 'Junction Road', 'Rockins Road',
    'Royal Road', 'V O C Road', 'Lawsons Road', 'Grand Southern Trunk Road'
  ];

  const categories = [
    'Battery Store', 'Battery Wholesaler', 'Car Batteries', 'Bike Battery',
    'Auto Battery Store', 'Inverter And Inverter Battery Store', 'Solar Battery',
    'Home Inverter', 'Inverter Batteries'
  ];

  const tags = [
    'inverter', 'batteries exide', 'inverter battery', 'exide batteries price',
    'price of inverter battery', 'battery shop near me', 'exide battery near me',
    'exide battery shop near me', 'battery shop', 'car battery shop near me',
    'exide battery dealer near me', 'battery car near me', 'battery dealers near me',
    'bike battery shop near me', 'inverter battery shop near me',
    'exide dealer near me', 'exide showroom near me', 'battery shop nearby',
    'exide battery showroom near me', 'exide battery dealer', 'inverter battery',
    'inverter shop near me', 'inverter shop nearby with battery',
    'two wheeler battery shop', 'car and bike battery store', 'buy car battery',
    'buy bike battery', 'buy inverter battery', 'buy car battery near', 'buy bike battery near'
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        DEALER <span className="text-red-600">INFORMATION</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h3 className="text-xl font-semibold border-b mb-3">Ratings & Reviews</h3>
          {reviews.map((r, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center gap-1 text-orange-500 text-lg mb-1">
                {'★'.repeat(Math.floor(r.rating))}{r.rating % 1 ? '½' : ''} <span className="text-black text-sm ml-1">{r.rating}</span>
              </div>
              <p className="font-bold">{r.name}</p>
              <p className="text-sm text-gray-600 mb-1">Posted on: {r.date}</p>
              <p className="text-yellow-500 mb-1">Rated {'★'.repeat(r.rating)}</p>
              <p className="text-gray-700">{r.comment}</p>
              <hr className="my-4" />
            </div>
          ))}

          <div className="flex gap-4">
            <button className="border border-red-500 text-red-600 px-4 py-2 rounded">Submit a Review</button>
            <a href="#" className="text-blue-600 underline">View All</a>
          </div>

          {/* Feedback & QR */}
          <div className="mt-10">
            <h4 className="font-semibold text-lg mb-2">Share Feedback</h4>
            <img src={Qr} alt="QR Code" className="w-36 h-36" />
            <p className="text-gray-600 text-sm mt-2">Tell us about your experience. Scan this QR code to discover more with us.</p>
            <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded">Download QR</button>
            <p className="text-sm mt-1">Click on QR code to enlarge.</p>
          </div>

          {/* Business Hours */}
          <div className="mt-10">
            <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
            <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-700">
              <p>Mon :</p><p>09:30 AM - 08:00 PM</p>
              <p>Tue :</p><p>09:30 AM - 08:00 PM</p>
              <p>Wed :</p><p>09:30 AM - 08:00 PM</p>
              <p>Thu :</p><p>09:30 AM - 08:00 PM</p>
              <p>Fri :</p><p>09:30 AM - 08:00 PM</p>
              <p>Sat :</p><p>09:30 AM - 08:00 PM</p>
              <p>Sun :</p><p>10:00 AM - 12:00 PM</p>
            </div>
          </div>

          {/* Other Dealers */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg">Other Dealers of Exide</h4>
            <p className="text-sm mt-1">Exide dealers in <a href="#" className="text-blue-600 underline">Tamil Nadu</a></p>
            <p className="text-sm">Exide dealers in <a href="#" className="text-blue-600 underline">Tiruchirappalli</a></p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Nearby Localities</h4>
            <div className="flex flex-wrap gap-2">
              {nearby.map(loc => (
                <span key={loc} className="bg-red-600 text-white px-3 py-1 text-sm rounded">{loc}</span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <span key={cat} className="border border-red-500 text-red-600 px-3 py-1 text-sm rounded">{cat}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="border border-red-500 text-red-600 px-3 py-1 text-sm rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerInfo;
