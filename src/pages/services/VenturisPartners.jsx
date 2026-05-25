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

      {/* ============ VENTURIS IT SOLUTIONS ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0d1525] to-[#0a0e1a]">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Technology</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">IT Solutions</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Future-ready technology services engineered to accelerate your digital transformation and drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { value: '250+', label: 'Projects Delivered' },
              { value: '80+', label: 'Tech Experts' },
              { value: '150+', label: 'Happy Clients' },
              { value: '99.9%', label: 'Uptime Guarantee' },
            ].map((s, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] text-center group hover:border-brand-teal/30 hover:bg-white/[0.06] transition-all duration-500">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400 font-number mb-1">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-[0.15em]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <div className="relative">
              <div className="sticky top-28">
                <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Our Capabilities</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                  Engineering the Future<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Through Code &amp; Cloud</span>
                </h3>
                <p className="text-white/40 leading-relaxed mb-8">
                  From custom software to AI-driven automation, we build end-to-end technology ecosystems that scale with your ambition and secure your digital future.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Software', 'AI', 'Cloud', 'Security', 'Mobile', 'Data'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs font-semibold uppercase tracking-wider hover:border-brand-teal/30 hover:text-brand-teal transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: 'Software & Web Development',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                  items: ['Custom Software Development', 'Website & Web Applications', 'SaaS Product Development', 'API Integrations & DevOps'],
                },
                {
                  title: 'Mobile & UI/UX Design',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                  items: ['Android & iOS App Development', 'Cross-Platform Solutions', 'UI/UX Design & Prototyping', 'App Store Deployment'],
                },
                {
                  title: 'AI, Cloud & Automation',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-7.2A3.5 3.5 0 003 15z" /></svg>,
                  items: ['AI & Machine Learning Integration', 'Cloud Migration & Infrastructure', 'Process Automation', 'Data Analytics & BI'],
                },
                {
                  title: 'Cybersecurity & Enterprise Systems',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  items: ['Cybersecurity & Compliance', 'ERP & CRM Development', 'Blockchain Solutions', 'IT Consulting & Support'],
                },
                {
                  title: 'E-Commerce & Digital Platforms',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
                  items: ['Full-Stack E-Commerce Solutions', 'Payment Gateway Integration', 'Inventory & Order Management', 'Marketplace Development'],
                },
                {
                  title: 'Digital Transformation & Consulting',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                  items: ['Digital Transformation Strategy', 'Startup Tech Solutions', 'Technical Support & Maintenance', 'IT Infrastructure Consulting'],
                },
              ].map((group, i) => (
                <div key={i} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-500">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/10 to-blue-500/10 flex items-center justify-center border border-white/[0.06] group-hover:from-brand-teal/20 group-hover:to-blue-500/20 group-hover:scale-110 transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-blue-300 transition-colors duration-500">{group.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/50 text-sm group/li">
                        <span className="w-1 h-1 rounded-full bg-brand-teal/60 group-hover/li:bg-brand-teal transition-colors shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-brand-teal/5 via-blue-500/5 to-transparent backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-brand-teal/10 text-center group hover:border-brand-teal/30 transition-all duration-500">
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-brand-teal to-blue-400 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Build Something Extraordinary?</h3>
            <p className="text-white/40 max-w-2xl mx-auto mb-8">Let's discuss how our technology solutions can transform your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              Start Your Tech Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ VENTURIS DIGITAL MARKETING ============ */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-br from-brand-dark via-[#0f1120] to-brand-dark">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-brand-navy rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Marketing</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Digital Marketing</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Data-driven marketing strategies that amplify your brand, engage your audience, and accelerate measurable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <div className="space-y-5 order-2 lg:order-1">
              {[
                {
                  title: 'Social Media & Advertising',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
                  items: ['Social Media Marketing & Management', 'Facebook & Instagram Advertising', 'Influencer & Community Marketing', 'YouTube & Video Marketing'],
                },
                {
                  title: 'Search & Performance Marketing',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                  items: ['SEO & Search Engine Optimization', 'Google Ads & PPC Campaigns', 'Search Engine Marketing (SEM)', 'Performance & Conversion Marketing'],
                },
                {
                  title: 'Branding & Content Strategy',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                  items: ['Brand Identity & Design', 'Content Marketing & Strategy', 'Creative Graphic Design', 'Email & Marketing Automation'],
                },
                {
                  title: 'Lead Generation & Analytics',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  items: ['Multi-Channel Lead Generation', 'Conversion Rate Optimization', 'Analytics & Performance Reporting', 'E-Commerce Marketing Strategy'],
                },
              ].map((group, i) => (
                <div key={i} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-500">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center border border-white/[0.06] group-hover:from-brand-teal/20 group-hover:to-brand-navy/20 group-hover:scale-110 transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-brand-teal transition-colors duration-500">{group.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/50 text-sm group/li">
                        <span className="w-1 h-1 rounded-full bg-brand-teal/60 group-hover/li:bg-brand-teal transition-colors shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="sticky top-28">
                <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Growth Engine</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                  Amplify Your Brand.<br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Dominate Your Market.</span>
                </h3>
                <p className="text-white/40 leading-relaxed mb-8">
                  We craft data-backed marketing ecosystems that connect your brand with the right audience, at the right time, through the right channels.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '500+', label: 'Campaigns' },
                    { value: '120+', label: 'Brands' },
                    { value: '50K+', label: 'Leads' },
                    { value: '8.5x', label: 'Avg. ROAS' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/[0.03] backdrop-blur-xl rounded-xl p-4 border border-white/[0.06] text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy font-number">{s.value}</div>
                      <div className="text-white/40 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Social', 'SEO', 'PPC', 'Branding', 'Content', 'Analytics'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-xs font-semibold uppercase tracking-wider hover:border-brand-teal/30 hover:text-brand-teal transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-brand-teal/5 via-brand-navy/5 to-transparent backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-brand-teal/10 text-center group hover:border-brand-teal/30 transition-all duration-500">
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let's Grow Your Brand Together</h3>
            <p className="text-white/40 max-w-2xl mx-auto mb-8">Partner with us to create marketing campaigns that deliver real, measurable results.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
              Start Your Campaign
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {highlights.map((h) => (
              <div key={h.title} className="bg-brand-light rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">What We Offer</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Venturis Partners is dedicated to forging strategic alliances that create value. We connect businesses with the right partners, opportunities, and resources to drive innovation, expand reach, and achieve sustainable growth in today's competitive landscape.
              </p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-light to-brand-light rounded-2xl p-8 h-80 flex items-center justify-center">
              <span className="text-brand-dark/20 text-8xl font-bold">P</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Let's Grow Together</h2>
          <p className="text-gray-600 mb-8">Explore partnership opportunities with Venturis Partners today.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-navy transition-all">Become a Partner</Link>
        </div>
      </section>
    </>
  )
}
