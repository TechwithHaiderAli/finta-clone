import { motion } from "motion/react";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [time, setTime] = useState({ hours: '', minutes: '', ampm: '' });
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const future = new Date(now.getTime() + 10 * 60000);
      let hours = future.getHours();
      let minutes = future.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      setTime({ hours: String(hours), minutes: String(minutes), ampm });
    };

    updateTime(); // Set time immediately on mount

    const timeInterval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowColon(prev => !prev);
    }, 500); // Blink colon every half second

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className='w-full max-w-4xl mx-auto my-10 px-4 py-10 flex flex-col gap-3 justify-center items-center text-black text-center'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link
          href="/docs"
          className='rounded-2xl text-xs sm:text-sm font-semibold bg-gray-200/60 flex gap-2 sm:gap-3 items-center px-3 py-1.5 mb-5'
        >
          <span className='tracking-wide text-xs'>
            QSBS just got better in July 2025
          </span>
          <FaArrowRight />
        </Link>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className='text-3xl font-semibold sm:text-4xl md:text-5xl leading-tight'
      >
        <span className='whitespace-nowrap'>Magically Simplify</span><br />
        accounting and taxes
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex flex-col gap-1 text-base sm:text-lg text-black/70'
      >
        <p>Automated bookkeeping, effortless tax filing, real‑time insights.</p>
        <p>
          Set up in 10 mins. Back to building by{' '}
          {time.hours}
          <span
            className={`inline-block transition-opacity duration-200 ${
              showColon ? 'opacity-100' : 'opacity-0'
            }`}
          >
            :
          </span>
          {time.minutes}
          {time.ampm}.
        </p>
      </motion.div>

      <div className='flex flex-col sm:flex-row gap-3 mt-4'>
        <button className='bg-blue-500 hover:bg-blue-700 font-semibold text-white px-5 py-2.5 rounded-xl shadow-md text-sm sm:text-base'>
          Start Free Trial
        </button>
        <button className='bg-transparent cursor-pointer hover:bg-black/8 text-black/90 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm sm:text-base'>
          Pricing <FaArrowRight className='opacity-40 size-3' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
