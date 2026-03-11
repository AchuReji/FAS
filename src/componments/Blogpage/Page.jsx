import React from 'react';
import { Mail } from 'lucide-react'; // Optional: for the button icon

export default function Page() {
  const blogPosts = [
    {
      id: "audit-trends",
      category: "Audit & Assurance",
      date: "Feb 15, 2026",
      title: "The Shift to Digital-First Auditing",
      description: "Our latest approach to Audit & Assurance ensures accurate financial reporting through AI-driven insights. By evaluating internal controls with real-time data, we identify financial risks before they manifest. This structured approach strengthens governance and improves operational efficiency, building deep trust with stakeholders through reliable and timely solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    
    // You can easily add more blog objects here
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-12 md:pt-48 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16">
          {blogPosts.map((post) => (
            <section 
              key={post.id} 
              id={post.id}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#55B84A] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    {post.date}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
                  {post.title}
                </h2>

                <div className="relative pl-6 mb-10">
                  {/* The Green Vertical Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#55B84A]" />
                  <p className="text-neutral-600 text-lg italic leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <button className="bg-[#145887] hover:bg-[#55B84A] text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-3 transition-colors shadow-lg shadow-blue-900/10">
                  Get Consultant
                  <Mail size={18} />
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-auto rounded-[3rem] shadow-2xl object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

