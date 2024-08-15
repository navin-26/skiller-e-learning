import React from 'react';




const InstructorBanner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row  justify-between">
        <div className="md:w-1/2 justify-center">
          <h1 className="text-4xl font-bold mb-4">Come teach with us</h1>
          <p className="text-lg mb-6">Become an instructor and change lives — including your own</p>
          <button
           
            className="px-6 py-2 bg-black text-white font-semibold rounded"
          >
            Get started
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default InstructorBanner;