import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '500', label: 'Properties Sold', suffix: '+' },
  { value: '15', label: 'Years Experience', suffix: '+' },
  { value: '200', label: 'Luxury Listings', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
]

const realEstateServices = [
  {
    title: 'Property Sales',
    desc: 'Expert guidance through every step of the buying or selling process, from market analysis to closing. We connect you with premium properties across UAE and USA markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Luxury Rentals',
    desc: 'Curated selection of premium rental properties including luxury apartments, villas, and executive residences in the most sought-after locations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Investment Advisory',
    desc: 'Strategic property investment consulting with in-depth market intelligence, ROI analysis, and portfolio diversification strategies for UAE and USA markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    desc: 'Comprehensive property management services including tenant sourcing, maintenance coordination, rent collection, and legal compliance for property owners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Market Expertise',
    desc: 'Deep knowledge of UAE and USA real estate markets, regulatory frameworks, and emerging trends to help clients make informed investment decisions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Private Client Services',
    desc: 'Bespoke real estate solutions for high-net-worth individuals, including off-market listings, privacy protection, and personalized property sourcing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const atlantisProperty = {
  title: '2-Bedroom Premium Apartment',
  location: 'The Royal Atlantis, Dubai',
  tower: 'Tower B',
  floor: '3rd Floor',
  area: '209 sq.m. (2,250 sq.ft.)',
  status: 'Upgraded, Fully Furnished, Ready to Move In',
  views: 'Panoramic Sea View & Lush Garden View',
  tagline: 'Where Sophistication Meets the Horizon',
}

const rooms = [
  {
    id: 'entrance',
    title: 'Entrance & Hallway',
    desc: 'A welcoming, sophisticated hallway that creates a grand sense of arrival with fluid transition into the core living and culinary areas.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215206.png',
    highlights: ['Grand sense of arrival', 'Sophisticated design', 'Fluid transition to living areas'],
  },
  {
    id: 'living',
    title: 'Living & Dining',
    desc: 'A massive open-plan layout designed for ultra-luxury entertainment and family comfort, with direct access to the main grand balcony overlooking the ocean.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215220.png',
    highlights: ['Open-plan luxury layout', 'Direct balcony access', 'Ocean views', 'Premium dining setup'],
  },
  {
    id: 'kitchen',
    title: 'Gourmet Kitchen',
    desc: 'A contemporary open-plan kitchen integrated seamlessly near the dining area, outfitted with bespoke wooden cabinetry, top-tier marble countertops, and integrated luxury appliances.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215232.png',
    highlights: ['Bespoke wooden cabinetry', 'Marble countertops', 'Integrated luxury appliances', 'Open-plan design'],
  },
  {
    id: 'master',
    title: 'Master Bedroom Suite',
    desc: 'An extremely spacious master layout featuring a dedicated lounge corner, private balcony with direct sea views, a massive en-suite luxury bathroom with freestanding bathtub, and generous walk-in wardrobe.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215337.png',
    highlights: ['Private sea-view balcony', 'Luxury en-suite bathroom', 'Walk-in wardrobe', 'Dedicated lounge corner'],
  },
  {
    id: 'second',
    title: 'Second Bedroom Suite',
    desc: 'A generously-sized bedroom offering maximum privacy on the opposite side of the apartment, with a dedicated workspace, private balcony access, and an attached high-end bathroom.',
    image: '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215352.png',
    highlights: ['Maximum privacy layout', 'Dedicated workspace', 'Private balcony', 'Attached bathroom'],
  },
]

const atlantisFeatures = [
  {
    title: 'Dual View Advantage',
    desc: 'Uninterrupted full sea-facing layouts combined with serene garden views from every angle of the apartment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Living',
    desc: 'Multiple private balconies extending across the entire length of the apartment, offering seamless indoor-outdoor living.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Premium Finishes',
    desc: 'Natural wood paneling, premium stone and marble surfaces, and curated high-end designer furniture throughout.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Elite Community',
    desc: 'Access to private beaches, infinity pools, world-class fine dining, and 24/7 concierge services at The Royal Atlantis.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const galleryImages = [
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Masterfully%20Crafted%20Living%20Spaces.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215206.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215220.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215232.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215337.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215352.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215402.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215416.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215436.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215450.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215613.png',
  '/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215733.png',
]

function AnimatedSection({ children, className }) {
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
            if (start >= end) { setCount(end); clearInterval(timer) }
            else setCount(start)
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
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight font-number">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm uppercase tracking-widest font-medium">{label}</div>
    </div>
  )
}

function GalleryModal({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = ''
      return
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, onClose, onPrev, onNext])

  if (activeIndex === null) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <img src={images[activeIndex]} alt={`Gallery image ${activeIndex + 1}`} className="w-full h-full object-contain rounded-2xl" />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default function VenturisRealtors() {
  const [activeTab, setActiveTab] = useState(rooms[0].id)
  const [activeProperty, setActiveProperty] = useState('atlantis')
  const [modalIndex, setModalIndex] = useState(null)

  const openModal = (index) => setModalIndex(index)
  const closeModal = () => setModalIndex(null)
  const prevImage = () => setModalIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  const nextImage = () => setModalIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Hero%20Section%20Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-down">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-white/50 uppercase tracking-[0.3em] text-xs font-medium">Venturis Holdings Division</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-down delay-100">
              Venturis Realtors
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/70 max-w-2xl leading-relaxed mb-3 animate-fade-in-down delay-200">
              Premium Real Estate Across <span className="text-white">UAE &amp; USA</span>
            </p>
            <p className="text-base sm:text-lg text-white/40 max-w-xl leading-relaxed mb-8 animate-fade-in-down delay-200 font-sans">
              Connecting clients with exceptional properties — from luxury apartments and villas to prime investment opportunities in the world's most dynamic markets.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-300">
              <a
                href="#services"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-brand-dark font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              >
                Our Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/20 text-white/70 font-semibold rounded-lg hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in-up pointer-events-none">
          <span className="text-white/50 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl shadow-2xl p-8 md:p-12 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <CountUp key={s.label} end={parseInt(s.value)} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/realtors.jpeg"
                  alt="Venturis Realtors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold font-number">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Premium Real Estate,<br />
                <span className="text-brand-teal">Unmatched Expertise</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Venturis Realtors is a premier real estate division of Venturis Holdings, dedicated to providing exceptional property solutions across the UAE and United States. With over 15 years of market expertise, we specialize in luxury residential properties, commercial real estate, and high-value investment opportunities.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                Our team of experienced professionals brings deep knowledge of local and international markets, ensuring every client receives personalized guidance tailored to their unique needs. Whether you are buying, selling, or renting, we deliver a seamless experience backed by integrity, transparency, and a commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['UAE Market Experts', 'USA Property Access', 'Luxury Portfolio', 'Client-First Approach'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Expertise</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              Real Estate Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Comprehensive real estate services tailored to clients seeking premium properties and investment opportunities in UAE and USA markets.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realEstateServices.map((service, i) => (
              <AnimatedSection key={i}>
                <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full pointer-events-none" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 mb-5 group-hover:scale-105 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Featured</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our curated selection of exceptional properties. Click on a property to view full details.
            </p>
          </AnimatedSection>

          {/* Property List */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveProperty('atlantis')}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeProperty === 'atlantis'
                    ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20'
                    : 'bg-gray-50 text-gray-500 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'
                }`}
              >
                The Royal Atlantis — Dubai
              </button>
            </div>
          </AnimatedSection>

          {/* Atlantis Property Card */}
          {activeProperty === 'atlantis' && (
            <div>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <AnimatedSection className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Masterfully%20Crafted%20Living%20Spaces.png"
                      alt="The Royal Atlantis"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <div className="text-3xl font-bold font-number">{atlantisProperty.area.split(' ')[0]}</div>
                    <div className="text-sm text-white/80">{atlantisProperty.area.split('(')[0].replace(atlantisProperty.area.split(' ')[0], '').trim()}</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-brand-teal" />
                    <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Premium Listing</span>
                  </div>
                  <p className="text-brand-muted text-sm uppercase tracking-widest mb-2 font-sans">{atlantisProperty.location}</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                    {atlantisProperty.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-dark">Status: </span>
                        <span className="text-brand-teal">{atlantisProperty.status}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-dark">Location: </span>
                        <span className="text-gray-600">{atlantisProperty.location} — {atlantisProperty.tower}, {atlantisProperty.floor}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-brand-dark">Views: </span>
                        <span className="text-gray-600">{atlantisProperty.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Fully Furnished', 'Panoramic Views', 'Private Balconies', 'Premium Finishes'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-brand-light text-brand-teal text-xs font-semibold rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Room-by-Room - Atlantis */}
              <AnimatedSection className="mb-8">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setActiveTab(room.id)}
                      className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                        activeTab === room.id
                          ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20'
                          : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-teal/30 hover:text-brand-teal'
                      }`}
                    >
                      {room.title}
                    </button>
                  ))}
                </div>
              </AnimatedSection>

              {rooms.map((room) => (
                <div key={room.id} className={`transition-all duration-500 mb-16 ${activeTab === room.id ? 'block' : 'hidden'}`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl" />
                    </AnimatedSection>
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-brand-teal" />
                        <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Room Details</span>
                      </div>
                      <h3 className="text-3xl font-bold text-brand-dark mb-6">{room.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-8">{room.desc}</p>
                      <div className="space-y-3">
                        {room.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                              <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700">{h}</span>
                          </div>
                        ))}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              ))}

              {/* Gallery - Atlantis */}
              <AnimatedSection>
                <div className="flex items-center gap-4 justify-center mb-8">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                  <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Gallery</span>
                  <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-3">Property Gallery</h3>
                <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">Explore the elegance of this exceptional residence through our curated gallery.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} className={`group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                      <div className="aspect-square overflow-hidden" onClick={() => openModal(i)}>
                        <img
                          src={img}
                          alt={`Apartment view ${i + 1}`}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Premium Features - Atlantis */}
              <AnimatedSection className="mt-16">
                <div className="flex items-center gap-4 justify-center mb-8">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                  <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Features</span>
                  <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-3">Premium Highlights</h3>
                <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">Key features of this exceptional residence.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {atlantisFeatures.map((f, i) => (
                    <div key={i} className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 mb-4">
                        {f.icon}
                      </div>
                      <h4 className="text-lg font-bold text-brand-dark mb-2">{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          )}
        </div>

        <GalleryModal
          images={galleryImages}
          activeIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/Building.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Investment Opportunities</span>
              <div className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Global Real Estate <span className="text-brand-teal">Investments</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Unlock premium property investment opportunities in the world's most dynamic real estate markets.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection className="group p-8 sm:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.06] hover:border-brand-teal/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">UAE Market</h3>
                  <p className="text-brand-teal text-sm">Dubai &amp; Abu Dhabi</p>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                The UAE offers a tax-free environment, world-class infrastructure, and a resilient property market. From Dubai's iconic skyline to Abu Dhabi's prestigious developments, we provide access to the region's most sought-after residential and commercial properties.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Freehold Areas', 'Tax-Free Returns', 'Residency Visa', 'Luxury Living'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="group p-8 sm:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.06] hover:border-brand-teal/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">USA Market</h3>
                  <p className="text-brand-teal text-sm">Prime Locations Nationwide</p>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed text-sm mb-6">
                The United States remains one of the world's most stable and lucrative real estate markets. We connect investors with premium opportunities across major cities, from residential properties to commercial assets with strong appreciation potential.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Stable Economy', 'Strong Appreciation', 'Diverse Portfolio', 'Global Hub'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gray-50">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Get in Touch</span>
              <div className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Find Your <span className="text-brand-teal">Perfect Property</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are looking for a luxury apartment in Dubai, a villa in the UAE, or an investment property in the USA, our team is ready to help you find the perfect match.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-teal/20"
              >
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+971585318860"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-brand-teal/30 hover:text-brand-teal hover:bg-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +971 58 531 8860
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
