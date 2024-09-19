import React from 'react';
import img1 from '../assets/img1.jpg';

function Herosection() {
  return (
    <div className='relative w-full h-auto py-10'>
      {/* Text above the image */}
      <div className='absolute top-1/2 transform-translate-y-1/2 shadow-lg shadow-black bg-green-700 rounded-xl text-center capitalize left-1/2 transform -translate-x-1/2 z-10 p-5 max-w-md mx-auto'>
        <h2 className='text-white text-3xl md:text-4xl font-bold mb-2'>
          Start a conversation
        </h2>
        <h3 className='text-white text-2xl md:text-3xl font-semibold'>
          with your family
        </h3>
      </div>

      {/* Image */}
      <img src={img1} alt="img1" className='w-full h-auto object-cover' />
    </div>
  );
}

export default Herosection;
