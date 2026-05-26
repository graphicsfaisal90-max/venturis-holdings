import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SEO from '../components/SEO'

const divisions = [
  {
    title: 'Venturis Partners',
    tagline: 'Strategic Alliances',
    desc: 'Empowering businesses through collaborative partnerships, innovative opportunities, and professional corporate solutions that drive long-term success and expansion.',
    features: ['Strategic Partnerships', 'Joint Ventures', 'Corporate Advisory', 'Business Development'],
    path: '/services/partners',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    title: 'Venturis Realtors',
    tagline: 'Smart Real Estate',
    desc: 'Connecting clients with premium properties, investment opportunities, and trusted real estate expertise through a modern and professional approach.',
    features: ['Property Sales & Rentals', 'Commercial Real Estate', 'Investment Advisory', 'Property Management'],
    path: '/services/realtors',
    image: '/realtors.jpeg',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    title: 'Venturis Facilities Management',
    tagline: 'Managed with Care',
    desc: 'Delivering professional maintenance, operational efficiency, and integrated facility solutions designed to keep businesses running smoothly with excellence and reliability.',
    features: ['Preventive Maintenance', 'Security Services', 'Cleaning & Hygiene', 'Utilities Management'],
    path: '/services/facilities',
    image: '/Facilirtes.jpeg',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    title: 'Venturis Wheels',
    tagline: 'Driving Excellence',
    desc: 'End-to-end automotive solutions designed for both individual and corporate clients. Our services cover vehicle sales, fleet management, maintenance, and accessories.',
    features: ['Vehicle Sales & Leasing', 'Fleet Management', 'Maintenance & Repairs', 'Auto Accessories'],
    path: '/services/wheels',
    image: '/wheels2.jpg',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    title: 'Venturis Interiors',
    tagline: 'Designing Excellence',
    desc: 'Award-winning interior design and architecture studio creating inspiring spaces across residential, commercial, and hospitality sectors. From concept to completion, we deliver timeless, functional environments.',
    features: ['Interior Design & Planning', 'Architecture & Build', 'Commercial Fit-Outs', 'Project Management'],
    path: '/services/interiors',
    image: '/interiors-hero.jpeg',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    title: 'Venturis Tourism',
    tagline: 'Desert Safaris & Travel',
    desc: 'Thrilling desert adventures, luxury private stays, and curated travel experiences across the UAE. From dune bashing to premium resort bookings, we deliver unforgettable journeys.',
    features: ['Desert Safari & Dune Bashing', 'Luxury Hotel & Resort Bookings', 'Private Room & Villa Rentals', 'VIP Concierge Travel'],
    path: '/services/tourism',
    image: '/Desert-Safari-Dubai.jpg',
    color: 'from-brand-teal to-brand-navy',
  },
]

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore 6+ specialized divisions of Venturis Holdings LLC — Venturis Partners, Realtors, Facilities Management, Wheels, Interiors, and Tourism. Comprehensive business solutions across the UAE."
        path="/services"
        keywords="Venturis Holdings LLC services, business divisions UAE, strategic partnerships Dubai, real estate services UAE, facilities management Dubai, automotive solutions UAE, interior design Dubai, tourism UAE"
      />
      {/* ============ HERO ============ */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-teal)_0%,_transparent_60%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-brand-navy)_0%,_transparent_60%)] opacity-15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-brand-teal" />
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Venturis Holdings LLC</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              6+ specialized divisions working together to deliver comprehensive solutions across multiple industries — united by a single standard of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Explore Divisions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 sm:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { value: '6+', label: 'Divisions' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '50+', label: 'Partners' },
                  { value: '200+', label: 'Projects Delivered' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white font-number mb-1">{s.value}</div>
                    <div className="text-white/50 text-xs uppercase tracking-[0.15em]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ DIVISIONS ============ */}
      <section id="divisions" className="py-28 sm:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Divisions</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">Our Divisions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              6+ specialized divisions, one standard of excellence.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {divisions.map((div, i) => (
              <AnimatedSection key={div.title}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? '' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-brand-teal/5">
                        <img
                          src={div.image}
                          alt={div.title}
                          className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-transparent" />
                        <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-base font-bold font-number">
                          {(i + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/15">
                          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                          <span className="text-white text-xs font-semibold">{div.tagline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">{div.tagline}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-5 leading-tight">{div.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-8">{div.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {div.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 bg-brand-light rounded-xl px-4 py-3 border border-gray-100">
                          <div className="w-7 h-7 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-brand-dark">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={div.path}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all duration-300 group/btn"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Let's Collaborate</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Ready to Work With Us?</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg mb-10">
              Let's discuss how Venturis Holdings LLC can help bring your vision to life with our comprehensive suite of services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Contact Us Today
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
