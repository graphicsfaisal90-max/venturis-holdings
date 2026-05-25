import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const heroImages = [
  '/partners-hero-1.jpg',
  '/partners-hero-2.jpg',
]

const itServices = [
  { title: 'Custom Software Development', desc: 'Tailored, scalable software solutions built with modern architectures to solve complex business challenges and drive operational efficiency.' },
  { title: 'Website Development', desc: 'High-performance, responsive websites with stunning UI, SEO optimization, and seamless user experiences across all devices.' },
  { title: 'Web Applications', desc: 'Feature-rich web applications with robust backends, real-time capabilities, and enterprise-grade security protocols.' },
  { title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for Android and iOS with smooth performance and intuitive interfaces.' },
  { title: 'UI/UX Design', desc: 'Human-centered design experiences combining aesthetics with usability to create engaging digital products.' },
  { title: 'AI & Automation Solutions', desc: 'Intelligent automation systems leveraging machine learning and AI to streamline workflows and enhance decision-making.' },
  { title: 'Cloud Computing Services', desc: 'Scalable cloud infrastructure, migration, and management solutions on AWS, Azure, and Google Cloud platforms.' },
  { title: 'Cybersecurity Solutions', desc: 'Comprehensive security frameworks including threat detection, penetration testing, and compliance management.' },
  { title: 'ERP & CRM Development', desc: 'Integrated enterprise systems that unify operations, customer relationships, and data across your organization.' },
  { title: 'SaaS Product Development', desc: 'End-to-end SaaS platform development from concept to launch with multi-tenant architecture and subscription management.' },
  { title: 'E-Commerce Solutions', desc: 'Full-featured online stores with secure payment gateways, inventory management, and personalized shopping experiences.' },
  { title: 'API Integrations', desc: 'Seamless third-party API integrations and custom API development for connected, interoperable business systems.' },
  { title: 'DevOps & Deployment', desc: 'Automated CI/CD pipelines, containerization, and infrastructure-as-code for reliable, rapid software delivery.' },
  { title: 'IT Consulting', desc: 'Strategic technology consulting to align IT infrastructure with business goals and drive digital maturity.' },
  { title: 'Data Analytics & BI', desc: 'Advanced analytics dashboards, data visualization, and business intelligence tools for data-driven decision making.' },
  { title: 'Blockchain Solutions', desc: 'Decentralized applications, smart contracts, and distributed ledger systems for transparent and secure transactions.' },
  { title: 'Machine Learning & AI', desc: 'Predictive models, natural language processing, and computer vision solutions that learn and adapt to your data.' },
  { title: 'Technical Support', desc: '24/7 managed IT support, system monitoring, and proactive maintenance to keep your business running smoothly.' },
  { title: 'Digital Transformation', desc: 'Comprehensive digital transformation strategies that modernize operations, culture, and customer experiences.' },
  { title: 'Startup Tech Solutions', desc: 'End-to-end technical infrastructure for startups including MVP development, scalable architecture, and growth-ready systems.' },
]

const marketingServices = [
  { title: 'Social Media Marketing', desc: 'Strategic social media campaigns across platforms that build brand awareness, engagement, and loyal communities.' },
  { title: 'Search Engine Optimization', desc: 'Data-driven SEO strategies that improve rankings, drive organic traffic, and increase online visibility.' },
  { title: 'Search Engine Marketing', desc: 'Paid search campaigns with optimized bidding, ad copy, and landing pages for maximum ROI.' },
  { title: 'Google Ads & PPC', desc: 'High-converting pay-per-click campaigns with audience targeting, A/B testing, and performance analytics.' },
  { title: 'Facebook & Instagram Ads', desc: 'Creative ad campaigns on Meta platforms with precise targeting and engaging visual content.' },
  { title: 'Content Marketing', desc: 'Compelling content strategies including blogs, whitepapers, and videos that educate and convert audiences.' },
  { title: 'Branding & Identity', desc: 'Complete brand identity development from logos and color palettes to brand guidelines and voice.' },
  { title: 'Influencer Marketing', desc: 'Strategic influencer partnerships that amplify brand reach and build authentic audience connections.' },
  { title: 'Email Marketing', desc: 'Automated email campaigns with personalized messaging, segmentation, and performance optimization.' },
  { title: 'Video Marketing', desc: 'Professional video content production including promotional videos, testimonials, and explainer animations.' },
  { title: 'YouTube Marketing', desc: 'YouTube channel optimization, content strategy, and ad campaigns to grow your video audience.' },
  { title: 'Performance Marketing', desc: 'Data-focused marketing campaigns optimized for conversions with transparent ROI tracking.' },
  { title: 'Marketing Automation', desc: 'Automated multi-channel marketing workflows that nurture leads and personalize customer journeys.' },
  { title: 'Lead Generation', desc: 'Targeted lead generation campaigns using multi-channel approaches to fill your sales pipeline.' },
  { title: 'Conversion Optimization', desc: 'Data-backed CRO strategies including A/B testing, UX improvements, and funnel optimization.' },
  { title: 'Analytics & Reporting', desc: 'Comprehensive analytics dashboards with actionable insights and regular performance reporting.' },
  { title: 'Creative Graphic Design', desc: 'Stunning visual designs for digital and print including social media, ads, brochures, and presentations.' },
  { title: 'Social Media Management', desc: 'End-to-end social media management including content creation, scheduling, engagement, and growth strategies.' },
  { title: 'E-Commerce Marketing', desc: 'Multi-channel e-commerce marketing strategies driving traffic, conversions, and customer retention.' },
  { title: 'Online Reputation Management', desc: 'Proactive reputation monitoring and management to protect and enhance your brand\'s online presence.' },
]

const itIcons = [
  <svg key="code" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="cloud" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-7.2A3.5 3.5 0 003 15z" /></svg>,
  <svg key="shield" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="device" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  <svg key="database" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  <svg key="chip" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
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

const mktIcons = [
  <svg key="chart" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  <svg key="megaphone" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  <svg key="users" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="globe" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="bulb" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg key="settings" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
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

          <div className="relative mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: 'Projects Delivered', value: '250+' },
                { label: 'Tech Experts', value: '80+' },
                { label: 'Happy Clients', value: '150+' },
                { label: 'Uptime Guarantee', value: '99.9%' },
              ].map((stat, i) => (
                <div key={i} className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] text-center group hover:border-brand-teal/30 hover:bg-white/[0.06] transition-all duration-500">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400 font-number mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {itServices.map((s, i) => (
              <div key={s.title} className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] hover:border-brand-teal/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-blue-500/10 flex items-center justify-center border border-white/[0.06] group-hover:from-brand-teal/20 group-hover:to-blue-500/20 group-hover:scale-110 transition-all duration-500">
                    <span className="text-brand-teal group-hover:text-blue-300 transition-colors duration-500">
                      {itIcons[i % itIcons.length]}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-white/[0.06] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{s.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-4 pt-4 border-t border-white/[0.04]">
                  <span className="text-brand-teal text-xs font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    Explore Service
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VENTURIS DIGITAL MARKETING ============ */}
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Marketing</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
              Venturis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Digital Marketing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Data-driven marketing strategies that amplify your brand, engage your audience, and accelerate measurable growth.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: 'Campaigns Managed', value: '500+' },
                { label: 'Brands Empowered', value: '120+' },
                { label: 'Leads Generated', value: '50K+' },
                { label: 'Avg. ROAS', value: '8.5x' },
              ].map((stat, i) => (
                <div key={i} className="relative bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-6 border border-brand-teal/10 text-center group hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-500">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy font-number mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {marketingServices.map((s, i) => (
              <div key={s.title} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                    <span className="text-brand-teal group-hover:text-white transition-colors duration-500">
                      {mktIcons[i % mktIcons.length]}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-brand-dark/[0.06] font-number ml-auto">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-brand-teal text-xs font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    Explore Service
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            ))}
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
