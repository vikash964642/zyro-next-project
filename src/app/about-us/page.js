// import React from 'react'
import HeroSection from './Sections/HeroSection';
import WhoWeAre from './Sections/WhoWeAre';
import MissionVision from './Sections/MissionVision';
import Corevalue from './Sections/Corevalue';
import Accelerate from './Sections/Accelerate';

export const metadata = {
  title: "Unified Financial Platform Tools for Business banking & payments",
  description:
    "All-in-one financial tools for businesses—streamline banking, payments, and expense tracking. Ideal for cafes, shops, restaurants, spas, and other merchants. ",
};

function AboutUs() {
  return (
    <>
    
        <HeroSection/>  
        <WhoWeAre/>  
        <MissionVision />
        <Corevalue />
        <Accelerate />
    </>
  )
}

export default AboutUs