import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PencilRuler, CheckCircle2, ShieldCheck, Gavel } from 'lucide-react';

function Companyabout() {
  const services = [
    "Accurate & Timely Compliance",
    "Business Growth Consultancy",
    "Trusted Financial Advisory",
    "Regulatory Reporting Expertise",
    "Tax Planning & Optimization",
    "Client-Centric Approach"
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative py-16 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), 
                          url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Overlapping Images */}
        <motion.div 
          className="relative flex justify-center lg:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          {/* Main Large Image */}
          <div className="relative z-10 w-4/5 lg:w-[400px] h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Smaller Image */}
          <motion.div 
            className="absolute -bottom-10 -right-4 md:right-10 lg:-right-10 z-20 w-3/5 lg:w-[300px] h-[350px] rounded-lg overflow-hidden shadow-2xl border-8 border-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
              alt="Skilled designer" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md flex flex-col gap-2">
              <span className="text-sm font-bold text-gray-800">Skilled Team</span>
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="Team member"
                  />
                ))}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#C5D941] text-xs font-bold ring-2 ring-white">
                  9+
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="mt-16 lg:mt-0 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Clarity in Numbers. Confidence in Decisions. 
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed">
            Philip Sam Varghese & Co provides expert chartered accountancy services, delivering precise and reliable financial solutions tailored to your unique needs.
          </motion.p>

          {/* Core Values Section */}
          <div className="space-y-6 py-2">
            {[
              { icon: Lightbulb, title: "Audit and Assurance", desc: "Efficient, tailored financial strategies designed for your unique business needs." },
              { icon: PencilRuler, title: "Corporate Compliances", desc: "Leveraging expertise and technology to keep your business ahead in a changing world." },
              { icon: ShieldCheck, title: "GST 2.0 Compliance", desc: "Seamless management of GST 2.0 reforms, including automated ITC matching and real-time e-invoicing compliance." },
              { icon: Gavel, title: "Direct Tax Advisory", desc: "Expert guidance on the New Income Tax Act, corporate filings, and strategic tax planning." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="w-7 h-7 text-[#145887]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Grid Addition */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 py-4 border-t border-gray-100">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#55B84A] flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-sm">{service}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#55B84A] text-white px-10 py-4 rounded-sm font-bold hover:bg-[#145887] transition-all w-full sm:w-auto uppercase text-xs tracking-widest shadow-lg"
            >
              <a href="https://wa.me/919995396351">Find Services</a> 
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Companyabout;