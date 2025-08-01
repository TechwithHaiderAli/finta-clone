import React from 'react';
import { motion } from 'framer-motion';

const Slot = ({ time, name, industry, amount, id }) => {
  const isAnimated = time === "Just now";

  return (
    <motion.div
      initial={isAnimated ? { y: id * 5, opacity: 0 } : false}
      animate={isAnimated ? { y: 0, opacity: 1 } : false}
      transition={isAnimated ? { duration: 0.8 } : undefined}
      className="px-5 py-3.5 flex justify-around items-center w-full border-b last:border-none"
    >
      <span className="w-24 text-sm text-gray-500">{time}</span>
      <span className="w-40 font-medium">{name}</span>
      <span className="w-32 text-blue-600 font-semibold">{industry}</span>
      <span
        className={`w-32 text-right font-semibold ${
          amount.includes('-') ? 'text-red-500' : 'text-green-600'
        }`}
      >
        {amount}
      </span>
    </motion.div>
  );
};

export default Slot;
