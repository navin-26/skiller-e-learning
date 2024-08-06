import React from 'react';

const Banner = () => {
  return (
    <section className="bg-white text-white text-center py-20 h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Skiller E-Learning Portal</h1>
        <p className="text-xl">Your gateway to a world of knowledge</p>
        <a href="/courses" className="mt-8 inline-block bg-black text-white font-bold py-2 px-4 rounded shadow-xl border-2 border-black hover:bg-white hover:text-teal-600">Explore Courses</a>
      </div>
    </section>
  );
};

export default Banner;
