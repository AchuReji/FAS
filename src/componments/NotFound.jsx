import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="max-w-2xl text-center">
        {/* Error Code */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-slate-800">
          404
        </h1>

        {/* Divider */}
        <div className="mx-auto my-6 h-1 w-24 bg-emerald-600 rounded-full" />

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-600 text-base md:text-lg">
          The page you’re looking for may have been moved, removed, or is
          temporarily unavailable.  
          Our financial experts are always here to guide you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg  bg-[#222F44] text-white font-medium
                       hover:bg-[#D4D6CC] transition-colors shadow-md"
          >
            Go to Homepage
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-[#222F44]
                       text-[#222F44] font-medium hover:[#222F44]
                       transition-colors"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} Financial Consulting Services. All rights reserved.
        </p>
      </div>
    </div>
  )
}
