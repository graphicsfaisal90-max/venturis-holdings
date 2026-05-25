import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'

const services = [
  {
    title: 'Venturis Interiors',
    tagline: 'Design & Fit-Out',
    desc: 'Creating elegant, modern, and functional interior spaces with premium craftsmanship.',
    path: '/services/interiors',
    image: '/interiors-hero.jpeg',
  },
  {
    title: 'Venturis Facilities Management',
    tagline: 'Maintenance & Operations',
    desc: 'Delivering professional maintenance and integrated facility solutions for modern businesses.',
    path: '/services/facilities',
    image: '/Facilirtes.jpeg',
  },
  {
    title: 'Venturis Realtors',
    tagline: 'Real Estate',
    desc: 'Connecting clients with premium properties and trusted real estate expertise.',
    path: '/services/realtors',
    image: '/realtors.jpeg',
  },
  {
    title: 'Venturis Partners',
    tagline: 'Strategic Alliances',
    desc: 'Empowering businesses through collaborative partnerships and corporate solutions.',
    path: '/services/partners',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
  {
    title: 'Venturis Wheels',
    tagline: 'Automotive Solutions',
    desc: 'Premium automotive services and mobility solutions with professionalism and innovation.',
    path: '/services/wheels',
    image: '/wheels2.jpg',
  },
  {
    title: 'Venturis Tourism',
    tagline: 'Desert Safaris & Travel',
    desc: 'Thrilling desert adventures, luxury stays, and premium travel experiences across the UAE.',
    path: '/services/tourism',
    image: '/Desert-Safari-Dubai.jpg',
  },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">About Venturis Holdings</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mt-8">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-teal/10">
                <img
                  src="/Building.png"
                  alt="Venturis Holdings"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-brand-teal/10" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/15">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-sm font-bold font-number">
                    {(new Date().getFullYear() - 2010).toString()}+
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Years of</p>
                    <p className="text-white/70 text-xs">Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-brand-teal/15 to-brand-navy/15 rounded-3xl -z-10 hidden lg:block" />
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-brand-teal/10 to-brand-navy/5 rounded-3xl -z-10 hidden lg:block" />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark leading-tight mb-8">
                Built for Excellence,<br />
                <span className="text-brand-teal">Driven by Innovation</span>
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p className="text-lg font-medium text-brand-dark/70 border-l-4 border-brand-teal pl-5 italic">
                  "We don't just build businesses — we build lasting partnerships and a legacy of trust."
                </p>
                <p>
                  Venturis Holdings is a UAE-born multi-division corporate group redefining excellence across Facilities Management, Interiors, Realtors, Partners, and Wheels. We blend innovation, operational precision, and premium design to deliver business solutions that set new industry standards.
                </p>
                <p>
                  Rooted in integrity and driven by strategic growth, our team crafts meaningful experiences through quality craftsmanship and attention to detail.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
                {[
                  { value: '200+', label: 'Projects' },
                  { value: '50+', label: 'Experts' },
                  { value: '6', label: 'Divisions' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-brand-dark font-number">{item.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-[0.15em] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group/btn"
                >
                  <span>Discover Our Story</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-teal/30 text-brand-teal font-semibold rounded-xl hover:bg-brand-light hover:border-brand-teal transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">What We Do</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Six specialized divisions, one standard of excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.path}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-teal/20 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-125 group-hover:saturate-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent group-hover:from-black/30 group-hover:via-black/5 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 via-brand-navy/0 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-base font-bold font-number group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-navy group-hover:border-brand-teal group-hover:shadow-lg group-hover:shadow-brand-teal/30 transition-all duration-300">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/10 group-hover:bg-white/20 group-hover:border-white/20 transition-all duration-300">
                      {s.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{s.desc}</p>
                  <div className="flex items-center gap-2 text-brand-teal text-sm font-semibold group/link">
                    <span>Explore Service</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SWOT ANALYSIS ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Analysis</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mt-4 mb-4">SWOT Analysis</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg text-center mb-16">
            Strategic assessment of our brand's position across all divisions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-3xl opacity-60" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Strengths</h3>
                  <span className="text-emerald-400/60 text-xs uppercase tracking-wider">Internal &amp; Positive</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Diversified business portfolio across real estate, IT, digital marketing, consultancy, and documentation services',
                  'Strong integration of technology and AI-driven solutions',
                  'Multi-sector business expertise under one brand vision',
                  'Professional client-focused and scalable business approach',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed group/li">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 mt-2 shrink-0 group-hover/li:bg-emerald-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06] hover:border-red-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-t-3xl opacity-60" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Weaknesses</h3>
                  <span className="text-red-400/60 text-xs uppercase tracking-wider">Internal &amp; Negative</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Growing brand still building wider international recognition',
                  'Expansion across multiple industries requires structured scaling',
                  'Dependence on continuous innovation and market adaptation',
                  'Competitive industries require constant digital advancement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed group/li">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2 shrink-0 group-hover/li:bg-red-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-3xl opacity-60" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Opportunities</h3>
                  <span className="text-blue-400/60 text-xs uppercase tracking-wider">External &amp; Positive</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Increasing demand for AI and digital transformation services',
                  'Growing UAE real estate and business consultancy market',
                  'Expansion opportunities in global IT and marketing sectors',
                  'Potential strategic partnerships and investment collaborations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed group/li">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-2 shrink-0 group-hover/li:bg-blue-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.06] hover:border-amber-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-3xl opacity-60" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Threats</h3>
                  <span className="text-amber-400/60 text-xs uppercase tracking-wider">External &amp; Negative</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'High competition across technology and real estate industries',
                  'Rapidly changing digital and AI trends',
                  'Economic and regulatory market fluctuations',
                  'Constant need for innovation and operational upgrades',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed group/li">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-2 shrink-0 group-hover/li:bg-amber-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PESTLE ANALYSIS ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Analysis</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">PESTLE Analysis</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Macro-environmental factors shaping our strategic direction.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Political',
                desc: 'Favorable UAE business environment and international investment opportunities support business growth and expansion.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Economic',
                desc: 'Rapid economic diversification across technology, real estate, and digital industries creates strong market potential.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Social',
                desc: 'Increasing digital adoption and modern consumer behavior drive demand for innovative business solutions.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Technological',
                desc: 'AI integration, automation, digital marketing, and smart applications enhance operational efficiency and customer engagement.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
              },
              {
                title: 'Legal',
                desc: 'Strong compliance, documentation, and professional consultancy services ensure secure and reliable business operations.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Environmental',
                desc: 'Sustainable business strategies and future-focused development strengthen long-term growth and brand value.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mb-6 group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                  <div className="text-brand-teal group-hover:text-white transition-colors duration-500">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FUTURE OUTLOOK ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Vision</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mt-4 mb-4">Future Outlook</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg text-center mb-16">
            Our roadmap toward global leadership and transformative innovation.
          </p>

          {/* Vision Card */}
          <div className="relative bg-gradient-to-br from-brand-teal/10 via-brand-navy/10 to-transparent backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-brand-teal/20 mb-12 text-center group hover:border-brand-teal/40 transition-all duration-500">
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-navy rounded-full" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-teal/20 group-hover:scale-110 transition-all duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Vision for the Future</h3>
            <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
              Venturis envisions becoming a multi-sector global enterprise delivering innovative solutions across real estate, technology, consultancy, and digital transformation industries.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Global Business Expansion',
                desc: 'Build strong international partnerships and business collaborations across emerging markets.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'AI & Digital Innovation',
                desc: 'Integrate advanced AI systems, automation, and intelligent technologies into business operations.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Strategic Partnerships',
                desc: 'Develop long-term collaborations with investors, enterprises, and industry leaders.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sustainable Growth',
                desc: 'Focus on scalable, future-oriented, and sustainable business development strategies.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center border border-white/[0.06] group-hover:from-brand-teal group-hover:to-brand-navy group-hover:scale-110 transition-all duration-500">
                    <div className="text-brand-teal group-hover:text-white transition-colors duration-500">{item.icon}</div>
                  </div>
                  <span className="text-4xl font-bold text-white/[0.04] font-number">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Highlighted Statement */}
          <div className="relative mt-16 text-center">
            <div className="relative inline-block max-w-4xl mx-auto">
              <svg className="absolute -top-6 -left-6 w-12 h-12 text-brand-teal/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl sm:text-2xl font-light text-white/80 leading-relaxed italic max-w-4xl mx-auto px-8">
                "Venturis is not just building businesses — it is building the future of global innovation and business transformation."
              </p>
              <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-brand-teal/20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-from via-brand-navy to-brand-to text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-brand-light text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how Venturis Holdings can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-white/10"
            >
              Contact Us Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
