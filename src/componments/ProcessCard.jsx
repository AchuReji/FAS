import React from 'react';
import { motion } from 'framer-motion';

const processes = [
  { id: 1, title: "Revenue", description: "Our revenue processes streamline billing and collections, ensuring timely payments while maintaining accurate records, ultimately enhancing cash flow management and financial health for our clients.", icon: "💰" },
  { id: 2, title: "Expenses", description: "Our expense management systems optimize spending through effective tracking and categorization, allowing clients to monitor cash outflows and identify opportunities for cost efficiencies and savings.", icon: "📉" },
  { id: 3, title: "Assets", description: "We provide structured loan accounting solutions, enabling organizations to manage and forecast their asset portfolios while ensuring compliance with financial reporting standards and regulations for sustainable growth..", icon: "🏛️" },
  { id: 4, title: "Liabilities", description: "Our deposits and debt management practices ensure proper tracking of liabilities, assisting clients in maintaining financial accuracy and compliance while effectively managing their debt obligations and capital structure.", icon: "📝" },
  { id: 5, title: "Reporting", description: "Our record-to-report processes facilitate comprehensive data entry and financial reporting, ensuring that clients receive timely and accurate insights for effective decisionmaking and performance evaluation.", icon: "📊" }
];

const TimelineCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-16 w-full ${isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* 1. The Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-[45%] bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative hover:border-[#55B84A]/40 transition-colors"
      >
        {/* Mobile Number Circle (Visible only on mobile) */}
        <div className="lg:hidden absolute -top-4 -left-4 w-10 h-10 bg-[#1A2E24] text-white rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md z-20">
          {data.id}
        </div>

        <div className="flex items-center gap-4 mb-3">
          <div className="bg-gray-50 p-3 rounded-xl text-xl">{data.icon}</div>
          <h3 className="text-2xl font-black text-[#1A2E24]">{data.title}</h3>
        </div>
        <p className="text-gray-500 leading-relaxed font-medium">
          {data.description}
        </p>
      </motion.div>

      {/* 2. The Desktop Center Circle (Hidden on mobile to prevent overlapping) */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 bg-[#1A2E24] text-white rounded-full z-10 font-bold text-base border-4 border-white shadow-lg">
        {data.id}
      </div>

      {/* Spacer for Desktop Grid */}
      <div className="hidden lg:block w-[45%]" />
    </div>
  );
};
 

export default function ProcessesOverview() {
  return (
    <section className="bg-white py-20 px-6 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-[#1A2E24] mb-4">
            Processes Overview
          </h2>
          {/* Lime Green accent from your previous sections */}
          <div className="h-1.5 w-24 bg-[#55B84A] mx-auto rounded-full" />
        </div>

        {/* The Vertical Line with Gradient fade */}
        <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 top-40 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />

        {/* Timeline Items */}
        <div className="relative pl-14 lg:pl-0">
          {processes.map((item, index) => (
            <TimelineCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}