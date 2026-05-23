import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const FOLDER = '/Venturis%20Realtors'

const screenshots = {
  s1: `${FOLDER}/Screenshot%202026-05-23%20225927.png`,
  s2: `${FOLDER}/Screenshot%202026-05-23%20230006.png`,
  s3: `${FOLDER}/Screenshot%202026-05-23%20230017.png`,
  s4: `${FOLDER}/Screenshot%202026-05-23%20230033.png`,
  s5: `${FOLDER}/Screenshot%202026-05-23%20230053.png`,
  s6: `${FOLDER}/Screenshot%202026-05-23%20230108.png`,
  s7: `${FOLDER}/Screenshot%202026-05-23%20230122.png`,
  s8: `${FOLDER}/Screenshot%202026-05-23%20230303.png`,
  s9: `${FOLDER}/Screenshot%202026-05-23%20230322.png`,
  s10: `${FOLDER}/Screenshot%202026-05-23%20230344.png`,
  s11: `${FOLDER}/Screenshot%202026-05-23%20230355.png`,
  s12: `${FOLDER}/Screenshot%202026-05-23%20230422.png`,
  s13: `${FOLDER}/Screenshot%202026-05-23%20231319.png`,
  s14: `${FOLDER}/Screenshot%202026-05-23%20231332.png`,
  s15: `${FOLDER}/Screenshot%202026-05-23%20231348.png`,
  s16: `${FOLDER}/Screenshot%202026-05-23%20231358.png`,
  s17: `${FOLDER}/Screenshot%202026-05-23%20231413.png`,
  s18: `${FOLDER}/Screenshot%202026-05-23%20231430.png`,
  s19: `${FOLDER}/Screenshot%202026-05-23%20231445.png`,
  s20: `${FOLDER}/Screenshot%202026-05-23%20231505.png`,
  s21: `${FOLDER}/Screenshot%202026-05-23%20231549.png`,
  s22: `${FOLDER}/Screenshot%202026-05-23%20231600.png`,
  s23: `${FOLDER}/Screenshot%202026-05-23%20231609.png`,
}

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Sales & Rentals',
    desc: 'Luxury villas, apartments, and townhouses across Dubai, Abu Dhabi, and the Northern Emirates.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Real Estate',
    desc: 'Prime office spaces, retail outlets, and industrial properties in sought-after business districts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Off-Plan Investments',
    desc: 'Exclusive access to premier off-plan developments with detailed ROI analysis and payment plans.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Property Management',
    desc: 'Comprehensive solutions covering tenant relations, maintenance, rent collection, and legal compliance.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Valuation & Advisory',
    desc: 'Data-driven property valuations, market analysis, and investment advisory services.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Development Consulting',
    desc: 'End-to-end consulting from land acquisition and feasibility to project marketing and sales strategy.',
  },
]

const properties = [
  { title: 'Marina Waterfront Penthouse', location: 'Dubai Marina', price: 'AED 18.5M', beds: 4, baths: 5, area: '4,200 sqft', image: screenshots.s1 },
  { title: 'Royal Palm Beach Villa', location: 'Palm Jumeirah', price: 'AED 42M', beds: 6, baths: 7, area: '8,500 sqft', image: screenshots.s2 },
  { title: 'Downtown Sky Residence', location: 'Downtown Dubai', price: 'AED 8.9M', beds: 3, baths: 3, area: '2,100 sqft', image: screenshots.s3 },
  { title: 'Desert Luxury Estate', location: 'Ras Al Khaimah', price: 'AED 15.2M', beds: 5, baths: 6, area: '6,800 sqft', image: screenshots.s4 },
  { title: 'Emirates Hills Mansion', location: 'Emirates Hills', price: 'AED 65M', beds: 7, baths: 9, area: '12,000 sqft', image: screenshots.s5 },
  { title: 'Yas Island Waterfront', location: 'Abu Dhabi', price: 'AED 3.2M', beds: 2, baths: 3, area: '1,800 sqft', image: screenshots.s6 },
  { title: 'Al Reem Garden Villa', location: 'Abu Dhabi', price: 'AED 6.8M', beds: 4, baths: 4, area: '4,500 sqft', image: screenshots.s7 },
  { title: 'JLT Executive Suite', location: 'JLT, Dubai', price: 'AED 4.5M', beds: 2, baths: 2, area: '1,900 sqft', image: screenshots.s8 },
  { title: 'Arabian Ranches Family Home', location: 'Dubai South', price: 'AED 5.2M', beds: 5, baths: 4, area: '5,200 sqft', image: screenshots.s9 },
]

const locations = [
  { city: 'Dubai', desc: 'The global city of the future — home to the world\'s tallest tower, largest mall, and most innovative real estate market with unparalleled investment opportunities.', image: screenshots.s13, count: '2,500+', tag: 'Global Investment Hub' },
  { city: 'Abu Dhabi', desc: 'The UAE capital blends cultural richness with visionary urban planning. Saadiyat Island, Yas Island, and Al Reem Island represent the most prestigious addresses.', image: screenshots.s14, count: '1,200+', tag: 'Capital of Culture' },
  { city: 'Ras Al Khaimah', desc: 'The fastest-growing emirate for luxury living. With pristine beaches, mountain landscapes, and world-class resorts offering exceptional value and natural beauty.', image: screenshots.s15, count: '800+', tag: 'Nature\'s Playground' },
]

const whyUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'RERA Certified & Regulated',
    desc: 'Fully licensed by the Real Estate Regulatory Agency, ensuring every transaction meets the highest legal and ethical standards.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Deep Local Intelligence',
    desc: 'Decades of combined experience across all seven emirates with real-time market data and analytics.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Exclusive Off-Plan Access',
    desc: 'Priority access to pre-launch developments from UAE\'s leading master developers including Emaar and Aldar.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'White-Glove Concierge',
    desc: 'From visa assistance and financing to handover and fit-out — every detail of your journey handled seamlessly.',
  },
]

const process = [
  {
    step: '01', title: 'Discovery',
    desc: 'We understand your vision, budget, and requirements through an in-depth consultation.',
    outcome: 'Personalized Brief',
  },
  {
    step: '02', title: 'Curation',
    desc: 'Our experts handpick properties matching your criteria with private viewings and virtual tours.',
    outcome: 'Premium Shortlist',
  },
  {
    step: '03', title: 'Negotiation',
    desc: 'Skilled negotiators work to secure the best terms, pricing, and conditions — with complete transparency.',
    outcome: 'Best Terms Secured',
  },
  {
    step: '04', title: 'Transaction',
    desc: 'We coordinate legal documentation, due diligence, mortgage processing, and RERA registration.',
    outcome: 'Hassle-Free Closing',
  },
  {
    step: '05', title: 'Beyond Handover',
    desc: 'Post-handover support, property management, and ongoing advisory to maximize your investment.',
    outcome: 'Lifetime Partnership',
  },
]

const testimonials = [
  {
    quote: 'Venturis made our dream of owning a Palm Jumeirah villa a reality. Their knowledge of Dubai\'s luxury market and personalized approach was extraordinary.',
    name: 'Abdullah Al Maktoum', title: 'Private Investor', initials: 'AM',
  },
  {
    quote: 'As an international investor, I needed a partner who understood Abu Dhabi\'s market. Venturis provided comprehensive data and secured an exceptional off-plan deal.',
    name: 'Jennifer Hayes', title: 'Portfolio Manager', initials: 'JH',
  },
  {
    quote: 'The service was concierge-class. From selection to handover, the team managed everything flawlessly. Our RAK investment exceeded all expectations.',
    name: 'Dr. Saeed Al Qasimi', title: 'Executive Chairman', initials: 'SQ',
  },
  {
    quote: 'I\'ve worked with many firms, but Venturis stands apart. Their market analysis was spot-on, negotiation skills impressive, and after-sales support exceptional.',
    name: 'Priya Sharma', title: 'CEO, Sterling Holdings', initials: 'PS',
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
            if (start >= end) { setCount(end); clearInterval(timer) }
            else { setCount(start) }
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
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{count}{suffix}</div>
      <div className="text-white/60 text-xs uppercase tracking-[0.2em]">{label}</div>
    </div>
  )
}

export default function VenturisRealtors() {
  const [activeTest, setActiveTest] = useState(0)
  const [testPaused, setTestPaused] = useState(false)

  useEffect(() => {
    if (testPaused) return
    const timer = setInterval(() => setActiveTest((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [testPaused])

  return (
    <>
      {/* === HERO: Full-screen video with black overlay === */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
            <source src={`${FOLDER}/Hero%20Section%20Video.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-widest uppercase mb-10 transition-colors group">
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6 animate-fade-in-down">
                <span className="w-16 h-0.5 bg-brand-teal" />
                <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.25em]">Venturis Holdings</span>
              </div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.92] mb-6 animate-fade-in-down delay-100 tracking-tight">
                Venturis
                <span className="block text-4xl sm:text-5xl md:text-6xl font-light text-white/70 mt-3">Realtors</span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed mb-10 animate-fade-in-down delay-200">
                Luxury real estate across the United Arab Emirates. Connecting discerning clients
                with the finest properties in Dubai, Abu Dhabi, and beyond.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-lg hover:bg-brand-light transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                  Explore Properties
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="#properties" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                  View Listings
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* === STATS: Dark overlapping strip === */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F1A24] rounded-2xl -mt-16 shadow-2xl p-8 md:p-10 border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <CountUp end={3500} suffix="+" label="Properties Listed" />
              <CountUp end={15} suffix="+" label="Years in UAE" />
              <CountUp end={1200} suffix="+" label="Happy Clients" />
              <CountUp end={98} suffix="%" label="Satisfaction" />
            </div>
          </div>
        </div>
      </section>

      {/* === SPLIT INTRO: Image + Text side by side === */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={screenshots.s10} alt="Luxury Property" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-brand-teal rounded-2xl flex items-center justify-center shadow-xl hidden md:flex">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-[10px] text-white/80 uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">About</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-6 leading-tight">
                Redefining Luxury Real Estate <span className="text-brand-teal">in the UAE</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Venturis Realtors combines deep local expertise with a modern, client-first approach
                to real estate. Whether you're buying your dream villa on Palm Jumeirah, investing
                in Abu Dhabi's thriving off-plan market, or seeking a tranquil beachfront retreat
                in Ras Al Khaimah — our team delivers exceptional results.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Every transaction is guided by transparency, market intelligence, and an uncompromising
                commitment to our clients' success.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  RERA Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data-Driven Advisory
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Global Clientele
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === GALLERY GRID: Full-bleed image cards with no gap === */}
      <section id="properties" className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              A curated selection of exceptional homes and prime investment opportunities
              across the United Arab Emirates.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <div
                key={p.title}
                className={`group relative overflow-hidden rounded-2xl shadow-lg bg-white ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative ${i === 0 ? 'h-[500px] sm:h-[600px]' : 'h-[300px] sm:h-[360px]'} overflow-hidden`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-white/10">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-white/60 text-xs uppercase tracking-[0.15em] mb-1">{p.location}</p>
                    <h3 className={`font-bold text-white mb-2 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{p.title}</h3>
                    <div className="flex items-center gap-4 text-white/70 text-xs">
                      <span>{p.beds} Beds</span>
                      <span className="w-px h-3 bg-white/20" />
                      <span>{p.baths} Baths</span>
                      <span className="w-px h-3 bg-white/20" />
                      <span>{p.area}</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-xl font-bold text-white">{p.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES: Dark minimal section === */}
      <section className="py-24 sm:py-32 bg-[#0F1A24] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Every aspect of the UAE real estate market covered under one roof with
              expert guidance at every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === UAE LOCATIONS: Full image cards === */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Presence</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-4">
              Our UAE Footprint
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Unrivalled access to prime properties across the Emirates' most dynamic and desirable markets.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="group relative rounded-2xl overflow-hidden shadow-xl h-[460px]">
                <img src={loc.image} alt={loc.city} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-3 py-1 bg-brand-teal/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-full">
                    {loc.count} Properties
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-[10px] font-semibold text-brand-teal uppercase tracking-[0.2em]">{loc.tag}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-3">{loc.city}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY US: Clean grid with image backdrop === */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={screenshots.s11} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0F1A24]/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Why Venturis</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Built on Trust, Driven by Results
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              What sets us apart is our unwavering commitment to integrity, market mastery,
              and exceptional outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-7 hover:bg-white/[0.06] transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS: Clean horizontal steps === */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              A proven journey from consultation to key handover — and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-px" />
            {process.map((p, i) => (
              <div key={p.step} className="relative pb-10 last:pb-0">
                <div className={`md:flex items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg bg-brand-teal text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {p.step}
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">{p.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                      <span className="inline-block text-[10px] font-semibold text-brand-teal uppercase tracking-wider bg-brand-teal/10 px-3 py-1 rounded-full">
                        {p.outcome}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 items-center">
                    <div className={`text-7xl font-bold text-gray-100 select-none ${i % 2 === 1 ? 'md:text-right md:w-full' : ''}`}>
                      {p.step}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-4 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hear from the clients we've had the privilege of serving across the UAE.
            </p>
          </div>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setTestPaused(true)}
            onMouseLeave={() => setTestPaused(false)}
          >
            <div className="relative min-h-[300px]">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                    idx === activeTest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-teal/15 flex items-center justify-center text-brand-teal font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-dark">{t.name}</div>
                        <div className="text-sm text-gray-500">{t.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTest(i)}
                  className={`rounded-full transition-all duration-500 ${
                    i === activeTest ? 'bg-brand-teal w-6 h-2' : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CTA: Full image background with dark overlay === */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={screenshots.s12} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-[0.25em]">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Find Your Perfect Property<br />in the UAE
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're searching for a luxury villa in Dubai, a beachfront apartment in Ras Al Khaimah,
            or a prime investment in Abu Dhabi — our expert team is ready to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-lg hover:bg-brand-light transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              Talk to an Advisor
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/services" className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
