import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
function Home() {

    return (
      <><div className="min-h-screen">
        <Navbar></Navbar>
  <HeroSection></HeroSection>
  <FeaturesSection></FeaturesSection>
  <StatsSection></StatsSection>
  <CTASection></CTASection>
      </div>
  
      </>
    )
  }

export default Home