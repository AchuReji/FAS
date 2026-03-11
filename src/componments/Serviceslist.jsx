
import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";

// 1. Define data structure for easier management and looping
const services = [
  {
    id: "audit",
    title: "Audit & Assurance",
    description: "Our Audit & Assurance services ensure accurate financial reporting, regulatory compliance, and enhanced business transparency. We conduct independent and objective audits to evaluate internal controls, assess risk management systems, and identify financial and operational risks that may impact business performance. Our services include Statutory Audits under the Companies Act, 2013, ensuring adherence to corporate laws and prescribed reporting standards; Internal Audits aimed at strengthening internal control mechanisms, improving operational efficiency, and enhancing governance; and Tax Audits under the Income-tax Act, 1961, ensuring proper maintenance of accounts and compliance with applicable tax provisions. Through a structured, risk-based audit approach, we deliver meaningful insights that reinforce accountability, improve financial discipline, and build stakeholder confidence through reliable, compliant, and timely audit solutions.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Our accounting services ensure accurate financial record to report process, tailored to meet specific business needs while adhering to regulatory standards and best practices in the industry",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "virtual-cfo",
    title: "Virtual CFO",
    description: "Benefit from our Virtual CFO services,providing strategic financial oversight and guidance to help businesses optimize financial performance without the need for a full-time hire..",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "shared-cfo",
    title: "Shared CFO",
    description: " Our Shared CFO services offer flexible financial leadership, allowing multiple businesses to access expert financial advice and strategies that drive growth and improve decision-making processes.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "incorporation",
    title: "Company Incorporation",
    description: "We facilitate the company incorporation process, guiding clients through legal requirements, documentation, and regulatory compliance to ensure smooth establishment and operational readiness for new businesses.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "tax",
    title: "Tax & GST",
    description: "Our Tax and GST consulting services are designed to ensure compliance with local regulations while optimizing tax liabilities,helping clients navigate the complexities of the tax landscape effectively.",
    img: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "ManagementConsulting",
    title: "Management Consulting",
    description: "Our management consulting services guide organizations in achieving strategic goals through tailored solutions, helping enhance operational efficiency and drive sustainable growth aligned with their vision and objectives..",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "internalAudit",
    title: "Internal Audit",
    description: "We provide comprehensive internal audit services that ensure compliance, enhance risk management, and improve governance, allowing businesses to identify and mitigate potential operational and financial risks effectively.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "ERPImplementation",
    title: "ERPImplementation",
    description: "Our ERP implementation services streamline business processes by integrating technology solutions tailored to enhance data accuracy, improve efficiency,and facilitate informed decision-making across all levels of the organization..",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "AccountsPayable",
    title: "Accounts Payable",
    description: "We offer accounts payable outsourcing services that manage vendor invoices,payment processing, and financial reporting, ensuring timely transactions while reducing operational burdens and enhancing financial visibility for clients..",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id:"AccountantOutsourcing",
    title: "Accountant Outsourcing",
    description: "Our accountant outsourcing services provide clients access to skilled professionals who handle complex accounting tasks, enabling businesses to focus on core activities while ensuring compliance and accuracy in financial reporting..",
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=600",
  },
  
];

export default function Serviceslist() {
  const location = useLocation();
  const sectionRefs = useRef({});
  const [activeId, setActiveId] = useState(null);

  useLayoutEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);
    setActiveId(id);

    requestAnimationFrame(() => {
      const target = sectionRefs.current[id];
      if (!target) return;

      const y =
        target.getBoundingClientRect().top + window.pageYOffset - 120;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  }, [location.key]);

  const sectionClass = (id) =>
    clsx(
      "transition-all duration-500 rounded-2xl p-6",
      activeId === id
        ? "bg-[#F1F5FF] border border-[#222F44] shadow-lg"
        : "bg-transparent"
    );

  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        {services.map((service, index) => {
          // Determine layout direction based on index (Even = Left, Odd = Right)
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className={clsx(
                "flex flex-col gap-10 items-center",
                // Toggle row direction based on even/odd
                isEven ? "md:flex-row" : "md:flex-row-reverse",
                sectionClass(service.id) // Applying your active style wrapper
              )}
            >
              {/* Text Content Side - Animates from Left or Right depending on layout */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              {/* Image Content Side - Animates from Opposite side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative overflow-hidden rounded-xl shadow-md h-64 md:h-80 w-full">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

