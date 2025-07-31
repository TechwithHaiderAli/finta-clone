"use client"
import React from 'react'
import Container from '../components/finta/Container'
import Navbar from '../components/finta/Navbar'
import Hero from '../components/finta/Hero'

const FintaPage = () => {
  return (

    <div className='w-full h-full flex justify-center bg-linear-to-b from-white from-0% via-blue-300/35 via-65% to-white to-100%'>
            <Container>
            <Navbar/> 
            <Hero/>   
                
            </Container>
    </div>
  )
}

export default FintaPage