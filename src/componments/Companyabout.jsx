/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { CheckCircle, Phone } from "lucide-react"

// Define direction-based variants
const fadeInSide = (direction) => ({
  hidden: { 
    opacity: 0, 
    x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    y: direction === "up" ? 50 : 0
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each list item reveal
    }
  }
};

function Companyabout() {
  return (
    <section className="py-20 bg-[#F0F0F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE SECTION - FADES IN FROM LEFT */}
        <motion.div
          variants={fadeInSide("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
          className="relative"
        >
          {/* Main Image */}
          <div className="rounded-[28px] overflow-hidden shadow-xl">
            <img
              src="https://i.postimg.cc/QC8Z6sx5/Gemini-Generated-Image-wwopkwwopkwwopkw.png"
              alt="Tax Consultants in India and Saudi Arabia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Image - FADES IN FROM UP */}
          {/* <motion.div
            variants={fadeInSide("up")}
            transition={{ delay: 0.4 }}
            className="absolute top-10 right-[-40px] bg-[#D4D6CC] p-2 rounded-2xl shadow-xl hidden md:block"
          >
            <img
              src="https://i.postimg.cc/BnGkN4YT/Gemini-Generated-Image-c902quc902quc902.png"
              alt="FAS Global Advisory"
              className="w-60 rounded-xl"
            />
          </motion.div> */}

          {/* Stats Card - FADES IN FROM UP */}
          <motion.div
            variants={fadeInSide("up")}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[-30px] left-6 bg-[#F0F0F0] p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-blue-900">200+</h3>
            <p className="text-sm text-gray-500">Corporate Clients</p>
            <p className="text-xs mt-2 text-[#222F44]">Expertise in ZATCA & GST Compliance</p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT SECTION - FADES IN FROM RIGHT */}
        <motion.div
          variants={fadeInSide("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-[#222F44] font-semibold uppercase tracking-wide">
            Global Tax & Advisory Excellence
          </span>

          <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">
            Leading Financial Advisory <br />
            in India & Saudi Arabia
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            At <strong>FAS Consultants</strong>, we bridge the gap between complex regulations and business growth. 
            From <strong>ZATCA E-invoicing</strong> in KSA to <strong>GST Filing</strong> in India, we provide 
            end-to-end tax compliance and strategic financial planning for global enterprises.
          </p>

          {/* Feature List - STAGGERED FADE IN FROM UP */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 mt-8"
          >
            {[
              "Saudi Corporate Tax  & Zakat ",
              "ZATCA E-Invoicing & VAT Compliance",
              "India GST, Income Tax & TDS Filing",
              "Statutory & Internal Audit Services",
              "Company Formation: MISA & MCA",
              "Cross-Border Transfer Pricing Advisory",
              "Strategic Financial Risk Management",
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInSide("up")} // Each child item slides up
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-[#222F44] w-5 h-5 mt-1" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA - FADES IN FROM UP */}
          <motion.div 
            variants={fadeInSide("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-10"
          >
            <button className="px-8 py-4 rounded-xl bg-[#222F44] text-white font-semibold shadow-lg hover:opacity-90 transition">
              Our Tax Solutions →
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="text-[#222F44]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Expert Consultation</p>
                <a 
                  href="https://wa.me/919995396351" 
                  className="font-semibold text-blue-900 hover:text-blue-700"
                >
                  +91 999 539 6351
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Companyabout