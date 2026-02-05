/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
 
    const contactDetails = [
    {
      icon: <MapPin className="w-10 h-10 text-[#222F44]" />,
      title: "VISIT US",
      content: "India , Saudi Arabia",
      description: "Our regional headquarters providing expert financial consulting and business advisory services."
    },
    {
      icon: <Phone className="w-10 h-10 text-[#222F44]" />,
      title: "CALL US",
      content: (
        <div className="flex flex-col">
          <a href="https://wa.me/+966552667270" className="hover:text-black transition-colors">+96 6552667270</a>
          <a href="https://wa.me/919995396351"className="hover:text-black transition-colors">+91 9995396351</a>
        </div>
      ),
      description: "Direct access to our senior consultants for investment inquiries and strategic support."
    },
    {
      icon: <Mail className="w-10 h-10 text-[#222F44]" />,
      title: "CONTACT US",
      content: (
        <a 
          href="mailto:Info@fasconsultant.com" 
          className="hover:text-black transition-colors underline decoration-[#222F44] underline-offset-4"
        >
          Info@fasconsultant.com
        </a>
      ),
      description: "Get a detailed proposal for M&A advisory, capital restructuring, or corporate finance solutions."
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')` }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-5xl font-bold tracking-widest mb-4"
        >
          CONTACT US
        </motion.h1>
        <div className="w-12 h-1 bg-white/30 mb-6 flex gap-1 justify-center items-center">
           {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
        </div>
        <p className="text-white text-lg max-w-2xl font-light leading-relaxed">
          Need an expert? You are more than welcome to leave your contact info and we will be in touch shortly.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {contactDetails.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-gray-600 font-bold tracking-widest text-sm">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {item.description}
              </p>
              <p className="text-[#222F44] font-bold text-sm">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[450px] hover:grayscale-0 transition-all duration-0 overflow-hidden">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305694.2884634233!2d43.556119460506814!3d23.502676277145657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e1!3m2!1sen!2sin!4v1767534712260!5m2!1sen!2sin" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>

    
  )
}

export default Contact