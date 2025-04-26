import React from 'react';

export const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        {/* Paragraphs */}
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-blue-600">Gkp Resident</span> — where comfort meets elegance. 
          With a legacy of hospitality and unmatched service, we provide premium stays for leisure and business travelers alike.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is simple: to make every guest feel at home. 
          With world-class amenities, serene environments, and a touch of local culture, we strive to make your stay unforgettable.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you're here for a weekend getaway or an extended business trip, 
          <span className="font-medium">TranquilStay</span> ensures a luxurious and seamless experience every time.
        </p>
      </div>
    </section>
  );
};
