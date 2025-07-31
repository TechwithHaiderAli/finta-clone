import React from 'react'

const Container = ({children}) => {
  return (
    <div className='h-screen flex flex-col items-center w-full max-w-5xl border-1 border-black/30'>
        {children}
    </div>
  )
}

export default Container