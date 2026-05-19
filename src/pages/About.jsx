import { Link } from 'react-router-dom'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Team Members' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '6', label: 'Specialized Divisions' },
  { value: '500+', label: 'Happy Clients' },
]

const values = [
  {
    title: 'Innovation',
    desc: 'We embrace creativity and modern solutions to drive continuous growth and industry leadership.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'We conduct business with honesty, transparency, and strong ethical standards in every partnership.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Customer Centricity',
    desc: 'Our customers are at the heart of everything we do, and we strive to exceed their expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  },
  {
    title: 'Agility',
    desc: 'We adapt quickly to changing market demands while maintaining efficiency and excellence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Global Mindset',
    desc: 'We think beyond borders, building international connections and delivering worldwide impact.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'John Venturis',
    role: 'Founder & CEO',
    bio: 'Over 20 years of experience in business development and strategic leadership across multiple industries.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Sarah Ndlovu',
    role: 'Chief Operating Officer',
    bio: 'Expert in operations management with a proven track record of driving operational excellence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Michael Kgosi',
    role: 'Chief Financial Officer',
    bio: 'Financial strategist with deep expertise in corporate finance and investment management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Lebohang Molefe',
    role: 'Director of Operations',
    bio: 'Specializes in facilities management and large-scale project coordination.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const journey = [
  { year: '2010', title: 'Founded', desc: 'Venturis Holdings was established with a vision to create a diversified business group.' },
  { year: '2013', title: 'Expansion', desc: 'Expanded into facilities management and interior solutions, doubling our team.' },
  { year: '2016', title: 'New Horizons', desc: 'Launched Venturis Realtors and Partners divisions, entering new markets.' },
  { year: '2020', title: 'Innovation Drive', desc: 'Embraced digital transformation and sustainable practices across all divisions.' },
  { year: '2024', title: 'Global Reach', desc: 'Extended operations into UAE and international markets with tourism and automotive arms.' },
]

const benefits = [
  {
    title: 'Integrated Solutions',
    desc: 'Six specialized divisions working in synergy to provide end-to-end solutions under one roof.',
  },
  {
    title: 'Proven Track Record',
    desc: 'Over 200 successful projects and 500+ satisfied clients across multiple industries.',
  },
  {
    title: 'Expert Team',
    desc: '50+ highly skilled professionals dedicated to delivering excellence in every engagement.',
  },
  {
    title: 'Client-Centric Approach',
    desc: 'We prioritize understanding your unique needs to deliver tailored, results-driven solutions.',
  },
]

export default function About() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-from via-brand-navy to-brand-to text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="animate-fade-in-down">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-white/60" />
              <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">Who We Are</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Shaping Industries,<br />
              <span className="text-white/80">Building Trust</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 max-w-3xl leading-relaxed mb-10">
              Venturis Holdings is a diversified group of companies committed to delivering exceptional value across interior solutions, facilities management, real estate, and strategic investments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-dark font-semibold rounded-xl hover:bg-brand-light transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-white/10"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white font-number">{s.value}</div>
                  <div className="text-xs text-white/60 uppercase tracking-[0.15em] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Story</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mt-8">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-teal/10">
                <img
                  src="/Building.png"
                  alt="Venturis Holdings Headquarters"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 via-transparent to-brand-teal/10" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/15">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-sm font-bold font-number shrink-0">
                    {new Date().getFullYear() - 2010}+
                  </div>
                  <div className="text-white text-xs leading-tight">
                    <p className="font-semibold">Years of Excellence</p>
                    <p className="text-white/60">Building a legacy of trust since 2010</p>
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
                  Founded with a vision to create a multi-dimensional business group that could serve diverse needs under one umbrella, Venturis Holdings has grown from a single venture into a comprehensive holding company with six specialized divisions.
                </p>
                <p>
                  Our journey began with a simple belief: that excellence is not industry-specific. By bringing together talented teams across interiors, facilities, automotive, real estate, and investments, we've created a synergy that allows us to deliver holistic solutions to our clients.
                </p>
                <p>
                  Today, we stand as a trusted partner to businesses and individuals across South Africa and the UAE, known for our reliability, innovation, and unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Purpose</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-16">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative group hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-teal to-brand-navy rounded-t-2xl" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-navy/15 flex items-center justify-center mb-6 group-hover:from-brand-teal group-hover:to-brand-navy group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8 text-brand-teal group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To drive sustainable growth and create lasting value for our stakeholders by delivering exceptional services across our diversified portfolio of companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative group hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-navy to-brand-teal rounded-t-2xl" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy/15 to-brand-teal/15 flex items-center justify-center mb-6 group-hover:from-brand-navy group-hover:to-brand-teal group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most trusted and respected diversified holding company, setting benchmarks for quality and innovation across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">What We Stand For</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">Our Core Values</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            The principles that guide everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-2 transition-all duration-500 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-navy/0 rounded-2xl group-hover:from-brand-teal/[0.02] group-hover:to-brand-navy/[0.02] transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mb-5 group-hover:from-brand-teal group-hover:to-brand-navy group-hover:text-white transition-all duration-500 text-brand-teal">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors duration-300">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Leadership</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">Our Leadership Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Meet the experienced leaders driving our vision forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-brand-teal/15 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="uppercase tracking-[0.1em] font-medium">{member.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-white/40" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">Why Choose Us</span>
            <span className="w-12 h-0.5 bg-white/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mt-4 mb-16">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Journey</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">Company Timeline</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Key milestones that have shaped our growth.
          </p>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-navy to-brand-teal -translate-x-1/2 hidden sm:block" />
            <div className="space-y-12">
              {journey.map((item, i) => (
                <div key={item.year} className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`hidden sm:block w-1/2 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-3xl font-bold text-brand-teal font-number">{item.year}</span>
                      <h3 className="text-lg font-bold text-brand-dark mt-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy text-white text-xs font-bold shrink-0 relative z-10 -ml-4">
                    {i + 1}
                  </div>
                  <div className="sm:hidden w-full">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-teal to-brand-navy mt-2" />
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 hover:shadow-xl transition-all duration-500">
                        <span className="text-2xl font-bold text-brand-teal font-number">{item.year}</span>
                        <h3 className="text-lg font-bold text-brand-dark mt-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className={`hidden sm:block w-1/2 ${i % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`} />
                </div>
              ))}
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
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
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
