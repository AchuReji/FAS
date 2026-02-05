import React from 'react';
import { HeroSection } from './ui/HeroSection'; // Adjust the import path as needed

export default function DemoHero() {
  return (
    <div className="w-full bg-[#D4D6CC] ">
      
      <HeroSection
        logo={{
            url: "https://i.postimg.cc/Bn1yyB6Y/Untitled-design-removebg-preview.png",
            alt: "Company Logo",
            text: "Your Logo"
        }}
        slogan="Finance Consulting Services for
Business Growth"
        title={
          <>
            Finance Consulting Services <br />
            <span className="text-primary">for
Business Growth</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#explore",
        }}
        backgroundImage="https://i.postimg.cc/wMFmzMsf/premium-photo-1681487769650-a0c3fbaed85a.jpg"
        contactInfo={{
            website: "yourwebsite.com",
            phone: "+1 (555) 123-4567",
            address: "20 Fieldstone Dr, Roswell, GA",
        }}
      />
    </div>
  );
}
