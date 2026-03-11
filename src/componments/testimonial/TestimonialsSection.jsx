import React, { useState } from 'react';
// If using Framer Motion (Recommended): npm install framer-motion
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Amal babu s",
    handle: "@amal",
    avatar: "https://image2url.com/r2/default/images/1770185752944-3125f097-29d0-4945-8c09-e33664c59517.png",
    text: "Their auditing is incredibly thorough, catching details we’d missed for years. Highly recommended for any growing business"
  },
  {
    name: "Jeeve thomas",
    handle: "@Jeeve",
    avatar: "https://image2url.com/r2/default/images/1770185851405-89a12119-c17a-4ad2-972b-a75e09965822.png",
    text: "Reliable & Professional We have used FAS for three years.They are consistently professional, and always deliver their reports ahead of schedule"
  },
  {
    name: "Anila K",
    handle: "@Anila",
    avatar: "https://image2url.com/r2/default/images/1770185994946-2d2d74a0-76f3-4b0e-b03d-5864d7d27efe.png",
    text: "Their team doesn't just find errors; they find opportunities. The tax and compliance advice we received saved us significant capital this year"
  },
  {
    name: "Gayathri",
    handle: "@Gayathri",
    avatar: "https://image2url.com/r2/default/images/1770186019082-75663e98-cd1b-496c-a5db-059c4cff6fe6.png",
    text: "Beyond just numbers, they provided a roadmap for our expansion. Their consulting services are a must for any growing business."
  }
];

export default function TestimonialSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-slate-50 py-20 px-4 overflow-hidden">
      {/* Header with Fade Up */}
      <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Our Trusted Clients
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          See what our customers have to say about our thorough auditing and consulting services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* Marquee View */
            <motion.div 
              key="marquee"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative"
            >
              <div className="flex overflow-hidden group">
                <div className="flex animate-scroll hover:[animation-play-state:paused] py-4">
                  {[...testimonials, ...testimonials].map((item, idx) => (
                    <TestimonialCard key={idx} {...item} />
                  ))}
                </div>
                {/* Gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
              </div>
            </motion.div>
          ) : (
            /* Grid View with Staggered Fade Up */
            <motion.div 
              key="grid"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <TestimonialCard {...item} isStatic />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 bg-[#145887] text-white rounded-full font-medium hover:bg-[#55B84A] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {isExpanded ? "Show Less" : "View All Reviews"}
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, handle, avatar, text, isStatic }) {
  return (
    <div className={`
      bg-white p-8 rounded-2xl shadow-sm border border-slate-100 
      ${isStatic ? 'w-full h-full' : 'w-[380px] mx-4'} 
      flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    `}>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50" />
        <div className="text-left">
          <h4 className="font-bold text-slate-900 leading-tight">{name}</h4>
          <p className="text-sm text-[#55B84A] font-medium">{handle}</p>
        </div>
      </div>
      <p className="text-slate-600 text-left text-sm leading-relaxed italic relative">
        <span className="text-3xl text-blue-100 absolute -top-4 -left-2 font-serif">“</span>
        {text}
      </p>
    </div>
  );
}