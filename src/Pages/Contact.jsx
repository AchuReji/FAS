import { motion } from 'framer-motion'
import React from 'react'
import { ChevronRight } from 'lucide-react';
import { MapPin, Phone, Mail, Send, User } from 'lucide-react';
import Connects from '../componments/Connects';

function Contact({ title = "  Contact Us" }) {
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
    </div>

{/* ------------------------------------------------------------------------------------------------------------- */}

<Connects/>
   </>
  )
}

export default Contact