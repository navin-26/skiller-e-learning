import React from 'react';
import banImage from '../assets/ban.jpg';

const Banner = () => {
  return (
    <section className="relative flex flex-row justify-evenly pl-10 pt-[180px] h-[400px] z-10">
    
      <div className="relative container w-3/4 text-center">
        <h1 className="text-[45px] font-bold mb-4 text-black">Welcome to Skiller E-Learning Platform</h1>
        <p className="text-[25px] text-black font-semibold">Your gateway to a world of knowledge</p>


      </div>
      <div className='w-1/3   bg-contain h-28'>
        <img src={banImage} alt="img" className='border  rounded-l-full' />
      </div>
    </section>
  );
};

export default Banner;
