import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import SEO from '../../components/SEO'

const uaeDestinations = [
  {
    title: 'Ain Dubai',
    location: 'Dubai, UAE',
    locationLong: 'Bluewaters Island, Dubai',
    desc: "The world's largest and tallest observation wheel, lighting up the spectacular Dubai Marina skyline. It offers breathtaking 360-degree views of the city's iconic architecture over the Arabian Gulf, making it an absolute must-visit for luxury travelers seeking a premium night-sky experience.",
    image: "/Ain Dubai (Dubai, UAE).jpg",
    rating: 4.9,
    tag: 'Iconic Landmark',
  },
  {
    title: 'Luxury Marina Cruise',
    location: 'Dubai, UAE',
    locationLong: 'Dubai Marina / Bluewaters Island',
    desc: "An upscale evening cruise experience gliding past the illuminated backdrop of Ain Dubai. Offering premium dining, vibrant lighting, and unparalleled waterfront views, it highlights the ultimate blend of sophisticated nightlife and coastal relaxation that defines modern Dubai tourism.",
    image: "/Luxury Marina Cruise (Dubai, UAE).jpg",
    highlight: 'Celeste Luxury Yacht',
    rating: 4.8,
    tag: 'Premium Experience',
  },
  {
    title: 'Jebel Jais Mountain Road',
    location: 'Ras Al Khaimah, UAE',
    locationLong: "Jebel Jais — The UAE's highest peak",
    desc: "A spectacular, winding mountain highway cutting through the rugged Hajar Mountains. Perfect for adventure tourism and road-trip enthusiasts, Jebel Jais offers crisp mountain air, panoramic desert-mountain vistas, and thrill-seeking attractions like the world's longest zipline.",
    image: "/Jebel Jais Mountain Road (Ras Al Khaimah, UAE).jpg",
    rating: 4.7,
    tag: 'Adventure',
  },
  {
    title: 'Jebel Hafeet Mountain Road',
    location: 'Al Ain, UAE',
    locationLong: 'Jebel Hafeet, Al Ain (Abu Dhabi Emirate)',
    desc: "Renowned as one of the world's greatest driving roads, this winding desert mountain highway snakes up to a height of 1,240 meters. The dramatic contrast between the stark limestone crags by day and the beautifully illuminated, glowing ribbons of asphalt by night offers an unforgettable panoramic viewpoint over the historic garden city of Al Ain.",
    image: "/Jebel Hafeet Mountain Road (Al Ain, UAE).jpg",
    rating: 4.8,
    tag: 'Scenic Drive',
  },
  {
    title: 'Dubai Miracle Garden',
    location: 'Dubai, UAE',
    locationLong: 'Dubai Miracle Garden',
    desc: "The world's largest natural flower garden, displaying over 150 million blooming flowers arranged in extravagant, colorful structures. The crown jewel is the record-breaking Emirates A380 aircraft covered entirely in living blossoms — a brilliant testament to Dubai's ability to create grand wonders in the heart of the desert.",
    image: "/Dubai Miracle Garden (Dubai, UAE).jpg",
    rating: 4.7,
    tag: 'Natural Wonder',
  },
  {
    title: 'Ras Al Khaimah Desert',
    location: 'Ras Al Khaimah, UAE',
    locationLong: 'Al Wadi Desert, Ras Al Khaimah',
    desc: "A mesmerizing expanse of rolling terracotta sand dunes under a golden sunset. This landscape showcases the traditional, peaceful soul of Arabian travel, offering premium desert safaris, authentic Bedouin heritage experiences, and luxury stargazing away from the bustling city lights.",
    image: "/Ras Al Khaimah Desert (Ras Al Khaimah, UAE).png",
    rating: 4.9,
    tag: 'Desert Luxury',
  },
  {
    title: 'Yas Waterworld Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    locationLong: 'Yas Island, Abu Dhabi',
    desc: "Dive into non-stop family fun and adventure at the UAE's iconic mega waterpark. Featuring unique Emirati-themed rides, massive twisting water slides, and thrilling wave pools, it represents the ultimate oasis of entertainment and luxury leisure.",
    image: "/Yas Waterworld Abu Dhabi.jpg",
    heading: 'High-Thrill Splashes at Yas Waterworld',
    rating: 4.6,
    tag: 'Family Fun',
  },
  {
    title: 'The House of Hype',
    location: 'Dubai, UAE',
    locationLong: 'Level 1, Chinatown, Dubai Mall, Dubai',
    desc: "Immerse yourself in Dubai's ultimate indoor wonderverse. Spanning a massive digital playground, it features over 25 interactive worlds where glowing neon jungles, tech-driven gaming, live performances, and stunning physical-meets-virtual art installations create an absolute paradise for modern content creators and trendsetters.",
    image: "/The House of Hype.jpeg",
    heading: 'Step Into the Metaverse at House of Hype',
    rating: 4.8,
    tag: 'Digital Playground',
  },
  {
    title: 'Ferrari World Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    locationLong: 'Ferrari World Yas Island, Abu Dhabi',
    desc: "Experience the ultimate adrenaline rush at the world's premier Ferrari-branded theme park. Home to the world's fastest rollercoaster and a sleek collection of racing simulators, this iconic indoor mega-park perfectly blends Italian automotive luxury with family entertainment.",
    image: "/Ferrari World Abu Dhabi.jpeg",
    heading: 'High-Octane Thrills at Ferrari World',
    rating: 4.9,
    tag: 'Theme Park',
  },
]

const pakistanDestinations = [
  {
    title: 'Fairy Meadows & Nanga Parbat',
    location: 'Gilgit-Baltistan, Pakistan',
    locationLong: 'Fairy Meadows, Gilgit-Baltistan',
    desc: "A breathtaking, lush green alpine meadow serving as the ultimate vantage point for the killer mountain, Nanga Parbat (8,126 m). The pristine reflection of the snow-capped giant in the still waters, surrounded by dark pine forests, epitomizes raw, untouched mountain wilderness and high-altitude trekking luxury.",
    image: "/Fairy Meadows & Nanga Parbat (Pakistan).jpg",
    rating: 4.9,
    tag: 'Trekking Paradise',
  },
  {
    title: 'Patriata Cable Car',
    location: 'Punjab, Pakistan',
    locationLong: 'Patriata (New Murree), Punjab',
    desc: "A thrilling, scenic cable car ride gliding over heavily forested mountain ridges and deep valleys. As one of Pakistan's most popular hill-station attractions, it offers tourists a cool alpine climate, panoramic views of the pine-covered hills, and a refreshing escape into nature.",
    image: "/Patriata Cable Car (Murree, Pakistan).jpg",
    rating: 4.6,
    tag: 'Scenic Ride',
  },
  {
    title: 'Shangrila Lake View',
    location: 'Skardu, Pakistan',
    locationLong: 'Shangrila Resort Waterfront, Skardu, Gilgit-Baltistan',
    desc: "A stunning, vibrant wide-angle view of the iconic Chinese-style pagoda restaurant sitting directly over Lower Kachura Lake. Flanked by deep green poplars and massive rocky slopes under a vivid blue sky, this destination perfectly blends unique cultural architecture with breathtaking northern Pakistani landscapes.",
    image: "/Shangrila Lake View (Skardu, Pakistan).jpg",
    rating: 4.8,
    tag: 'Cultural Beauty',
  },
  {
    title: 'Gilgit-Baltistan Peaks',
    location: 'Gilgit-Baltistan, Pakistan',
    locationLong: 'Karakoram Range, Gilgit-Baltistan',
    desc: "Stand in awe before a world of towering granite walls and massive alpine valleys. Home to some of the planet's highest peaks and grandest glaciers, this majestic frontier offers an unmatched destination for luxury mountain expeditions and raw, scenic exploration.",
    image: "/Gilgit-Baltistan Peaks.jpg",
    heading: "Gateway to the World's Highest Peaks",
    rating: 5.0,
    tag: 'Expedition',
  },
  {
    title: 'Bhurban',
    location: 'Punjab, Pakistan',
    locationLong: 'Murree Hills, Punjab',
    desc: "Escape to an upscale hill station resort nestled deep within the verdant Murree hills. Offering pristine manicured gardens, premium hospitality, and sweeping views of misty valleys, it provides the ultimate serene getaway for elite travelers.",
    image: "/Bhurban.jpg",
    heading: 'Luxury in the Hills of Bhurban',
    rating: 4.7,
    tag: 'Hill Retreat',
  },
  {
    title: 'Khanpur Dam',
    location: 'Khyber Pakhtunkhwa, Pakistan',
    locationLong: 'Haripur District, Khyber Pakhtunkhwa',
    desc: "Experience the ultimate thrill of water sports on a brilliant turquoise reservoir. From exhilarating parasailing high above the clean waters to high-speed boating, it is northern Pakistan's premier destination for adventure and aquatic leisure.",
    image: "/khanpur dam.jpeg",
    heading: 'Vibrant Adventures at Khanpur Dam',
    rating: 4.6,
    tag: 'Water Sports',
  },
  {
    title: 'Khunjerab Pass',
    location: 'Gilgit-Baltistan, Pakistan',
    locationLong: 'Pakistan-China Border, Karakoram Range',
    desc: "Stand at the highest paved international border crossing in the world, towering at 4,693 meters. Flanked by massive, snow-covered Karakoram peaks, this monumental gateway offers an unforgettable journey into high-altitude wonder.",
    image: "/Khunjerab pass.jpg",
    heading: 'The Roof of the World at Khunjerab',
    rating: 4.9,
    tag: 'High-Altitude',
  },
  {
    title: 'Neelum Valley',
    location: 'Azad Jammu & Kashmir, Pakistan',
    locationLong: 'Azad Jammu and Kashmir, Pakistan',
    desc: "Journey through a spectacular, alpine paradise where surging glacial rivers cut through dense pine forests and dramatic mountain slopes. A breathtaking, untouched landscape designed for travelers seeking raw nature and peaceful isolation.",
    image: "/Neelum Valley.jpg",
    heading: 'The Untamed Beauty of Neelum Valley',
    rating: 4.8,
    tag: 'Alpine Paradise',
  },
]

const experiences = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Reach',
    desc: 'Curated destinations across UAE, Pakistan, and beyond.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'White-Glove Service',
    desc: 'Personalized concierge from booking to return.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Round-the-clock assistance wherever you are.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Tailored Itineraries',
    desc: 'Bespoke travel plans crafted just for you.',
  },
]

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function AnimatedSection({ children, className = '' }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function CountUp({ end, suffix, label, icon }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
  }, [end, label])

  return (
    <div ref={ref} className="text-center group">
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center text-brand-teal group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight font-number">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const heroSlides = [
  { image: '/Desert Safari 2.jpg', alt: 'Dubai Desert Safari' },
  { image: '/Ain Dubai (Dubai, UAE).jpg', alt: 'Ain Dubai Observation Wheel' },
  { image: '/Fairy Meadows & Nanga Parbat (Pakistan).jpg', alt: 'Fairy Meadows Nanga Parbat' },
]

export default function VenturisTourism() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <SEO
        title="Venturis Tourism"
        description="Venturis Tourism division of Venturis Holdings LLC — curated travel experiences, desert safaris, luxury stays, and premium tourism services across UAE and Pakistan."
        path="/services/tourism"
        keywords="Venturis Tourism, Dubai desert safari, UAE travel agency, luxury travel Dubai, Pakistan tourism, Venturis Holdings LLC tourism, desert safari Dubai, UAE tour packages, Pakistan travel"
      />
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                i === activeSlide ? 'bg-brand-teal w-8' : 'bg-white/40 hover:bg-white/60'
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
              Venturis Holdings LLC Division
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-down delay-100">
              Venturis Tourism,
              <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-white/80 mt-2">
                Curated Travel Experiences
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 animate-fade-in-down delay-200">
              From the dazzling skyline of Dubai to the majestic peaks of the Karakoram — discover extraordinary
              destinations crafted for the discerning luxury traveler.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white font-semibold rounded-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Book Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#uae"
                className="inline-flex items-center px-8 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-teal)_0%,_transparent_60%)] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { end: 50, suffix: '+', label: 'Destinations' },
              { end: 8, suffix: '+', label: 'Countries' },
              { end: 5000, suffix: '+', label: 'Happy Travelers' },
              { end: 99, suffix: '%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={stat.label} className="relative text-center">
                <div className="text-5xl font-bold text-white mb-2 font-number">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-sm uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                {i < 3 && <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/Disney world.jpg"
                    alt="Disney World"
                    className="w-full h-[400px] sm:h-[520px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-brand-teal/10" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/15">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-lg font-bold font-number shrink-0">
                      8+
                    </div>
                    <div className="text-white text-xs leading-tight">
                      <p className="font-semibold text-sm">Years of Excellence</p>
                      <p className="text-white/60">Crafting premium travel since 2016</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-brand-teal uppercase tracking-[0.25em] text-sm font-semibold mb-5">About Our Division</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                  Curating Journeys That
                  <br />
                  <span className="text-brand-teal">Inspire &amp; Transform</span>
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p className="text-lg text-brand-dark/70 italic border-l-4 border-brand-teal pl-5">
                    "Every journey should be as remarkable as the destination itself."
                  </p>
                  <p>
                    At Venturis Tourism, we believe in creating experiences that transcend the ordinary.
                    From the futuristic skyline of Dubai to the ancient valleys of Gilgit-Baltistan,
                    every itinerary is meticulously crafted to reflect your unique desires.
                  </p>
                  <p>
                    Whether you seek the thrill of desert dune bashing beneath a golden sunset, the
                    serenity of alpine meadows under a blanket of stars, or the cultural richness of
                    Arabian heritage — our expert team ensures every detail is handled with white-glove
                    service and authentic local insight.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-brand-dark text-white font-semibold rounded-xl hover:bg-brand-navy transition-all hover:-translate-y-1 shadow-lg"
                >
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp) => (
                <div key={exp.title} className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500 border border-gray-100">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-light text-brand-teal flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-teal/20 transition-all duration-500">
                    {exp.icon}
                  </div>
                  <h4 className="text-base font-bold text-brand-dark mb-2">{exp.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* UAE Destinations */}
      <section id="uae" className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-brand-teal uppercase tracking-[0.25em] text-sm font-semibold mb-5">Explore the Emirates</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-5">UAE Destinations</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                From futuristic cityscapes to timeless desert beauty — discover the finest experiences
                the United Arab Emirates has to offer.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uaeDestinations.map((d) => (
              <AnimatedSection key={d.title}>
                <div
                  tabIndex={0}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-teal/10 focus-within:shadow-2xl focus-within:shadow-brand-teal/10 hover:-translate-y-1.5 focus-within:-translate-y-1.5 transition-all duration-500 outline-none flex flex-col h-full"
                >
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3.5 py-1.5 bg-white/15 backdrop-blur-lg text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/20 shadow-lg">
                        {d.location}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-2.5 py-1 bg-brand-teal/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {d.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <StarRating rating={d.rating} />
                        <span className="text-[11px] font-medium text-white/70">{d.rating}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{d.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {d.highlight && (
                      <span className="inline-flex items-center gap-1 text-brand-teal text-[10px] font-semibold mb-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {d.highlight}
                      </span>
                    )}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{d.desc}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider group-hover:opacity-100 opacity-0 transition-opacity duration-500">Discover More</span>
                      <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-teal transition-all duration-500 group-hover:scale-110 group-focus-within:scale-110 shadow-lg">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan Destinations */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-brand-teal uppercase tracking-[0.25em] text-sm font-semibold mb-5">Discover the North</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-5">Pakistan Destinations</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Home to some of the world's highest peaks, most breathtaking valleys, and untouched
                natural wonders — the northern frontiers of Pakistan await.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pakistanDestinations.map((d) => (
              <AnimatedSection key={d.title}>
                <div
                  tabIndex={0}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-teal/10 focus-within:shadow-2xl focus-within:shadow-brand-teal/10 hover:-translate-y-1.5 focus-within:-translate-y-1.5 transition-all duration-500 outline-none flex flex-col h-full"
                >
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3.5 py-1.5 bg-white/15 backdrop-blur-lg text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/20 shadow-lg">
                        {d.location}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-2.5 py-1 bg-brand-teal/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {d.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <StarRating rating={d.rating} />
                        <span className="text-[11px] font-medium text-white/70">{d.rating}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{d.heading || d.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-base font-bold text-brand-dark mb-2">{d.title}</h4>
                    {d.locationLong && (
                      <p className="text-xs text-gray-400 mb-2 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {d.locationLong}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{d.desc}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider group-hover:opacity-100 opacity-0 transition-opacity duration-500">Discover More</span>
                      <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center group-hover:bg-brand-teal transition-all duration-500 group-hover:scale-110 group-focus-within:scale-110 shadow-lg">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-brand-dark py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-teal)_0%,_transparent_60%)] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <p className="text-brand-teal uppercase tracking-[0.25em] text-sm font-semibold mb-6">Get in Touch</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready for Your <span className="text-white/70">Next Adventure?</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Let Venturis Tourism curate a bespoke travel experience tailored to your dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal/90 transition-all hover:-translate-y-1 shadow-lg shadow-brand-teal/30"
              >
                Plan Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1"
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
