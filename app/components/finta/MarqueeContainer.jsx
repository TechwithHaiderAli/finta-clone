import React from 'react'

const MarqueeContainer = () => {
    const names=['Google','Amazon','Meta','Microsoft','Tesla','SpaceX','Resend','MagicPatterns'];   
    const Duplicates=[...names,...names,...names,...names,...names,...names] 
  return (
    <div className='w-full h-auto overflow-hidden flex flex-col gap-8'>
        <p className='text-center text-md'>Trusted by fast growing startups</p>
        <div className='flex justify-between text-2xl  items-center gap-10 animate-marquee whitespace-nowrap'>
            {Duplicates.map((companyName,i)=><span key={i}>{companyName}</span>)}
        </div>
    </div>
  )
}

export default MarqueeContainer