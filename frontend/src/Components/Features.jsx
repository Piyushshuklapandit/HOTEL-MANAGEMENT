import React from 'react';

export const Features = () => {
  return (
    <div className="w-full px-6 py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Hotel Features */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Hotel Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Free Wi-Fi</li>
            <li>24/7 Room Service</li>
            <li>Swimming Pool</li>
            <li>Fitness Center</li>
            <li>Complimentary Breakfast</li>
          </ul>
        </div>

        {/* Restaurant Features */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Restaurant Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Multi-cuisine Menu</li>
            <li>Outdoor Seating</li>
            <li>Live Music</li>
            <li>Vegan & Vegetarian Options</li>
            <li>Open Till Midnight</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
