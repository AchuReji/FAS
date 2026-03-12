import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Susan = () => {
  const expertise = [
    "Internal Audits", "Financial Management", "Statutory Audits", 
    "Project Consultancy", "Cost Control", "Forensic Accounting", 
    "Taxation (Direct & Indirect)", "Corporate Compliances"
  ];

  // Theme Colors
  const brandBlue = "#145887";
  const brandGreen = "#55B84A";

  return (
    /* Main container with a subtle fixed background pattern */
    <div className="min-h-screen font-sans text-slate-900 bg-fixed"
         style={{ 
           backgroundColor: "#f8fafc",
           backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")` 
         }}>
      
      {/* Hero Section with Professional Background Image */}
      <header 
        className="relative text-white pt-48 pb-32 px-6 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(20, 88, 135, 0.95), rgba(20, 88, 135, 0.75)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` 
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Profile Image Added Here */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#55B84A] to-white rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white overflow-hidden shadow-2xl">
              <img 
                src="https://image2url.com/r2/default/images/1772530536857-15b70256-ef46-418a-80df-c29dba79e326.jpeg" 
                alt="CA Susan Varghese"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">CA Susan Varghese</h1>
            <p className="text-xl md:text-2xl font-semibold tracking-wide uppercase mb-10" style={{ color: brandGreen }}>
              Chartered Accountant & Managing Partner
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/20 shadow-xl">CA (Fellow Member)</span>
              <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/20 shadow-xl">DISA (ICAI)</span>
              {/* <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/20 shadow-xl">MBA Finance</span> */}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 -mt-10 relative z-20">
        {/* Profile Card Section */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-2/3 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-8 inline-block border-b-4 pb-2" style={{ color: brandBlue, borderColor: brandGreen }}>
                Professional Profile
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 mb-6">
              CA. Susan Varghese FCA, DISA  An ambitious chartered accountant with 13 years of experience in audit, accounting and advisory services across industries like IT & IT Enabled Services, Microbiology R&D,  Construction and Government projects.  She has done her articleship at M/s Thomas Jacob & Co., Chartered Accountants at Trivandrum. After her CA qualification in 2012, she dedicates a special attention on enabling start-ups, while focusing on the core services delivered out of Philip Sam Varghese & Co.  She is a post qualification diploma holder in Information System Audit and Certificate holder in Forex and Treasury Management. 
              </p>
              {/* <p className="text-lg leading-relaxed text-slate-700">
                Experienced in providing advisory services to all sectors of a business, possessing excellent communication skills and a talent for establishing sustainable, profitable relationships with clients.
              </p> */}
            </div>
            
            {/* <div className="lg:w-1/3 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-center" style={{ backgroundColor: brandBlue }}>
              <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                <ShieldCheck size={32} style={{ color: brandGreen }} /> Key Attributes
              </h3>
              <ul className="space-y-5 text-lg font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 style={{ color: brandGreen }} /> Commercial acumen</li>
                <li className="flex items-center gap-3"><CheckCircle2 style={{ color: brandGreen }} /> Innovative ideas</li>
                <li className="flex items-center gap-3"><CheckCircle2 style={{ color: brandGreen }} /> Results-driven focus</li>
              </ul>
            </div> */}
          </div>
        </section>

        {/* Areas of Expertise Grid */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandBlue }}>Areas of Expertise</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: brandGreen }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-b-4 group cursor-default" style={{ borderBottomColor: brandGreen }}>
                <p className="font-bold text-xl text-slate-800 group-hover:translate-x-1 transition-transform">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience with Image Accent */}
        <section className="mb-24 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-cover bg-center min-h-[300px]" 
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop')` }}>
            <div className="w-full h-full flex items-end p-8" style={{ backgroundColor: 'rgba(20, 88, 135, 0.4)' }}>
              <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <p className="font-bold text-sm uppercase tracking-widest text-slate-500">Founded</p>
                <p className="text-2xl font-bold" style={{ color: brandBlue }}>March 2016</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-10 md:p-14">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2" style={{ color: brandBlue }}>Work Experience</h2>
              <p className="font-bold text-xl" style={{ color: brandGreen }}>M/s Philip Sam Varghese & Co. </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-xl mb-6 flex items-center gap-3" style={{ color: brandBlue }}>
                  <Briefcase style={{ color: brandGreen }} /> Core Duties
                </h4>
                <ul className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-3"><span>•</span> Managing day-to-day firm operations.</li>
                  <li className="flex gap-3"><span>•</span> Leading and motivating management teams.</li>
                  <li className="flex gap-3"><span>•</span> Strategic direct tax consultancy.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-6 flex items-center gap-3" style={{ color: brandBlue }}>
                  <BarChart3 style={{ color: brandGreen }} /> Firm Focus 
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Statutory Audit", "Tax Audit", "Bank Audit", "GST", "Corporate Law"].map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold text-xs uppercase border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Themed CTA Section */}
        <section className="rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl mb-24 relative overflow-hidden" 
                  style={{ backgroundColor: brandBlue }}>
          {/* Subtle background abstract shape */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
               style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to Strengthen Your Business?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 relative z-10 leading-relaxed">
            Partner with a Fellow Member of ICAI to ensure your company's profitability and 100% legislative adherence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <a 
              href="mailto:office@capsvco.com" 
              className="px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-green-500/20 flex items-center justify-center gap-3 shadow-2xl"
              style={{ backgroundColor: brandGreen, color: 'white' }}
            >
              Contact Me <ArrowRight size={24} />
            </a>
            <a 
              href="tel:+919447056855" 
              className="bg-white/10 backdrop-blur-md border-2 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              style={{ borderColor: brandGreen }}
            >
              Call Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};



export default Susan