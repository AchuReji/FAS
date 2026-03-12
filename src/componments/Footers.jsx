import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  // 1. Social Media Data
  const socialMedia = [
    { Icon: FaFacebookF, path: "https://facebook.com/yourprofile" },
    { Icon: FaInstagram, path: "https://instagram.com/yourprofile" },
    { Icon: FaWhatsapp, path: "https://wa.me/919995396351" }, // Using the number from your UI
    { Icon: FaLinkedin, path: "https://www.linkedin.com/in/ajith-sam-6b38571b/" },
  ];

  const services = [
    { name: 'Audit & Assurance', path: '/services' },
    { name: 'Accounting', path: '/Services' },
    { name: 'Virtual CFO', path: '/Services' },
    { name: 'Shared CFO', path: '/Services' },
    { name: 'Incorporation', path: '/Services' },
    { name: 'Management Consulting', path: '/Services' },
    { name: 'Internal Audit', path: '/Services' },
    { name: 'ERP Implementation', path: '/Services' },
    { name: 'Accounts Payable', path: '/Services' },
    { name: 'Accountant Outsourcing', path: '/Services' },
    { name: 'Payroll Management', path: '/Services' },
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "services", path: "/Services" },
    { name: "About us", path: "/aboutus" },
    { name: "News & Updates", path: "/blog" },
    { name: "Why Choose us", path: "/whychooseus" }
  ];

  return (
    <footer className="w-full bg-[#145887] text-white font-sans">
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT & CENTER SECTION */}
        <div className="lg:w-2/3 p-8 md:p-16 lg:p-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📞</div>
              <div>
                <p className="text-gray-400 text-sm">Call Us:</p>
               <div>
  
  <p className="font-bold text-lg">
    <a 
      href="tel:+919995396351" 
      className="hover:text-[#55B84A] transition-colors"
    >
      +91 9995396351
    </a>
  </p>
</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">✉️</div>
              <div>
  <p className="text-gray-400 text-sm">Email Us:</p>
  <p className="font-bold text-lg flex flex-col">
    <a 
      href="mailto:office@capsvco.com" 
      className="hover:text-[#55B84A] transition-colors"
    >
      office@capsvco.com
    </a>
    <a 
      href="mailto:caajithsam@gmail.com" 
      className="hover:text-[#55B84A] transition-colors"
    >
      caajithsam@gmail.com 
    </a>
    <a 
      href="casusanvarghese@gmail.com" 
      className="hover:text-[#55B84A] transition-colors"
    >
     casusanvarghese@gmail.com
    </a>
  </p>
</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📍</div>
              <div>
                <p className="text-gray-400 text-sm">Hours:</p>
                <p className="font-bold text-lg">Daily: 09.00 AM to 06.30 PM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Services</h3>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-white hover:text-[#55B84A] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">Pages</h3>
              <ul className="space-y-4">
                {pages.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-white hover:text-[#55B84A] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">Get Expert Audit & Tax Consultation Today</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white text-gray-800 px-6 py-4 rounded-full outline-none"
                />
                
                <button  className="w-full bg-[#55B84A] text-[#002B24] font-bold py-4 rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Sign Up Now <span>→</span>
                </button>
              </div>
              
              {/* UPDATED SOCIAL ICONS SECTION */}
              <div className="flex gap-4 mt-8">
                {socialMedia.map(({ Icon, path }, i) => (
                  <a 
                    key={i} 
                    href={path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#55B84A] hover:text-[#002B24] transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© Copyright 2026. All Right by <span className="text-[#55B84A]">PHILIP SAM VARGHESE & CO</span></p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#55B84A] p-3 rounded-lg text-[#002B24] hover:bg-white transition-all"
            >
              <FaChevronUp />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION (Yellow Side) */}
        <div className="lg:w-1/3 bg-[#145887] text-[#002B24] p-12 md:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#topo)" />
             </svg>
          </div>

          <Link to="/contact" className="relative group w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-[#55B84A] overflow-hidden flex items-center justify-center mb-10 transition-transform hover:scale-105">
            <span className="absolute inset-0 bg-[#55B84A] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            <span className="relative z-10 text-xl font-bold transition-colors duration-500 group-hover:text-white">
              Contact Us →
            </span>
          </Link>

          <div className="space-y-1 relative z-10 text-white">
            <p className="text-2xl font-black">09 : 00 AM – 06 : 30 PM</p>
            <p className="font-bold opacity-70 uppercase tracking-widest text-sm">Monday – Saturday</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;