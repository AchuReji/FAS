import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function BlogUpdates() {
  const updates = [
    { 
        id: "audit-trends", 
        title: "Future of Digital Auditing", 
        desc: "How AI and automation are reshaping the landscape of corporate assurance in 2026.", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        date: "Feb 15, 2026",
        link: "/blogpage" // Unique link
    },
    { 
        id: "accounting-updates", 
        title: "New Tax Regulations", 
        desc: "Essential updates for SMEs regarding the latest statutory compliance changes.", 
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        date: "Feb 10, 2026",
        link: "/blog/new-tax-regulations" // Unique link
    },
    { 
        id: "virtual-cfo-insights", 
        title: "The Virtual CFO Edge", 
        desc: "Why scaling startups are moving away from traditional in-house finance teams.", 
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        date: "Feb 08, 2026",
        link: "/blog/virtual-cfo-edge" // Unique link
    },
    
  ];

  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Latest Updates</h2>
          <div className="w-20 h-1 bg-[#170D52] rounded-full mx-auto md:mx-0" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {updates.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white border border-neutral-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[12px] font-bold text-[#170D52] uppercase tracking-wider">
                    {post.date}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-[#170D52] transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-500 text-[15px] mb-8 line-clamp-3">
                  {post.desc}
                </p>
                <div className="mt-auto">
                  {/* Changed to use post.link for unique routing per card */}
                  <Link
                    to={post.link}
                    className="w-full bg-[#145887] text-white py-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-3 active:scale-95 group-hover:bg-[#55B84A] group-hover:text-black transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}