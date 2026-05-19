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
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'We conduct business with honesty, transparency, and strong ethical standards in every partnership.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Customer Centricity',
    desc: 'Our customers are at the heart of everything we do, and we strive to exceed their expectations.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
  },
  {
    title: 'Agility',
    desc: 'We adapt quickly to changing market demands while maintaining efficiency and excellence.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Global Mindset',
    desc: 'We think beyond borders, building international connections and delivering worldwide impact.',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-navy to-brand-from/90" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85"
            alt="Modern city skyline"
            className="w-full h-full object-cover transition-all duration-[2s] ease-out scale-105 hover:scale-110 saturate-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-navy/80 to-brand-from/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-brand-teal rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="animate-fade-in-down">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-[0.2em]">Who We Are</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Shaping Industries,<br />
              <span className="text-white">Building Trust</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-3xl leading-relaxed mb-10">
              Venturis Holdings is a diversified group of companies committed to delivering exceptional value across transport, heavy equipment, logistics, construction support, and industrial solutions.
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
        <div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white font-number">{s.value}</div>
                  <div className="text-xs text-white/80 uppercase tracking-[0.15em] mt-1">{s.label}</div>
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

      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Purpose</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Vision & Mission
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Clear direction and purpose driving everything we do.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl hover:shadow-brand-teal/15 hover:-translate-y-1.5 transition-all duration-500">
              <div className="flex-1 relative p-10 sm:p-12">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-navy/[0.03] to-transparent rounded-bl-full" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">Vision Statement</h3>
                    <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.15em] mt-1">Our North Star</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become a globally recognized and innovation-driven company originating from the UAE, delivering excellence across transport, heavy equipment, logistics, construction support, and industrial solutions while creating long-term value for clients and partners worldwide.
                </p>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-brand-navy to-brand-teal">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl hover:shadow-brand-teal/15 hover:-translate-y-1.5 transition-all duration-500">
              <div className="flex-1 relative p-10 sm:p-12">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">Mission Statement</h3>
                    <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.15em] mt-1">Our Purpose in Action</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our mission is to provide reliable, efficient, and high-quality transport and heavy equipment services through advanced technology, skilled expertise, and customer-focused solutions. We aim to build strong partnerships, maintain operational excellence, ensure safety standards, and contribute to sustainable growth across the UAE and international markets.
                </p>
              </div>
              <div className="relative h-2 bg-gradient-to-r from-brand-teal to-brand-navy">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {values.slice(0, 2).map((v) => (
              <div
                key={v.title}
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-brand-teal/20 hover:-translate-y-2 transition-all duration-700 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-navy" />
                <div className="relative p-10 sm:p-12 flex flex-col items-center text-center flex-1">
                  <div className="relative mb-7">
                    <div className="absolute inset-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal border border-brand-teal/10 group-hover:from-brand-teal group-hover:to-brand-navy group-hover:text-white group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-brand-teal/30 transition-all duration-700">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed flex-1">{v.desc}</p>
                </div>
                <div className="relative mx-8 mb-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-brand-teal/40 transition-all duration-700" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(2, 5).map((v) => (
              <div
                key={v.title}
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-brand-teal/20 hover:-translate-y-2 transition-all duration-700 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-navy" />
                <div className="relative p-7 sm:p-8 flex flex-col items-center text-center flex-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal border border-brand-teal/10 group-hover:from-brand-teal group-hover:to-brand-navy group-hover:text-white group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-brand-teal/30 transition-all duration-700">
                      {v.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed flex-1">{v.desc}</p>
                </div>
                <div className="relative mx-7 mb-7 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-brand-teal/40 transition-all duration-700" />
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
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-brand-teal/20 hover:-translate-y-2 transition-all duration-700"
              >
                <div className="relative h-28 bg-gradient-to-br from-brand-teal to-brand-navy overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                </div>
                <div className="relative px-6 pb-6">
                  <div className="flex justify-center -mt-14 mb-4">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl shadow-brand-teal/20 group-hover:shadow-2xl group-hover:shadow-brand-teal/40 transition-all duration-700">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="w-6 h-px bg-gradient-to-r from-brand-teal to-brand-navy" />
                      <span className="text-brand-teal text-xs font-semibold uppercase tracking-[0.15em]">{member.role}</span>
                      <span className="w-6 h-px bg-gradient-to-r from-brand-navy to-brand-teal" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-brand-teal hover:to-brand-navy hover:text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-500 cursor-pointer group/icon">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 2s-7.64-.37-10.66 4.34c-1.19 1.86-1.44 4.16-1.32 5.66-2.71.26-5.96-.71-8.02-2.66 0 0-3.31 5.65 4.33 9.66-1.73 1.06-5.33 1.5-5.33 1.5s3.13 4.49 10.66 4.49c9.5 0 14.34-8.31 14.34-16.98 0-.26-.02-.52-.05-.78C20.94 4.58 22 2 22 2z"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-brand-teal hover:to-brand-navy hover:text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-500 cursor-pointer group/icon">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 4.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-brand-teal hover:to-brand-navy hover:text-white hover:shadow-lg hover:shadow-brand-teal/20 transition-all duration-500 cursor-pointer group/icon">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                  </div>
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
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-3xl sm:text-4xl font-bold leading-tight">
                Built Different.<br />
                <span className="text-white/70">Built Better.</span>
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                At Venturis Holdings, we don't just deliver services — we forge partnerships that drive lasting success. Our multi-division structure, experienced team, and unwavering commitment to quality make us the preferred choice for businesses across the UAE and beyond.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold">
                      {n}
                    </div>
                  ))}
                </div>
                <div className="text-white/50 text-sm">
                  <span className="text-white font-semibold">500+</span> Trusted Clients
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-2xl" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-navy group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-teal/30 transition-all duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-white/10 font-number">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
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
