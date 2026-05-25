import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const heroImages = [
  '/partners-hero-1.jpg',
  '/partners-hero-2.jpg',
]

const services = [
  'Strategic Business Partnerships',
  'Joint Ventures & Collaborations',
  'Corporate Advisory Services',
  'Business Development Programs',
  'Networking & Matchmaking',
  'Growth & Expansion Consulting',
]

const highlights = [
  { icon: '🤝', title: 'Collaborative Approach', desc: 'Building meaningful partnerships based on trust and mutual success.' },
  { icon: '📈', title: 'Growth Focused', desc: 'Strategic alliances designed to accelerate business growth.' },
  { icon: '🌐', title: 'Extensive Network', desc: 'Access to a wide network of industry leaders and innovators.' },
]

export default function VenturisPartners() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    heroImages.forEach((src) => { const img = new Image(); img.src = src })
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-brand-dark">
        {heroImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              transform: i === currentIndex ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8 group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-0.5 bg-brand-teal" />
                <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Strategic Alliances</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Partners</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
                Empowering businesses through collaborative partnerships and innovative corporate solutions that drive long-term success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Become a Partner
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {heroImages.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === currentIndex ? 'w-10 bg-brand-teal' : 'w-3 bg-white/20'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ============ WHY VENTURIS PARTNERS ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Why Partner With Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-6 leading-tight">
                Built for Collaboration.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Driven by Results.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Venturis Partners bridges the gap between vision and execution. We connect ambitious businesses with the right opportunities, resources, and strategic alliances needed to accelerate growth and dominate markets.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Partners' },
                  { value: '6', label: 'Divisions' },
                  { value: '15+', label: 'Markets' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy font-number">{s.value}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-3xl p-10 border border-brand-teal/10">
                <div className="space-y-8">
                  {[
                    {
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                      title: 'Collaborative Approach',
                      desc: 'Building meaningful partnerships based on trust and mutual success.',
                    },
                    {
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                      title: 'Growth Focused',
                      desc: 'Strategic alliances designed to accelerate business growth.',
                    },
                    {
                      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: 'Extensive Network',
                      desc: 'Access to a wide network of industry leaders and innovators.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center shrink-0">
                        <span className="text-brand-teal">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-brand-dark font-bold">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR APPROACH ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">How We Work</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Our Partnership Model</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              A proven framework for building impactful, long-term strategic alliances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We learn about your business, goals, and vision to identify the right partnership opportunities.',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'We design a customized collaboration framework aligned with your objectives and market position.',
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'We activate the partnership with dedicated resources, clear milestones, and performance tracking.',
              },
              {
                step: '04',
                title: 'Growth',
                desc: 'We continuously optimize and evolve the partnership to unlock new opportunities and long-term value.',
              },
            ].map((step, i) => (
              <div key={i} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
                <div className="text-5xl font-bold text-white/[0.06] font-number mb-6">{step.step}</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy mb-5" />
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DELIVER ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Services</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">What We Deliver</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive partnership solutions designed to create lasting business impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                title: 'Strategic Partnerships',
                desc: 'Forging high-value alliances that open new markets, expand capabilities, and drive competitive advantage.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: 'Joint Ventures',
                desc: 'Structuring and managing collaborative ventures that combine expertise, resources, and market access.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                title: 'Corporate Advisory',
                desc: 'Expert guidance on corporate structuring, governance, market entry, and strategic business planning.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                title: 'Business Development',
                desc: 'Targeted programs that identify, cultivate, and execute growth opportunities across multiple sectors.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: 'Networking & Matchmaking',
                desc: 'Connecting businesses with the right partners, investors, and industry stakeholders worldwide.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: 'Growth Consulting',
                desc: 'Strategic consulting services that accelerate business expansion and optimize operational performance.',
              },
            ].map((item, i) => (
              <div key={i} className="group bg-brand-light rounded-2xl p-8 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mb-6 group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                  <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Let's Collaborate</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg mb-10">
            Let's discuss how Venturis Partners can help unlock new opportunities and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Start a Partnership
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  )
}
