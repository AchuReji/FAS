/* eslint-disable no-unused-vars */
import { useState } from "react";
import Logo from "../../assets/Logo.png"
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";
import { motion } from "framer-motion";



const servicesMenu = [
  { label: "Audit & Assurance", path:"/services" },
  { label: "Accounting", path: "/services" },
  { label: "Virtual CFO", path: "/services" },
  { label: "Shared CFO",path: "/services" },
  { label: "Company Incorporation", path: "/services" },
  { label: "FTax & Zakat", path: "/services"},
  { label: "Management Consulting", path: "/services" },
  { label: "Internal Audit", path:"/services"},
  { label: "ERP Implementation", path:"/services" },
  { label: "Accounts Payable", path:"/services"},
  { label: "Accountant Outsourcing",path:"/services" },
  { label: "Payroll Management", path: "/services" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };
  
 const changeLanguage = (lang) => {
  const tryChange = () => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    } else {
      // Retry until Google Translate is ready
      setTimeout(tryChange, 300);
    }
  };

  tryChange();
};

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:flex bg-[#222F44] text-white text-sm px-6 py-2 justify-between">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <FiMail /><a href="mailto:Info@fasconsultant.com">Info@fasconsultant.com</a> 
          </span>
          <span className="flex items-center gap-2">
            <FiPhone /> <a href="https://wa.me/919995396351">9995396351</a>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <FiMapPin /> Saudi Arabia
          </span>
          <FaFacebookF />
          <FaXTwitter />
         <div className="relative group cursor-pointer">
  <span className="flex items-center gap-1">
    🌐 EN
  </span>

  <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
    <button
      onClick={() => changeLanguage("en")}
      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
    >
      English
    </button>
    <button
      onClick={() => changeLanguage("ar")}
      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
    >
      العربية
    </button>
    <button
      onClick={() => changeLanguage("hi")}
      className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
    >
      हिंदी
    </button>
  </div>
</div>

          <FaLinkedinIn />
        </div>
      </div>
{/* bg-[#D4D6CC] */}
      {/* ================= MAIN NAVBAR ================= */}
      <div className=" bg-[#F0F0F0] border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
  <img
    src={Logo}
    alt="Logo"
    className="w-17 h-17 object-cover rounded-full"
  />

  <div className="leading-tight">
    <div className="font-bold text-lg text-[#222F44]">
      FAS CONSULTANTS
    </div>
    <div className="text-xs text-[#222F44]">
      Financial and Advisory Services
    </div>
  </div>
</a>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex gap-8 font-medium text-[#222F44]">
            <a href="/" className=" relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#222F44] after:transition-all after:duration-300 hover:after:w-full  ">
              Home
            </a>
            <a href="/aboutus" className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">
            About us</a>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-900">
               <a href="/services" className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">
               Services</a>  <FiChevronDown />
              </button>

              <div className="absolute left-0 top-full mt-3 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <ul className="py-2">
                  
                  {servicesMenu.map((item) => (
                    <li key={item.path}>
                      <a
                         href={item.path}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="/Blog" className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">
          News & Updates</a>
            <a href="/WhyChooseus" className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">
            Why Choose us</a>
            <a href="/careers" className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">
            Careers</a>
            
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            <button className="hidden lg:flex items-center gap-2 bg-[#222F44] text-white px-5 py-2 rounded-md">
              <FiPhone /><a href="/contact"> Let’s Talk</a> 
            </button>

            <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 ${mobileOpen ? "visible" : "invisible"} `}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] bg-[#F0F0F0] p-6 transform transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="bg-[#222F44] text-white p-2 rounded"
            >
              <FiX />
            </button>
          </div>

          <ul className="mt-6 space-y-5 text-base font-medium text-gray-900">
  {/* Home */}
  <li>
    <a href="/"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
      Home
    </a>
  </li>

  {/* About */}
  <li>
    <a href="/aboutus"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
      About us
    </a>
  </li>

  {/* SERVICES */}
  <li>
    <button
      onClick={() => toggleSubmenu("services")}
      className="w-full flex items-center justify-between"
    >
      <span className="relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full">Services</span>
      <FiChevronDown
        className={`transition-transform duration-300 ${
          openSubmenu === "services" ? "rotate-180" : ""
        }`}
      />
    </button>

    {openSubmenu === "services" && (
      <div className="mt-3 pl-4 space-y-3 text-sm text-gray-700">
        {servicesMenu.map((item) => (
          <a href={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className="block"
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </li>

  {/* Blog */}
  <li>
    <a href="/blog"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
    News & Updates
    </a>
  </li>

  {/* How we work */}
  <li>
    <a href="/WhyChooseus"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
     WhyChooseus
    </a>
  </li>

  {/* Careers */}
  <li>
    <a href="/careers"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
      Careers
    </a>
  </li>

  

  {/* Contact */}
  <li>
    <a href="/contact"
      onClick={() => setMobileOpen(false)}
      className="block relative inline-block transition-transform duration-300 hover:-translate-y-[1px] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
    >
      Contact Us
    </a>
  </li>
</ul>


          {/* Contact Info */}
          <div className="mt-10 border-t pt-6 text-sm space-y-3 ">
            <div className="flex gap-3">
              <FiMapPin /> Saudi Arabia
            </div>
            <div className="flex gap-3">
              <FiPhone /> <a href="https://wa.me/919995396351">9995396351</a>
            </div>
            <div className="flex gap-3">
              <FiMail /> <a href="mailto:Info@fasconsultant.com">Info@fasconsultant.com</a>
            </div>
          </div>
          <div className="mt-6">
  <p className="text-sm mb-2 font-semibold">Language</p>
  <div className="flex gap-3">
    <button onClick={() => changeLanguage("en")} className="px-3 py-1 bg-gray-200 rounded">
      EN
    </button>
    <button onClick={() => changeLanguage("ar")} className="px-3 py-1 bg-gray-200 rounded">
      AR
    </button>
    <button onClick={() => changeLanguage("hi")} className="px-3 py-1 bg-gray-200 rounded">
      HI
    </button>
  </div>
</div>  
        </div>
      </div>
    </header>
  );
}