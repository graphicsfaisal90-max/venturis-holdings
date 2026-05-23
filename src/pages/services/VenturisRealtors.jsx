import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Sales & Rentals',
    desc: 'Luxury villas, apartments, and townhouses across Dubai, Abu Dhabi, and the Northern Emirates — each property carefully curated to exceed expectations.',
    color: 'from-brand-teal to-brand-navy',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Real Estate',
    desc: 'Prime office spaces, retail outlets, and industrial properties in the most sought-after business districts across the UAE.',
    color: 'from-brand-navy to-brand-steel',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Off-Plan Investments',
    desc: 'Exclusive access to premier off-plan developments with detailed ROI analysis, payment plans, and capital growth projections.',
    color: 'from-brand-steel to-brand-navy',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Property Management',
    desc: 'Comprehensive management solutions covering tenant relations, maintenance, rent collection, and legal compliance for hassle-free ownership.',
    color: 'from-brand-teal to-brand-dark',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Valuation & Advisory',
    desc: 'Data-driven property valuations, market analysis, and investment advisory services backed by deep UAE market intelligence.',
    color: 'from-brand-dark to-brand-navy',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Real Estate Development',
    desc: 'End-to-end development consulting from land acquisition and feasibility studies to project marketing and sales strategy.',
    color: 'from-brand-navy to-brand-dark',
  },
]

const featuredProperties = [
  {
    title: 'Marina Waterfront Penthouse',
    location: 'Dubai Marina, Dubai',
    price: 'AED 18,500,000',
    beds: 4,
    baths: 5,
    area: '4,200 sqft',
    image: '/Luxury Marina Cruise (Dubai, UAE).jpg',
    tag: 'For Sale',
  },
  {
    title: 'Royal Palm Villa',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 42,000,000',
    beds: 6,
    baths: 7,
    area: '8,500 sqft',
    image: '/hero-luxury-home.jpg',
    tag: 'For Sale',
  },
  {
    title: 'Downtown Sky Residence',
    location: 'Downtown Dubai, Dubai',
    price: 'AED 8,900,000',
    beds: 3,
    baths: 3,
    area: '2,100 sqft',
    image: '/hero-elegant.jpg',
    tag: 'For Sale',
  },
  {
    title: 'Al Wadi Desert Estate',
    location: 'Ras Al Khaimah',
    price: 'AED 15,200,000',
    beds: 5,
    baths: 6,
    area: '6,800 sqft',
    image: '/Ras Al Khaimah Desert (Ras Al Khaimah, UAE).png',
    tag: 'For Sale',
  },
  {
    title: 'Grand Entrance Mansion',
    location: 'Emirates Hills, Dubai',
    price: 'AED 65,000,000',
    beds: 7,
    baths: 9,
    area: '12,000 sqft',
    image: '/hero-grand-entrance.jpg',
    tag: 'Featured',
  },
  {
    title: 'Modern Luxury Apartment',
    location: 'Yas Island, Abu Dhabi',
    price: 'AED 3,200,000',
    beds: 2,
    baths: 3,
    area: '1,800 sqft',
    image: '/hero-modern-house.jpg',
    tag: 'For Sale',
  },
]

const uaeLocations = [
  {
    city: 'Dubai',
    desc: 'The global city of the future — home to the world\'s tallest tower, largest mall, and most innovative real estate market. From the iconic Palm Jumeirah to the thriving Downtown district, Dubai offers unparalleled investment opportunities.',
    image: '/Ain Dubai (Dubai, UAE).jpg',
    properties: '2,500+',
    highlight: 'Global Investment Hub',
  },
  {
    city: 'Abu Dhabi',
    desc: 'The capital of the UAE combines cultural richness with visionary urban planning. Saadiyat Island, Yas Island, and Al Reem Island represent some of the most prestigious addresses in the region.',
    image: '/Ferrari World Abu Dhabi.jpeg',
    properties: '1,200+',
    highlight: 'Capital of Culture & Growth',
  },
  {
    city: 'Ras Al Khaimah',
    desc: 'The fastest-growing emirate for luxury tourism and residential living. With pristine beaches, mountain landscapes, and world-class resorts, RAK offers exceptional value and breathtaking natural beauty.',
    image: '/Jebel Jais Mountain Road (Ras Al Khaimah, UAE).jpg',
    properties: '800+',
    highlight: 'Nature\'s Luxury Playground',
  },
]

const whyUs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'RERA Certified & Regulated',
    desc: 'Fully licensed by the Real Estate Regulatory Agency, ensuring every transaction meets the highest legal and ethical standards in the UAE.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Deep Local Market Intelligence',
    desc: 'Decades of combined experience across all seven emirates with real-time market data, off-plan insights, and investment-grade analytics.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Exclusive Off-Plan Portfolio',
    desc: 'Priority access to the most sought-after pre-launch and off-plan developments from UAE\'s leading master developers including Emaar, Nakheel, and Aldar.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'End-to-End Concierge',
    desc: 'From visa assistance and mortgage financing to property handover and interior fit-out — our white-glove service covers every detail of your journey.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Consultation',
    desc: 'We take the time to understand your requirements, budget, and vision — whether you\'re buying your dream home or seeking premium investment returns.',
    outcome: 'Personalized Property Brief',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Curated Property Selection',
    desc: 'Our experts handpick properties matching your criteria, arranging private viewings and virtual tours of the most exceptional homes and investments.',
    outcome: 'Shortlist of Premium Options',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Negotiation & Offer',
    desc: 'Our skilled negotiators work on your behalf to secure the best possible terms, pricing, and conditions — always with complete transparency.',
    outcome: 'Favorable Terms Secured',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Transaction Management',
    desc: 'We coordinate every aspect of the transaction — from legal documentation and due diligence to mortgage processing and RERA registration.',
    outcome: 'Hassle-Free Closing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Handover & Beyond',
    desc: 'Our relationship doesn\'t end at closing. We provide post-handover support, property management, and ongoing advisory to maximize your investment.',
    outcome: 'Lifetime Client Relationship',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: 'Venturis Realtors made our dream of owning a Palm Jumeirah villa a reality. Their knowledge of Dubai\'s luxury market and personalized approach was extraordinary. Every step was handled with the utmost professionalism.',
    name: 'Abdullah Al Maktoum',
    title: 'Private Investor',
    initials: 'AM',
    rating: 5,
  },
  {
    quote: 'As an international investor, I needed a partner who truly understood Abu Dhabi\'s market. Venturis provided comprehensive data, transparent advice, and secured an exceptional off-plan deal on Yas Island that has already appreciated 18%.',
    name: 'Jennifer Hayes',
    title: 'International Portfolio Manager',
    initials: 'JH',
    rating: 5,
  },
  {
    quote: 'The level of service we received was nothing short of concierge-class. From property selection to handover, the team managed everything flawlessly. Our Ras Al Khaimah beachfront investment exceeded all expectations.',
    name: 'Dr. Saeed Al Qasimi',
    title: 'Executive Chairman',
    initials: 'SQ',
    rating: 5,
  },
  {
    quote: 'I\'ve worked with many real estate firms across the UAE, but Venturis stands apart. Their market analysis was spot-on, their negotiation skills impressive, and their after-sales support has been exceptional.',
    name: 'Priya Sharma',
    title: 'CEO, Sterling Holdings',
    initials: 'PS',
    rating: 5,
  },
  {
    quote: 'Venturis Realtors managed our rental portfolio across three emirates with remarkable efficiency. Vacancy rates dropped, rental yields increased, and we now have complete peace of mind.',
    name: 'Khalid Al Nuaimi',
    title: 'Property Owner',
    initials: 'KN',
    rating: 5,
  },
]

function CountUp({ end, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const step = Math.ceil(end / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  )
}

export default function VenturisRealtors() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTestPaused, setIsTestPaused] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    if (isTestPaused) return
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isTestPaused])

  const propertyFilters = ['All', 'For Sale', 'Featured']
  const filteredProperties = activeFilter === 'All'
    ? featuredProperties
    : featuredProperties.filter((p) => p.tag === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/Venturis%20Realtors/Hero%20Section%20Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <p className="text-brand-teal uppercase tracking-[0.25em] text-sm font-medium mb-4 animate-fade-in-down">
              Venturis Holdings Division
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-down delay-100">
              Venturis Realtors,
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80 mt-2">
                Luxury Real Estate Across the UAE
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 animate-fade-in-down delay-200">
              Connecting discerning clients with the finest properties in Dubai, Abu Dhabi, and the Northern Emirates.
              Your trusted partner for premium real estate across the United Arab Emirates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Explore Properties
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CountUp end={3500} suffix="+" label="Properties Listed" />
              <CountUp end={15} suffix="+" label="Years in UAE" />
              <CountUp end={1200} suffix="+" label="Happy Clients" />
              <CountUp end={98} suffix="%" label="Satisfaction Rate" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From luxury residential sales to commercial leasing and off-plan investments, our full-spectrum
              services cover every aspect of the UAE real estate market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full pointer-events-none" />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-5 text-white`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Featured Properties</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              Exceptional Homes & Investments
            </h2>
            <p className="text-gray-500 leading-relaxed">
              A curated selection of the finest properties across the UAE, each chosen for its
              architectural excellence, prime location, and investment potential.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {propertyFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <div
                key={p.title}
                tabIndex={0}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/15 focus-within:shadow-xl focus-within:shadow-brand-teal/15 transition-all duration-500 outline-none"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-focus-within:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border shadow-lg ${
                      p.tag === 'Featured'
                        ? 'bg-amber-500 text-white border-amber-400'
                        : 'bg-brand-teal text-white border-brand-teal/50'
                    }`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-white/80 text-xs uppercase tracking-wider">{p.location}</p>
                    <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-brand-dark">{p.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {p.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      {p.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {p.area}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Market Expertise */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Market Presence</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              Our UAE Footprint
            </h2>
            <p className="text-gray-500 leading-relaxed">
              With a presence across the Emirates' most dynamic markets, we offer unrivalled access
              to prime properties in the UAE's most desirable locations.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {uaeLocations.map((loc) => (
              <div
                key={loc.city}
                className="group relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 h-[500px]"
              >
                <img
                  src={loc.image}
                  alt={loc.city}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-4 py-1.5 bg-brand-teal/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                    {loc.properties} Properties
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">{loc.highlight}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">{loc.city}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{loc.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Explore Properties</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Why Venturis</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              Built on Trust, Driven by Excellence
            </h2>
            <p className="text-gray-500 leading-relaxed">
              What sets us apart is our unwavering commitment to integrity, market mastery, and
              delivering exceptional outcomes for every client we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 lg:p-10 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white shadow-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              A Seamless Journey From Start to Key Handover
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our proven five-step methodology ensures clarity, transparency, and complete satisfaction
              at every stage of your real estate journey.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block -translate-x-px" />
            {process.map((p, i) => (
              <div key={p.step} className="relative pb-12 lg:pb-20 last:pb-0">
                <div className={`lg:flex items-center gap-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <div className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                      <div className={`flex items-center gap-4 mb-5 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                          {p.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">{p.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                      <span className="inline-block text-xs font-semibold text-brand-teal uppercase tracking-wider bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
                        {p.outcome}
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:w-1/2 items-center">
                    <div className={`text-8xl font-bold text-gray-100 select-none ${i % 2 === 0 ? '' : 'lg:text-right lg:w-full'}`}>
                      {p.step}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-teal border-4 border-white shadow z-10" />
                <div className="lg:hidden flex items-center gap-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center text-sm font-bold shadow-md shrink-0">
                    {p.step}
                  </div>
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                    {p.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Don't just take our word for it — hear from the clients we've had the privilege of serving
              across the UAE.
            </p>
          </div>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsTestPaused(true)}
            onMouseLeave={() => setIsTestPaused(false)}
          >
            <div className="relative min-h-[340px]">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                    idx === activeTestimonial
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className={`w-5 h-5 ${s < t.rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white font-bold text-lg">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-dark text-lg">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`rounded-full transition-all duration-500 ${
                    i === activeTestimonial
                      ? 'bg-brand-teal w-8 h-2.5'
                      : 'bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-luxury-living.jpg"
            alt="Luxury Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-navy/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Property in the UAE
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're searching for a luxury villa in Dubai, a beachfront apartment in Ras Al Khaimah,
            or a prime investment in Abu Dhabi — our expert team is ready to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Talk to an Advisor
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
