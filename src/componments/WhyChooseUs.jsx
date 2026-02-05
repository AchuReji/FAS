import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MoveUpRight, Star, Asterisk } from "lucide-react";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const reviewCardRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Left Content
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".animate-text", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      })
        .from(
          ".list-item",
          {
            x: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".cta-button",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );

      // 2. Review Card Floating (Left-Right)
      gsap.to(reviewCardRef.current, {
        x: "+=15", // Move 15px to the right
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".badge-rotator", {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "linear",
      });

      // 2. Animate Images (Added clearProps to ensure visibility after animation)
      gsap.from(".collage-image", {
        y: 100,
        opacity: 0,
        rotation: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
        delay: 0.5,
        clearProps: "opacity, transform", // Safety check to keep them visible
      });

      // 3. Animate Review Card
      gsap.from(".review-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: "back.out(1.7)",
      });

      // 4. Animate Dashed Arrow
      gsap.fromTo(
        ".dashed-arrow path",
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 1.5, delay: 1.2, ease: "power1.inOut" }
      );

     
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    
    <section
      ref={containerRef}
      className="bg-[#f4f4ee] min-h-screen text-white overflow-hidden py-12 px-4 md:px-8 lg:px-16 flex items-center justify-center font-sans"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="relative z-20">
          {/* Headline */}
          <h1 className="animate-text text-5xl text-black md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Finance Consulting Services for
            <br />
            Business <span className="text-white">Growth</span>
          </h1>

          {/* Description */}
          <p className="animate-text text-black text-semibold text-lg mb-8 max-w-xl leading-relaxed">
            We provide professional finance consulting services to help
            businesses improve financial performance, manage risk, optimize cash
            flow, and make informed strategic decisions. Our expertise covers
            accounting, taxation, budgeting, compliance, and financial
            planning..
          </p>

         

          {/* CTA Button */}
          <div className="cta-button flex items-center gap-4">
            <button className="bg-[#1a1a1a] hover:bg-[#333] border border-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
              Contact Us
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-black">
              <MoveUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGES COLLAGE --- */}
        {/* Fixed height container to ensure images have space to render */}
        <div className="relative h-[500px] lg:h-[600px] w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Rotating Badge (Moved here for better layering) */}
          <div
            ref={badgeRef}
            className="absolute top-1 left-0 -ml-12 right-50 z-20 md-10"
          >
            <div className="badge-rotator relative w-28 h-28 flex items-center justify-center rounded-full bg-white border-2 border-white">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[10px] uppercase font-bold fill-black tracking-widest">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    FAS Consultants Financial andAdvisory Services •
                  </textPath>
                </text>
              </svg>
              <img
                src="https://i.postimg.cc/Bn1yyB6Y/Untitled-design-removebg-preview.png"
                alt="Fox Logo"
                className="w-30 h-30"
              />
            </div>
          </div>

          {/* Image 1: Top (Rotated Left) - USING NEW RELIABLE SOURCE */}
          <div className="collage-image absolute top-4 left-4 md:left-20 w-48 h-64 md:w-60 md:h-72 bg-gray-800 rounded-3xl overflow-hidden border-2 border-[#111] shadow-2xl z-20 -rotate-6 origin-bottom-left hover:z-50 hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team 1"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Image 2: Right (Rotated Right) - USING NEW RELIABLE SOURCE */}
          <div className="collage-image absolute top-8 right-4 md:right-10 w-44 h-60 md:w-56 md:h-72 bg-gray-800 rounded-3xl overflow-hidden border-2 border-[#111] shadow-2xl z-30 rotate-6 hover:z-50 hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3: Bottom (Wide) - USING NEW RELIABLE SOURCE */}
          <div className="collage-image absolute bottom-24 left-10 md:left-32 w-64 h-40 md:w-72 md:h-48 bg-gray-800 rounded-3xl overflow-hidden border-2 border-[#111] shadow-2xl z-40 -rotate-3 hover:z-50 hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dashed Arrow */}
          <svg
            className="dashed-arrow absolute bottom-32 right-20 w-24 h-24 z-10 pointer-events-none hidden md:block"
            viewBox="0 0 100 100"
          >
            <path
              d="M 10 10 Q 50 10 50 50 Q 50 90 90 90"
              fill="none"
              stroke="#efedebff"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <polygon
              points="90 90, 85 82, 95 82"
              fill="#f6f4f3ff"
              transform="rotate(180 90 85)"
            />
          </svg>

          {/* Review Card - Fixed Positioning */}
          <div
            ref={reviewCardRef}
            className="absolute top-40 -right-10 bg-[#222F44] 0 p-5 rounded-2xl shadow-lg z-30 w-64"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex -space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-orange-500"
                  src="https://i.pravatar.cc/100?img=1"
                  alt="User 1"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-orange-500"
                  src="https://i.pravatar.cc/100?img=2"
                  alt="User 2"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-orange-500"
                  src="https://i.pravatar.cc/100?img=3"
                  alt="User 3"
                />
              </div>
              <span className="text-white font-bold text-xl">5.0</span>
            </div>
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <p className="text-white text-sm font-medium">(15.5k Review)</p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default WhyChooseUs;
