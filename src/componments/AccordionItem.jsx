import React, { useState } from 'react';

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(3);

 const accordionItems = [
  { 
    title: "How do you ensure GST and Income Tax compliance?", 
    content: "Our team specializes in the Indian tax landscape, handling everything from GST filings and annual returns to Tax Audit and TDS compliance. We ensure your business stays 100% compliant with the latest CBDT and CBIC regulations to avoid heavy penalties." 
  },
  { 
    title: "Are your consultants certified for Indian statutory standards?", 
    content: "Yes, our team consists of Chartered Accountants (ICAI), Cost Accountants (ICMAI), and Company Secretaries (ICSI). We bring deep expertise in Indian Accounting Standards (Ind AS) and Companies Act 2013 requirements to provide reliable financial oversight." 
  },
  { 
    title: "Can I scale my finance team as my startup or SME grows?", 
    content: "Absolutely. We offer a flexible 'Virtual CFO' and outsourced accounting model. Whether you are a seed-stage startup needing basic bookkeeping or a growing enterprise requiring complex MIS reporting, our services scale without the overhead of full-time hiring." 
  },
  { 
    title: "How do you maintain accuracy in high-volume transactions?", 
    content: "We implement a multi-level review process to ensure 100% accuracy. By performing regular bank reconciliations, internal audits, and rigorous data validation, we provide the error-free financial insights necessary for your Board meetings and investor due diligence." 
  },
  { 
    title: "Which ERP systems and technologies do you support?", 
    content: "We are tech-agnostic and experts in TallyPrime, Zoho Books, QuickBooks, and SAP B1. Our technology-driven approach ensures real-time visibility into your cash flow and automated reporting, keeping your financial data secure and accessible 24/7." 
  },
];

  return (
    <section className="relative bg-[#f3f4f6] py-16 px-4 md:py-24 overflow-hidden">
      
      {/* --- ROTATING GLOBE WATERMARK --- */}
      <style>
        {`
          @keyframes slowRotate {
            from { transform: translateY(-50%) rotate(0deg); }
            to { transform: translateY(-50%) rotate(360deg); }
          }
          .animate-globe {
            animation: slowRotate 20s linear infinite;
          }
        `}
      </style>
      
      <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-globe">
        <svg width="600" height="600" viewBox="0 0 100 100" className="text-emerald-800">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="20" ry="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="currentColor" strokeWidth="0.1" />
          <path d="M2 50 L98 50 M50 2 L50 98" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>
      {/* --- END ROTATING GLOBE --- */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column (Image & Stats) */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
              alt="Consulting" 
              className="w-full h-[400px] md:h-[550px] object-cover"
            />
          </div>

          {/* Floating Traffic Card */}
          <div className="absolute bottom-8 right-[-10px] md:right-12 bg-white p-5 rounded-xl shadow-2xl w-60 md:w-72 border border-slate-50">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Daily Traffic</p>
                <h4 className="text-2xl font-bold text-slate-800">2.579 <span className="text-[10px] font-medium text-slate-400">Visitors</span></h4>
              </div>
              <span className="text-emerald-500 text-[10px] font-bold">+12.63%</span>
            </div>
            <div className="flex items-end gap-1.5 h-28 mb-2">
              {[35, 55, 40, 85, 65, 95, 45, 75, 50].map((h, i) => (
                <div 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  className={`flex-1 rounded-t-sm transition-all duration-700 ${i === 5 ? 'bg-[#1a2d24]' : 'bg-emerald-500/40'}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-slate-300 font-bold px-1">
              <span>00</span><span>04</span><span>08</span><span>12</span><span>14</span><span>16</span><span>18</span>
            </div>
          </div>
        </div>

        {/* Right Column (Accordion Content) */}
        <div className="w-full lg:w-1/2 z-10">
          <span className="inline-block bg-[#55B84A] text-[#1a2d24] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Business Strategy
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2d24] leading-[1.1] mb-10">
           Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className={`transition-all duration-300 rounded-lg ${
                  openIndex === index ? 'bg-white shadow-xl p-6' : 'px-4 py-2'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className={`text-xl font-bold transition-colors ${
                    openIndex === index ? 'text-[#1a2d24]' : 'text-[#1a2d24]/80 group-hover:text-[#1a2d24]'
                  }`}>
                    {item.title}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#1a2d24]' : 'text-slate-400'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-slate-500 leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};





export default AccordionSection;