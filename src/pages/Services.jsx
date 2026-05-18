import { Link } from 'react-router-dom'

const divisions = [
  {
    title: 'Venturis Interiors',
    tagline: 'Transforming Spaces',
    desc: 'We specialize in creating stunning interior environments that blend aesthetics with functionality. From concept to completion, our design and fit-out services cover commercial offices, retail spaces, and residential properties.',
    features: ['Interior Design & Planning', 'Commercial Fit-Outs', 'Residential Renovations', 'Project Management'],
    path: '/services/interiors',
  },
  {
    title: 'Venturis Facilities Management',
    tagline: 'Managed with Care',
    desc: 'Delivering professional maintenance, operational efficiency, and integrated facility solutions designed to keep businesses running smoothly with excellence and reliability.',
    features: ['Preventive Maintenance', 'Security Services', 'Cleaning & Hygiene', 'Utilities Management'],
    path: '/services/facilities',
  },
  {
    title: 'Venturis Realtors',
    tagline: 'Smart Real Estate',
    desc: 'Connecting clients with premium properties, investment opportunities, and trusted real estate expertise through a modern and professional approach.',
    features: ['Property Sales & Rentals', 'Commercial Real Estate', 'Investment Advisory', 'Property Management'],
    path: '/services/realtors',
  },
  {
    title: 'Venturis Partners',
    tagline: 'Strategic Alliances',
    desc: 'Empowering businesses through collaborative partnerships, innovative opportunities, and professional corporate solutions that drive long-term success and expansion.',
    features: ['Strategic Partnerships', 'Joint Ventures', 'Corporate Advisory', 'Business Development'],
    path: '/services/partners',
  },
  {
    title: 'Venturis Wheels',
    tagline: 'Driving Excellence',
    desc: 'End-to-end automotive solutions designed for both individual and corporate clients. Our services cover vehicle sales, fleet management, maintenance, and accessories.',
    features: ['Vehicle Sales & Leasing', 'Fleet Management', 'Maintenance & Repairs', 'Auto Accessories'],
    path: '/services/wheels',
  },
  {
    title: 'Venturis Tourism',
    tagline: 'Desert Safaris & Travel',
    desc: 'Thrilling desert adventures, luxury private stays, and curated travel experiences across the UAE. From dune bashing to premium resort bookings, we deliver unforgettable journeys.',
    features: ['Desert Safari & Dune Bashing', 'Luxury Hotel & Resort Bookings', 'Private Room & Villa Rentals', 'VIP Concierge Travel'],
    path: '/services/tourism',
  },
]

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Six specialized divisions working together to deliver comprehensive solutions across multiple industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {divisions.map((div, i) => (
            <div key={div.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-brand-teal text-sm font-semibold uppercase tracking-wider">{div.tagline}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-2 mb-4">{div.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{div.desc}</p>
                <ul className="space-y-2 mb-6">
                  {div.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={div.path}
                  className="inline-flex items-center px-5 py-2.5 bg-brand-dark text-white font-medium rounded-lg hover:bg-brand-navy transition-colors text-sm"
                >
                  Learn More
                </Link>
              </div>
              <div className={`bg-gradient-to-br from-brand-light to-brand-light rounded-2xl p-8 h-64 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <span className="text-brand-dark text-6xl font-bold opacity-20">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
