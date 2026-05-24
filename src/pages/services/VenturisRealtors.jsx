import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const propertyDetails = {
  title: '2-Bedroom Premium Apartment',
  location: 'The Royal Atlantis, Dubai',
  tower: 'Tower B',
  floor: '3rd Floor',
  area: '209 sq.m. (2,250 sq.ft.)',
  status: 'Upgraded, Fully Furnished, Ready to Move In',
  views: 'Panoramic Sea View & Lush Garden View',
  headline: 'Experience Ultra-Luxury Living at The Royal Atlantis',
  subtitle: 'Fully Furnished 2-Bedroom Masterpiece with Panoramic Sea & Garden Views',
  tagline: 'Where Sophistication Meets the Horizon',
}

const quickStats = [
  { value: '209', label: 'Sq. Meters', suffix: 'm²' },
  { value: '2', label: 'Bedrooms', suffix: '' },
  { value: '2', label: 'Bathrooms', suffix: '+' },
  { value: '3', label: 'Floor Level', suffix: 'rd' },
]

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

const premiumFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Dual View Advantage',
    desc: 'Uninterrupted full sea-facing layouts combined with serene garden views from every angle of the apartment.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Outdoor Living',
    desc: 'Multiple private balconies extending across the entire length of the apartment, offering seamless indoor-outdoor living.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Premium Finishes',
    desc: 'Natural wood paneling, premium stone and marble surfaces, and curated high-end designer furniture throughout.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Elite Community Perks',
    desc: 'Access to private beaches, infinity pools, world-class fine dining, and 24/7 concierge services at The Royal Atlantis.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Prime Location',
    desc: 'Situated in the heart of Dubai\'s most prestigious waterfront development, steps from the iconic Atlantis resort and private beaches.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '24/7 Security & Privacy',
    desc: 'Round-the-clock security, private elevator access, and exclusive resident-only amenities ensuring complete peace of mind.',
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
  }, [onClose, onPrev, onNext])

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
        <img
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default function VenturisRealtors() {
  const [activeTab, setActiveTab] = useState(rooms[0].id)
  const [modalIndex, setModalIndex] = useState(null)
  const videoRef = useRef(null)

  const openModal = (index) => setModalIndex(index)
  const closeModal = () => setModalIndex(null)
  const prevImage = () => setModalIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  const nextImage = () => setModalIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
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
              {propertyDetails.headline}
            </p>
            <p className="text-base sm:text-lg text-white/40 max-w-xl leading-relaxed mb-8 animate-fade-in-down delay-200 font-sans">
              {propertyDetails.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => scrollToSection('overview')}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-brand-dark font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore Property
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 border border-white/20 text-white/70 font-semibold rounded-lg hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule Viewing
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in-up">
          <span className="text-white/20 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl shadow-2xl p-8 md:p-12 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {quickStats.map((s) => (
                <CountUp key={s.label} end={parseInt(s.value)} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Masterfully%20Crafted%20Living%20Spaces.png"
                  alt="The Royal Atlantis Living Space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold font-number">{propertyDetails.area.split(' ')[0]}</div>
                <div className="text-sm text-white/80">{propertyDetails.area.split('(')[0].replace(propertyDetails.area.split(' ')[0], '').trim()}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-brand-teal" />
                <span className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium">Property Overview</span>
              </div>
              <p className="text-brand-muted text-sm uppercase tracking-widest mb-2 font-sans">{propertyDetails.location}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                {propertyDetails.title}
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-dark">Status: </span>
                    <span className="text-brand-teal">{propertyDetails.status}</span>
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
                    <span className="text-gray-600">{propertyDetails.location} — {propertyDetails.tower}, {propertyDetails.floor}</span>
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
                    <span className="text-gray-600">{propertyDetails.views}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Welcome to The Royal Atlantis Residences — where architectural brilliance meets the azure waters of the Arabian Gulf. This upgraded, fully furnished 2-bedroom masterpiece offers an unparalleled living experience in one of Dubai's most iconic destinations.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                Spanning 209 sq.m. of exquisitely designed space, this residence combines natural wood paneling, premium stone surfaces, and curated designer furnishings to create a home that is as breathtaking as its surroundings.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Fully Furnished', 'Panoramic Views', 'Private Balconies', 'Premium Finishes'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-brand-light text-brand-teal text-xs font-semibold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Room-by-Room Breakdown */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">The Space</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              Rooms &amp; Layout
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Every detail of this residence has been thoughtfully curated to create a harmonious living experience.
            </p>
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection className="mb-12">
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

          {/* Active Room Content */}
          {rooms.map((room) => (
            <div key={room.id} className={`transition-all duration-500 ${activeTab === room.id ? 'block' : 'hidden'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
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
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Gallery</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              A Visual Journey
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore the elegance of this exceptional residence through our curated gallery.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} className={`group relative overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <div
                  className="aspect-square overflow-hidden"
                  onClick={() => openModal(i)}
                >
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
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        <GalleryModal
          images={galleryImages}
          activeIndex={modalIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      </section>

      {/* Premium Features */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Premium Features</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              Uncompromising Luxury
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Every element of this residence has been selected to provide the pinnacle of luxury living.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, i) => (
              <AnimatedSection key={i}>
                <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full pointer-events-none" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 mb-5 group-hover:scale-105 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/Venturis%20Realtors/2-Bedroom%20Premium%20Apartment/Screenshot%202026-05-24%20215450.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-teal" />
              <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-medium">Inquire Now</span>
              <div className="h-px w-10 bg-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Dream Home <span className="text-brand-teal">Awaits</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a private viewing of this exceptional residence and experience the pinnacle of Dubai luxury living. Our dedicated team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-teal/20"
              >
                Schedule Private Viewing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+971123456789"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-semibold rounded-xl hover:bg-white/5 hover:text-white hover:border-white/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
            <p className="text-white/30 text-sm mt-6 font-sans">
              Venturis Realtors &copy; {new Date().getFullYear()} — Ultra-Luxury Real Estate Portfolio
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
