import React from 'react';


const reasons = [
    {
      icon: '../assets/white-board.png', // Replace with your actual icon path
      title: 'Teach your way',
      description: 'Publish the course you want, in the way you want, and always have control of your own content.',
    },
    {
      icon: 'https://via.placeholder.com/64', // Replace with your actual icon path
      title: 'Inspire learners',
      description: 'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.',
    },
    {
      icon: 'https://via.placeholder.com/64', // Replace with your actual icon path
      title: 'Get rewarded',
      description: 'Expand your professional network, build your expertise, and earn money on each paid enrollment.',
    },
  ];

const about = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">So many reasons to start</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <img src={reason.icon} alt={reason.title} className="w-16 h-16" />
              </div>
              <h2 className="text-xl font-bold mb-2">{reason.title}</h2>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    
  )
}

export default about