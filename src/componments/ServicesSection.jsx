// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"

// export default function ServicesSection() {
//   const cardsRef = useRef([])
//   const iconsRef = useRef([])

//   useEffect(() => {
//     // ENTRY ANIMATION
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 60 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: "power3.out",
//       }
//     )
//   }, [])

//   const handleMouseEnter = (index) => {
//     gsap.to(cardsRef.current[index], {
//       y: -10,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
//       duration: 0.3,
//       ease: "power2.out",
//     })

//     gsap.to(iconsRef.current[index], {
//       scale: 1.15,
//       rotate: 5,
//       duration: 0.3,
//       ease: "power2.out",
//     })
//   }

//   const handleMouseLeave = (index) => {
//     gsap.to(cardsRef.current[index], {
//       y: 0,
//       boxShadow: "0 0 0 rgba(0,0,0,0)",
//       duration: 0.3,
//       ease: "power2.out",
//     })

//     gsap.to(iconsRef.current[index], {
//       scale: 1,
//       rotate: 0,
//       duration: 0.3,
//       ease: "power2.out",
//     })
//   }

  // const services = [
  //   { title: "Audit & Assurance", desc: "Independent audit and assurance services to enhance trust and compliance.", icon: "📊" },
  //   { title: "Accounting", desc: "Accurate accounting solutions ensuring financial clarity and control.", icon: "📘" },
  //   { title: "Virtual CFO", desc: "Strategic financial leadership without the cost of a full-time CFO.", icon: "💼" },
  //   { title: "Shared CFO", desc: "Flexible CFO expertise shared across multiple business functions.", icon: "📈" },
  //   { title: "Incorporation", desc: "End-to-end company formation and regulatory registration support.", icon: "🏢" },
  //   { title: "FTax & Zakat", desc: "Compliant tax and zakat planning with expert advisory support.", icon: "💰" },
  //   { title: "Management Consulting", desc: "Business strategy and operational consulting for growth.", icon: "🧠" },
  //   { title: "Internal Audit", desc: "Risk-focused internal audits to strengthen governance.", icon: "🛡️" },
  //   { title: "ERP Implementation", desc: "ERP planning, implementation, and optimization services.", icon: "⚙️" },
  //   { title: "Accounts Payable", desc: "Efficient payable management ensuring timely vendor payments.", icon: "🧾" },
  //   { title: "Accountant Outsourcing", desc: "Dedicated accounting professionals for your business needs.", icon: "👨‍💼" },
  //   { title: "Payroll Management", desc: "Accurate payroll processing with statutory compliance.", icon: "🧮" },
  // ]

//   return (
//     <section className="bg-[#D4D6CC] text-black py-28">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           <div>
//             <p className="text-[#222F44] uppercase tracking-widest text-2xl mb-4">
//               ✦ FAS Consulting Services
//             </p>
//             <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
//               Comprehensive financial solutions   <br />tailored for
//              <span className="text-[#222F44]"> your business needs.</span>
//             </h2>
//           </div>

//           <div className="flex items-center">
//             <p className="text-gray-500 max-w-md">
              
//             </p>
//           </div>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//               className="relative bg-white border border-neutral-800 rounded-3xl p-8 min-h-[260px]"
//             >
//               {/* ICON */}
//               <div
//                 ref={(el) => (iconsRef.current[index] = el)}
//                 className="text-4xl mb-6 inline-block"
//               >
//                 {service.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="text-xl font-semibold mb-3">
//                 {service.title}
//               </h3>

//               {/* DESCRIPTION */}
//               <p className="text-gray-500 text-sm leading-relaxed mb-10">
//                 {service.desc}
//               </p>

//               {/* FOOTER */}
//               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
//                 <div className="w-10 h-10 rounded-full border border-[#222F44] flex items-center justify-center text-[#222F44]">
//                   ●
//                 </div>

//                 <button className="bg-neutral-700 hover:bg-neutral-600 px-5 py-2 rounded-full text-sm text-white flex items-center gap-2 transition">
//                   View More <span>↗</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }



import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { useNavigate } from "react-router-dom";

export default function ServicesSection1() {
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const buttonsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  const handleViewMore = (id) => {
    navigate(`/servicelist#${id}`);
  };

  // 🔥 HOVER ANIMATIONS
  const handleMouseEnter = (index) => {
    gsap.to(cardsRef.current[index], {
      y: -12,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(iconsRef.current[index], {
      scale: 1.2,
      rotate: 8,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current[index], {
      scale: 1.05,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardsRef.current[index], {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(iconsRef.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current[index], {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const services = [
    { id: "audit", title: "Audit & Assurance", desc: "Independent audit and assurance services.", icon: "📊" },
    { id: "accounting", title: "Accounting", desc: "Accurate accounting solutions.", icon: "📘" },
    { id: "virtual-cfo", title: "Virtual CFO", desc: "Strategic CFO leadership.", icon: "💼" },
    { id: "shared-cfo", title: "Shared CFO", desc: "Flexible CFO expertise.", icon: "📈" },
    { id: "incorporation", title: "Incorporation", desc: "Company formation services.", icon: "🏢" },
    { id: "tax", title: "FTax & Zakat", desc: "Tax & zakat compliance.", icon: "💰" },
     {id: "ManagementConsulting", title: "Management Consulting", desc: "Business strategy and operational consulting for growth.", icon: "🧠" },
    { id: "internalAudit", title: "Internal Audit", desc: "Risk-focused internal audits to strengthen governance.", icon: "🛡️" },
    { id: "ERPImplementation", title: "ERP Implementation", desc: "ERP planning, implementation, and optimization services.", icon: "⚙️" },
    {  id: "AccountsPayable",title: "Accounts Payable", desc: "Efficient payable management ensuring timely vendor payments.", icon: "🧾" },
    {  id: "AccountantOutsourcing",title: "Accountant Outsourcing", desc: "Dedicated accounting professionals for your business needs.", icon: "👨‍💼" },
    { id: "PayrollManagement", title: "Payroll Management", desc: "Accurate payroll processing with statutory compliance.", icon: "🧮" },
  ];

  return (
    <section className="bg-[#F0F0F0]  py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-[#222F44] uppercase tracking-widest text-2xl mb-4">
              ✦ FAS Consulting Services
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
              Comprehensive financial solutions <br />
              tailored for <span className="text-[#222F44]">your business needs.</span>
            </h2>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative bg-white border border-neutral-800 rounded-3xl p-8 min-h-[260px]"
            >
              <div
                ref={(el) => (iconsRef.current[index] = el)}
                className="text-4xl mb-6 inline-block"
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                {service.desc}
              </p>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
               

                <button
                  ref={(el) => (buttonsRef.current[index] = el)}
                  onClick={() => handleViewMore(service.id)}
                  className="bg-black px-5 py-2 rounded-full text-sm text-white flex items-center gap-2 transition"
                >
                  View More ↗ 
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  );
}
