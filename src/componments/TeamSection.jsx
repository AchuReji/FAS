import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, Facebook, Instagram, Linkedin, Share2 } from 'lucide-react';

const consultants = [
  { 
    id: 1, 
    name: "CA Ajith Sam", 
    role: "Partner", 
    image: "https://image2url.com/r2/default/images/1773137730588-65ff7d4c-eb13-45d3-917b-933f69e9a079.jpeg",
    path: "/Ajithsam" 
  },
  {  
    id: 2, 
    name: "CA Susan Varghese", 
    role: "Partner", 
    image: "https://image2url.com/r2/default/images/1772530536857-15b70256-ef46-418a-80df-c29dba79e326.jpeg",
    path: "/Susan" 
  },
];

const ConsultantCard = ({ person }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleActive = (e) => {
    e.stopPropagation(); 
    setActive(!active);
  };

  const goToProfile = () => {
    navigate(person.path);
  };

  return (
    <div 
      className={`group relative mt-5 max-w-[320px] mx-auto rounded-[1.5rem] overflow-hidden transition-all duration-500 cursor-pointer shadow-xl ${
        active ? 'bg-[#145887]' : 'bg-white'
      }`}
      onClick={goToProfile}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            active ? 'opacity-30 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Social Icons Overlay */}
        <div className={`absolute right-3 bottom-16 flex flex-col gap-2 transition-all duration-500 z-20 ${
          active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}>
          {[Facebook, Instagram, Linkedin, Share2].map((Icon, index) => (
            <button 
              key={index} 
              onClick={(e) => {
                e.stopPropagation(); 
                console.log("Social clicked");
              }} 
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-[#145887] hover:bg-[#55B84A] hover:text-white hover:scale-110 transition-all shadow-md"
            >
              <Icon size={14} fill={Icon === Facebook || Icon === Linkedin ? "currentColor" : "none"} />
            </button>
          ))}
        </div>

        {/* Toggle Button */}
        <button 
          onClick={toggleActive}
          className={`absolute right-3 bottom-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg z-30 ${
            active ? 'bg-[#55B84A] text-white' : 'bg-[#145887] text-white'
          }`}
        >
          {active ? <X size={20} /> : <Plus size={20} />}
        </button>
      </div>

      <div className="p-4 text-center">
        <h3 className={`text-lg font-bold transition-colors duration-500 ${active ? 'text-white' : 'text-[#145887]'}`}>
          {person.name}
        </h3>
        <p className={`text-xs font-medium mt-1 transition-colors duration-500 ${active ? 'text-[#55B84A]' : 'text-gray-500'}`}>
          {person.role}
        </p>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section 
      className="relative py-16 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        // Consistent Background: Overlay + Carbon Fibre Texture + Fixed Professional Image
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.95)), 
                          url(""), 
                          url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
        backgroundAttachment: 'scroll, scroll, fixed',
        backgroundSize: 'auto, auto, cover'
      }}
    >
      {/* Decorative Blur Orbs with Brand Colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#55B84A]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#145887]/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-[#55B84A] text-white text-[15px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
            Top Consultants
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mt-6 leading-tight">
            Enhance Your Experience with <br className="hidden md:block" /> 
            Expert Consulting
          </h2>
          <div className="w-20 h-1 bg-[#55B84A] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center">
          {consultants.map((person) => (
            <ConsultantCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}