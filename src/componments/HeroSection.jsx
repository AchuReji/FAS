import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    subtitle: "FINANCIAL SOLUTIONS",
    title: ["Trusted Advisors.", "Proven Expertise."],
    desc: "Philip Sam Varghese & Co. combines decades of professional insight with a commitment to integrity, delivering high-impact financial and compliance solutions."
  },
  {
    id: 2,
    image: "https://i.postimg.cc/hvdJGfdW/83fe75776175100b257133d95b36bcae.jpg",
    subtitle: "FINANCIAL PARTNER",
    title: ["Complex Tax.", "Clear Solutions."],
    desc: "In an evolving regulatory landscape, we transform technical tax challenges into streamlined strategies, providing the precision needed to navigate fiscal requirements."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920",
    subtitle: "ADVISORY SERVICES",
    title: ["Compliance Simplified.", "Growth Amplified."],
    desc: "We empower you to shift focus from red tape to strategic expansion, turning compliance into a high-velocity engine for sustainable growth."
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a192f] font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image - Grayscale removed, replaced with subtle zoom */}
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          />
          
          {/* Professional Blue/Teal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/70 to-transparent" />
          <div className="absolute inset-0 bg-[#0a192f]/30" />
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(45deg, #55B84A 0.5px, transparent 0.5px), linear-gradient(-45deg, #55B84A 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 lg:px-32 max-w-[1440px] mx-auto">
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-[#55B84A]" />
              <p className="text-[#55B84A] font-bold tracking-[0.3em] text-xs uppercase drop-shadow-md">
                {slides[index].subtitle}
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl"
            >
              {slides[index].title[0]} <br />
              <span className="text-[#a8dadc]">{slides[index].title[1]}</span>
            </motion.h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mt-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(85, 184, 74, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#55B84A] hover:bg-[#4aa641] text-white font-bold py-5 px-10 rounded-full text-sm uppercase tracking-widest transition-all shadow-xl"
              >
               <a 
  href="https://wa.me/919995396351" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:opacity-80 transition-opacity"
>
  Get Started
</a>
              </motion.button>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-blue-50/80 max-w-md text-sm md:text-base leading-relaxed border-l-2 border-[#55B84A]/30 pl-6 backdrop-blur-sm"
              >
                {slides[index].desc}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Glass Navigation */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 py-8 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative flex flex-col items-center"
          >
            <div className={`transition-all duration-500 rounded-full ${
              index === i ? 'w-3 h-3 bg-[#55B84A] shadow-[0_0_10px_#55B84A]' : 'w-2 h-2 bg-white/20 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:flex items-center gap-4">
        <div className="w-12 h-[1px] bg-white/20" />
        <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase">Scroll to explore</span>
      </div>
    </section>
  );
}