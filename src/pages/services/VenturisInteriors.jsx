import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Interior Design',
    desc: 'Comprehensive interior design services for residential, commercial, and hospitality spaces, blending aesthetics with functionality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Architecture',
    desc: 'Innovative architectural solutions from concept development to detailed design, ensuring structural elegance and spatial harmony.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11M8 14v.01M12 14v.01M16 14v.01M8 18v.01M12 18v.01M16 18v.01" />
      </svg>
    ),
  },
  {
    title: 'Space Planning',
    desc: 'Strategic space optimization for maximum functionality, flow, and efficiency in every environment we design.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Commercial Fit-Outs',
    desc: 'End-to-end commercial fit-out solutions for offices, retail, and hospitality, delivered on time and within budget.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    desc: 'Dedicated project oversight from conception to handover, coordinating all stakeholders for seamless delivery.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Furniture & Decor',
    desc: 'Curated furniture selection, custom joinery, and decor styling to bring each interior vision to life.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'We begin by understanding your vision, requirements, and budget through an in-depth consultation.' },
  { step: '02', title: 'Concept Design', desc: 'Our team develops mood boards, layout plans, and 3D visualizations to bring ideas to life.' },
  { step: '03', title: 'Detailed Planning', desc: 'We refine designs, select materials, and prepare technical drawings for approval.' },
  { step: '04', title: 'Execution', desc: 'Skilled craftsmen and project managers bring the design to life with precision and care.' },
  { step: '05', title: 'Handover', desc: 'We conduct a final walkthrough, address every detail, and hand over your completed space.' },
]

const projects = [
  {
    title: 'Corporate HQ',
    category: 'Commercial',
    image: '/pinterest-sheffield.jpg',
  },
  {
    title: 'Luxury Villa',
    category: 'Residential',
    image: '/pinterest-modern-house.jpg',
  },
  {
    title: 'Boutique Hotel',
    category: 'Hospitality',
    image: '/pinterest-luxury-living.jpg',
  },
  {
    title: 'Executive Office',
    category: 'Commercial',
    image: '/pinterest-luxury-home.jpg',
  },
  {
    title: 'Modern Residence',
    category: 'Residential',
    image: '/pinterest-elegant.jpg',
  },
  {
    title: 'Retail Space',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
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

const heroSlides = [
  { image: '/hero-slide-1.jpg', alt: 'Modern Luxury Living Room' },
  { image: '/hero-slide-2.jpg', alt: 'Contemporary Interior Design' },
  { image: '/hero-slide-3.jpg', alt: 'Elegant Living Space' },
]

export default function VenturisInteriors() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                i === activeSlide
                  ? 'bg-brand-teal w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

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
              Venturis Interiors
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80 mt-2">
                &amp; Architecture
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 animate-fade-in-down delay-200">
              Transforming spaces into inspiring environments through exceptional interior design,
              architecture, and fit-out solutions tailored to your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CountUp end={150} suffix="+" label="Projects Completed" />
              <CountUp end={12} suffix="+" label="Years Experience" />
              <CountUp end={50} suffix="+" label="Happy Clients" />
              <CountUp end={98} suffix="%" label="Satisfaction Rate" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/interior-hero.jpeg"
                  alt="Interior Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
            <div>
              <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
                About Our Division
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Crafting Spaces That
                <span className="text-brand-teal"> Inspire &amp; Endure</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Venturis Interiors &amp; Architecture, we believe great design transforms the way
                people live, work, and connect. Our team of award-winning architects and interior
                designers brings together decades of experience across residential, commercial, and
                hospitality projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From conceptualization to final handover, we manage every detail with precision and
                passion — creating spaces that are not only beautiful but purposeful, sustainable,
                and timeless.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Award-Winning Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Sustainable Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Turnkey Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Client-First Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Comprehensive Design &amp; Architecture Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From concept to completion, our full spectrum of services ensures every aspect
              of your project is handled with expertise and care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A proven methodology that ensures clarity, quality, and complete satisfaction
              at every stage of your project.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-12">
              {process.map((p, i) => (
                <div key={p.step} className="relative md:flex gap-8 items-start group">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-brand-teal text-white items-center justify-center text-lg font-bold z-10 shadow-lg">
                    {p.step}
                  </div>
                  <div className="md:ml-24 pl-0 md:pl-0">
                    <div className="md:hidden w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center text-base font-bold mb-4 shadow-md">
                      {p.step}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Portfolio Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Our Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A selection of our recent work showcasing the breadth and quality of our
              interior design and architecture projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-white text-lg font-bold mb-1">{p.title}</h3>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-white/80 text-xs tracking-wide">View Project</span>
                      <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <svg className="w-10 h-10 text-brand-teal/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10">
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "Venturis transformed our office into a modern, collaborative space. Their attention to detail and project management was exceptional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Sarah Khalid</div>
                    <div className="text-xs text-gray-500">CEO, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <svg className="w-10 h-10 text-brand-teal/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10">
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "From concept to completion, the team delivered a stunning villa design that exceeded our expectations. Truly world-class."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold">
                    AA
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Ahmed Al Mazroui</div>
                    <div className="text-xs text-gray-500">Private Client</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <svg className="w-10 h-10 text-brand-teal/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10">
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "Our boutique hotel received rave reviews thanks to the stunning interior design. Venturis understood our brand perfectly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold">
                    LN
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">Lina Nasser</div>
                    <div className="text-xs text-gray-500">Hotel Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/pinterest-modern-house.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-navy/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to transform your space? Get in touch with our team and let's discuss how
            we can bring your vision to life.
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
              to="/projects"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
