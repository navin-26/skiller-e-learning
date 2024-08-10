import React from 'react';
import Header from '../components/Header';
import BannerTeach from '../components/BannerTeach';
import About from '../components/about'

import Footer from '../components/Footer';

const InstructorHome = () => {
  return (
    <div className="">
      <Header />
        <BannerTeach />
        <About />
      <Footer />
    </div>
  );
};

export default InstructorHome;
