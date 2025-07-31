import React from 'react'

const Container = ({children}) => {
  return (
    <div className='h-screen flex flex-col items-center w-full max-w-5xl border-1 border-gray-300/60'>
        {children}
    </div>
  )
}

export default Container