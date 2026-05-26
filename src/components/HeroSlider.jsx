import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    id: 'holdings',
    title: 'Venturis Holdings',
    subtitle: 'Venturis Holdings',
    desc: 'Venturis Holdings serves as the parent organization overseeing a diversified portfolio of specialized subsidiaries, each dedicated to its own core area of expertise while operating together under a unified vision, strategy, and commitment to excellence.',
    image: '/Building%205423.png',
    btn1: 'Explore Our Divisions',
    btn1Link: '/services',
    btn2: 'Learn About Us',
    btn2Link: '/about',
  },
  {
    id: 'built-different',
    title: 'Built Different.\nBuilt Better.',
    subtitle: 'Venturis Holdings',
    desc: 'At Venturis Holdings, we don\'t just deliver services — we forge partnerships that drive lasting success. Our multi-division structure, experienced team, and unwavering commitment to quality make us the preferred choice for businesses across the UAE and beyond.',
    image: '/Building%205424.png',
    btn1: 'Explore Our Divisions',
    btn1Link: '/services',
    btn2: 'Learn About Us',
    btn2Link: '/about',
  },
  {
    id: 'vision-future',
    title: 'Vision for the Future',
    subtitle: 'Venturis Holdings',
    desc: 'Venturis envisions becoming a multi-sector global enterprise delivering innovative solutions across real estate, technology, consultancy, and digital transformation industries.',
    image: '/Building%205425.png',
    btn1: 'Explore Our Divisions',
    btn1Link: '/services',
    btn2: 'Learn About Us',
    btn2Link: '/about',
  },
  {
    id: 'vision-mission',
    title: 'Driven by Vision & Purpose',
    subtitle: 'Venturis Holdings',
    vision: 'To become a globally recognized conglomerate that bridges investors, businesses, and emerging technologies — driving value creation, operational excellence, and long-term prosperity.',
    mission: 'To deliver trusted, expert-driven solutions across finance, real estate, business consultancy, and emerging technologies — empowering clients with confidence, clarity, and strategic advantage in every decision.',
    image: '/Building%205426.png',
    btn1: 'Explore Our Divisions',
    btn1Link: '/services',
    btn2: 'Learn About Us',
    btn2Link: '/about',
  },
  {
    id: 'core-values',
    title: 'Our Core Values',
    subtitle: 'Venturis Holdings',
    values: [
      { label: 'Innovation', text: 'We embrace creativity and modern solutions to drive continuous growth and industry leadership.' },
      { label: 'Integrity', text: 'We conduct business with honesty, transparency, and strong ethical standards in every partnership.' },
      { label: 'Customer Centricity', text: 'Our customers are at the heart of everything we do, and we strive to exceed their expectations.' },
      { label: 'Agility', text: 'We adapt quickly to changing market demands while maintaining efficiency and excellence.' },
      { label: 'Global Mindset', text: 'We think beyond borders, building international connections and delivering worldwide impact.' },
    ],
    image: '/Building%205427.png',
    btn1: 'Explore Our Divisions',
    btn1Link: '/services',
    btn2: 'Learn About Us',
    btn2Link: '/about',
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
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 sm:mb-6 animate-fade-in-up delay-100 ${slide.title.includes('\n') ? 'whitespace-pre-line' : ''}`}>
                {slide.title}
              </h1>
            </div>
            <div className="overflow-hidden">
              {slide.values ? (
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 sm:mb-10 animate-fade-in-up delay-200 max-w-2xl">
                  {slide.values.map((v, i) => (
                    <div key={i}>
                      <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">{v.label}</span>
                      <p className="text-white/60 text-sm leading-relaxed mt-0.5">{v.text}</p>
                    </div>
                  ))}
                </div>
              ) : slide.vision ? (
                <div className="space-y-4 mb-8 sm:mb-10 animate-fade-in-up delay-200">
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Vision</span>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-1 max-w-2xl">{slide.vision}</p>
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Mission</span>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-1 max-w-2xl">{slide.mission}</p>
                  </div>
                </div>
              ) : (
                <p className="text-xl sm:text-xl text-white/60 max-w-xl leading-relaxed mb-8 sm:mb-10 animate-fade-in-up delay-200">
                  {slide.desc}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 animate-fade-in-up delay-300 pb-20 sm:pb-0">
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

      <div className="absolute bottom-10 left-6 sm:left-1/2 sm:-translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3">
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
