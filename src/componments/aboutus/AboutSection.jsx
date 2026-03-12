import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const AboutSection = () => {
  const services = [
    "Audit & Assurance", "Accounting", "Virtual CFO", 
    "Shared CFO", "Incorporation", "Management Consulting", 
    "Internal Audit", "ERP Implementation", "Accounts Payable", 
    "Accountant Outsourcing"
  ];

  // Animation variants for reusability
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: ANIMATED IMAGE STACK */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-b-8 border-[#55B84A]">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                alt="Financial Analysis" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#145887]/60 to-transparent"></div>
            </div>

            {/* Animated Floating Statistics Card */}
            <motion.div 
              className="absolute -bottom-6 -right-4 md:-right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#55B84A] max-w-[220px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#55B84A]/10 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-[#55B84A]" />
                </div>
                <span className="text-3xl font-black text-[#145887]">100%</span>
              </div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">Client Satisfaction Rate</p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.span 
                variants={fadeIn}
                className="inline-block px-4 py-1.5 bg-[#55B84A] text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg shadow-[#55B84A]/20"
              >
                About Philip Sam Varghese & Co
              </motion.span>
              
              <motion.h2 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#145887] leading-[1.1]"
              >
                Excellence in <span className="text-[#55B84A]">Financial</span> Services.
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-gray-600 text-lg leading-relaxed">
                Incorporated in 2014, Philip Sam Varghese & Co, is a highly talented team of chartered accountants, audit managers and accountants focusing on Audit & Assurance, Accounting, Compliance and Advisory Services
              </motion.p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeIn} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#55B84A]/30 transition-colors">
                  <div className="bg-[#145887] p-3 rounded-xl h-fit">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#145887]">Creative Solutions</h4>
                    <p className="text-gray-500 text-sm">Custom strategies for unique fiscal challenges.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#55B84A]/30 transition-colors">
                  <div className="bg-[#55B84A] p-3 rounded-xl h-fit">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#145887]">Global Standards</h4>
                    <p className="text-gray-500 text-sm">International quality in every local audit.</p>
                  </div>
                </motion.div>
              </div>

              {/* SERVICES GRID WITH STAGGERED ENTRANCE */}
              <motion.div 
                className="pt-4 border-t border-gray-100"
                variants={staggerContainer}
              >
                <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Core Competencies</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 group cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#55B84A]" />
                      <span className="text-[#145887] font-semibold text-sm group-hover:text-[#55B84A] transition-colors">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA BUTTON */}
              <motion.div variants={fadeIn} className="pt-4">
                <button className="relative overflow-hidden group bg-[#145887] text-white px-10 py-4 rounded-xl font-bold transition-all w-full sm:w-auto shadow-xl hover:shadow-[#145887]/30">
                  <span className="relative z-10 flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
                    Consult an Expert
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-[#55B84A] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;