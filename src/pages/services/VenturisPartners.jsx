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

      {/* ============ VENTURIS IT SOLUTIONS ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Technology</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-6">Venturis IT Solutions</h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-light rounded-3xl p-8 sm:p-12 border border-gray-100 mb-12">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Venturis IT Solutions delivers modern technology services designed to help businesses build a strong digital presence and improve operational efficiency. We specialize in website development, custom web applications, mobile application development, AI-powered solutions, graphic designing, branding, video editing, and digital transformation services tailored to modern business needs.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Our expertise includes responsive website design, eCommerce platforms, UI/UX design, creative branding, social media creatives, promotional videos, motion graphics, and intelligent AI systems including AI agents, automation workflows, and smart business tools. We also develop mobile and AI-integrated applications that help businesses stay innovative and competitive in the evolving digital world.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At Venturis IT Solutions, we combine creativity, technology, and innovation to deliver scalable and professional digital experiences that help brands grow with confidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Website & Web Applications',
                'Mobile App Development',
                'AI-Powered Solutions',
                'Graphic Design & Branding',
                'Video & Motion Graphics',
                'Digital Transformation',
              ].map((tag) => (
                <div key={tag} className="group bg-brand-light rounded-xl px-5 py-4 border border-gray-100 hover:border-brand-teal/30 hover:shadow-md hover:shadow-brand-teal/5 transition-all duration-500 text-center">
                  <span className="text-gray-500 text-sm font-semibold group-hover:text-brand-teal transition-colors duration-300">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ VENTURIS DIGITAL MARKETING ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute bottom-10 right-1/3 w-[600px] h-[600px] bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Marketing</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mt-4 mb-6">Venturis Digital Marketing</h2>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/[0.06] h-full">
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6">
                  Venturis Digital Marketing helps businesses grow their online presence through strategic marketing, creative content, and result-driven campaigns. We provide complete social media management solutions including content creation, daily posting, audience engagement, account management, brand positioning, and digital advertising across major platforms.
                </p>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                  Our digital marketing services include Meta Ads management, social media advertising, lead generation campaigns, performance marketing, content strategy, promotional designs, SEO-focused marketing, and online brand awareness campaigns designed to increase visibility and customer engagement.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/[0.06] h-full flex flex-col justify-center">
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                  We focus on building strong digital identities for businesses by combining creative storytelling with targeted marketing strategies that generate measurable results, attract potential customers, and strengthen brand recognition across digital platforms.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Social Media', 'Meta Ads', 'SEO', 'Lead Gen', 'Content', 'Branding'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs font-semibold uppercase tracking-wider hover:border-brand-teal/30 hover:text-brand-teal transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VENTURIS TECH SERVICE PORTFOLIO ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-black to-brand-dark">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-brand-navy rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-dark rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Portfolio</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Tech Service Portfolio</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              A curated suite of modern technology services engineered to drive digital excellence and business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Digital Marketing & SEO',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
                desc: 'Boost your online visibility and business growth with advanced SEO strategies, targeted digital campaigns, social media marketing, and performance-driven advertising solutions designed to maximize engagement and conversions.',
              },
              {
                title: 'CRM Solutions',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
                desc: 'Streamline customer relationships and business operations with intelligent CRM systems that improve workflow automation, customer engagement, sales tracking, and data management efficiency.',
              },
              {
                title: 'AI & BI Applications',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
                desc: 'Empower your business with AI-powered automation and business intelligence solutions that deliver predictive insights, smart analytics, process optimization, and data-driven decision-making.',
              },
              {
                title: 'Data Analysis & Reporting',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                desc: 'Transform complex data into meaningful insights through advanced analytics, interactive dashboards, performance tracking, and visually engaging reporting systems for smarter business strategies.',
              },
              {
                title: 'Survey & Inspection Reports',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                desc: 'Generate accurate and professional survey and inspection reports with structured documentation, real-time data collection, compliance tracking, and detailed analytical summaries.',
              },
            ].map((item, i) => (
              <div key={i} className={`group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500 ${i === 4 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center border border-white/[0.06] group-hover:from-brand-teal/20 group-hover:to-brand-navy/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-teal/10 transition-all duration-500">
                    <span className="text-brand-teal group-hover:text-brand-teal transition-colors duration-500">{item.icon}</span>
                  </div>
                  <span className="text-3xl font-bold text-white/[0.05] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-5 pt-5 border-t border-white/[0.04]">
                  <span className="inline-flex items-center gap-1.5 text-brand-teal text-xs font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Explore Service
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
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
