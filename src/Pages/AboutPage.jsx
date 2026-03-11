import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AboutSection from '../componments/aboutus/AboutSection';

const AboutPage = ({ title = "About Us" }) => {
  // Service data from provided image
  const services = [
    "Accurate & Timely Compliance",
    "Business Growth Consultancy",
    "Trusted Financial Advisory",
    "Regulatory Reporting Expertise",
    "Tax Planning & Optimization",
    "Client-Centric Approach"
  ];
    const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
    <div className="relative w-full font-sans">
      {/* Main Banner Container */}
      <div className="relative h-[350px] md:h-[450px] w-full bg-[#0a0a0a] overflow-hidden flex items-center">
        
        {/* 1. Background Image with Grayscale and Zoom Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40 transition-transform duration-[10000ms] scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920')` 
          }}
        />

        {/* 2. Decorative Grid Overlay (Radial dots from reference) */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* 3. Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        {/* 4. Content Area */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb Section */}
            <nav className="flex items-center gap-2 mb-4 text-sm md:text-base font-bold">
              <a 
                href="/" 
                className="text-[#C5D941] hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <ChevronRight size={18} className="text-white/60" />
              <span className="text-white/80 uppercase tracking-widest">
                {title}
              </span>
            </nav>

            {/* Main Title Section */}
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* 5. Sub-Header Section (White Bar below Banner) */}
      
    </div>
   
   <AboutSection/>
    {/* ----------------------------------- */}


 <section className="bg-white py-16 px-6 md:px-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Our Mission & Vision
          </h1>
          <div className="mt-4 flex gap-1">
            <div className="h-1.5 w-16 bg-[#222F44]"></div>
            <div className="h-1.5 w-16 bg-black"></div>
          </div>
        </motion.div>

        {/* Mission Section (Top part of generated image) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center"
        >
          {/* Circular Image Wrapper */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-white shadow-xl overflow-hidden flex-shrink-0 order-1 md:order-none md:ml-[30%]">
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            <img 
              src="https://image2url.com/r2/default/images/1770194695455-d0dfbf6e-d10b-4c57-b943-8a8a9fd3ca1c.avif" 
              alt="Mission - Hands holding plant" 
              className="w-full h-full object-cover grayscale brightness-90"
              style={{ objectPosition: 'top' }} // Focus on the mission part of the image
            />
          </div>
          {/* Content Block */}
          <div className="mt-[-40px] md:mt-0 md:absolute md:right-0 w-full md:w-[60%] bg-gray-100 p-12 md:pl-48 rounded-lg text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="text-gray-600 leading-relaxed italic">
              "To deliver tech-enabled, compliant, and insight-driven financial solutions with precision and professionalism."
            </p>
          </div>
        </motion.div>

        {/* Vision Section (Bottom part of generated image) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center justify-end"
        >
          {/* Content Block */}
          <div className="mb-[-40px] md:mb-0 md:absolute md:left-0 w-full md:w-[60%] bg-gray-100 p-12 md:pr-48 rounded-lg text-center md:text-right order-2 md:order-none">
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed italic">
              "To redefine financial advisory through innovation, integrity, and intelligent technology."
            </p>
          </div>
          {/* Circular Image Wrapper */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-white shadow-xl overflow-hidden flex-shrink-0 mr-0 md:mr-[30%] order-1 md:order-none">
            <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply"></div>
            <img 
              src="https://image2url.com/r2/default/images/1770187194443-f8f334b5-0157-4f94-8f1d-bceb4b83ca76.jpg" 
              alt="Vision - Tech and Analytics" 
              className="w-full h-full object-cover grayscale brightness-90"
              style={{ objectPosition: 'bottom' }} // Focus on the vision part of the image
            />
          </div>
        </motion.div>

      </div>
    </section>

     </>
  );
};

export default AboutPage;