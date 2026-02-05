/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, Users, Sparkles } from 'lucide-react';

const Careers = () => {
  // Animation variants for smooth fade-in
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="text-[#222F44] font-bold tracking-widest uppercase text-sm">
            Join Our Team
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">
            Careers at <span className="text-[#222F44]">FAS Consultants</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            We are always looking for passionate **CA, CMAs, and Tax Experts** to help us redefine financial advisory in India and Saudi Arabia.
          </motion.p>
        </motion.div>

        {/* EMPTY STATE / NO OPENINGS CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-[2rem] p-8 md:p-16 border border-dashed border-gray-300 text-center relative overflow-hidden"
        >
          {/* Decorative Background Icon */}
          <Briefcase className="absolute -top-10 -right-10 w-64 h-64 text-gray-100 rotate-12" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-[#222F44]" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              No Current Openings Right Now
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
              While we don't have a specific role open today, our team is growing fast. 
              Send us your CV for our talent pool, and we'll contact you as soon as a matching 
              opportunity in **Audit, ZATCA Compliance, or Tax Advisory** arises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:Info@fasconsultant.com"
                className="bg-[#222F44] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Submit General Application
              </a>
              {/* <a 
                href="https://wa.me/+919995396351"
                className="bg-white text-[#222F44] border border-gray-200 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-100 transition-all"
              >
                <Users className="w-5 h-5" />
                Talk to HR
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* WHY JOIN US GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Growth", desc: "Work with global clients across KSA and India markets." },
            { title: "Expertise", desc: "Collaborate with high-level CA and ACCA professionals." },
            { title: "Innovation", desc: "Use modern ERP and ZATCA-ready technology stacks." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 text-center"
            >
              <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Careers;

