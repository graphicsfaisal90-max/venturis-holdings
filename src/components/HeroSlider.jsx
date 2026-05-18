import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 'interiors',
    title: 'Luxury Interior Design',
    subtitle: 'Venturis Interiors',
    desc: 'Modern interiors crafted with elegance, style, and functionality.',
    image: '/interiors-hero.jpeg',
    btn1: 'View Projects',
    btn1Link: '/services/interiors',
    btn2: 'Get Consultation',
    btn2Link: '/contact',
  },
  {
    id: 'facilities',
    title: 'Smart Facility Solutions',
    subtitle: 'Venturis Facilities Management',
    desc: 'Reliable maintenance and operational excellence for modern businesses.',
    image: '/Facilirtes.jpeg',
    btn1: 'Explore Services',
    btn1Link: '/services/facilities',
    btn2: 'Contact Team',
    btn2Link: '/contact',
  },
  {
    id: 'realtors',
    title: 'Premium Real Estate',
    subtitle: 'Venturis Realtors',
    desc: 'Trusted property solutions and investment opportunities with lasting value.',
    image: '/realtors.jpeg',
    btn1: 'Explore Properties',
    btn1Link: '/services/realtors',
    btn2: 'Talk to Advisor',
    btn2Link: '/contact',
  },
  {
    id: 'partners',
    title: 'Strategic Business Growth',
    subtitle: 'Venturis Partners',
    desc: 'Building strong partnerships through innovation and professional collaboration.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    btn1: 'Become a Partner',
    btn1Link: '/services/partners',
    btn2: 'Learn More',
    btn2Link: '/services/partners',
  },
  {
    id: 'wheels',
    title: 'Luxury Automotive Services',
    subtitle: 'Venturis Wheels',
    desc: 'Premium mobility and automotive solutions with performance and style.',
    image: '/wheels2.jpg',
    btn1: 'Explore Services',
    btn1Link: '/services/wheels',
    btn2: 'Contact Us',
    btn2Link: '/contact',
  },
  {
    id: 'tourism',
    title: 'Desert Safari Adventures',
    subtitle: 'Venturis Tourism',
    desc: "Experience the thrill of Dubai's golden dunes with premium safari tours and luxury desert escapes.",
    image: '/Desert-Safari-Dubai.jpg',
    btn1: 'Explore Packages',
    btn1Link: '/services/tourism',
    btn2: 'Plan Your Trip',
    btn2Link: '/contact',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const slide = slides[current]

  const goTo = useCallback((index) => {
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section
      className="relative h-[90vh] min-h-[600px] max-h-[1000px] overflow-hidden group"
      onMouseEnter={() => { setIsAutoPlaying(false); setIsHovered(true) }}
      onMouseLeave={() => { setIsAutoPlaying(true); setIsHovered(false) }}
    >
      {slides.map((s, i) => {
        const isActive = i === current

        return (
          <div key={s.id} className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${s.image})`,
                transform: isActive && isHovered
                  ? 'scale(1.08)'
                  : isActive
                    ? 'scale(1.03)'
                    : 'scale(1.12)',
              }}
            >
              <div
                className={`absolute inset-0 transition-all duration-[3000ms] ${
                  isActive && isHovered
                    ? 'backdrop-blur-none saturate-125 brightness-110'
                    : isActive
                      ? 'backdrop-blur-[2px] saturate-75 brightness-90'
                      : ''
                }`}
              />
            </div>

            <div
              className={`absolute inset-0 bg-black transition-all duration-[3000ms] ease-in-out ${
                isActive && isHovered ? 'opacity-40' : isActive ? 'opacity-80' : 'opacity-0'
              }`}
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-[3000ms] ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        )
      })}

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl" key={current}>
            <div className="overflow-hidden">
              <div className="flex items-center gap-4 mb-4 sm:mb-5 animate-fade-in-down">
                <span className="w-10 h-px bg-white/40" />
                <span className="text-base sm:text-sm text-white/60 font-semibold uppercase tracking-[0.2em]">{slide.subtitle}</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6 animate-fade-in-up delay-100">
                {slide.title}
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="text-xl sm:text-xl text-white/60 max-w-xl leading-relaxed mb-8 sm:mb-10 animate-fade-in-up delay-200">
                {slide.desc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 animate-fade-in-up delay-300 pb-16 sm:pb-0">
              <Link
                to={slide.btn1Link}
                className="group relative px-10 py-4 font-bold text-xl sm:text-lg rounded-xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-brand-teal to-brand-navy text-white hover:shadow-2xl hover:shadow-brand-teal/25 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10">{slide.btn1}</span>
                <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link
                to={slide.btn2Link}
                className="group relative px-10 py-4 font-bold text-xl sm:text-lg rounded-xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-brand-teal to-brand-navy text-white shadow-xl shadow-brand-teal/10 hover:shadow-2xl hover:shadow-brand-teal/25 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10">{slide.btn2}</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 z-30 flex gap-3 sm:hidden">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal/80 to-brand-navy/80 backdrop-blur-lg border border-white/15 flex items-center justify-center text-white shadow-xl shadow-brand-teal/5 transition-all duration-300 active:scale-90"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal/80 to-brand-navy/80 backdrop-blur-lg border border-white/15 flex items-center justify-center text-white shadow-xl shadow-brand-teal/5 transition-all duration-300 active:scale-90"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <button
        onClick={prev}
        className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal/80 to-brand-navy/80 backdrop-blur-lg border border-white/15 items-center justify-center text-white shadow-xl shadow-brand-teal/5 transition-all duration-300 hover:scale-110 hover:-translate-x-1 hover:shadow-brand-teal/20 active:scale-95"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal/80 to-brand-navy/80 backdrop-blur-lg border border-white/15 items-center justify-center text-white shadow-xl shadow-brand-teal/5 transition-all duration-300 hover:scale-110 hover:translate-x-1 hover:shadow-brand-teal/20 active:scale-95"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-12 h-1.5 bg-gradient-to-r from-brand-teal to-brand-navy shadow-lg shadow-brand-teal/30'
                : 'w-2.5 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-30 hidden sm:flex items-center gap-2 text-white/30 text-sm font-mono tracking-wider">
        <span className="text-white/50 font-bold font-number">
          {(current + 1).toString().padStart(2, '0')}
        </span>
        <span className="w-10 h-px bg-white/15" />
        <span className="font-number">{slides.length.toString().padStart(2, '0')}</span>
      </div>
    </section>
  )
}
