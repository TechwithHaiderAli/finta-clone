'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [time, setTime] = useState({ hours: '', minutes: '', ampm: '' });
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const future = new Date(now.getTime() + 10 * 60000);
      let hours = future.getHours();
      let minutes = future.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      setTime({ hours, minutes, ampm });
      setShowColon(prev => !prev);
    }, 500); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-2xl flex flex-col gap-5 justify-center items-center text-black mt-30'>
      <Link href="/docs" className='rounded-2xl text-[13px] font-semibold bg-gray-200/60 flex gap-3 items-center px-2 py-1'>
        <span className='tracking-wide'>QSBS just got better in July 2025</span> <FaArrowRight />
      </Link>
      <h1 className='text-5xl px-15 font-semibold text-pretty text-center'>
        Magically simplify accounting and taxes
      </h1>
     <div className='flex flex-col items-center'> 
         <p className='text-black/70 '>
        Automated bookkeeping, effortless tax filing, real‑time insights.
      </p>
      <p className='text-black/70'>
        Set up in 10 mins. Back to building by{' '}
        {time.hours}
        <span className={`inline-block transition-opacity duration-200 ${showColon ? 'opacity-100' : 'opacity-0'}`}>
          :
        </span>
        {time.minutes}
        {time.ampm}.
      </p>
     </div>
        <div className='flex space-x-4'> 
            <button className='bg-blue-500 cursor-pointer hover:bg-blue-700 font-semibold text-white px-3 py-2 rounded-xl text-shadow-md shadow-md '>Start Free Trial </button>
             <button className='bg-transparent cursor-pointer hover:bg-indigo-50/50 text-black/90 font-semibold  px-3 py-2 rounded-lg  flex items-center gap-2 '>Pricing <FaArrowRight className='opacity-40 size-3'/> </button> 
             
        </div>
    </div>
  );
};

export default Hero;
