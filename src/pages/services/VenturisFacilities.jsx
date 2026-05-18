import { Link } from 'react-router-dom'

const services = [
  'Preventive & Reactive Maintenance',
  'Security & Access Control',
  'Cleaning & Hygiene Services',
  'Landscaping & Grounds Maintenance',
  'Waste Management',
  'Utilities & Energy Management',
]

const highlights = [
  { icon: '🔧', title: 'Reliable Maintenance', desc: 'Proactive care to prevent downtime and extend asset life.' },
  { icon: '🛡️', title: 'Secure Environments', desc: 'Comprehensive security solutions for peace of mind.' },
  { icon: '♻️', title: 'Sustainable Practices', desc: 'Eco-friendly approaches to facilities management.' },
]

export default function VenturisFacilities() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="text-brand-light hover:text-white text-sm mb-4 inline-block">&larr; Back to Services</Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Venturis Facilities Management</h1>
          <p className="text-xl text-white/70 max-w-2xl">Delivering professional maintenance, operational efficiency, and integrated facility solutions designed to keep businesses running smoothly with excellence and reliability.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {highlights.map((h) => (
              <div key={h.title} className="bg-brand-light rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">What We Offer</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our facilities management team ensures your property and assets are maintained to the highest standards. We deliver professional maintenance, operational efficiency, and integrated solutions designed to keep your business running smoothly with excellence and reliability.
              </p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-light to-brand-light rounded-2xl p-8 h-80 flex items-center justify-center">
              <span className="text-brand-dark text-8xl font-bold opacity-20">F</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Need Facilities Management?</h2>
          <p className="text-gray-600 mb-8">Let us take care of your facilities so you can focus on your business.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors">Get a Quote</Link>
        </div>
      </section>
    </>
  )
}
