import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'New & Pre-Owned Sales',
    desc: 'Curated selection of premium vehicles, meticulously inspected and certified for uncompromising quality.',
  },
  {
    title: 'Vehicle Leasing & Financing',
    desc: 'Flexible finance solutions and bespoke leasing plans tailored to your budget and driving needs.',
  },
  {
    title: 'Fleet Management',
    desc: 'End-to-end fleet optimization, telematics, and cost-reduction strategies for businesses of all sizes.',
  },
  {
    title: 'Maintenance & Repairs',
    desc: 'Manufacturer-trained technicians using advanced diagnostics to keep your vehicle performing at its peak.',
  },
  {
    title: 'Auto Parts & Accessories',
    desc: 'Genuine OEM parts and premium aftermarket accessories sourced from trusted global suppliers.',
  },
  {
    title: 'Detailing & Valeting',
    desc: 'Showroom-quality detailing, ceramic coatings, and interior valeting to preserve your vehicle\'s finish.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance Tuning',
    desc: 'Optimized powertrain calibration and ECU remapping for maximum horsepower and torque delivery.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safety Certified',
    desc: 'Every vehicle meets rigorous safety standards with advanced driver-assistance systems and structural integrity checks.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Extended Warranty',
    desc: 'Comprehensive warranty packages that give you complete peace of mind beyond the standard coverage period.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Sourcing',
    desc: 'Access to an international network of dealers and auctions, bringing the world\'s finest vehicles to your doorstep.',
  },
]

const performanceStats = [
  { value: '50+', label: 'Premium Brands', sub: 'Represented Globally' },
  { value: '2,500+', label: 'Vehicles Sold', sub: 'And Counting' },
  { value: '98%', label: 'Client Satisfaction', sub: 'Verified Reviews' },
  { value: '15+', label: 'Years Excellence', sub: 'Automotive Industry' },
]

const testimonials = [
  {
    quote: 'The level of professionalism and attention to detail at Venturis Wheels is unmatched. They found me the exact specification I was looking for and handled everything seamlessly.',
    name: 'Omar Al Rashid',
    title: 'CEO, Al Rashid Group',
    rating: 5,
  },
  {
    quote: 'We entrusted our entire corporate fleet to Venturis Wheels. Their management solutions reduced our operational costs by 30% while improving vehicle uptime significantly.',
    name: 'Sarah Thompson',
    title: 'Operations Director, LogiCorp',
    rating: 5,
  },
  {
    quote: 'Buying a luxury vehicle through Venturis was an absolute pleasure. Their consultative approach and after-sales support set them apart from any dealership I\'ve dealt with.',
    name: 'Liam Chen',
    title: 'Private Client',
    rating: 5,
  },
]

const jetourFeatures = [
  {
    title: 'GAIA Off-road Aesthetics Design',
    desc: 'Bold, aggressive lines and a commanding presence define the G700\'s design language, blending rugged capability with premium craftsmanship.',
    image: '/jetour-g700.png',
  },
  {
    title: 'A Commanding, Rugged Off-road Stance',
    desc: 'Elevated ground clearance, muscular wheel arches, and a formidable silhouette built to conquer any terrain with confidence.',
    image: '/11.png',
  },
  {
    title: 'High-Strength Off-road Body Structure',
    desc: 'Engineered with a high-strength steel frame and reinforced chassis for maximum durability and safety in the most demanding conditions.',
    image: '/12.png',
  },
]

const jetourPerformance = [
  {
    stat: '4.6s',
    label: '0-100 km/h',
    desc: 'Rapid Acceleration',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    stat: '2.0TD+',
    label: 'Dual Motor',
    desc: 'High Efficiency — Smooth, powerful, and fuel-saving performance',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    stat: '211Ps',
    label: 'Max Horsepower',
    desc: 'Superior Durability — Proven longevity of engine, battery, and transmission',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const jetourComfort = [
  {
    title: 'Spacious & Comfortable 6-Seat Cabin',
    desc: 'Generous interior space with three rows of premium seating, designed for uncompromising passenger comfort on every journey.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Premium Multi-Function Seats',
    desc: 'Executive-class seats with integrated table, power-adjustable leg rest, and massage function for ultimate relaxation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Top-Tier Audio Experience',
    desc: 'Immersive sound system sourced from the same partner as Rolls-Royce, delivering concert-quality acoustics in every seat.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    title: 'Magnetic Ride Control + Air Suspension',
    desc: 'Adaptive air suspension with magnetic ride control that instantly adjusts to terrain for a supremely smooth and stable ride.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
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

function CountUp({ end, suffix, label, sub }) {
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
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight font-number">
        {count}{suffix}
      </div>
      <div className="text-brand-teal text-sm uppercase tracking-widest font-medium">{label}</div>
      <div className="text-white/40 text-xs mt-1">{sub}</div>
    </div>
  )
}

export default function VenturisWheels() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTestPaused, setIsTestPaused] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isTestPaused) return
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isTestPaused])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % jetourFeatures.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section with Jetour G700 Video */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/jetour-g700.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-navy/20 rounded-full blur-[100px]" />
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
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">
                Venturis Holdings Division
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-down delay-100">
              Venturis Wheels,
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/60 mt-3">
                Automotive Excellence
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-8 sm:mb-10 animate-fade-in-down delay-200 font-sans">
              Comprehensive automotive solutions — from premium vehicle sales and leasing to fleet management and expert service — engineered for those who demand the best.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Enquire Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/15 text-white/70 font-semibold rounded-lg hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300 text-sm sm:text-base"
              >
                Discover Jetour G700
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in-up">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 md:p-12 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {performanceStats.map((s) => (
                <CountUp key={s.label} end={parseInt(s.value)} suffix={s.value.replace(/\d/g, '')} label={s.label} sub={s.sub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/wheels.jpeg"
                  alt="Premium Vehicles"
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
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">
                  About Our Division
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Engineered for Performance,
                <span className="text-brand-teal"> Built for Reliability</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Venturis Wheels brings together decades of automotive expertise across vehicle sales, fleet management, and aftersales service. We partner with leading manufacturers and leverage global supply networks to deliver exceptional value — whether you're acquiring a single executive sedan or managing a multinational fleet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our commitment extends beyond the transaction. From routine maintenance to emergency roadside assistance, we ensure every vehicle we sell remains a source of pride and dependability for years to come.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Authorized Service Center', 'Genuine OEM Parts', 'Nationwide Support', 'Certified Pre-Owned'].map((item) => (
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

      {/* Jetour G700 Showcase Section */}
      <section id="jetour-g700" className="py-16 sm:py-20 md:py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Featured Vehicle</span>
              <div className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
              JETOUR G700
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide">
              All-terrain Premium Hybrid Off-Road SUV
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                Plug-in Hybrid
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                2.0TD + Dual Motor
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                211Ps / 340N·m
              </span>
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-teal/10 border border-white/5">
              <div className="aspect-[16/9]">
                <img
                  src="/jetour-g700-hero.png"
                  alt="JETOUR G700"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">JETOUR G700</h3>
                  <p className="text-white/50 text-sm sm:text-base">All-terrain Premium Hybrid Off-Road SUV — Engineered to conquer every frontier.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Rugged Off-Road Styling */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Rugged Off-Road Styling</h3>
              <p className="text-white/40 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                Every line, every angle of the G700 communicates strength and capability.
              </p>
            </div>

            {/* Feature Rotator */}
            <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/5 mb-8">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden h-64 sm:h-80 md:h-auto md:min-h-[400px]">
                  {jetourFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        i === activeFeature ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                      }`}
                    >
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  {jetourFeatures.map((f, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-500 ${
                        i === activeFeature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        <span className="text-brand-teal text-xs uppercase tracking-[0.2em] font-medium">0{i + 1}</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{f.title}</h4>
                      <p className="text-white/50 leading-relaxed text-sm sm:text-base">{f.desc}</p>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-8">
                    {jetourFeatures.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFeature(i)}
                        className={`rounded-full transition-all duration-500 ${
                          i === activeFeature ? 'bg-brand-teal w-8 h-2' : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Performance Stats */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Exceptional Off-Road Performance</h3>
              <p className="text-white/40 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                Powered by advanced hybrid technology, the G700 delivers breathtaking performance without compromise.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {jetourPerformance.map((p) => (
                <div key={p.stat} className="group relative bg-white/[0.03] rounded-2xl p-6 sm:p-8 border border-white/5 hover:bg-white/[0.06] hover:border-brand-teal/20 transition-all duration-500 text-center">
                  <div className="text-brand-teal mb-4 flex justify-center">{p.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1 font-number">{p.stat}</div>
                  <div className="text-brand-teal text-sm uppercase tracking-widest font-medium mb-3">{p.label}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Intelligent Technology + Premium Comfort */}
          <AnimatedSection className="mb-8 sm:mb-12">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Luxury Redefined</span>
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">Intelligent Technology &amp; Premium Comfort</h3>
              <p className="text-white/40 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                Where cutting-edge innovation meets uncompromising luxury — the G700 redefines what an off-road SUV can be.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {jetourComfort.map((c) => (
                <div key={c.title} className="group flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-brand-teal/20 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{c.title}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA within Jetour */}
          <AnimatedSection className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Enquire About JETOUR G700
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Range Rover Showcase Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Featured Marque</span>
              <div className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-4">
              Range Rover
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              The Original Luxury SUV
            </p>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Guided by more than 50 years of evolution, Range Rover embodies an aesthetic grace that remains uninfluenced by fashions and trends. Forever underpinned by peerless refinement and breathtaking modernity enabled by the latest technologies.
            </p>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="aspect-[16/9]">
                <img
                  src="/range-rover-1.jpg"
                  alt="Range Rover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Range Rover Westminster Edition</h3>
                  <p className="text-white/60 text-sm sm:text-base">Inspired by the heart of London. A British icon inspired by British icons.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Specs Strip */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">537</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">PS Power</div>
                <p className="text-gray-400 text-xs mt-1">Maximum Output</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">4.8s</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">0-100 km/h</div>
                <p className="text-gray-400 text-xs mt-1">0-60 in 4.5s</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">261</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Top Speed</div>
                <p className="text-gray-400 text-xs mt-1">162 mph</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">116</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">KM Electric</div>
                <p className="text-gray-400 text-xs mt-1">72 Miles PHEV Range</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Refined Luxury - Split Layout */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4">Always Leading By Example</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">A first class travel experience for all.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3]">
                  <img
                    src="/range-rover-5.jpg"
                    alt="Range Rover Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Refined Travel</h4>
                  <p className="text-white/60 text-sm">Heated centre and door armrests with 'hot stone' massage seats for comforting elegance.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3]">
                  <img
                    src="/range-rover-2.jpg"
                    alt="Range Rover Executive Cabin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Executive Control</h4>
                  <p className="text-white/60 text-sm">8-inch Touchscreen controller within the Electrically Deployable centre armrest.</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3]">
                  <img
                    src="/range-rover-4.jpg"
                    alt="Range Rover Seven Seats"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Space For All</h4>
                  <p className="text-white/60 text-sm">Semi-Aniline heated leather seats in all three rows for up to seven adults.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3]">
                  <img
                    src="/range-rover-3.jpg"
                    alt="Range Rover Climate Control"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Tailored Conditions</h4>
                  <p className="text-white/60 text-sm">Four-zone Climate Control with separate temperature and airflow for driver and three passengers.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Capability + Technology */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/range-rover-7.jpg"
                    alt="Range Rover Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Effortless Capability</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">Effortless Everywhere, Everyday</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                  The power to go anywhere. With pioneering innovation at your fingertips, explore places only a Range Rover could take you with confidence, composure and comfort.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Always Looking Ahead</h4>
                      <p className="text-gray-500 text-sm">3-inch Interactive Driver Display and optional Head-up Display keep your focus on the road.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">The Full Picture</h4>
                      <p className="text-gray-500 text-sm">3D Surround Camera and ClearSight Ground View provide 360° visibility including the path beneath your wheels.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Stillness In Motion</h4>
                      <p className="text-gray-500 text-sm">MLA-Flex chassis with Electronic Air Suspension absorbs vibrations and adapts 500 times per second.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Propulsion Options */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Progressive Power</span>
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4">The Most Advanced Propulsion Technologies</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">The original luxury SUV, leading by example.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/range-rover-8.jpg"
                    alt="Range Rover PHEV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-semibold rounded-full mb-3">Plug-in Electric Hybrid</span>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">P460e / P550e</h4>
                  <p className="text-gray-500 text-sm mb-4">3.0L 6-cylinder Ingenium petrol + 160kW electric motor. Up to 116km EV range.</p>
                  <div className="flex justify-between text-sm border-t border-gray-200 pt-3">
                    <span className="text-gray-400">0-100km/h</span>
                    <span className="font-semibold text-brand-dark">5.5s</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/range-rover-11.jpg"
                    alt="Range Rover V8"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-dark/10 text-brand-dark text-xs font-semibold rounded-full mb-3">SV Petrol V8</span>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">P537 V8</h4>
                  <p className="text-gray-500 text-sm mb-4">4.4L V8 with 537PS (395kW) and 750Nm torque. Mild hybrid technology.</p>
                  <div className="flex justify-between text-sm border-t border-gray-200 pt-3">
                    <span className="text-gray-400">0-100km/h</span>
                    <span className="font-semibold text-brand-dark">4.8s</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-lg transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/range-rover-6.jpg"
                    alt="Range Rover Diesel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full mb-3">Diesel Mild Hybrid</span>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">D350</h4>
                  <p className="text-gray-500 text-sm mb-4">Mild hybrid engine that harvests and redeploys energy normally lost during deceleration.</p>
                  <div className="flex justify-between text-sm border-t border-gray-200 pt-3">
                    <span className="text-gray-400">0-100km/h</span>
                    <span className="font-semibold text-brand-dark">6.0s</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Enquire About Range Rover
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Mercedes-Benz G-Class Showcase Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Featured Marque</span>
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Mercedes-Benz G-Class
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/40 font-light tracking-wide">
              Stronger than time
            </p>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              An offroad icon. Since 1979, the G-Class has set the benchmark for offroad excellence — evolving from a rugged utility vehicle to a luxury icon without losing its offroad pedigree. Stronger than time.
            </p>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
              <div className="aspect-[16/9]">
                <img
                  src="/g-wagon-1.jpg"
                  alt="Mercedes-Benz G-Class"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-4 bg-brand-teal" />
                    <span className="text-brand-teal text-xs uppercase tracking-[0.2em] font-medium">Since 1979</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Mercedes-Benz G-Class</h3>
                  <p className="text-white/60 text-sm sm:text-base">The offroad icon. Stronger than time.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Model Lineup */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Model Lineup</span>
                <div className="h-px w-8 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">The G-Class Lineup</h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
                Limitless in every way. The widest range ever, with near-endless customisation.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] hover:shadow-lg hover:shadow-brand-teal/10 hover:border-brand-teal/20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/g-wagon-8.jpg"
                    alt="Mercedes-Benz G 500"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-medium">V8</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">G 500</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">From AED 759,900</p>
                  <div className="mt-3 flex items-center gap-2 text-white/40 text-xs">
                    <span>4.0L V8</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>421 PS</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>4x4</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] hover:shadow-lg hover:shadow-brand-teal/10 hover:border-brand-teal/20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/g-wagon-5.jpg"
                    alt="Mercedes-AMG G 63"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-amber-500 text-[10px] uppercase tracking-[0.2em] font-medium">AMG</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Mercedes-AMG G 63</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">From AED 1,049,900</p>
                  <div className="mt-3 flex items-center gap-2 text-white/40 text-xs">
                    <span>4.0L V8 Biturbo</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>585 PS</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>4.5s</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] hover:shadow-lg hover:shadow-brand-teal/10 hover:border-brand-teal/20 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/g-wagon-6.jpg"
                    alt="Mercedes-Benz G 580 EQ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-emerald-500 text-[10px] uppercase tracking-[0.2em] font-medium">Electric</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">G 580 with EQ</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">From AED 825,900</p>
                  <div className="mt-3 flex items-center gap-2 text-white/40 text-xs">
                    <span>Electric</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>587 PS</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>4x4</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Heritage Split */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/g-wagon-7.jpg"
                    alt="Mercedes-Benz G-Class Heritage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">45 Years of Dominance</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Born in 1979. An everlasting classic.</h3>
                <p className="text-white/50 leading-relaxed mb-6 text-sm sm:text-base">
                  Since its inception, the G-Class has set the benchmark for offroad excellence. Born in 1979, it quickly became a symbol of robust engineering and unparalleled versatility. Each generation has surpassed the last, evolving from a rugged utility vehicle to a luxury icon without losing its offroad pedigree.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                    <div className="text-2xl font-bold text-white font-number">1979</div>
                    <div className="text-white/40 text-xs mt-1">Birth</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                    <div className="text-2xl font-bold text-white font-number">45+</div>
                    <div className="text-white/40 text-xs mt-1">Years</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-4 text-center border border-white/[0.06]">
                    <div className="text-2xl font-bold text-white font-number">500k+</div>
                    <div className="text-white/40 text-xs mt-1">Built</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Offroad Capability */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
              <div className="aspect-[21/9]">
                <img
                  src="/g-wagon-3.jpg"
                  alt="G-Class Offroad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/30 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-end">
                <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium mb-3">Offroad Capability</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 max-w-lg">Maximum offroad performance</h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
                  Unleash adventure with superior offroad capabilities, conquering every terrain with three differential locks, low-range gearbox, and ladder frame construction.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-5 text-xs sm:text-sm">
                  <div><span className="text-white font-semibold">100%</span> <span className="text-white/50">Gradeability</span></div>
                  <div><span className="text-white font-semibold">700mm</span> <span className="text-white/50">Wading Depth</span></div>
                  <div><span className="text-white font-semibold">3</span> <span className="text-white/50">Diff Locks</span></div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Design & Luxury */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Design & Luxury</span>
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">A timeless icon in automotive design</h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
                Its striking presence speaks volumes. The G-Class fuses formidable offroad capabilities with an air of unmatched elegance.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-md border border-white/[0.06] aspect-[4/3]">
                <img
                  src="/g-wagon-4.jpg"
                  alt="G-Class Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Exclusive Interior</h4>
                  <p className="text-white/60 text-sm">Handcrafted luxury meets rugged durability with premium Nappa leather and carbon fibre accents.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-md border border-white/[0.06] aspect-[4/3]">
                <img
                  src="/g-wagon-9.jpg"
                  alt="G-Class Design Detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Iconic Silhouette</h4>
                  <p className="text-white/60 text-sm">The unmistakable boxy shape, exposed hinges, and spare wheel carrier — design cues that define a legend.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* MANUFAKTUR */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">MANUFAKTUR</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Individuality in its most beautiful form</h3>
                <p className="text-white/50 leading-relaxed mb-6 text-sm sm:text-base">
                  MANUFAKTUR represents a realm of nearly limitless customisation. Choose from over 28 exclusive colours, premium leather options, and bespoke trim accents. With MANUFAKTUR, you'll own more than a G-Class — you will own a custom-made masterpiece.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">28+ MANUFAKTUR exterior colours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Full Nappa leather interior packages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Schöckl Design Package & Logo Package</span>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/g-wagon-1.jpeg"
                    alt="MANUFAKTUR G-Class"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-teal/5 rounded-full blur-xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Performance Specs Strip */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">585</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">PS Power</div>
                <p className="text-white/40 text-xs mt-1">AMG G 63</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">4.5s</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">0-100 km/h</div>
                <p className="text-white/40 text-xs mt-1">AMG G 63</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">850</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Nm Torque</div>
                <p className="text-white/40 text-xs mt-1">AMG G 63</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">220</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">km/h</div>
                <p className="text-white/40 text-xs mt-1">Top Speed</p>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Enquire About G-Class
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Ford F-150 Raptor Showcase Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Built Ford Tough</span>
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-3 sm:mb-4">
              Ford F-150 Raptor
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              The ultimate high-performance off-road truck
            </p>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Purpose-built to dominate the harshest terrains, the F-150 Raptor combines 
              race-proven suspension with a high-output EcoBoost V6. Engineered for those 
              who demand the extraordinary.
            </p>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="aspect-[16/9]">
                <img
                  src="/ford-raptor-3.jpeg"
                  alt="Ford F-150 Raptor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-4 bg-brand-teal" />
                    <span className="text-brand-teal text-xs uppercase tracking-[0.2em] font-medium">High-Output EcoBoost</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Ford F-150 Raptor</h3>
                  <p className="text-white/60 text-sm sm:text-base">Built to conquer. Designed to thrill.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Specs Strip */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">450</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">HP Power</div>
                <p className="text-gray-400 text-xs mt-1">3.5L EcoBoost V6</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">510</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">lb-ft Torque</div>
                <p className="text-gray-400 text-xs mt-1">High-Output</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">5.2</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">sec 0-60</div>
                <p className="text-gray-400 text-xs mt-1">10-Speed Auto</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">4x4</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Drive</div>
                <p className="text-gray-400 text-xs mt-1">Locking Diffs</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Engine & Performance Split */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Powertrain</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">High-Output EcoBoost V6</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                  The 3.5-litre EcoBoost V6 high-output engine delivers 450 horsepower and 
                  510 lb-ft of torque — the most powerful V6 in its class. Paired with a 
                  10-speed SelectShift automatic transmission, it provides seamless power 
                  delivery whether you're climbing dunes or carving highways.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">Twin-scroll turbochargers for instant response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">10-speed automatic with sport & tow modes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">Exclusive Raptor exhaust with active valve</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/ford-raptor-1.jpeg"
                    alt="Ford F-150 Raptor Engine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Off-Road Capability Hero */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="aspect-[21/9]">
                <img
                  src="/ford-raptor-10.jpg"
                  alt="F-150 Raptor Off-Road"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/30 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-end">
                <span className="text-brand-teal text-xs uppercase tracking-[0.3em] font-medium mb-3">Off-Road Dominance</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 max-w-lg">Race-bred suspension. Trail-ready.</h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed">
                  FOX 3.1 Internal Bypass shocks with Live Valve technology continuously 
                  adapt to terrain, delivering unmatched control and comfort at任何 speed.
                </p>
                <div className="flex flex-wrap gap-4 sm:gap-6 mt-5 text-xs sm:text-sm">
                  <div><span className="text-white font-semibold">13.1"</span> <span className="text-white/50">Ground Clearance</span></div>
                  <div><span className="text-white font-semibold">31.7°</span> <span className="text-white/50">Approach Angle</span></div>
                  <div><span className="text-white font-semibold">7</span> <span className="text-white/50">Terrain Modes</span></div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Design & Capability Gallery */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Design & Capability</span>
                <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-3 sm:mb-4">Aggressive by design. Proven by performance.</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
                Every detail of the Raptor is engineered for extreme off-road performance, from the 
                widened stance to the functional hood vents.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-md border border-gray-100 aspect-[4/3]">
                <img
                  src="/ford-raptor-11.jpg"
                  alt="Raptor Exterior Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Aggressive Stance</h4>
                  <p className="text-white/60 text-sm">Widened track, bold grille, and integrated skid plates define the Raptor's menacing presence.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-md border border-gray-100 aspect-[4/3]">
                <img
                  src="/ford-raptor-13.png"
                  alt="Raptor Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Raptor Interior</h4>
                  <p className="text-white/60 text-sm">Sports seats with Raptor branding, aluminium paddles, and a 12-inch touchscreen with SYNC 4.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Terrain Management */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Terrain Management</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-6">Seven modes. Unlimited adventure.</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
                  The Raptor's Terrain Management System lets you optimise performance for any 
                  environment — from Baja desert runs to rocky crawls. Electronic locking differentials 
                  and a 4-Auto transfer case ensure maximum traction.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                    <div className="text-brand-teal text-sm font-bold">Normal</div>
                    <div className="text-gray-400 text-xs">Daily driving</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                    <div className="text-brand-teal text-sm font-bold">Off-Road</div>
                    <div className="text-gray-400 text-xs">Trail & dirt</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                    <div className="text-brand-teal text-sm font-bold">Baja</div>
                    <div className="text-gray-400 text-xs">High-speed desert</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                    <div className="text-brand-teal text-sm font-bold">Tow/Haul</div>
                    <div className="text-gray-400 text-xs">Heavy loads</div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/ford-raptor-16.png"
                    alt="Raptor Terrain Modes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-teal/5 rounded-full blur-xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Performance CTA */}
          <AnimatedSection className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Enquire About F-150 Raptor
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Nissan Patrol Showcase Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Tradition of Excellence</span>
              <div className="h-px w-8 sm:w-10 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Nissan Patrol
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/40 font-light tracking-wide">
              The all-new legend. Stronger. Smarter. Bolder.
            </p>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              For seven generations, the Nissan Patrol has defined what a full-size SUV should be. 
              The all-new Patrol raises the bar with a twin-turbo V6, a breathtaking 28.6-inch 
              Monolith display, and a cabin that reimagines luxury.
            </p>
          </AnimatedSection>

          {/* Exterior Design Gallery */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Exterior Design</span>
                <div className="h-px w-8 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Bold presence. Distinctive character.</h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
                Every line of the all-new Patrol communicates power and prestige, from the commanding grille to the sculpted profile.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/v-motion-grill.png"
                    alt="Nissan Patrol V-Motion Grille"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white">V-Motion Grille</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">The bold new face of Patrol with an imposing presence.</p>
                </div>
              </div>
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/signature-double-c-shape.png"
                    alt="Nissan Patrol Signature Headlights"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white">Double C-Shape Lights</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">Signature daytime running lights that command attention.</p>
                </div>
              </div>
              <div className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/floating-roof-with-sign-d.png"
                    alt="Nissan Patrol Floating Roof"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white">Floating Roof Design</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">The iconic D-pillar detail meets a sleek floating roofline.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Video Showcase */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06]">
              <div className="aspect-[16/9]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/nissan-patrol/v-motion-grill.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/nissan-patrol/nissan-patrol-hero.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 left-0 right-0 px-5 sm:px-8 md:px-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1 h-4 bg-brand-teal" />
                    <span className="text-brand-teal text-xs uppercase tracking-[0.2em] font-medium">All-New Generation</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Seventh-Generation Legend</h3>
                  <p className="text-white/60 text-sm sm:text-base">Reborn with twin-turbo power, cutting-edge technology, and uncompromising luxury.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Key Specs Strip */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Performance</span>
                <div className="h-px w-8 bg-brand-teal" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">425</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">HP Power</div>
                <p className="text-white/40 text-xs mt-1">3.5L Twin-Turbo V6</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">700</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Nm Torque</div>
                <p className="text-white/40 text-xs mt-1">3.5L Twin-Turbo V6</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">9</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Speed Auto</div>
                <p className="text-white/40 text-xs mt-1">Paddle Shifters</p>
              </div>
              <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 text-center border border-white/[0.06]">
                <div className="text-2xl sm:text-3xl font-bold text-white font-number">4x4</div>
                <div className="text-brand-teal text-xs uppercase tracking-widest font-medium mt-1">Drive</div>
                <p className="text-white/40 text-xs mt-1">Rear Diff Lock</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Technology Monolith Display */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Advanced Infotainment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">28.6" Monolith Display</h3>
                <p className="text-white/50 leading-relaxed mb-6 text-sm sm:text-base">
                  Twin 14.3-inch displays seamlessly integrated into a single panoramic screen. 
                  Navigation, entertainment, and vehicle data at your fingertips with intuitive 
                  touchscreen controls — keeping you connected and informed on every journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Twin 14.3" panoramic screens</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Wireless Apple CarPlay & Android Auto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Real-time navigation & vehicle info</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-white/5">
                  <img
                    src="/nissan-patrol/technology-28-6-monolith-display.png"
                    alt="Nissan Patrol 28.6-inch Monolith Display"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Head-Up Display & Klipsch Audio */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl shadow-white/5 border border-white/[0.06] aspect-[4/3]">
                <img
                  src="/nissan-patrol/technology-head-up-display.png"
                  alt="Nissan Patrol Head-Up Display"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Head-Up Display</h4>
                  <p className="text-white/60 text-sm">Key driving data projected onto the windshield for a safer, more focused drive.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl shadow-white/5 border border-white/[0.06] aspect-[4/3]">
                <img
                  src="/nissan-patrol/technology-klipsch-audio.png"
                  alt="Nissan Patrol Klipsch Audio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h4 className="text-lg font-bold text-white mb-1">Klipsch Premium Audio</h4>
                  <p className="text-white/60 text-sm">12 speakers by Klipsch — a legendary American audio brand — for an immersive concert-like experience.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Interior & Comfort */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-24">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Interior & Comfort</span>
                <div className="h-px w-8 bg-brand-teal" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">A sanctuary on wheels</h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
                The Patrol cabin is crafted with premium materials and thoughtful details, offering unmatched comfort for up to eight passengers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/nissan-patrol/cabin.png"
                    alt="Nissan Patrol Cabin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-medium">Interior</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Premium Cabin</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-2 leading-relaxed">
                    Crafted with premium soft-touch materials, ambient lighting, and meticulous attention to detail for an atmosphere of refined luxury.
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/nissan-patrol/nissan-patrol-seats.jpeg"
                    alt="Nissan Patrol Seats"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-medium">Seating</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">8 Comfortable Seats</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-2 leading-relaxed">
                    Spacious three-row seating with premium upholstery, heating, ventilation, and NASA-inspired spinal support for long-distance comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/nissan-patrol/panaromic-sunroof.png"
                    alt="Nissan Patrol Panoramic Sunroof"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-medium">Ambience</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Panoramic Sunroof</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-2 leading-relaxed">
                    A vast panoramic sunroof floods the cabin with natural light, creating an airy, open atmosphere for all passengers.
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="/nissan-patrol/iconic-puddle-lamp.jpeg"
                    alt="Nissan Patrol Puddle Lamp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="text-brand-teal text-[10px] uppercase tracking-[0.2em] font-medium">Welcome</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Iconic Puddle Lamp</h4>
                  <p className="text-white/40 text-xs sm:text-sm mt-2 leading-relaxed">
                    A signature illuminated puddle lamp projects the Patrol emblem, greeting you with elegance every time you approach.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Safety & Connected Services */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-brand-teal" />
                  <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Safety & Connectivity</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Advanced protection. Seamless control.</h3>
                <p className="text-white/50 leading-relaxed mb-6 text-sm sm:text-base">
                  Nissan's latest safety innovations and connected services work together to protect 
                  and empower you. From automatic emergency braking to remote vehicle control via 
                  the NissanConnect app, the Patrol keeps you in command.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.06]">
                    <div className="text-brand-teal text-sm font-bold">Auto Emergency Brake</div>
                    <div className="text-white/40 text-xs mt-1">Rear cross-traffic</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.06]">
                    <div className="text-brand-teal text-sm font-bold">ProPILOT</div>
                    <div className="text-white/40 text-xs mt-1">Driver assistance</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.06]">
                    <div className="text-brand-teal text-sm font-bold">Remote Climate</div>
                    <div className="text-white/40 text-xs mt-1">Pre-condition cabin</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.06]">
                    <div className="text-brand-teal text-sm font-bold">My Car Finder</div>
                    <div className="text-white/40 text-xs mt-1">GPS locator</div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
                    <img
                      src="/nissan-patrol/nissan-patrol-emergency-brake.jpeg"
                      alt="Nissan Patrol Emergency Brake"
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
                    <img
                      src="/nissan-patrol/safety-propilate.png"
                      alt="Nissan Patrol ProPILOT"
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
                    <img
                      src="/nissan-patrol/technology-remote-climate-control.png"
                      alt="Nissan Patrol Remote Climate"
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-white/5 border border-white/[0.06]">
                    <img
                      src="/nissan-patrol/technology-my-car-finder.png"
                      alt="Nissan Patrol Car Finder"
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-teal/5 rounded-full blur-xl" />
              </div>
            </div>
          </AnimatedSection>

          {/* Wheels & Finishing Details */}
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/unique-wheel-design.png"
                    alt="Nissan Patrol Wheels"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white">Unique Wheel Design</h4>
                  <p className="text-white/40 text-xs mt-1">Distinctive alloy wheels crafted to complement the Patrol's muscular stance.</p>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/technology-remote-door-control.png"
                    alt="Nissan Patrol Remote Door Control"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white">Remote Door Control</h4>
                  <p className="text-white/40 text-xs mt-1">Lock and unlock your Patrol remotely via the NissanConnect app.</p>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/nissan-patrol/v-motion-grill.png"
                    alt="Nissan Patrol V-Motion Grille"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white">Commanding Front End</h4>
                  <p className="text-white/40 text-xs mt-1">The signature V-Motion grille asserts dominance on every road.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
            >
              Enquire About Nissan Patrol
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">
                What We Offer
              </span>
              <div className="h-px w-8 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Comprehensive Automotive Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From acquisition to aftersales, our full spectrum of services is designed to keep you moving with confidence and style.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <AnimatedSection key={s.title}>
                <div className="group relative bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/10 hover:border-brand-teal/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l9 4.5v7.2c0 4.2-3.6 7.8-9 9-5.4-1.2-9-4.8-9-9V6.5L12 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Advantage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">
                Premium Advantage
              </span>
              <div className="h-px w-8 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Beyond the Drive
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every vehicle and service we offer is backed by a commitment to quality, safety, and performance that goes far beyond industry standards.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((f) => (
              <AnimatedSection key={f.title}>
                <div className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-dark text-white flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{f.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">
                Testimonials
              </span>
              <div className="h-px w-8 bg-brand-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Trusted by Drivers &amp; Fleet Operators
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hear from our clients about their experience with Venturis Wheels.
            </p>
          </AnimatedSection>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsTestPaused(true)}
            onMouseLeave={() => setIsTestPaused(false)}
          >
            <div className="relative min-h-[300px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                    i === activeTestimonial
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
                      <div className="w-14 h-14 rounded-full bg-brand-teal/15 flex items-center justify-center text-brand-teal font-bold text-lg">
                        {t.name.split(' ').map(n => n[0]).join('')}
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
            src="/wheels2.jpg"
            alt="Luxury Automotive"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-brand-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Experience<br />
              <span className="text-brand-teal">Automotive Excellence</span>?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're looking for your next vehicle, fleet solutions, or expert service — our team is ready to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 font-semibold rounded-lg hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
