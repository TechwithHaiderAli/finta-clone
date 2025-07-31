'use client';

import React from 'react';
import Container from '../components/finta/Container';
import Navbar from '../components/finta/Navbar';
import Hero from '../components/finta/Hero';

const FintaPage = () => {
  return (
    <div className='w-full min-h-screen flex justify-center bg-gradient-to-b from-white via-blue-300/35 to-white'>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
};

export default FintaPage;
