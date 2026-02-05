/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Years of Experience',
    value: '10+',
    desc: 'Delivering trusted financial, audit, and advisory services across industries.'
  },
  {
    label: 'Clients Served',
    value: '1000+',
    desc: 'Supporting businesses with accounting, audit, and tax compliance solutions.'
  },
  {
    label: 'Successful Engagements',
    value: '500+',
    desc: 'Completed assignments with accuracy, compliance, and professional integrity.'
  },
  {
    label: 'Countries Served',
    value: '5+',
    desc: 'Providing cross-border advisory and compliance services, including GCC markets.'
  }
];


const timelineData = [
  {
    
    title: 'Revenue',
    desc: 'Our revenue processes streamline billing and collections, ensuring timely payments while maintaining accurate records, ultimately enhancing cash flow management and financial health for our clients.',
  },
  {
    
    title: 'Expenses:',
    desc: 'Our expense management systems optimize spending through effective tracking and categorization, allowing clients to monitor cash outflows and identify opportunities for cost efficiencies and savings.',
    // image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop', // Placeholder for the woman working
  },
  {
    
    title: 'Assets:',
    desc: 'We provide structured loan accounting solutions, enabling organizations to manage and forecast their asset portfolios while ensuring compliance with financial reporting standards and regulations for sustainable growth..',
  },
  {
    
    title: 'Liabilities',
    desc: 'Our deposits and debt management practices ensure proper tracking of liabilities, assisting clients in maintaining financial accuracy and compliance while effectively managing their debt obligations and capital structure.',
  },
  {
   title: 'Reporting',
    desc: 'Our record-to-report processes facilitate comprehensive data entry and financial reporting, ensuring that clients receive timely and accurate insights for effective decisionmaking and performance evaluation.'}
];

const TimelineSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 font-sans">
      {/* --- Stats Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="font-semibold text-gray-800 mb-2">{stat.label}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Timeline Content --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Heading */}
        <div className="lg:col-span-5">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
           Processes Overview
          </motion.h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our financial processes ensure accuracy, compliance, and operational efficiency.
We deliver structured control across revenue, expenses, assets, liabilities, and reporting.
This supports informed decisions and sustainable business growth
          </p>
        </div>

        {/* Right Side: Vertical Timeline */}
        <div className="lg:col-span-7 relative">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-black hidden md:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#222F44] rounded-full border-4 border-white hidden md:block z-10"></div>
                
                
                <h4 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>

                {item.image && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="mt-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                  >
                    <img src={item.image} alt="Milestone" className="w-full h-auto object-cover" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;