import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-gray-100/50 h-[40vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
          “I used Quickbooks and bookkeepers but it was slow and clunky. Now Finta saves me time by auto-categorizing our transactions more accurately.”
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <img
            src="https://i.imgur.com/7vQD0fPs.jpg" // Placeholder image — replace with actual
            alt="Jacob Bank"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">Jacob Bank</p>
            <p className="text-sm text-gray-500">Founder at Relay.app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
