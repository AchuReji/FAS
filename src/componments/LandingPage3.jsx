import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Target, 
  Briefcase,
  ChevronRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LandingPage3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const { t } = useTranslation();
  
  // Data for the carousel slides
 const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
      badge: "Financial Advisory",
      subBadge: "Strategic Capital & Asset Management",
      title: <>{t("Your Trusted ")} <br className="hidden md:block" /> Financial Partner</>,
      description: "At FAS Consultants, we prioritize client collaboration and expertise. Our dedicated team works tirelessly to deliver comprehensive financial solutions tailored to your unique business needs, fostering long-term partnerships."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      badge: "M&A Strategy",
      subBadge: "Mergers, Acquisitions & Valuations",
      title: <>Providing Expert  <br className="hidden md:block" /> Financial Solutions</>,
      description: "At FAS Consultants, we specialize in delivering expert financial solutions tailored to meet the diverse needs of our clients, ensuring compliance, efficiency, and strategic growth in their businesses."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      badge: "Wealth Growth",
      subBadge: "Global Portfolio Optimization",
      title: <>Financial and <br className="hidden md:block" />  Advisory Services</>,
      description: "FAS Consultants deliver expert financial and advisory services, helping businesses optimize performance, manage risk, and achieve sustainable growth through strategic insights and compliance-driven solutions"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 

    
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full min-h-screen font-sans overflow-x-hidden bg-gray-50">
      
      {/* --- HERO CAROUSEL SECTION --- */}
      {/* Mobile: min-h-screen allows content to fit. Desktop: h-screen fixes it to viewport. */}
      <div className="relative w-full min-h-screen md:h-screen flex flex-col">
        
        {/* Background Images Wrapper */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
            <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <img 
                src={slide.image} 
                alt="Slide Background" 
                className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-slate-900/60"></div>
            </div>
            ))}
        </div>

        

        {/* Left Side Pagination Dots - Adjusted position for mobile */}
        <div className="absolute left-6 md:left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-30">
          {slides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-whitegray-400 ring-4 ring-gray-500/30 scale-125' 
                  : 'bg-white/50 hover:bg-white'
              }`}
            ></div>
          ))}
        </div>

        {/* Main Content (Text) */}
        {/* Added extra padding bottom on mobile to ensure text doesn't hit the bottom edge */}
        <div className="relative z-10 flex-grow flex flex-col justify-center px-12 md:px-24 w-full max-w-7xl mx-auto py-20 md:py-0">
          
          <div key={currentSlide} className="animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6 animate-[fadeIn_1s_ease-out]">
              <span className="bg-white text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                {slides[currentSlide].badge}
              </span>
              <span className="text-gray-300 text-xs uppercase tracking-wider font-medium">
                {slides[currentSlide].subBadge}
              </span>
            </div>

            {/* Headline - Responsive Text Size */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1] mb-4 md:mb-6 animate-[slideRight_0.8s_ease-out]">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-200 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed font-light animate-[slideRight_1s_ease-out]">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_1.2s_ease-out]">
              <button className="bg-[#f4f4ee] hover:bg-[#222F44] text-black hover:text-white font-bold py-3 md:py-4 px-8 text-sm uppercase tracking-wider transition-colors duration-300 shadow-lg shadow-gray-500/30 text-center">
               <a href="/services"> Explore More</a>
              </button>
              <button className="border border-[#f4f4ee] bg-white/5 hover:bg-white/20 text-white font-bold py-3 md:py-4 px-8 text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group text-center">
               <a href="/contact">Get in Touch </a> 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>

          </div>
        </div>

        {/* --- BOTTOM CARDS SECTION --- */}
        {/* Desktop: Absolute positioning to overlay the bottom of the hero.
            Mobile: Relative positioning to stack naturally below the hero.
        */}
        <div className="relative w-full z-30 px-6 md:px-24 bg-gray-50 md:bg-transparent pb-12 md:pb-0 md:absolute md:bottom-0 md:left-0 md:transform md:translate-y-1/4">
          <div className="max-w-7xl mx-auto">
             {/* Added negative margin top on mobile to slightly pull cards up or just keep flat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8 md:mt-0">
                <ServiceCard 
                icon={<BarChart3 size={32} strokeWidth={1.5} />} 
                title=" Audit & Assurance" 
                desc="Ensuring transparency, compliance, and financial reliability." 
                />
                <ServiceCard 
                icon={<Target size={32} strokeWidth={1.5} />} 
                title="Accounting" 
                desc="Reliable accounting solutions for sustainable business growth." 
                />
                <ServiceCard 
                icon={<Briefcase size={32} strokeWidth={1.5} />} 
                title="Tax Compliance" 
                desc="Comprehensive tax compliance with precision and care." 
                />
            </div>
          </div>
        </div>

      </div>

      {/* Spacer for Desktop only to account for the absolute positioned cards hanging off */}
      <div className="hidden md:block h-32 bg-gray-50"></div>

    
      
      {/* Animation Styles */}
      <style>{`
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// Helper Component for Cards
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 md:p-8 shadow-xl flex items-start gap-4 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border-b-4 border-transparent hover:border-[#222F44] h-full">
    <div className="bg-[#f4f4ee] p-4 rounded-full text-gray-800 group-hover:bg-[#222F44] group-hover:text-white transition-colors duration-300 shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-2">{title}</h3>
      <p className="text-gray-500 text-sm md:text-base">{desc}</p>
    </div>
  </div>
);

export default LandingPage3;