import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const heroImages = [
  '/Partners%20hero%20section%20%20(1).jpg',
  '/Partners%20hero%20section%20%20(2).jpg',
]

const services = [
  'Strategic Business Partnerships',
  'Joint Ventures & Collaborations',
  'Corporate Advisory Services',
  'Business Development Programs',
  'Networking & Matchmaking',
  'Growth & Expansion Consulting',
]

const highlights = [
  { icon: '🤝', title: 'Collaborative Approach', desc: 'Building meaningful partnerships based on trust and mutual success.' },
  { icon: '📈', title: 'Growth Focused', desc: 'Strategic alliances designed to accelerate business growth.' },
  { icon: '🌐', title: 'Extensive Network', desc: 'Access to a wide network of industry leaders and innovators.' },
]

export default function VenturisPartners() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === currentIndex ? 1 : 0,
              transform: i === currentIndex ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-0.5 bg-brand-teal" />
                <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Strategic Alliances</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Partners</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
                Empowering businesses through collaborative partnerships and innovative corporate solutions that drive long-term success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === currentIndex ? 'w-10 bg-brand-teal' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
                Venturis Partners is dedicated to forging strategic alliances that create value. We connect businesses with the right partners, opportunities, and resources to drive innovation, expand reach, and achieve sustainable growth in today's competitive landscape.
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
              <span className="text-brand-dark/20 text-8xl font-bold">P</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Let's Grow Together</h2>
          <p className="text-gray-600 mb-8">Explore partnership opportunities with Venturis Partners today.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-navy transition-all">Become a Partner</Link>
        </div>
      </section>
    </>
  )
}
