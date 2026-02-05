import {  TestimonialsSection } from "./TestimonialsSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { MoveUpRight} from "lucide-react";

const testimonials = [
  {
    role: "Tax Expertise ",
    text: "Our team possesses strong expertise in KSA taxation and regulatory compliance, ensuring that your business adheres to local laws while optimizing your financial strategies for maximum advantage.",
    
    
  },
  {
     role: "Qualified Professionals",
    text: "We are comprised of experienced CPA, CMA, and qualified professionals dedicated to delivering high-quality financial services,empowering you to make informed decisions for your business growth.",
    
   
  },
  {
    role: "Scalable Solutions",
    text: "Our flexible and scalable outsourcing model allows businesses to tailor services according to needs, providing a cost-effective approach without compromising on quality or expertise.",
    
    
  },
  {
    role: "Quality Focus",
    text: "We prioritize quality, accuracy, and timely delivery in all our services, ensuring that our clients receive reliable financial insights and support crucial for driving sustainable business growth.",
   
    
  },
  {
     role: "Technology",
    text: "Our technology-driven processes leverage modern ERP systems, ensuring real-time data access and streamlined operations, which enhances decision-making and operational efficiency for our clients.",
   
   
  },
  {
     role: "Client-Centric",
    text: "FAS Consulting prioritizes a client-centric approach, maintaining confidentiality and trust, ensuring that each client's unique needs are met with tailored solutions and dedicated support throughout the partnership.",
  
   
  },
  {
    role: "Cost-saving",
    text: "Our flexible service packages allow clients to save costs by accessing essential services without the overhead of full-time staff, optimizing resources while maintaining high-quality financial management.",

    
  },
  {
    role: "Quality Assurance",
    text: "We uphold rigorous quality assurance practices within our processes, ensuring that all deliverables meet industry standards, providing clients with confidence in the accuracy and reliability of our services.",

    
  },
  
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// data-aos="fade-left"

function TestimonialsSectionfinal() {
  return (
    <>
    <section className="bg-[#F0F0F0] my-20 relative pt-12 mt-1 " 
     data-aos-anchor-placement="center-center">
      <div className="container z-10 mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-neutral-950">Why Choose </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-950 tracking-tighter mt-5">
            FAS Consultants
          </h2>
          <p className="text-center mt-5 opacity-75 text-neutral-950">
           Providing expert financial consulting to support informed decisions and sustainable success.
          </p>
        </motion.div>

        <div className="flex justify-center text-neutral-950 gap-10 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_50%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsSection testimonials={firstColumn} duration={15} />
          <TestimonialsSection
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsSection
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
          
        </div>
          <div className="mt-12 flex justify-center items-center gap-2">
  <button className="bg-[#1a1a1a] hover:bg-[#333] border border-gray-800 text-white font-semibold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
 <a href="/WhyChooseus">View More</a> 
  </button>

  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-black">
    <MoveUpRight className="w-6 h-6" />
  </button>
</div>
      </div>
     
<br />
    </section>
    </>
  );
}

export default TestimonialsSectionfinal;






 

