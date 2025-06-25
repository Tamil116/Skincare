import React from 'react';

const InverterSection = () => {
  const categories = [
    { name: 'CAR/SUV/MUV BATTERIES', icon: '🚗' },
    { name: 'TWO WHEELER BATTERIES', icon: '🏍️' },
    { name: 'THREE WHEELER BATTERIES', icon: '🛵' },
    { name: 'LCV/HCV BATTERIES', icon: '🚚' },
    { name: 'TRACTOR BATTERIES', icon: '🚜' },
    { name: 'INVERTER BATTERIES & INVERTERS', icon: '🏠' },
    { name: 'GENSET BATTERIES', icon: '💡' },
  ];

  const [activeTab, setActiveTab] = React.useState('INVERTER BATTERY');

  return (
    <div id='inverter' className="bg-gray-100 p-6 lg:px-16 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Find your <span className="text-red-600">Inverter</span></h2>
<p className='text-lg text-gray-600 mb-6 mt-10'>whats your requirement?</p>
      {/* Category Row */}
      <div className="mt-6 mb-8 border-b border-gray-300 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-9">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center text-center text-sm text-gray-700">
            <div className="text-3xl mb-2">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Main White Box: Tabs + Search */}
      <div className="bg-white shadow-md rounded-md p-6 flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Left Side: Tabs + Button */}
        <div className="w-full lg:w-1/2">
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-4 gap-8">
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === 'INVERTER BATTERY'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('INVERTER BATTERY')}
            >
              INVERTER BATTERY
            </button>
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === 'INVERTERS'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('INVERTERS')}
            >
              INVERTERS
            </button>
          </div>

          {/* Button */}
          <button className="bg-red-600 text-white font-semibold px-6 py-3 mt-2 hover:bg-red-700 transition-all">
            CALCULATE YOUR REQUIREMENT ➔
          </button>
        </div>

        {/* Right Side: Search */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-3">
          <p className="text-sm text-gray-500">
            You can also search by <br />
            <span className="text-red-600 font-semibold">Exide Battery/ Inverter Brand</span>
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search here"
              className="w-full border-b border-gray-400 focus:outline-none px-4 py-2 gap-4"
            />
            <button className="bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 ">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InverterSection;
