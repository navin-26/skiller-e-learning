import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="">
      <Header />
        <Banner />
        <About />
      <Footer />
    </div>
  );
};

export default HomePage;
