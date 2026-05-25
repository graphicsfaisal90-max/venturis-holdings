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
    image: '/hero-luxury-home.jpg',
  },
  {
    title: 'Luxury Rentals',
    desc: 'Curated selection of premium rental properties including luxury apartments, villas, and executive residences in the most sought-after locations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    image: '/hero-elegant.jpg',
  },
  {
    title: 'Investment Advisory',
    desc: 'Strategic property investment consulting with in-depth market intelligence, ROI analysis, and portfolio diversification strategies for UAE and USA markets.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: '/hero-grand-entrance.jpg',
  },
  {
    title: 'Property Management',
    desc: 'Comprehensive property management services including tenant sourcing, maintenance coordination, rent collection, and legal compliance for property owners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    image: '/hero-luxury-living.jpg',
  },
  {
    title: 'Market Expertise',
    desc: 'Deep knowledge of UAE and USA real estate markets, regulatory frameworks, and emerging trends to help clients make informed investment decisions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    image: '/project-1.png',
  },
  {
    title: 'Private Client Services',
    desc: 'Bespoke real estate solutions for high-net-worth individuals, including off-market listings, privacy protection, and personalized property sourcing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    image: '/project-2.png',
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
    desc: 'Uninterrupted full sea-facing layouts combined with serene garden views.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Living',
    desc: 'Multiple private balconies across the entire length of the apartment.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Premium Finishes',
    desc: 'Natural wood paneling, marble surfaces, and curated designer furniture.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Elite Community',
    desc: 'Private beaches, infinity pools, and 24/7 concierge services.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const type3Img = '/Venturis%20Realtors/4%20bedroom%20apprtment%20type%203/'

const type3Property = {
  title: 'The Royal Atlantis \u2013 Residence 1002',
  tagline: 'Where Sophistication Meets the Sea',
  type: '4 Bedroom Signature Residence',
  layout: 'Type 3',
  livingArea: '378 SQM',
  balconyArea: '62 SQM',
  totalArea: '440 SQM',
  views: 'Full Palm & Sea View',
}

const type3Gallery = [
  type3Img + 'Screenshot%202026-05-25%20152034.png',
  type3Img + 'Screenshot%202026-05-25%20152021.png',
  type3Img + 'Screenshot%202026-05-25%20152014.png',
  type3Img + 'Screenshot%202026-05-25%20152005.png',
  type3Img + 'Screenshot%202026-05-25%20151914.png',
  type3Img + 'Screenshot%202026-05-25%20151902.png',
]

const type3Highlights = [
  {
    title: 'Full Palm & Sea View',
    desc: 'Breathtaking panoramic views of the Palm Jumeirah and the Arabian Gulf from every angle.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Premium Modern Interior',
    desc: 'Exceptional architectural elegance with premium modern interiors and designer finishes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Expansive Living Spaces',
    desc: 'Spacious living and dining areas designed for sophisticated entertainment and family comfort.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Large Private Balconies',
    desc: 'Spacious balconies seamlessly connecting indoor comfort with al fresco waterfront luxury.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Luxury Kitchen & Finishes',
    desc: 'State-of-the-art gourmet kitchen with bespoke cabinetry, marble surfaces, and premium appliances.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Exclusive Waterfront Lifestyle',
    desc: 'World-class resort living with private beaches, infinity pools, and 24/7 concierge services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const type3Hero = type3Img + 'Screenshot%202026-05-25%20152034.png'
const type3Hero2 = type3Img + 'Screenshot%202026-05-25%20151626.png'

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

export default function VenturisRealtors() {
  const [activeTab, setActiveTab] = useState(rooms[0].id)

  return (
    <>
      {/* HERO — video + black overlay */}
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

      {/* STATS — full-width diagonal ribbon */}
      <section className="relative -mt-16 z-20">
        <div className="relative bg-black">
          <div className="absolute -top-6 left-0 right-0 h-12 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0%)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <CountUp key={s.label} end={parseInt(s.value)} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />
        </div>
      </section>

      {/* ABOUT — full-bleed banner */}
      <section id="about" className="relative py-0 scroll-mt-24">
        <div className="relative min-h-[500px] sm:min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img src="/realtors.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="max-w-2xl">
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">About Venturis Realtors</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                Premium Real Estate,<br />
                <span className="text-brand-teal">Unmatched Expertise</span>
              </h2>
              <div className="w-20 h-1 bg-brand-teal mb-6" />
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Venturis Realtors is a premier real estate division of Venturis Holdings, dedicated to providing exceptional property solutions across the UAE and United States. With over 15 years of market expertise, we specialize in luxury residential properties, commercial real estate, and high-value investment opportunities.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                {['UAE Market Experts', 'USA Property Access', 'Luxury Portfolio', 'Client-First Approach'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — alternating rows */}
      <section id="services" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4">
              Real Estate Solutions
            </h2>
          </AnimatedSection>

          <div className="space-y-20">
            {realEstateServices.map((service, i) => (
              <AnimatedSection key={i}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-4xl font-bold text-gray-100 font-number">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                  <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTY — side-panel layout */}
      <section id="properties" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Featured</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4">
              Featured Properties
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Explore our curated selection of exceptional properties.
            </p>
          </AnimatedSection>

          {/* Side selector */}
          <div className="flex gap-4 mb-12 border-b border-gray-200 pb-4">
            <button className="px-6 py-3 bg-brand-teal text-white text-sm font-semibold rounded-lg shadow-lg shadow-brand-teal/20">
              The Royal Atlantis — Dubai
            </button>
          </div>

          {/* Atlantis property showcase */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="sticky top-28">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Masterfully%20Crafted%20Living%20Spaces.png"
                    alt="The Royal Atlantis"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Feature pills below main image */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {atlantisFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shrink-0">
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark">{f.title}</div>
                        <div className="text-[10px] text-gray-400">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Premium Listing</span>
              <p className="text-brand-muted text-xs uppercase tracking-widest mt-3">{atlantisProperty.location}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mt-2 mb-6">{atlantisProperty.title}</h3>

              <div className="space-y-3 mb-8">
                {[
                  { label: 'Status', value: atlantisProperty.status, color: 'text-brand-teal' },
                  { label: 'Location', value: `${atlantisProperty.location} — ${atlantisProperty.tower}, ${atlantisProperty.floor}` },
                  { label: 'Area', value: atlantisProperty.area },
                  { label: 'Views', value: atlantisProperty.views },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-3 py-2 border-b border-gray-100">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-20 shrink-0">{d.label}</span>
                    <span className={`text-sm ${d.color || 'text-gray-600'}`}>{d.value}</span>
                  </div>
                ))}
              </div>

              {['Fully Furnished', 'Panoramic Views', 'Private Balconies', 'Premium Finishes'].map((tag) => (
                <span key={tag} className="inline-block px-3 py-1.5 bg-brand-light text-brand-teal text-xs font-semibold rounded-full uppercase tracking-wider mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Room-by-Room — horizontal scroll cards */}
          <AnimatedSection className="mt-20">
            <div className="text-center mb-10">
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Floor Plan</span>
              <h3 className="text-3xl font-bold text-brand-dark mt-3">Rooms &amp; Layout</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
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

            {rooms.map((room) => (
              <div key={room.id} className={`transition-all duration-500 ${activeTab === room.id ? 'block' : 'hidden'}`}>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-brand-dark mb-4">{room.title}</h4>
                    <p className="text-gray-500 leading-relaxed mb-6">{room.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {room.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                            <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* TYPE 3 — The Royal Atlantis Residence 1002 (unique layout) */}
      <section id="type3" className="py-28 bg-white relative overflow-hidden scroll-mt-24">
        <div className="absolute top-40 left-0 w-96 h-96 bg-brand-teal/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-brand-navy/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section label */}
          <AnimatedSection className="text-center mb-6">
            <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Signature Collection</span>
          </AnimatedSection>

          {/* Grand title */}
          <AnimatedSection className="text-center mb-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              The Royal Atlantis
            </h2>
            <p className="text-2xl sm:text-3xl text-brand-teal font-light mt-2">
              Residence 1002
            </p>
          </AnimatedSection>

          {/* Tagline divider */}
          <AnimatedSection className="flex items-center justify-center gap-4 mb-14">
            <span className="w-16 h-px bg-brand-teal/30" />
            <span className="text-gray-400 text-sm uppercase tracking-[0.2em] font-medium">4 Bedroom Signature Residence &middot; Type 3</span>
            <span className="w-16 h-px bg-brand-teal/30" />
          </AnimatedSection>

          {/* HERO IMAGE BANNER */}
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-teal/10 group">
              <img
                src={type3Hero}
                alt="The Royal Atlantis Residence 1002"
                className="w-full h-[420px] sm:h-[520px] lg:h-[620px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Full Palm &amp; Sea View</p>
                    <p className="text-white/50 text-[10px]">Panoramic skyline vista</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">440 SQM Total Area</p>
                    <p className="text-white/50 text-[10px]">Living + balcony combined</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* SPECS BAR */}
          <AnimatedSection className="mt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Living Area', value: type3Property.livingArea, icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
                { label: 'Balcony Area', value: type3Property.balconyArea, icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
                { label: 'Total Area', value: type3Property.totalArea, icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' },
                { label: 'Layout', value: type3Property.layout, icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
              ].map((spec, i) => (
                <div key={i} className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300 group/spec">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mb-4 group-hover/spec:from-brand-teal group-hover/spec:to-brand-navy group-hover/spec:[&>svg]:text-white transition-all duration-300">
                    <svg className="w-5 h-5 text-brand-teal transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number mb-1">{spec.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium">{spec.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* NARRATIVE + HIGHLIGHTS split */}
          <AnimatedSection className="mt-20">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left — narrative */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                  <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Luxury Living at Its Finest</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight mb-8">
                  Experience Elevated<br />
                  <span className="text-brand-teal">Waterfront Living</span>
                </h3>
                <div className="space-y-5 text-gray-500 leading-relaxed">
                  <p className="text-lg text-gray-600">
                    Experience elevated waterfront living at The Royal Atlantis, one of Dubai's most iconic luxury destinations. This stunning 4-bedroom signature residence offers breathtaking full sea, Palm, and skyline views combined with exceptional architectural elegance and premium modern interiors.
                  </p>
                  <p>
                    Designed for sophisticated living, the apartment features expansive living spaces, stylish bedrooms, elegant bathrooms, and spacious balconies that seamlessly connect indoor comfort with outdoor luxury.
                  </p>
                  <p>
                    Located in the prestigious Royal Atlantis, this residence delivers world-class luxury, privacy, and resort-style living in the heart of Dubai. Perfect for families and investors seeking elegance, exclusivity, and unmatched views.
                  </p>
                </div>
              </div>

              {/* Right — quick facts */}
              <div className="lg:col-span-2">
                <div className="sticky top-28 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark rounded-3xl p-8 text-white overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-brand-teal/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-teal font-semibold">Property Highlights</span>
                    </div>
                    <div className="space-y-5">
                      {type3Highlights.slice(0, 6).map((h, i) => (
                        <div key={i} className="flex items-start gap-4 group/h">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/h:bg-brand-teal/20 group-hover/h:border-brand-teal/30 transition-all duration-300">
                            <div className="text-brand-teal/70 group-hover/h:text-brand-teal transition-colors duration-300">
                              {h.icon}
                            </div>
                          </div>
                          <div className="pt-1">
                            <div className="text-sm font-semibold text-white mb-0.5">{h.title}</div>
                            <div className="text-xs text-white/50 leading-relaxed">{h.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* GALLERY — staggered grid */}
          <AnimatedSection className="mt-24">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Photo Gallery</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-12">
              A Glimpse Inside
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {type3Gallery.slice(0, 6).map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden group/gallery shadow-md ${
                    i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  } ${i === 5 ? 'lg:col-span-2' : ''}`}
                >
                  <img
                    src={img}
                    alt={`Residence 1002 interior ${i + 1}`}
                    className={`w-full object-cover transition-all duration-700 group-hover/gallery:scale-110 ${
                      i === 0 ? 'h-[400px] sm:h-[500px]' : 'h-[240px] sm:h-[300px]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover/gallery:from-black/10 transition-all duration-500" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* FEATURES — full-width banner */}
          <AnimatedSection className="mt-24">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 border border-gray-100 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 justify-center mb-4 relative z-10">
                <span className="w-10 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.2em]">Why This Residence</span>
                <span className="w-10 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-10 relative z-10">
                Key Features
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                {type3Highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-300 border border-gray-100/50 group/card">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center shrink-0 group-hover/card:from-brand-teal group-hover/card:to-brand-navy transition-all duration-300">
                      <div className="text-brand-teal group-hover/card:text-white transition-colors duration-300">
                        {h.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-dark mb-1">{h.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="mt-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={type3Hero2}
                alt="Luxury living"
                className="w-full h-[350px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-brand-dark/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium mb-3">Discover Your Dream Home</span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Live at The{' '}
                  <span className="text-brand-teal">Royal Atlantis</span>
                </h3>
                <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base">
                  Discover exceptional luxury living at The Royal Atlantis. Contact Venturis Realtors today for more details and private viewing arrangements.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Schedule Private Viewing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+971585318860"
                    className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call +971 58 531 8860
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* INVESTMENT — dark split banners */}
      <section className="py-0 bg-black">
        <div className="grid lg:grid-cols-2">
          {/* UAE */}
          <div className="relative min-h-[400px] sm:min-h-[500px] flex items-center p-8 sm:p-12 lg:p-16 overflow-hidden group">
            <div className="absolute inset-0 opacity-20">
              <img src="/Ain%20Dubai%20(Dubai,%20UAE).jpg" alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-brand-dark/80" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Market</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">UAE Market</h3>
              <p className="text-white/50 leading-relaxed max-w-md mb-6">
                The UAE offers a tax-free environment, world-class infrastructure, and a resilient property market. From Dubai's iconic skyline to Abu Dhabi's prestigious developments.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Freehold Areas', 'Tax-Free Returns', 'Residency Visa', 'Luxury Living'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* USA */}
          <div className="relative min-h-[400px] sm:min-h-[500px] flex items-center p-8 sm:p-12 lg:p-16 overflow-hidden group">
            <div className="absolute inset-0 opacity-20">
              <img src="/Building.png" alt="" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-bl from-black via-black/95 to-brand-dark/80" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Market</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">USA Market</h3>
              <p className="text-white/50 leading-relaxed max-w-md mb-6">
                The United States remains one of the world's most stable and lucrative real estate markets. We connect investors with premium opportunities across major cities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Stable Economy', 'Strong Appreciation', 'Diverse Portfolio', 'Global Hub'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-white/5 text-white/60 text-xs rounded-full border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — split screen */}
      <section className="relative py-0 bg-white">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <div className="relative min-h-[300px]">
            <img src="/hero-luxury-living.jpg" alt="" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div>
              <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mt-4 mb-6 leading-tight">
                Find Your <span className="text-brand-teal">Perfect Property</span>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-md mb-8">
                Whether you are looking for a luxury apartment in Dubai, a villa in the UAE, or an investment property in the USA, our team is ready to help.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-teal/20"
                >
                  Schedule a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+971585318860"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-brand-teal/30 hover:text-brand-teal hover:bg-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +971 58 531 8860
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
