'use client';

import React from 'react';
import Container from '../components/finta/Container';
import Navbar from '../components/finta/Navbar';
import Hero from '../components/finta/Hero';
import MarqueeContainer from '../components/finta/MarqueeContainer';
import FreeTime from '../components/finta/free-time';
import FeatureOne from '../components/finta/FeatureOne';
import Testimonial from '../components/finta/Testimonial';
import TaxHeader from '../components/finta/TextHeader';

const FintaPage = () => {
  return (
    <div className='w-full min-h-screen flex justify-center bg-gradient-to-b from-white via-blue-300/35 to-white'>
      <Container>
        <Navbar />
        <Hero />
        <MarqueeContainer/>
        <FreeTime/>
        <FeatureOne/>
        <Testimonial/>
        <TaxHeader/>
      </Container>
    </div>
  );
};

export default FintaPage;
