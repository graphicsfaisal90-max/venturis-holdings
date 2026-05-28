import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function VenturisPartners() {
  return (
    <>
      <SEO
        title="Venturis Partners Dubai | Strategic Partnerships by Venturis Holdings LLC UAE"
        description="Venturis Partners Dubai — empowering businesses through collaborative partnerships, joint ventures, corporate advisory, and business development by Venturis Holdings LLC UAE."
        path="/services/partners"
        keywords="Venturis Partners Dubai, Venturis Holdings LLC UAE partnerships, strategic partnerships UAE, joint ventures Dubai, corporate advisory UAE, business development Dubai, business alliances"
      />
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-brand-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/For%20partners%20page%20hero%20section.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />

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
                  { value: '6+', label: 'Divisions' },
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
                  Our digital marketing services include Meta Ads management, social media advertising, lead generation campaigns, performance marketing, content strategy, promotional designs, SEO-focused marketing, video and motion graphics production, and digital transformation strategies designed to increase visibility and customer engagement.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/[0.06] h-full flex flex-col justify-center">
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                  We focus on building strong digital identities for businesses by combining creative storytelling with targeted marketing strategies that generate measurable results, attract potential customers, and strengthen brand recognition across digital platforms.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Social Media', 'Meta Ads', 'SEO', 'Lead Gen', 'Content', 'Branding', 'Video & Motion Graphics', 'Digital Transformation'].map((tag) => (
                    <span key={tag} className="px-3 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs font-semibold uppercase tracking-wider text-center hover:border-brand-teal/30 hover:text-brand-teal transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRIEF STORY ABOUT VENTURIS TECH ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Story</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            A Brief Story <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">About Venturis Tech</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="relative inline-block">
              <svg className="absolute -top-4 -left-8 w-8 h-8 text-brand-teal/15" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-500 text-lg leading-relaxed italic max-w-3xl mx-auto px-6">
                Venturis Tech was established as a forward-thinking technology and digital solutions company delivering innovative, scalable, and future-ready business services across software development, AI, automation, and digital transformation.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                  title: 'Innovation',
                  desc: 'Delivering advanced technology solutions through AI integration, automation, software development, and digital transformation strategies that keep businesses future-focused.',
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: 'Responsibility',
                  desc: 'Committed to professional excellence, ethical business practices, data security, operational reliability, and responsible innovation for long-term client trust.',
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  title: 'Relations',
                  desc: 'Building strong and lasting relationships through transparency, collaboration, reliability, and a customer-focused approach that drives sustainable growth.',
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
                  title: 'Creative Vision',
                  desc: 'Envisioning a leading technology-driven enterprise delivering innovative digital experiences, intelligent solutions, and modern scalable systems for the future.',
                  accent: 'from-brand-teal to-brand-navy',
                },
              ].map((item, i) => (
                <div key={i} className="group relative bg-brand-light rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{item.icon}</span>
                    </div>
                    <span className="text-3xl font-bold text-brand-dark/[0.06] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-brand-dark font-bold text-base mb-3 group-hover:text-brand-teal transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-8 border border-brand-teal/10 text-center">
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
              By combining advanced technology with strategic thinking, Venturis Tech continues to build strong partnerships and deliver impactful solutions that support business growth, transformation, and global competitiveness.
            </p>
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
              Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Tech Portfolio</span>
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
              {
                title: 'Graphic Design & Branding',
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                desc: 'Elevate your brand identity with professional graphic design, creative branding, visual storytelling, logo design, and comprehensive brand guideline development for a cohesive market presence.',
              },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
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

      {/* ============ VENTURIS DOCUMENTATION & PRO SERVICES ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Documentation</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Documentation</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="relative inline-block">
              <svg className="absolute -top-4 -left-8 w-8 h-8 text-brand-teal/15" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-500 text-lg leading-relaxed italic max-w-3xl mx-auto px-6">
                Simplifying complex administrative processes across the UAE — from business setup and visa processing to legal attestation and government coordination.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                  title: 'Business Setup & Licensing',
                  items: ['Company Formation', 'Trade License Processing', 'Business Consultancy'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                  title: 'Visa & Immigration',
                  items: ['Visa Processing', 'Emirates ID Services', 'Immigration Documentation'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: 'Legal & Attestation',
                  items: ['MOFA Attestation', 'Notary & Legal Docs', 'Dubai Courts Support'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  title: 'Government Services',
                  items: ['Tasheel & Tawjeeh', 'Tadbeer Services', 'RTA & Health Docs'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Financial & Support',
                  items: ['VAT & Accounting', 'Translation Services', 'Bank Account Opening'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  title: 'Corporate PRO',
                  items: ['Government Coordination', 'License Renewals', 'Document Clearing'],
                  accent: 'from-brand-teal to-brand-navy',
                },
              ].map((cat, i) => (
                <div key={i} className="group relative bg-brand-light rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{cat.icon}</span>
                    </div>
                    <span className="text-3xl font-bold text-brand-dark/[0.06] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-brand-dark font-bold text-base mb-3 group-hover:text-brand-teal transition-colors duration-300">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-8 border border-brand-teal/10 text-center">
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
              With a strong focus on transparency, efficiency, and customer satisfaction, Venturis Documentation serves as a trusted partner for startups, entrepreneurs, corporates, and individuals seeking smooth and hassle-free documentation solutions in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CLIENT CONSULTATION & TRANSACTION SUPPORT ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Consultation</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Consultation &amp; Transaction Support</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="relative inline-block">
              <svg className="absolute -top-4 -left-8 w-8 h-8 text-brand-teal/15" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-500 text-lg leading-relaxed italic max-w-3xl mx-auto px-6">
                At Venturis, we believe every successful transaction begins with understanding the client's vision, goals, and investment expectations. Our Client Consultation &amp; Transaction Support services are designed to provide personalized guidance, professional market insights, and complete assistance throughout every stage of the process.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                  title: 'Personalized Guidance',
                  items: ['Tailored Recommendations', 'Requirement Analysis', 'Budget & Objective Planning'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                  title: 'Expert Negotiation',
                  items: ['Market Insights', 'Strategic Negotiations', 'Decision-Making Support'],
                  accent: 'from-brand-teal to-brand-navy',
                },
                {
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: 'End-to-End Management',
                  items: ['Documentation & Approvals', 'Coordination & Follow-Up', 'Final Handover Support'],
                  accent: 'from-brand-teal to-brand-navy',
                },
              ].map((cat, i) => (
                <div key={i} className="group relative bg-brand-light rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{cat.icon}</span>
                    </div>
                    <span className="text-3xl font-bold text-brand-dark/[0.06] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-brand-dark font-bold text-base mb-3 group-hover:text-brand-teal transition-colors duration-300">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-8 border border-brand-teal/10 text-center">
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
              From initial consultation and negotiations to documentation, approvals, coordination, and final handover, our team manages every aspect with professionalism, transparency, and efficiency. We focus on creating a smooth, secure, and hassle-free experience while maintaining the highest standards of client service and long-term relationship building.
            </p>
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

          {/* === SISTER COMPANIES === */}
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                title: 'Accounting Services',
                desc: 'Comprehensive accounting solutions including bookkeeping, financial reporting, payroll management, and audit support for businesses of all sizes.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>,
                title: 'Tax Advisory',
                desc: 'Expert tax planning, VAT consultation, corporate tax compliance, and strategic advisory services to optimize tax efficiency and ensure regulatory adherence.',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                title: 'Mortgage Consultancy',
                desc: 'Professional mortgage advisory services covering home loans, property financing, refinancing solutions, and tailored lending strategies for individuals and investors.',
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
        </div>
      </section>

      {/* ============ PRODUCT OVERVIEW ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Trading</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-5">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Overview</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-center text-base sm:text-lg leading-relaxed mb-16">
            Venturis Trading provides a diversified portfolio of products across food commodities, electronics, and recyclable materials, delivering quality, reliability, and efficient global distribution solutions tailored to evolving market demands.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { value: '50+', label: 'Trading Partners' },
              { value: '20+', label: 'Export Markets' },
              { value: '15+', label: 'Years of Excellence' },
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-6 text-center border border-brand-teal/10">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy font-number mb-1">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-[0.15em]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-24">
            {/* === FOODSTUFFS === */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-brand-teal/5">
                  <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80" alt="Food commodities" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                    <span className="text-white text-xs font-semibold">Global Food Supply Chain</span>
                  </div>
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15">
                    <span className="text-white text-xs font-bold">01</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">Spices</h3>
                     <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">Premium Quality Spices</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Venturis Trading supplies high-quality agricultural commodities and food products sourced from trusted global producers. Our foodstuff division ensures freshness, competitive pricing, and reliable supply chains for bulk and retail distribution across international markets.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Spices'].map((item) => (
                    <div key={item} className="group/item flex items-center gap-2.5 bg-brand-light rounded-xl px-4 py-3 border border-gray-100 hover:border-brand-teal/20 hover:shadow-sm hover:shadow-brand-teal/5 hover:-translate-y-0.5 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60 shrink-0 group-hover/item:bg-brand-teal transition-colors duration-300" />
                      <span className="text-gray-600 text-sm font-medium group-hover/item:text-brand-teal transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['ISO Certified', 'HACCP Compliant', 'Direct Sourcing', 'Bulk Supply'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-brand-teal/5 to-brand-navy/5 border border-brand-teal/10 rounded-full text-xs font-semibold text-brand-teal">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* === ELECTRONICS === */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-last lg:order-first space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">Electronics</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">Consumer Electronics & IT Hardware</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Venturis Trading distributes a wide range of consumer electronics and IT hardware from leading global brands. From smartphones and computers to household electronics, we ensure authentic products, competitive wholesale pricing, and timely delivery to retailers and enterprises.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Desktop Computers', 'Laptops & Tablets', 'iPhones & Smartphones', 'Android Devices', 'Small Electronic Goods', 'Household Electronics', 'Gaming Consoles', 'Audio & Wearables'].map((item) => (
                    <div key={item} className="group/item flex items-center gap-2.5 bg-brand-light rounded-xl px-4 py-3 border border-gray-100 hover:border-brand-teal/20 hover:shadow-sm hover:shadow-brand-teal/5 hover:-translate-y-0.5 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60 shrink-0 group-hover/item:bg-brand-teal transition-colors duration-300" />
                      <span className="text-gray-600 text-sm font-medium group-hover/item:text-brand-teal transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Authorized Distributor', 'Brand Warranty', 'Wholesale Pricing', 'Nationwide Delivery'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-brand-teal/5 to-brand-navy/5 border border-brand-teal/10 rounded-full text-xs font-semibold text-brand-teal">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="relative group order-first lg:order-last">
                <div className="absolute -inset-2 bg-gradient-to-br from-brand-navy/10 to-brand-teal/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-brand-teal/5">
                  <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=700&q=80" alt="Electronics" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-brand-dark/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                    <span className="text-white text-xs font-semibold">Premium Quality Electronics</span>
                  </div>
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15">
                    <span className="text-white text-xs font-bold">02</span>
                  </div>
                </div>
              </div>
            </div>

            {/* === RECYCLABLE MATERIALS === */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-brand-teal/5">
                  <img src="/Recycle%20able%20matterials%20images.jpeg" alt="Recyclable materials" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                    <span className="text-white text-xs font-semibold">Sustainability & Recycling</span>
                  </div>
                  <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/15">
                    <span className="text-white text-xs font-bold">03</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">Recyclable Materials</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">Sustainable Resource Recovery & Trading</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Venturis Trading is committed to environmental sustainability through responsible recycling and resource recovery. We trade and process recyclable materials including metals, plastics, and electronic components, supporting circular economy initiatives and helping industries reduce their environmental footprint.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Scrap Metals', 'Copper & Aluminum', 'Electronic Waste (LEDs)', 'Industrial Plastics', 'Recyclable Components', 'Paper & Cardboard', 'Glass Materials', 'Cable Recycling'].map((item) => (
                    <div key={item} className="group/item flex items-center gap-2.5 bg-brand-light rounded-xl px-4 py-3 border border-gray-100 hover:border-brand-teal/20 hover:shadow-sm hover:shadow-brand-teal/5 hover:-translate-y-0.5 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/60 shrink-0 group-hover/item:bg-brand-teal transition-colors duration-300" />
                      <span className="text-gray-600 text-sm font-medium group-hover/item:text-brand-teal transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['Eco-Friendly', 'Zero Waste', 'Compliant Recycling', 'Global Shipping'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-brand-teal/5 to-brand-navy/5 border border-brand-teal/10 rounded-full text-xs font-semibold text-brand-teal">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-8 border border-brand-teal/10 text-center">
            <div className="flex items-center justify-center gap-2 text-brand-teal mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-sm font-semibold uppercase tracking-[0.15em]">Global Reach</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
              Venturis Trading serves clients across multiple continents with a commitment to quality, reliability, and sustainable business practices. From food commodities to electronics and recyclable materials, we deliver value at every stage of the supply chain.
            </p>
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
