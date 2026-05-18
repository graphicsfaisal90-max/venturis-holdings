import { Link } from 'react-router-dom'

const services = [
  'Desert Safari & Dune Bashing',
  'Luxury Hotel & Resort Bookings',
  'Private Room & Villa Rentals',
  'Corporate Travel Management',
  'Visa & Immigration Services',
  'VIP Concierge Travel Services',
]

const highlights = [
  { icon: '🏜️', title: 'Desert Adventures', desc: 'Thrilling dune bashing, camel rides, and sunset safaris across golden landscapes.' },
  { icon: '🛋️', title: 'Luxury Stays', desc: 'Private rooms, premium resorts, and exclusive accommodations for every traveler.' },
  { icon: '🌟', title: 'White-Glove Service', desc: 'Personalized concierge support from booking to return — every detail handled.' },
]

export default function VenturisTourism() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="text-brand-light hover:text-white text-sm mb-4 inline-block">&larr; Back to Services</Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Venturis Tourism</h1>
          <p className="text-xl text-brand-light max-w-2xl">Thrilling desert adventures, luxury private stays, and curated travel experiences across the UAE.</p>
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
                Venturis Tourism curates exceptional travel experiences across the UAE and beyond. From heart-racing desert safaris across Dubai's golden dunes to serene private room retreats and luxury getaways, we handle every detail so you can focus on making memories. Our team combines local expertise with white-glove service to deliver unforgettable journeys.
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
            <div className="rounded-2xl overflow-hidden h-80 shadow-lg shadow-brand-teal/5">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/Private room.jpeg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Explore the UAE with Us</h2>
          <p className="text-gray-600 mb-8">From desert dunes to luxury stays — let us plan your adventure.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors">Book Your Experience</Link>
        </div>
      </section>
    </>
  )
}
