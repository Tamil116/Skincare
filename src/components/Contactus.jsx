import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaEnvelope } from 'react-icons/fa';
import Qr from "../assets/Qr.png"; // Assuming you have a QR code image in your assets
const ContactSection = () => {
  return (
    <div id='contact' className="bg-gray-100 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        CONTACT <span className="text-red-600">US</span>
      </h2>

      <div className="bg-white shadow-md rounded-lg p-6 md:flex md:gap-8 items-start">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold border-b pb-2">
            Exide Care - Sri Kalpana Battery Works
          </h3>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-gray-600" />
            <p>No 19/1, Kalpana Complex, Birds Road Cantonment, Tiruchirappalli, Tamil Nadu - 620001, India</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-600" />
            <p>+91 8069156768</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-gray-600" />
            <a
              href="https://stores.exidecare.com/exide-care-sri-kalpana-battery-works-battery-store-cantonment-tiruchirappalli-132825/Home"
              className="text-blue-600 underline"
              target="_blank" rel="noreferrer"
            >
              View Store Website
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600" />
            <p>kalpanabatteryworks@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center text-center">
          <img
            src={Qr} // Replace with actual QR image link if needed
            alt="QR Code"
            className="w-40 h-40 mb-4"
          />
          <p className="text-sm">Tell us about your experience.<br />Scan this QR code to discover more with us.</p>
          <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 hover:bg-red-700 transition">
            Download QR
          </button>
          <p className="text-xs mt-2 text-gray-600">🔍 Click on QR code to enlarge.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
