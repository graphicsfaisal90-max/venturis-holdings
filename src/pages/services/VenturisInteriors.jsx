import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Interior Design',
    desc: 'Comprehensive interior design services for residential, commercial, and hospitality spaces, blending aesthetics with functionality.',
    image: '/interior-design-card.png',
  },
  {
    title: 'Architecture',
    desc: 'Innovative architectural solutions from concept development to detailed design, ensuring structural elegance and spatial harmony.',
    image: '/architecture.jpg',
  },
  {
    title: 'Space Planning',
    desc: 'Strategic space optimization for maximum functionality, flow, and efficiency in every environment we design.',
    image: '/space-planning.jpg',
  },
  {
    title: 'Commercial Fit-Outs',
    desc: 'End-to-end commercial fit-out solutions for offices, retail, and hospitality, delivered on time and within budget.',
    image: '/commercial-fitouts.jpg',
  },
  {
    title: 'Project Management',
    desc: 'Dedicated project oversight from conception to handover, coordinating all stakeholders for seamless delivery.',
    image: '/project-management.jpeg',
  },
  {
    title: 'Office Setup',
    desc: 'Complete office setup solutions including workspace design, furniture installation, and infrastructure setup for a productive work environment.',
    image: '/office-setup.jpg',
  },
]

const process = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We begin by understanding your vision, requirements, and budget through an in-depth consultation.',
    outcome: 'Clear project scope & budget',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Concept Design',
    desc: 'Our team develops mood boards, layout plans, and 3D visualizations to bring ideas to life.',
    outcome: 'Visual design direction',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Detailed Planning',
    desc: 'We refine designs, select materials, and prepare technical drawings for approval.',
    outcome: 'Approved technical package',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Execution',
    desc: 'Skilled craftsmen and project managers bring the design to life with precision and care.',
    outcome: 'On-time & on-budget delivery',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Handover',
    desc: 'We conduct a final walkthrough, address every detail, and hand over your completed space.',
    outcome: 'Fully satisfied client',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
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
    image: '/pinterest-retail.jpg',
  },
]

const testimonials = [
  {
    quote: 'Venturis transformed our office into a modern, collaborative space. Their attention to detail and project management was exceptional.',
    name: 'Sarah Khalid',
    title: 'CEO, TechCorp',
    initials: 'SK',
    rating: 5,
  },
  {
    quote: 'From concept to completion, the team delivered a stunning villa design that exceeded our expectations. Truly world-class.',
    name: 'Ahmed Al Mazroui',
    title: 'Private Client',
    initials: 'AM',
    rating: 5,
  },
  {
    quote: 'Our boutique hotel received rave reviews thanks to the stunning interior design. Venturis understood our brand perfectly.',
    name: 'Lina Nasser',
    title: 'Hotel Director',
    initials: 'LN',
    rating: 5,
  },
  {
    quote: 'The level of professionalism and creativity Venturis brought to our headquarters redesign was outstanding. Every detail was meticulously planned and executed to perfection.',
    name: 'James Mitchell',
    title: 'COO, NovaWorks',
    initials: 'JM',
    rating: 5,
  },
  {
    quote: 'I\'ve collaborated with many design firms, but Venturis stands apart. Their ability to blend contemporary aesthetics with functional, livable spaces is truly remarkable.',
    name: 'Fatima Al Hashimi',
    title: 'Principal Designer',
    initials: 'FH',
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

const heroSlides = [
  { image: '/hero-slide-1.jpg', alt: 'Modern Luxury Living Room' },
  { image: '/hero-slide-2.jpg', alt: 'Contemporary Interior Design' },
  { image: '/hero-slide-3.jpg', alt: 'Elegant Living Space' },
]

export default function VenturisInteriors() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTestPaused, setIsTestPaused] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isTestPaused) return
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isTestPaused])

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
              Venturis Interiors,
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80 mt-2">
                Architecture &amp; Design
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
                At Venturis Interiors, Architecture &amp; Design, we believe great design transforms the way
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/15 transition-all duration-500"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-[center_25%] object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[2deg]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
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
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-teal/50 to-transparent z-10" />
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-[1]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="inline-block px-4 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-0 group-hover:-translate-y-1 transition-all duration-500">
                    <div className="w-10 h-0.5 bg-brand-teal mb-3" />
                    <h3 className="text-white text-lg font-bold tracking-tight leading-tight">{p.title}</h3>
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      <span className="text-white/80 text-xs font-medium tracking-wider uppercase">Explore</span>
                      <div className="w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Don't just take our word for it — hear from the clients we've had the privilege of serving.
            </p>
          </div>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsTestPaused(true)}
            onMouseLeave={() => setIsTestPaused(false)}
          >
            <div className="relative min-h-[320px]">
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
