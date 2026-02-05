

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MoveUpRight } from "lucide-react";
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
  ];

  return (
    <section className="bg-white py-28">
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
                  className="bg-neutral-700 hover:bg-neutral-600 px-5 py-2 rounded-full text-sm text-white flex items-center gap-2 transition"
                >
                  View More ↗
                </button>
              </div>
            </div>
          ))}
        </div>
<div className="mt-12 flex justify-center items-center gap-2">
  <button className="bg-black hover:bg-[#333] border border-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
 <a href="/services">View More</a> 
  </button>

  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-black">
    <MoveUpRight className="w-6 h-6" />
  </button>
</div>
      </div>
    </section>
  );
}
