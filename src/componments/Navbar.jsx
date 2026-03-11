import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Facebook, Instagram, Linkedin, 
  ChevronDown, Phone, Menu, X, Twitter, Youtube,
  FileSearch, Calculator, BarChart3, Users,
  Building2, Lightbulb, SearchCode, Settings,
  Receipt, UserPlus, Wallet,Clock
} from 'lucide-react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Using FaXTwitter for the 'X' logo
FaWhatsapp
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Audit & Assurance', icon: <FileSearch size={16} />, path: '/services' },
    { name: 'Accounting', icon: <Calculator size={16} />, path: '/Services' },
    { name: 'Virtual CFO', icon: <BarChart3 size={16} />, path: '/services' },
    { name: 'Shared CFO', icon: <Users size={16} />, path: '/services' },
    { name: 'Incorporation', icon: <Building2 size={16} />, path: '/services' },
    { name: 'Management Consulting', icon: <Lightbulb size={16} />, path: '/services' },
    { name: 'Internal Audit', icon: <SearchCode size={16} />, path: '/services' },
    { name: 'ERP Implementation', icon: <Settings size={16} />, path: '/services' },
    { name: 'Accounts Payable', icon: <Receipt size={16} />, path: '/services' },
    { name: 'Accountant Outsourcing', icon: <UserPlus size={16} />, path: '/services' },
    // { name: 'Payroll Management', icon: <Wallet size={16} />, path: '/services' },
  ];

  const secondaryLinks = [
    { name: 'About us', path: '/aboutus' },
    { name: 'News & Updates', path: '/blog' },
    { name: 'Why Choose us', path: '/whychooseus' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className={`w-full font-sans fixed top-0 left-0 z-[100] transition-all duration-300 ${isSticky ? 'shadow-lg' : ''}`}>
      {/* --- 1. TOP BAR (Hides on Scroll) --- */}
      <div className={`hidden lg:flex items-center justify-between border-b border-gray-100 px-4 xl:px-20 bg-white transition-all duration-300 overflow-hidden ${
        isSticky ? 'h-0 py-0 border-none' : 'h-10 py-2'
      }`}>
        <div className="flex items-center gap-6 text-[13px] text-gray-600">
          <a href="mailto:needhelp@company.com" className="flex items-center gap-2 hover:text-[#C5D941] transition-colors">
            <Mail size={14} className="text-[#004236]" />
            <span>office@capsvco.com</span>
          </a>
          <div className="flex items-center gap-2 border-l pl-6 border-gray-200">
            <MapPin size={14} className="text-[#004236]" />
            <span>Ayur, Trivandrum</span>
          </div>
        </div>
        
        <div className="flex items-center bg-[#145887] -mr-4 xl:-mr-20 h-10 px-8 relative">
          <div className="flex gap-5 mr-8 font-bold text-white text-[13px]">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/faqs" className="hover:text-white transition-colors">Faqs</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4 border-l border-black/10 pl-6">
            <Facebook size={14} className="cursor-pointer hover:text-white" />
            <Instagram size={14} className="cursor-pointer hover:text-white" />
            <Twitter size={14} className="cursor-pointer hover:text-white" />
            <Linkedin size={14} className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAVBAR (Height Reduced) --- */}
      <nav className={`bg-white px-4 xl:px-20 flex items-center justify-between transition-all duration-300 ${
        isSticky ? 'py-5' : 'py-3 md:py-4'
      }`}>
       <a href="/" className="flex-shrink-0 ml-8 flex items-center gap-3 group">
  <img 
    src="https://i.postimg.cc/c1jgTWzz/CA-India-jpg-removebg-preview.png" 
    alt="Logo" 
    className={`transition-all duration-300 ${isSticky ? 'h-8' : 'h-10 md:h-11'}`}
  />
  <div className="flex flex-col justify-center border-l border-gray-200 pl-3">
    <span className="text-[13px] md:text-[15px] font-black text-[#1A2E24] uppercase tracking-wide leading-none">
      philip sam varghese & co
    </span>
    <span className="text-[8px] md:text-[9px] font-bold text-[#145887] uppercase tracking-[0.15em] mt-1 leading-none">
       chartered accountants
    </span>
  </div>
</a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          <li className="font-bold text-[15px] text-[#1A2E24] hover:text-[#55B84A] cursor-pointer transition-colors">
            <a href="/">Home</a>
          </li>

          {/* Services Dropdown */}
          <li 
            className="relative group py-2"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <div className="flex items-center gap-1 font-bold text-[15px] text-[#1A2E24] group-hover:text-[#55B84A] cursor-pointer transition-colors">
             <a href="/services">Services</a>  <ChevronDown size={14} className={`mt-0.5 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
            </div>
            
            <AnimatePresence>
              {isServiceOpen && (
                <motion.ul 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-3 w-64 bg-white border-t-4 border-[#55B84A] shadow-2xl py-2 rounded-b-sm"
                >
                  {serviceLinks.map((item) => (
                    <li key={item.name} className="border-b border-gray-50 last:border-0">
                      <a 
                        href={item.path} 
                        className="px-5 py-3 hover:bg-gray-50 flex items-center gap-3 text-[#1A2E24] font-semibold text-sm transition-all hover:pl-7"
                      >
                        <span className="text-[#55B84A]">{item.icon}</span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {secondaryLinks.map((link) => (
            <li key={link.name} className="font-bold text-[15px] text-[#1A2E24] hover:text-[#55B84A] cursor-pointer transition-colors">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-3">
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute inset-0 bg-[#55B84A] rounded-full"
              />
              <div className="bg-[#145887] p-2.5 rounded-full relative z-10">
                <Phone size={18} fill="#dfdfdf" className="text-[#dfdfdf]" />
              </div>
            </div>
            <a 
  href="tel:+919995396351" 
  className="block group cursor-pointer hover:opacity-80 transition-opacity"
>
  <p className="text-[9px] font-black text-[#004236] tracking-[0.15em] leading-none mb-1">
    PHONE:
  </p>
  <p className="text-[16px] font-bold text-[#1A2E24] leading-none">
    +91 9995396351
  </p>
</a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group bg-[#145887] text-white px-8 py-3.5 font-bold tracking-wider text-xs hidden md:block"
          >
            <span className="relative z-10">
              <a href="/contact">Contact Now</a></span>
            <div className="absolute inset-0 bg-[#55B84A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-[#145887]">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- 3. MOBILE SIDEBAR --- */}
     <AnimatePresence>
  {isMenuOpen && (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 bg-black/70 z-[110] lg:hidden backdrop-blur-sm"
      />
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed right-0 top-0 h-full w-[300px] bg-[#1A1A1A] z-[120] shadow-2xl flex flex-col text-white"
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <span className="text-xl font-bold text-[#55B84A]">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="bg-white/10 p-2 rounded-sm">
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            <li><a href="/" className="px-6 py-3 block hover:bg-white/5 transition-colors">Home</a></li>
            <li>
              <button 
                onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                className="w-full px-6 py-3 flex justify-between items-center hover:bg-white/5"
              >
                <span className={isMobileServiceOpen ? "text-[#55B84A]" : ""}>Services</span>
                <ChevronDown size={18} className={isMobileServiceOpen ? 'rotate-180' : ''} />
              </button>
              {isMobileServiceOpen && (
                <ul className="bg-black/20 pl-10 py-2 space-y-2">
                  {serviceLinks.map((s) => (
                    <li key={s.name}><a href={s.path} className="text-sm text-gray-400 hover:text-white">• {s.name}</a></li>
                  ))}
                </ul>
              )}
            </li>
            {secondaryLinks.map((link) => (
              <li key={link.name}><a href={link.path} className="px-6 py-3 block hover:bg-white/5">{link.name}</a></li>
            ))}
          </ul>

          {/* NEW CONTACT INFO SECTION (From Reference Image) */}
          <div className="mt-8 px-6 space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-white" size={24} />
              <div>
                <p className="text-[#55B84A] text-xs font-bold uppercase tracking-wider">Call Now</p>
                <p className="text-lg font-semibold">+91 9995396351</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-white" size={24} />
              <div>
                <p className="text-[#55B84A] text-xs font-bold uppercase tracking-wider">Send Email</p>
                <p className="text-lg font-semibold">Psvayur@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-white" size={24} />
              <div>
                <p className="text-[#55B84A] text-xs font-bold uppercase tracking-wider">Open Hours</p>
                <p className="text-base font-medium">Mon - Sat 9:00 - 6:30,</p>
                <p className="text-base font-medium text-gray-400">Sunday - CLOSED</p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA FOOTER (From Reference Image) */}
        <div className="grid grid-cols-4 border-t border-white/10">
          <a href="#" className="flex justify-center items-center py-5 border-r border-white/10 hover:bg-[#C5D941] hover:text-black transition-all">
            <FaXTwitter size={18} />
          </a>
          <a href="#" className="flex justify-center items-center py-5 border-r border-white/10 hover:bg-[#C5D941] hover:text-black transition-all">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="flex justify-center items-center py-5 border-r border-white/10 hover:bg-[#C5D941] hover:text-black transition-all">
            <FaWhatsapp size={18} />
          </a>
          <a href="#" className="flex justify-center items-center py-5 hover:bg-[#C5D941] hover:text-black transition-all">
            <FaInstagram size={18} />
          </a>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </header>
  );
};

export default Navbar;