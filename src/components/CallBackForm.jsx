import React from 'react';

const CallBackForm = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 shadow-sm border border-gray-200">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          REQUEST A <span className="text-red-600">CALL BACK</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Write to us with your query and we shall get back
        </p>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto space-y-6">
        <div className="border-t border-gray-300 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name *"
            className="w-full bg-white text-gray-800 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone No. *"
            className="w-full bg-white text-gray-800 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Segment and Submit Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Segment Dropdown */}
          <select
            className="w-full md:w-2/3 bg-white text-gray-800 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
            required
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Segment
            </option>
            <option value="Automotive" className="text-gray-800">Automotive</option>
            <option value="Inverter" className="text-gray-800">Inverter</option>
            <option value="Genset" className="text-gray-800">Genset</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-1/3 bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallBackForm;
