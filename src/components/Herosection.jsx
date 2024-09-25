import React from 'react';
import img1 from '../assets/img1.jpg';

function Herosection() {
  return (
    <div className='relative w-full h-auto py-10'>
      <img src={img1} alt="img1" className='w-full h-auto object-cover' />
    </div>
  );
}

export default Herosection;
