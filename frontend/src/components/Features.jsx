import React from 'react';
import { FaHandsHelping, FaCertificate, FaChartBar, FaChalkboardTeacher } from 'react-icons/fa';

const cards = [
  {
    title: "HANDS ON TRAINING",
    description: "Our hands-on training approach ensures that you not only learn theoretical concepts but also gain practical experience. Engage in real-world scenarios and apply what you’ve learned to solve actual problems.",
    icon: <FaHandsHelping className="text-teal-700" size={300} /> // Increased size
  },
  {
    title: "CERTIFICATION",
    description: "Upon completing our courses, you will receive a certification that is recognized by industry leaders. This certification will validate your skills and enhance your career prospects.",
    icon: <FaCertificate className="text-teal-700" size={300} /> // Increased size
  },
  {
    title: "INSIGHTS AND ANALYTICS",
    description: "Gain valuable insights into your learning progress with our analytics tools. Track your performance, identify areas for improvement, and make data-driven decisions to enhance your learning experience.",
    icon: <FaChartBar className="text-teal-700" size={300} /> // Increased size
  },
  {
    title: "CONNECT WITH THE EDUCATOR",
    description: "Our platform allows you to connect directly with educators for personalized guidance. Get your questions answered, receive feedback on your work, and engage in meaningful discussions with experts.",
    icon: <FaChalkboardTeacher className="text-teal-700" size={300} /> // Increased size
  }
];

const About = () => {
  return (
    <section className="relative flex justify-center p-[180px] h-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28 ">
        {cards.map((card, index) => (
          <div key={index} className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-80 h-44 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200 border border-l-4 border-black">
            {card.icon}
            <div>
              <span className="font-extrabold uppercase">{card.title}</span>
              <p className="line-clamp-3">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
