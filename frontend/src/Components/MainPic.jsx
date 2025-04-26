import React, { useEffect, useState } from 'react';
import hotel1 from '../assets/hotel-1.jpg'
import hotel2 from '../assets/hotel-2.jpg'
import hotel3 from '../assets/hotel-3.jpg'

const images = [
  hotel1,
  hotel2,
  hotel3
];

export const MainPic = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
   

        <div className="w-full overflow-hidden rounded-2xl shadow-lg p-2">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-[800px] object-cover transition-all duration-700 ease-in-out"
          />
        </div>
   
      
  );
};
