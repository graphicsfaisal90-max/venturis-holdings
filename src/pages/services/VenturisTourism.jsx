import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

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

export default function VenturisTourism() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Desert Safari 2.jpg"
            alt="Desert Safari"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[20s]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-white rounded-full blur-3xl" />
        </div>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-white/10">
            Ultra Premium
          </span>
          <span className="px-4 py-1.5 bg-brand-teal/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
            Since 2016
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-6 transition-colors group tracking-wider uppercase"
          >
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="max-w-4xl mx-auto">
            <p className="text-brand-teal uppercase tracking-[0.3em] text-sm font-medium mb-5 animate-fade-in-down">
              Venturis Holdings Division
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 animate-fade-in-down delay-100">
              Venturis
              <span className="block text-4xl sm:text-5xl md:text-6xl font-light text-white/80 mt-3">
                Curated Travel Experiences
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-down delay-200">
              From the dazzling skyline of Dubai to the majestic peaks of the Karakoram — discover
              extraordinary destinations crafted for the discerning luxury traveler.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/40 hover:-translate-y-1"
              >
                <span>Book Your Journey</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#uae"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a href="#stats" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-10 md:p-14 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <CountUp end={50} suffix="+" label="Destinations" icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } />
              <CountUp end={8} suffix="+" label="Countries" icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              } />
              <CountUp end={5000} suffix="+" label="Happy Travelers" icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              } />
              <CountUp end={99} suffix="%" label="Satisfaction" icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              } />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-brand-teal/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-brand-navy/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-teal/10">
                  <img
                    src="/Desert Safari 2.jpg"
                    alt="Desert Safari"
                    className="w-full h-[500px] sm:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/30 via-transparent to-brand-teal/5" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/15">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-lg font-bold font-number shrink-0">
                      8+
                    </div>
                    <div className="text-white text-xs leading-tight">
                      <p className="font-semibold text-sm">Years of Excellence</p>
                      <p className="text-white/60">Crafting premium travel since 2016</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-brand-teal/15 to-brand-navy/15 rounded-3xl -z-10 hidden lg:block" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                  <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">About Our Division</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight mb-8">
                  Curating Journeys That
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">
                    Inspire &amp; Transform
                  </span>
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed">
                  <p className="text-lg font-medium text-brand-dark/70 border-l-4 border-brand-teal pl-5 italic">
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

                <div className="grid grid-cols-2 gap-4 mt-10">
                  {experiences.slice(0, 4).map((exp) => (
                    <div key={exp.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 hover:bg-brand-light/50 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark">{exp.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* UAE Destinations Section */}
      <section id="uae" className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-4 justify-center mb-4">
                <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Explore the Emirates</span>
                <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
                UAE Destinations
              </h2>
              <p className="text-gray-500 leading-relaxed">
                From futuristic cityscapes to timeless desert beauty — discover the finest experiences
                the United Arab Emirates has to offer.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uaeDestinations.map((d, i) => (
              <AnimatedSection key={d.title}>
                <div
                  tabIndex={0}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-brand-teal/15 focus-within:shadow-2xl focus-within:shadow-brand-teal/15 hover:-translate-y-2 focus-within:-translate-y-2 transition-all duration-500 outline-none"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 z-[1]" />
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between">
                      <span className="inline-block px-3.5 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                        {d.location}
                      </span>
                      {d.tag && (
                        <span className="inline-block px-3 py-1.5 bg-brand-teal/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full shadow-lg">
                          {d.tag}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white leading-tight">{d.heading || d.title}</h3>
                      {d.locationLong && (
                        <p className="text-white/60 text-xs mt-1.5 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {d.locationLong}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <StarRating rating={d.rating} />
                        <span className="text-[11px] font-semibold text-gray-400">{d.rating}</span>
                      </div>
                      {d.highlight && (
                        <span className="inline-block px-2.5 py-1 bg-brand-teal/10 text-brand-teal text-[9px] font-bold uppercase tracking-wider rounded-full">
                          {d.highlight}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">{d.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{d.desc}</p>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500">
                      <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider">Discover More</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Pakistan Destinations Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-4 justify-center mb-4">
                <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
                <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Discover the North</span>
                <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
                Pakistan Destinations
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Home to some of the world's highest peaks, most breathtaking valleys, and untouched
                natural wonders — the northern frontiers of Pakistan await.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {pakistanDestinations.map((d, i) => (
              <AnimatedSection key={d.title}>
                <div
                  tabIndex={0}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-brand-teal/15 focus-within:shadow-2xl focus-within:shadow-brand-teal/15 hover:-translate-y-2 focus-within:-translate-y-2 transition-all duration-500 outline-none ${
                    i === pakistanDestinations.length - 1 ? 'lg:col-span-2 lg:flex' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === pakistanDestinations.length - 1
                        ? 'lg:w-2/5 h-56 lg:h-auto'
                        : 'h-56 sm:h-64'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 z-[1]" />
                    <img
                      src={d.image}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between">
                      <span className="inline-block px-3.5 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                        {d.location}
                      </span>
                      {d.tag && (
                        <span className="inline-block px-3 py-1.5 bg-brand-teal/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full shadow-lg">
                          {d.tag}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-3 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white leading-tight">{d.heading || d.title}</h3>
                      {d.locationLong && (
                        <p className="text-white/60 text-xs mt-1.5 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {d.locationLong}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`p-6 ${
                      i === pakistanDestinations.length - 1
                        ? 'lg:w-3/5 lg:flex lg:flex-col lg:justify-center'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <StarRating rating={d.rating} />
                      <span className="text-[11px] font-semibold text-gray-400">{d.rating}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-dark mb-2">{d.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500">
                      <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider">Discover More</span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-28 bg-gradient-to-br from-brand-from via-brand-navy to-brand-to text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-4 justify-center mb-6">
              <span className="w-12 h-0.5 bg-white/30" />
              <span className="text-sm font-semibold text-white/70 uppercase tracking-[0.2em]">Get in Touch</span>
              <span className="w-12 h-0.5 bg-white/30" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ready for Your
              <br />
              <span className="text-white/80">Next Adventure?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Let Venturis Tourism curate a bespoke travel experience tailored to your dreams.
              From the deserts of Arabia to the peaks of the Karakoram — your journey begins here.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark font-semibold rounded-xl hover:bg-brand-light transition-all hover:-translate-y-1 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
              >
                <span>Plan Your Journey</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all hover:-translate-y-1"
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
