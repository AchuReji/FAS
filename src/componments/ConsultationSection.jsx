import { Mail, Phone, MapPin } from "lucide-react"

export default function ConsultationSection() {
  return (
    <section className="bg-[#F0F0F0] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 bg-[#222F44] rotate-45"></span>
            <span className="text-bg-[#222F44] font-semibold">
              Free Consultation
            </span>
          </div>

          <h2 className="text-4xl font-bold text-bg-[#222F44] mb-6">
            Book a Consultation
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Have questions about tax planning, business registration, or
            compliance? Let our experienced professionals guide you. Schedule a
            free consultation today and get expert advice tailored to your
            needs.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6 ">
            <InfoItem
              icon={<Mail />}
              label="EMAIL"
              value="Info@fasconsultant.com"
            />
            <InfoItem
              icon={<Phone />}
              label="PHONE"
              value="123-456-7890"
            />
            <InfoItem
              icon={<MapPin />}
              label="BRANCHES"
              value=" India , Saudi Arabia "
            />
          </div>

          {/* Map */}
          <div className="mt-8 rounded-xl overflow-hidden border">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305694.2884634233!2d43.556119460506814!3d23.502676277145657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e1!3m2!1sen!2sin!4v1767534712260!5m2!1sen!2sin"
              className="w-full h-60"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border rounded-2xl p-6 md:p-10 shadow-sm">
          <form
          formAction="mailto:Info@fasconsultant.com"
           className="space-y-6">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
            <Input placeholder="Your Company Name" />
            <Textarea placeholder="Write Your Message Here" />

            <button
            
              type="submit"
              className="w-full md:w-fit px-8 py-4 bg-[#222F44] text-white rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Request
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

/* ------------------ Reusable Components ------------------ */

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#222F44] text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase">{label}</p>
        <p className="font-semibold text-blue-950">{value}</p>
      </div>
    </div>
  )
}

function Input({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-blue-100 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

function Textarea({ placeholder }) {
  return (
    <textarea
      rows="5"
      placeholder={placeholder}
      className="w-full rounded-lg border border-blue-100 px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />
  )
}
