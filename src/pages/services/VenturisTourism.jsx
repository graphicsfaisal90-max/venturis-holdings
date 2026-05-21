import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const uaeDestinations = [
  {
    title: 'Ain Dubai',
    location: 'Dubai, UAE',
    locationLong: 'Bluewaters Island, Dubai',
    desc: "The world's largest and tallest observation wheel, lighting up the spectacular Dubai Marina skyline. It offers breathtaking 360-degree views of the city's iconic architecture over the Arabian Gulf, making it an absolute must-visit for luxury travelers seeking a premium night-sky experience.",
    image: "/Ain Dubai (Dubai, UAE).jpg",
  },
  {
    title: 'Luxury Marina Cruise',
    location: 'Dubai, UAE',
    locationLong: 'Dubai Marina / Bluewaters Island',
    desc: "An upscale evening cruise experience gliding past the illuminated backdrop of Ain Dubai. Offering premium dining, vibrant lighting, and unparalleled waterfront views, it highlights the ultimate blend of sophisticated nightlife and coastal relaxation that defines modern Dubai tourism.",
    image: "/Luxury Marina Cruise (Dubai, UAE).jpg",
    highlight: 'Celeste Luxury Yacht',
  },
  {
    title: 'Jebel Jais Mountain Road',
    location: 'Ras Al Khaimah, UAE',
    locationLong: "Jebel Jais — The UAE's highest peak",
    desc: "A spectacular, winding mountain highway cutting through the rugged Hajar Mountains. Perfect for adventure tourism and road-trip enthusiasts, Jebel Jais offers crisp mountain air, panoramic desert-mountain vistas, and thrill-seeking attractions like the world's longest zipline.",
    image: "/Jebel Jais Mountain Road (Ras Al Khaimah, UAE).jpg",
  },
  {
    title: 'Jebel Hafeet Mountain Road',
    location: 'Al Ain, UAE',
    locationLong: 'Jebel Hafeet, Al Ain (Abu Dhabi Emirate)',
    desc: "Renowned as one of the world's greatest driving roads, this winding desert mountain highway snakes up to a height of 1,240 meters. The dramatic contrast between the stark limestone crags by day and the beautifully illuminated, glowing ribbons of asphalt by night offers an unforgettable panoramic viewpoint over the historic garden city of Al Ain.",
    image: "/Jebel Hafeet Mountain Road (Al Ain, UAE).jpg",
  },
  {
    title: 'Dubai Miracle Garden',
    location: 'Dubai, UAE',
    locationLong: 'Dubai Miracle Garden',
    desc: "The world's largest natural flower garden, displaying over 150 million blooming flowers arranged in extravagant, colorful structures. The crown jewel is the record-breaking Emirates A380 aircraft covered entirely in living blossoms — a brilliant testament to Dubai's ability to create grand wonders in the heart of the desert.",
    image: "/Dubai Miracle Garden (Dubai, UAE).jpg",
  },
  {
    title: 'Ras Al Khaimah Desert',
    location: 'Ras Al Khaimah, UAE',
    locationLong: 'Al Wadi Desert, Ras Al Khaimah',
    desc: "A mesmerizing expanse of rolling terracotta sand dunes under a golden sunset. This landscape showcases the traditional, peaceful soul of Arabian travel, offering premium desert safaris, authentic Bedouin heritage experiences, and luxury stargazing away from the bustling city lights.",
    image: "/Ras Al Khaimah Desert (Ras Al Khaimah, UAE).png",
  },
  {
    title: 'Yas Waterworld Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    locationLong: 'Yas Island, Abu Dhabi',
    desc: "Dive into non-stop family fun and adventure at the UAE's iconic mega waterpark. Featuring unique Emirati-themed rides, massive twisting water slides, and thrilling wave pools, it represents the ultimate oasis of entertainment and luxury leisure.",
    image: "/Yas Waterworld Abu Dhabi.jpg",
    heading: 'High-Thrill Splashes at Yas Waterworld',
  },
]

const pakistanDestinations = [
  {
    title: 'Fairy Meadows & Nanga Parbat',
    location: 'Gilgit-Baltistan, Pakistan',
    locationLong: 'Fairy Meadows, Gilgit-Baltistan',
    desc: "A breathtaking, lush green alpine meadow serving as the ultimate vantage point for the killer mountain, Nanga Parbat (8,126 m). The pristine reflection of the snow-capped giant in the still waters, surrounded by dark pine forests, epitomizes raw, untouched mountain wilderness and high-altitude trekking luxury.",
    image: "/Fairy Meadows & Nanga Parbat (Pakistan).jpg",
  },
  {
    title: 'Patriata Cable Car',
    location: 'Punjab, Pakistan',
    locationLong: 'Patriata (New Murree), Punjab',
    desc: "A thrilling, scenic cable car ride gliding over heavily forested mountain ridges and deep valleys. As one of Pakistan's most popular hill-station attractions, it offers tourists a cool alpine climate, panoramic views of the pine-covered hills, and a refreshing escape into nature.",
    image: "/Patriata Cable Car (Murree, Pakistan).jpg",
  },
  {
    title: 'Shangrila Lake View',
    location: 'Skardu, Pakistan',
    locationLong: 'Shangrila Resort Waterfront, Skardu, Gilgit-Baltistan',
    desc: "A stunning, vibrant wide-angle view of the iconic Chinese-style pagoda restaurant sitting directly over Lower Kachura Lake. Flanked by deep green poplars and massive rocky slopes under a vivid blue sky, this destination perfectly blends unique cultural architecture with breathtaking northern Pakistani landscapes.",
    image: "/Shangrila Lake View (Skardu, Pakistan).jpg",
  },
  {
    title: 'Gilgit-Baltistan Peaks',
    location: 'Gilgit-Baltistan, Pakistan',
    locationLong: 'Karakoram Range, Gilgit-Baltistan',
    desc: "Stand in awe before a world of towering granite walls and massive alpine valleys. Home to some of the planet's highest peaks and grandest glaciers, this majestic frontier offers an unmatched destination for luxury mountain expeditions and raw, scenic exploration.",
    image: "/Gilgit-Baltistan Peaks.jpg",
    heading: "Gateway to the World's Highest Peaks",
  },
]

const heroSlides = [
  { image: '/Desert-Safari-Dubai.jpg', alt: 'Dubai Desert Safari' },
  { image: '/Ain Dubai (Dubai, UAE).jpg', alt: 'Ain Dubai Observation Wheel' },
  { image: '/Fairy Meadows & Nanga Parbat (Pakistan).jpg', alt: 'Fairy Meadows Nanga Parbat' },
]

function CountUp({ end, suffix, label }) {
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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  )
}

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
              Venturis Holdings Division
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

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CountUp end={50} suffix="+" label="Destinations" />
              <CountUp end={8} suffix="+" label="Countries" />
              <CountUp end={5000} suffix="+" label="Happy Travelers" />
              <CountUp end={99} suffix="%" label="Satisfaction Rate" />
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
                  src="/Desert-Safari-Dubai.jpg"
                  alt="Desert Safari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-teal text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
            <div>
              <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
                About Our Division
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                Curating Journeys That
                <span className="text-brand-teal"> Inspire &amp; Transform</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Venturis Tourism, we believe every journey should be extraordinary. From the futuristic
                skyline of Dubai to the ancient valleys of Gilgit-Baltistan, we curate premium travel
                experiences that go beyond the ordinary.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you seek the thrill of desert dune bashing, the serenity of alpine meadows, or
                the cultural richness of Arabian heritage — our expert team ensures every detail is
                crafted with white-glove service and local insight.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Premium Curation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Local Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">White-Glove Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-dark">Tailored Itineraries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Destinations Section */}
      <section id="uae" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Explore the Emirates
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              UAE Destinations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From futuristic cityscapes to timeless desert beauty — discover the finest experiences the
              United Arab Emirates has to offer.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uaeDestinations.map((d) => (
              <div
                key={d.title}
                tabIndex={0}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/15 focus-within:shadow-xl focus-within:shadow-brand-teal/15 hover:-translate-y-1.5 focus-within:-translate-y-1.5 transition-all duration-500 outline-none"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 z-[1]" />
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3.5 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                      {d.location}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white leading-tight">{d.heading || d.title}</h3>
                    {d.locationLong && (
                      <p className="text-white/60 text-xs mt-1">{d.locationLong}</p>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  {d.highlight && (
                    <span className="inline-block px-2.5 py-1 bg-brand-teal/10 text-brand-teal text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                      {d.highlight}
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{d.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{d.desc}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider">Discover More</span>
                    <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan Destinations Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-teal uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Discover the North
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Pakistan Destinations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Home to some of the world's highest peaks, most breathtaking valleys, and untouched natural
              wonders — the northern frontiers of Pakistan await.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {pakistanDestinations.map((d, i) => (
              <div
                key={d.title}
                tabIndex={0}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/15 focus-within:shadow-xl focus-within:shadow-brand-teal/15 hover:-translate-y-1.5 focus-within:-translate-y-1.5 transition-all duration-500 outline-none ${i === pakistanDestinations.length - 1 ? 'lg:col-span-2 lg:flex' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === pakistanDestinations.length - 1 ? 'lg:w-2/5 h-56 lg:h-auto' : 'h-56 sm:h-64'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700 z-[1]" />
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3.5 py-1.5 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10 shadow-lg">
                      {d.location}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white leading-tight">{d.heading || d.title}</h3>
                    {d.locationLong && (
                      <p className="text-white/60 text-xs mt-1">{d.locationLong}</p>
                    )}
                  </div>
                </div>
                <div className={`p-6 ${i === pakistanDestinations.length - 1 ? 'lg:w-3/5 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{d.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    <span className="text-brand-teal text-xs font-semibold uppercase tracking-wider">Discover More</span>
                    <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let Venturis Tourism curate a bespoke travel experience tailored to your dreams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-white/10"
            >
              Plan Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
