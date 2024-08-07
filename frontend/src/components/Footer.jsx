import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto flex justify-between items-end h-32">
        <div className="flex flex-col">
          <div className="mt-2 flex flex-row gap-5 text-sm">
            <a href="/about-us" className="hover:underline">About Us</a>
            <a href="/contact-us" className="hover:underline">Contact Us</a>
            <a href="/help" className="hover:underline">Help and Support</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </div>
          <p className="text-[25px] uppercase mt-5 font-bold">Skiller</p>

        </div>
        <div className="text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} Skiller-E-Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
