import { motion } from 'framer-motion'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { useNavigate } from "react-router-dom";
import { ChevronRight } from 'lucide-react';


function Navservices({ title = "Services" }) {
      const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const buttonsRef = useRef([]);
  const navigate = useNavigate();

useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  const handleViewMore = (id) => {
    navigate(`/servicelist#${id}`);
  };

  // 🔥 HOVER ANIMATIONS
  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      y: -12,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(iconsRef.current[index], {
      scale: 1.2,
      rotate: 8,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current[index], {
      scale: 1.05,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(iconsRef.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current[index], {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const services = [
    { id: "audit", title: "Audit & Assurance", desc: "Independent audit and assurance services.", icon: "📊" },
    { id: "accounting", title: "Accounting", desc: "Accurate accounting solutions.", icon: "📘" },
    { id: "virtual-cfo", title: "Virtual CFO", desc: "Strategic CFO leadership.", icon: "💼" },
    { id: "shared-cfo", title: "Shared CFO", desc: "Flexible CFO expertise.", icon: "📈" },
    { id: "incorporation", title: "Incorporation", desc: "Company formation services.", icon: "🏢" },
    { id: "ManagementConsulting", title: "Management Consulting", desc: "Business strategy and operational consulting for growth.", icon: "🧠" },
    { id: "internalAudit", title: "Internal Audit", desc: "Risk-focused internal audits to strengthen governance.", icon: "🛡️" },
    { id: "ERPImplementation", title: "ERP Implementation", desc: "ERP planning, implementation, and optimization services.", icon: "⚙️" },
    { id: "AccountsPayable",title: "Accounts Payable", desc: "Efficient payable management ensuring timely vendor payments.", icon: "🧾" },
    { id: "AccountantOutsourcing",title: "Accountant Outsourcing", desc: "Dedicated accounting professionals for your business needs.", icon: "👨‍💼" },
 
   ];


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
    {/* ------------------------------------------------------------------------ */}
    
  <section className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER - Optional: Add your title here */}
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              {/* Background Accent Blur */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* ICON CONTAINER */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 flex items-center justify-center bg-neutral-50 rounded-2xl text-4xl mb-8 group-hover:bg-[#55B84A] group-hover:text-white transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* CONTENT */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-neutral-500 text-[15px] leading-relaxed mb-8 line-clamp-3">
                  {service.desc}
                </p>
              </div>

              {/* ACTION */}
              <div className="flex items-center justify-between mt-auto">
                <button
                  onClick={() => handleViewMore(service.id)}
                  className="relative overflow-hidden group/btn bg-[#145887] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-all active:scale-95"
                >
                  <span>View More</span>
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    ↗
                  </span>
                </button>
                
                {/* Decorative Element */}
                <div className="h-px flex-grow ml-4 bg-neutral-100 group-hover:bg-neutral-200 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Navservices