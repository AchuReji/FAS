import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sub-component for the counting animation
const CountingNumber = ({ targetValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return <>{count}</>;
};

// Sub-component for the circular progress and stats
const StatCircle = ({ value, label, offset, showPlus = true }) => (
  <div className="flex items-center space-x-4 lg:space-x-6">
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="absolute w-full h-full -rotate-90">
        <circle 
          cx="28" cy="28" r="24" 
          stroke="white" strokeWidth="5" 
          fill="transparent" strokeOpacity="0.3" 
        />
        <motion.circle 
          initial={{ strokeDashoffset: 150.8 }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx="28" cy="28" r="24" 
          stroke="#55B84A" strokeWidth="5" 
          fill="transparent" 
          strokeDasharray="150.8" 
          className="transition-all"
        />
      </svg>
      <span className="text-[10px] font-bold text-white transform rotate-90">↗</span>
    </div>
    <div>
      <div className="text-3xl font-black text-white flex items-center">
        <CountingNumber targetValue={value} />
        {showPlus && <span>+</span>}
      </div>
      <div className="text-[11px] font-bold text-white uppercase tracking-tight opacity-80">
        {label}
      </div>
    </div>
  </div>
);

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('Our Mission');

  const contentData = {
    'Our Mission': {
      description: "To deliver tech-enabled, compliant, and insight-driven financial solutions with precision and professionalism.",
      features: ["Integrity-Driven Auditing", "Client-Centric Focus", "Operational Efficiency", "Proactive Growth Support"]
    },
    'Our Vision': {
      description: "To redefine financial advisory through innovation, integrity, and intelligent technology.",
      features: ["Global Financial Leadership", "Sustainable Innovation", "Future-Ready Accounting", "Precision-Led Design"]
    }
  };

  const tabs = Object.keys(contentData);

  return (
    <section 
      className="relative py-16 lg:py-32 font-sans overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.68), rgba(255, 255, 255, 0.96)), 
                          url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Content (FADE RIGHT) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="bg-[#55B84A] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
            Mission & Vision
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#111827] mt-6 leading-[1.1]">
            We handle complexities, <br className="hidden lg:block" /> 
            so you can drive growth <br className="hidden lg:block" /> 
            and success.
          </h2>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-100 mt-12 space-x-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold transition-all duration-300 relative ${
                  activeTab === tab 
                  ? 'text-[#145887] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#55B84A]' 
                  : 'text-gray-400 hover:text-[#145887]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content with AnimatePresence for smooth switching */}
          <div className="mt-10 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-500 text-lg leading-relaxed italic">
                  "{contentData[activeTab].description}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mt-10">
                  {contentData[activeTab].features.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <span className="text-[#55B84A] font-bold text-xl">✓</span>
                      <span className="text-[#111827] font-semibold text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="mt-12 bg-[#145887] text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-[#55B84A] transition-all transform hover:-translate-y-1 shadow-xl">
              Discover More
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image and Overlay (FADE LEFT) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="rounded-2xl overflow-hidden h-[450px] lg:h-[600px] w-full shadow-2xl border border-gray-100">
            <img 
              src="https://i.postimg.cc/ZKg4zP1N/280b71cdac2312f54fe65a1af6cbc72c.jpg" 
              alt="Team Workspace" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-10 -left-6 lg:-left-12 p-10 lg:p-12 w-[280px] lg:w-[320px] shadow-2xl rounded-sm bg-[#145887]"
          >
            <div className="space-y-10">
              <StatCircle value={1000} label="Clients Served" offset={10} showPlus={true} />
              <div className="h-[1px] bg-white/10 w-full"></div>
              <StatCircle value={2014} label="Since" offset={75} showPlus={false} />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;