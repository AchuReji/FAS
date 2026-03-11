import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "IDENTIFY",
    description: "Identify core function for focused analysis.",
  },
  {
    id: "02",
    title: "Assess",
    description: "Assess processes and critical risk controls",
  },
  {
    id: "03",
    title: "IMPROVE",
    description: "Improve processes and recommend actionable solutions",
  },
  {
    id: "04",
    title: "Monitor",
    description: "Monitor compliance with established controls",
  },
];

const OurApproach = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  // Brand Colors
  const brandBlue = "#145887";
  const brandGreen = "#55B84A";

  return (
    <section 
      className="relative py-20 px-6 font-sans overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        // Consistent Background: Overlay + Carbon Fibre Texture + Fixed Professional Image
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.96)), 
                          url(""), 
                          url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
        backgroundAttachment: 'scroll, scroll, fixed',
        backgroundSize: 'auto, auto, cover'
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div 
          className="inline-block text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-widest mb-6 shadow-sm"
          style={{ backgroundColor: brandGreen }}
        >
          OUR APPROACH
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-16 leading-tight">
          A Methodology Driven by Precision
        </h2>

        {/* Steps Container */}
        <div className="relative border border-dashed border-gray-300 rounded-3xl p-4 md:p-8 bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative group cursor-pointer p-8 flex flex-col items-start text-left transition-all duration-300"
              >
                {/* Vertical Divider (Desktop Only) */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gray-200" />
                )}

                {/* Animated Green Bar */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-20"
                    style={{ backgroundColor: brandGreen }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Number Outline */}
                <span 
                  className={`text-6xl font-bold mb-6 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-[#55B84A]' : 'text-transparent'
                  }`}
                  style={{ 
                    WebkitTextStroke: hoveredIndex === index ? '0px' : '1px #ccc',
                    color: hoveredIndex === index ? brandGreen : 'transparent'
                  }}
                >
                  {step.id}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#111827] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-[#111827] leading-relaxed">
            Our approach is centered around a structured methodology that optimizes our processes to deliver 
            <span style={{ color: brandBlue }}> exceptional value </span> 
            to our clients through these four key stages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;