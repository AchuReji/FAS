import React from 'react'

import { FeatureStepsDemo } from '../componments/FeatureStepsDemo'

import ConsultationSection from '../componments/ConsultationSection'
import Companyabout from '../componments/Companyabout'

import ServicesSection1 from '../componments/ServicesSection1'
import TestimonialsSectionfinal from '../componments/whyuchoose us/TestimonialsSectionfinal'

import { InfiniteMovingCardsDemo } from '../componments/movingcard/InfiniteMovingCardsDemo'
import LandingPage3 from '../componments/LandingPage3'


import { MarqueeDemo } from '../componments/Marquee/MarqueeDemo'
import TimelineSection from '../componments/TimelineSection'







function Home() {
  return (
    < > 
  
   
  <LandingPage3/>
    <Companyabout/> 
<FeatureStepsDemo/> 
<TimelineSection/>
  <ServicesSection1/>   
  
    <TestimonialsSectionfinal/>   
        {/* <InfiniteMovingCardsDemo/> */}
     <MarqueeDemo/> 
    <ConsultationSection/>


    
    </>
  )
}

export default Home