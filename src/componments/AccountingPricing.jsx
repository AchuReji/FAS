import React from 'react';
import { Check } from 'lucide-react';

const AccountingPricing = () => {
  const plans = [
    {
      title: "Company Incorporation",
      price: "₹14,999",
      features: [
        "DSC & DIN for 2 Directors",
        "Name Approval (RUN) Support",
        "MoA & AoA Drafting",
        "PAN & TAN Registration",
        "Certificate of Incorporation",
        "PF & ESI Registration"
      ],
    },
    {
      title: "ITR Filing",
      price: "₹1,000",
      features: [
        "Income from Salary & Other Sources",
        "Form 16/26AS Verification",
        "Tax Saving Investment Audit",
        "Electronic Filing (E-file)",
        "E-verification Assistance",
        "Detailed Tax Computation"
      ],
    },
    {
      title: "Partnership Registration",
      price: "₹6,000",
      features: [
        "Partnership Deed Drafting",
        "Notary & Stamp Duty Guidance",
        "Firm PAN Card Application",
        "Business Bank A/C Support",
        "GST Registration Eligibility",
        "MSME (Udyam) Registration"
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 flex flex-col relative shadow-lg border border-gray-100 transition-transform hover:scale-[1.02]">
              {plan.savings && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#55B84A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  {plan.savings}
                </span>
              )}
              
              <div className="mb-8">
                <h3 className="text-[#145887] text-2xl font-bold mb-2">{plan.title}</h3>
                {/* <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Comprehensive Package</p> */}
              </div>

              <div className="mb-8 border-b border-gray-50 pb-8">
                <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
                  STARTING From
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}*</span>
                  <span className="text-gray-400 text-sm ml-1"> * Conditions applied</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-600 font-medium text-sm">
                    <div className="mr-3 mt-0.5">
                      <Check size={16} className="text-[#55B84A]" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#145887] text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-md active:scale-95">
                <a href="https://wa.me/919995396351">Get Started</a>
              </button>
            </div>
          ))}
        </div>

        {/* Featured Bottom Bar */}
       <div className="bg-[#145887] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
  <div className="text-center md:text-left">
    <h3 className="text-5xl font-bold mb-2">Book keeping</h3>
    <p className="text-gray-400 text-sm mb-6">Comprehensive financial tracking and reporting.</p>
    
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {['Ledger Management', 'Accounts Payable', 'Monthly Reports'].map((tag) => (
        <div key={tag} className="flex items-center">
          <div className="mr-2 text-[#55B84A] font-bold text-lg leading-none">
            *
          </div>
          <span className="text-sm font-semibold">{tag}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="flex flex-col items-center md:items-end gap-4">
    <div className="text-right">
      <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
        STARTING FROM
      </div>
      <span className="text-4xl md:text-5xl font-bold">₹10,000</span>
      {/* <span className="text-gray-400"> / month</span> */}
    </div>
    <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
      <a href="https://wa.me/919995396351">Get Started</a>
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default AccountingPricing;