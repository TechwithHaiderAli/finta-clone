import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='min-h-screen w-full max-w-5xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 border-1 border-gray-300/55'>
      {children}
    </div>
  );
};

export default Container;
