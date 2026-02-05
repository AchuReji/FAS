/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ShieldCheck, Users, Zap, Target, Laptop, Heart, DollarSign, Award } from 'lucide-react';

const Howwework = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // ENHANCED: Added explicit opacity transitions for the fade effect
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, // Increased slightly for a smoother fade
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for a premium feel
        opacity: { duration: 0.8 } // Specific duration for the fade-in
      } 
    }
  };

  const timelineSteps = [
    {
      title: "Tax Expertise",
      desc: "Our team possesses strong expertise in KSA taxation and regulatory compliance, ensuring that your business adheres to local laws while optimizing your financial strategies for maximum advantage.",
      icon: <ShieldCheck className="w-6 h-6" />,
      side: "right"
    },
    {
      title: "Qualified Professionals",
      desc: "We are comprised of experienced CPA, CMA, and qualified professionals dedicated to delivering high-quality financial services, empowering you to make informed decisions for your business growth.",
      icon: <Users className="w-6 h-6" />,
      side: "left"
    },
    {
      title: "Scalable Solutions",
      desc: "Our flexible and scalable outsourcing model allows businesses to tailor services according to needs, providing a cost-effective approach without compromising on quality or expertise.",
      icon: <Zap className="w-6 h-6" />,
      side: "right"
    },
    {
      title: "Quality Focus",
      desc: "We prioritize quality, accuracy, and timely delivery in all our services, ensuring that our clients receive reliable financial insights and support crucial for driving sustainable business growth.",
      icon: <Target className="w-6 h-6" />,
      side: "left"
    },
    {
      title: "Technology",
      desc: "Our technology-driven processes leverage modern ERP systems, ensuring real-time data access and streamlined operations, which enhances decision-making and operational efficiency for our clients.",
      icon: <Laptop className="w-6 h-6" />,
      side: "right"
    },
    {
      title: "Client-Centric",
      desc: "FAS Consulting prioritizes a client-centric approach, maintaining confidentiality and trust, ensuring that each client's unique needs are met with tailored solutions and dedicated support throughout the partnership.",
      icon: <Heart className="w-6 h-6" />,
      side: "left"
    },
    {
      title: "Cost-saving",
      desc: "Our flexible service packages allow clients to save costs by accessing essential services without the overhead of full-time staff, optimizing resources while maintaining high-quality financial management.",
      icon: <DollarSign className="w-6 h-6" />,
      side: "right"
    },
    {
      title: "Quality Assurance",
      desc: "We uphold rigorous quality assurance practices within our processes, ensuring that all deliverables meet industry standards, providing clients with confidence in the accuracy and reliability of our services.",
      icon: <Award className="w-6 h-6" />,
      side: "left"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#222F44] font-bold tracking-[0.2em] uppercase text-sm block mb-4"
          >
            Core Values & Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Why Choose <span className="text-[#222F44]">FAS Consultants?</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* THE ANIMATED LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-200 hidden lg:block">
            <motion.div 
              style={{ scaleY }}
              className="w-full bg-[#222F44] origin-top h-full"
            />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {timelineSteps.map((item, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center justify-between w-full ${item.side === "left" ? "lg:flex-row-reverse" : ""}`}>
                
                {/* CONTENT CARD WITH FADE-IN */}
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full lg:w-[45%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 will-change-[opacity,transform]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-gray-50 text-[#222F44]">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                {/* CENTRAL INDICATOR WITH FADE-IN */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-10 h-10 rounded-xl bg-[#222F44] text-white flex items-center justify-center font-bold shadow-md border-4 border-white"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <div className="hidden lg:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howwework;