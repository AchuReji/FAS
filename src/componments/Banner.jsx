import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Banner = () => {
  // Combining India-specific registration steps
  const features = ["ROC Incorporation", "Startup India (DPIIT)", "GST & MSME Setup"];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 font-sans">
      <div className="bg-[#165A84] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
        
        {/* Subtle background glow for "Startup" energy */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block bg-[#ADFF2F]/20 text-[#ADFF2F] px-4 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
            India Entry Package
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Company Incorporation & Startup Registration
          </h2>
          <p className="text-blue-100/80 text-lg mb-8 font-medium max-w-xl">
            Register your Private Limited or LLP and get recognized by DPIIT for tax exemptions and funding benefits.
          </p>
          
          {/* Features Row */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white">
                <CheckCircle2 size={20} className="fill-white text-[#165A84]" strokeWidth={3} />
                <span className="font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Pricing & CTA) */}
        <div className="mt-10 md:mt-0 flex flex-col items-center md:items-end z-10">
          <div className="flex flex-col items-center md:items-end text-white mb-6">
            {/* Added "Starts at" Label */}
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-200/70 mb-1">
              Starts on
            </div>
            <div className="flex items-baseline">
              <span className="text-6xl font-bold">₹14,999</span>
              <span className="text-blue-200/60 text-lg ml-2 font-medium">/ package</span>
            </div>
           
          </div>
          
          <button className="bg-white text-black text-xl font-bold py-4 px-12 rounded-full hover:bg-[#55B84A] hover:text-white hover:scale-105 transition-all duration-300 shadow-xl">
            Start Your Business
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;