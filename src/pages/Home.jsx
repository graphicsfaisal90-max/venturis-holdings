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

      {/* ============ CORPORATE STRUCTURE ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-brand-navy/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Corporate Group</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mt-4 mb-5">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Structure</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center text-base sm:text-lg leading-relaxed mb-16">
            Venturis Partners operates as a unified multi-sector business group delivering professional solutions across consultancy, finance, legal services, and strategic business support while maintaining innovation, growth, and operational excellence under one corporate vision.
          </p>

          {/* === PARENT COMPANY === */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-teal to-brand-navy rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 flex items-center justify-center border border-white/10">
                    <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                    VENTURIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">PARTNERS</span>
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm uppercase tracking-[0.25em] mb-1">
                    <span className="w-8 h-px bg-gradient-to-r from-transparent to-brand-teal/50" />
                    <span>Global Parent Company</span>
                    <span className="w-8 h-px bg-gradient-to-r from-brand-navy/50 to-transparent" />
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60" />Est. 2010</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60" />UAE Based</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60" />Multi-Sector</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === DIVISIONS === */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                title: 'Financial Consultancy',
                desc: 'Investment strategies, portfolio planning, risk management, and financial advisory solutions tailored for sustainable business growth.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: 'Asset Management',
                desc: 'Professional asset management services focused on wealth growth, operational efficiency, and long-term investment planning.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: 'Legal Compliance',
                desc: 'Ensuring compliance with local and international legal frameworks through professional documentation and regulatory guidance.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: 'Business Incorporation',
                desc: 'Business setup, company structuring, licensing support, and operational establishment services for startups and enterprises.',
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-b from-brand-teal/0 via-brand-navy/0 to-brand-teal/0 group-hover:from-brand-teal/30 group-hover:via-brand-navy/20 group-hover:to-brand-teal/30 rounded-2xl blur-sm transition-all duration-700 opacity-0 group-hover:opacity-100" />
                <div className="relative h-full bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.07] p-6 group-hover:border-white/20 group-hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/15 to-brand-navy/15 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{item.icon}</span>
                    </div>
                    <span className="text-2xl font-bold text-white/[0.04] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/30 to-brand-navy/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            ))}
          </div>

          {/* === SISTER CONCERNS === */}
          <div>
            <div className="flex items-center gap-4 justify-center mb-3">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.25em]">Sister Concerns</span>
              <span className="w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                  name: 'Accounting Services',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>,
                  name: 'Tax Advisory',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                  name: 'Mortgage Consultancy',
                },
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-brand-teal/20 to-brand-navy/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.06] px-5 py-4 flex items-center gap-4 group-hover:border-white/15 transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-teal/20 group-hover:to-brand-navy/20 transition-all duration-500">
                      <span className="text-white/40 group-hover:text-brand-teal transition-colors duration-500">{item.icon}</span>
                    </div>
                    <span className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors duration-300">{item.name}</span>
                    <svg className="w-3.5 h-3.5 text-white/20 ml-auto group-hover:text-brand-teal group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
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
