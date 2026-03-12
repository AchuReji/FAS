import { motion } from 'framer-motion'
import React from 'react'
import { ChevronRight } from 'lucide-react';
import { MapPin, Phone, Mail, Send, User } from 'lucide-react';

function Connects() {
  const brandBlue = "#145887";
  const brandGreen = "#55B84A";

  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        // Consistent Background: White Overlay + Carbon Fibre Texture + Fixed Professional Image
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.69), rgba(255, 255, 255, 0.96)), 
                          url(""), 
                          url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
        backgroundAttachment: 'scroll, scroll, fixed',
        backgroundSize: 'auto, auto, cover'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Contact Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <div className="group bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#145887] hover:shadow-lg border border-gray-100 cursor-pointer">
            <div className="mb-4 text-[#145887] group-hover:text-white transition-colors duration-300">
              <MapPin size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Address Line
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              TC 5/1025(6), FIRST FLOOR, CHARIS EDASSERIAYATH, CET ROAD, CHAVADIMUKKU, SREEKARYAM P O, THIRUVANANTHAPURAM, PIN: 695017, KERALA
              <br /> <br />
              First Floor,Keezhuttu Building, Above Aardram Medical center TVM
              Road,Ayur P.O,Kerala 691533
            </p>
          </div>

          {/* Phone Card */}
          <div className="group bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#145887] hover:shadow-lg border border-gray-100 cursor-pointer">
            <div className="mb-4 text-[#145887] group-hover:text-white transition-colors duration-300">
              <Phone size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Phone Number
            </h3>
            <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex flex-col">
  <a 
    href="tel:+919995396351" 
    className="hover:text-white transition-colors"
  >
    +91-9995396351
  </a>
  <a 
    href="tel:+919447056855" 
    className="hover:text-white transition-colors"
  >
    +91-9447056855
  </a>
</p>
          </div>

          {/* Mail Card */}
          <div className="group bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#145887] hover:shadow-lg border border-gray-100 cursor-pointer">
            <div className="mb-4 text-[#145887] group-hover:text-white transition-colors duration-300">
              <Mail size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">
              Mail Address
            </h3>
           <p className="text-gray-500 leading-relaxed transition-colors duration-300">
  <a 
    href="mailto:office@capsvco.com" 
    className="hover:text-gray-200 transition-colors duration-300"
  >
    office@capsvco.com 


  </a>
  <br />
   <a 
    href="mailto:caajithsam@gmail.com" 
    className="hover:text-gray-200 transition-colors duration-300"
  >
    caajithsam@gmail.com


  </a>
  <br />
   <a 
    href="mailto:casusanvarghese@gmail.com" 
    className="hover:text-gray-200 transition-colors duration-300"
  >
    casusanvarghese@gmail.com


  </a>
  <br />
  <a 
    href="mailto:psvayur@gmail.com" 
    className="hover:text-gray-200 transition-colors duration-300"
  >
    psvayur@gmail.com


  </a>
</p>
          </div>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Text & Map */}
          <div className="bg-white/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-sm">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ color: brandBlue }}>
              Get in touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions regarding our audit or tax services? Reach out to us today. 
              Our team at Philip Sam Varghese & Co is ready to assist you.
            </p>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-inner border border-gray-200">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.626780720516!2d76.9056461!3d8.5355799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be5a2662243d%3A0x6cbc72c1af6cbc72!2sSreekariyam%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
<div className="bg-white p-6 md:p-10 rounded-xl shadow-xl border border-gray-100">
  <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ color: brandBlue }}>
    Fill Up The Form
  </h2>
  <p className="text-gray-500 text-sm mb-8">
    Your email address will not be published. Required fields are marked *
  </p>

  {/* Form action set to mailto */}
  <form 
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone"); // Added phone
    const email = formData.get("email"); // Added email for the body
    const message = formData.get("message");
    
    // Formatting the email body with the phone number
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage: ${message}`;
    
    window.location.href = `mailto:office@capsvco.com?subject=New Inquiry from ${name}&body=${body}`;
  }}
>
  {/* Name Field */}
  <div className="relative border-b border-gray-300 focus-within:border-[#145887] transition-colors">
    <span className="absolute left-0 top-2 text-gray-400">
      <User size={18} />
    </span>
    <input
      type="text"
      name="name"
      placeholder="Your Name*"
      className="w-full py-2 pl-8 outline-none bg-transparent placeholder-gray-400"
      required
    />
  </div>

  {/* Email Field */}
  <div className="relative border-b border-gray-300 focus-within:border-[#145887] transition-colors">
    <span className="absolute left-0 top-2 text-gray-400">
      <Mail size={18} />
    </span>
    <input
      type="email"
      name="email"
      placeholder="Email Address*"
      className="w-full py-2 pl-8 outline-none bg-transparent placeholder-gray-400"
      required
    />
  </div>

  {/* Phone Field - NEW */}
  <div className="relative border-b border-gray-300 focus-within:border-[#145887] transition-colors">
    <span className="absolute left-0 top-2 text-gray-400">
      <Phone size={18} />
    </span>
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number*"
      className="w-full py-2 pl-8 outline-none bg-transparent placeholder-gray-400"
      required
    />
  </div>

  {/* Message Field */}
  <div className="relative border-b border-gray-300 focus-within:border-[#145887] transition-colors">
    <span className="absolute left-0 top-2 text-gray-400">
      <Send size={18} className="rotate-12" />
    </span>
    <textarea
      name="message"
      placeholder="Enter Your Message here"
      rows="4"
      className="w-full py-2 pl-8 outline-none bg-transparent placeholder-gray-400 resize-none"
      required
    ></textarea>
  </div>

  <button 
    type="submit"
    className="flex items-center gap-2 text-white px-8 py-3 rounded-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg"
    style={{ backgroundColor: brandBlue }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = brandGreen}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = brandBlue}
  >
    <Send size={16} />
    Get In Touch
  </button>
</form>
</div>
        </div>
      </div>
    </div>
  );
}

export default Connects;