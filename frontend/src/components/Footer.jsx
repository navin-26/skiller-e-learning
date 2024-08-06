import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-8 h-32">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Sikiller-E-Learning . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
