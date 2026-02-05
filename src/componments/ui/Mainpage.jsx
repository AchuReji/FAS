import React from 'react'


function Mainpage() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-[#D4D6CC] "  >
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Finance Consulting Services for 
                    <div className="relative inline-flex"> 
                        <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#D4D6CC]"></span>
                        <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Business Growth</h1>
                    </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-lg">We provide professional finance consulting services to help businesses improve financial performance, manage risk, optimize cash flow, and make informed strategic decisions. Our expertise covers accounting, taxation, budgeting, compliance, and financial planning..</p>
 
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                    <a href="https://wa.me/+919778490095" title="" className=" inline-flex items-center justify-center  rounded-md px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#222F44] hover:bg-[#D4D6CC] focus:bg-emerald-600" role="button"> Contect us </a>

                  
                </div>
            </div>

            <div data-aos="fade-left">
                <img className="w-full h-90" src="https://i.postimg.cc/rpZXqMCt/Whats-App-Image-2024-06-17-at-19-22-54-fa3c9b7b.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Mainpage