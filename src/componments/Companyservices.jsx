// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CompanyServices = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();

//   const projects = [
//     { 
//       title: "Audit & Assurance", 
//       category: "Independent audit and assurance services.", 
//       img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist" 
//     },
//     { 
//       title: "Accounting", 
//       category: "Accurate accounting solutions.", 
//       img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Virtual CFO", 
//       category: "Strategic CFO leadership.", 
//       img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Shared CFO", 
//       category: "Flexible CFO expertise.", 
//       img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Incorporation", 
//       category: "Company formation services.", 
//       img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Management Consulting", 
//       category: "Business strategy and operational consulting for growth.", 
//       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Internal Audit", 
//       category: "Risk-focused internal audits to strengthen governance.", 
//       img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "ERP Implementation", 
//       category: "ERP planning, implementation, and optimization services.", 
//       img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Accounts Payable", 
//       category: "Efficient payable management ensuring timely vendor payments.", 
//       img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Accountant Outsourcing", 
//       category: "Dedicated accounting professionals for your business needs.", 
//       img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=600",
//       link: "/servicelist"
//     },
//     { 
//       title: "Payroll Management", 
//       category: "Accurate payroll processing with statutory compliance.", 
//       img: "https://image2url.com/r2/default/images/1770187031595-eb6dc83d-f439-4847-af57-3952f1169f95.jpg",
//       link: "/servicelist"
//     },
//   ];

//   useEffect(() => {
//     if (carousel.current) {
//       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   return (
//     <div className="bg-white py-12 lg:py-20 px-6 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* #145887 */}
//         {/* #55B84A */}
//         {/* Header & Navigation */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
//           <div className="max-w-2xl">
//             <motion.span 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="bg-[#55B84A] text-[#111827] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block"
//             >
//               Services
//             </motion.span>
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="text-3xl lg:text-5xl font-extrabold text-[#111827] leading-tight"
//             >
//              Our Financial Services
//             </motion.h2>
//           </div>

//           <div className="flex gap-3">
//             <button 
//               onClick={prevSlide}
//               className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#55B84A] hover:text-white transition-all duration-300 active:scale-90"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="w-12 h-12 rounded-full bg-[#55B84A] flex items-center justify-center hover:bg-[#55B84A] hover:text-white transition-all duration-300 active:scale-90"
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
//             </button>
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-visible">
//           <motion.div 
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 1024 ? 1 : 3))}%` }}
//             transition={{ type: "spring", stiffness: 150, damping: 20 }}
//             className="flex gap-6"
//           >
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 // Click Animation: Shrinks slightly and adds a lime tint
//                 whileTap={{ scale: 0.97 }}
//                 className="relative min-w-full lg:min-w-[calc(33.333%-16px)] h-[450px] lg:h-[500px] rounded-3xl overflow-hidden group flex-shrink-0 select-none shadow-sm"
//               >
//                 <a href={project.link} className="block w-full h-full relative">
                  
//                   {/* Image */}
//                   <img 
//                     src={project.img} 
//                     alt={project.title} 
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
//                   />

//                   {/* Dynamic Click/Hover Overlay: Adds a lime tint on click */}
//                   <motion.div 
//                     className="absolute inset-0 bg-[#55B84A]/0 transition-colors duration-200 pointer-events-none z-10"
//                     whileTap={{ backgroundColor: "rgba(212, 232, 79, 0.1)" }}
//                   />

//                   {/* Base Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-0" />

//                   {/* Arrow Icon on Hover */}
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 scale-50 group-hover:scale-100">
//                       <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-4 border-[#55B84A]">
//                         <span className="text-2xl text-black">↗</span>
//                       </div>
//                   </div>

//                   {/* Content Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 pointer-events-none z-20">
//                     <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-3">
//                       <p className="text-[10px] uppercase font-bold text-[#55B84A] tracking-widest mb-2">
//                         {project.category}
//                       </p>
//                       <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
//                         {project.title}
//                       </h3>
//                     </motion.div>
//                   </div>
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//          <div className="flex justify-center items-center w-full px-4 py-8">
//   <motion.button 
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     /* RESPONSIVE CLASSES:
//        - w-full: Takes full width on mobile
//        - md:w-auto: Returns to natural width on desktop
//        - text-[10px] / md:text-xs: Smaller text for small screens
//     */
//     className="relative overflow-hidden group bg-[#145887] text-white 
//                px-6 py-3 md:px-10 md:py-4
//                w-full max-w-[200px] md:w-auto 
//                font-bold tracking-wider text-[10px] md:text-xs 
//                flex items-center justify-center transition-all"
//   >
//     <span className="relative z-10">
//       <a href="/services" className="block w-full h-full">
//         View More
//       </a>
//     </span>

//     {/* Hover Effect Layer */}
//     <div className="absolute inset-0 bg-[#55B84A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//   </motion.button>
// </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyServices;
import React from 'react';
import { motion } from 'framer-motion';

const CompanyServices = () => {
  const projects = [
    { title: "Audit & Assurance", category: "Audit", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Accounting", category: "Accounting", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Virtual CFO", category: "CFO", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Shared CFO", category: "CFO", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Incorporation", category: "Formation", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Management Consulting", category: "Consulting", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Internal Audit", category: "Audit", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "ERP Implementation", category: "ERP", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Accounts Payable", category: "Payable", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
    { title: "Accountant Outsourcing", category: "Outsourcing", img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=600", link: "/servicelist" },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section 
      className="relative py-12 lg:py-16 font-sans overflow-hidden w-full"
      style={{
        backgroundColor: "#ffffff",
        // Consistent Background: White Overlay + Carbon Fibre Texture + Fixed Professional Image
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.95)), 
                          url(""), 
                          url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")`,
        backgroundAttachment: 'scroll, scroll, fixed',
        backgroundSize: 'auto, auto, cover'
      }}
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-[#55B84A] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block shadow-sm"
        >
          Services
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl lg:text-6xl font-extrabold text-[#111827] leading-tight"
        >
          Our Financial Services
        </motion.h2>
      </div>

      {/* Full Width Marquee */}
      <div className="relative w-full overflow-hidden flex py-4 z-10">
        <motion.div 
          className="flex gap-5 pr-5" 
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            duration: 50, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-[65vw] md:w-[320px] h-[350px] lg:h-[420px] rounded-2xl overflow-hidden group/card flex-shrink-0 shadow-xl border border-white/20"
            >
              <a href={project.link} className="block w-full h-full relative">
                {/* Image */}
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                {/* Hover Arrow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-30 scale-50 group-hover/card:scale-100">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-[#55B84A]">
                      <span className="text-xl text-black font-bold">↗</span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 transform transition-transform duration-500 group-hover/card:-translate-y-2">
                    <p className="text-[9px] uppercase font-bold text-[#55B84A] tracking-widest mb-1 whitespace-normal">
                      {project.category}
                    </p>
                    <h3 className="text-lg lg:text-xl font-bold text-white leading-tight whitespace-normal">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Button Container */}
      <div className="flex justify-center items-center w-full px-6 mt-10 relative z-10">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group bg-[#145887] text-white px-10 py-4 font-bold tracking-wider text-xs flex items-center justify-center transition-all rounded-full shadow-lg"
        >
          <span className="relative z-10">
            <a href="/services" className="block w-full h-full uppercase">View All Services</a>
          </span>
          <div className="absolute inset-0 bg-[#55B84A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>
      </div>
    </section>
  );
};

export default CompanyServices;