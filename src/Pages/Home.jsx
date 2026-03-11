import React from 'react'
import HeroSection from '../componments/HeroSection'

import MissionVisionSection from '../componments/MissionVisionSection'
import Companyservices from '../componments/Companyservices'
import AccordionSection from '../componments/AccordionItem'
import TeamSection from '../componments/TeamSection'
import OurApproach from '../componments/OurApproach'
import Companyabout from '../componments/Companyabout'
import ProcessOverview from '../componments/ProcessCard'
import TestimonialSection from '../componments/testimonial/TestimonialsSection'
import Connects from '../componments/Connects'
import AccountingPricing from '../componments/AccountingPricing'
// import Banner from '../componments/Banner'


function Home() {
  return (
    <div>
      
        <HeroSection/>
        <Companyabout/>
        {/* <Banner/> */}
        <MissionVisionSection/>
        <ProcessOverview/>
        <Companyservices/>
        <AccordionSection/>
        <TeamSection/>
        <AccountingPricing/>
        <OurApproach/>
        <TestimonialSection/>
        <Connects/>
        
    </div>
  )
}

export default Home