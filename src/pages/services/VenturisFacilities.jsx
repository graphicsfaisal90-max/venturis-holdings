import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

const policyCategories = [
  {
    id: 'vision',
    title: 'Vision & Mission Alignment',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'from-brand-teal to-brand-navy',
    points: [
      'Ensure that all HR policies align with the overarching vision and mission of the group of companies.',
      'Each policy should reflect the group\u2019s values and culture, while allowing for flexibility to cater to each company\u2019s unique needs.',
    ],
  },
  {
    id: 'recruitment',
    title: 'Recruitment & Hiring',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    color: 'from-brand-navy to-brand-steel',
    points: [
      'Job Postings: Standardize the process for creating and posting job openings across all companies.',
      'Hiring Process: Establish clear guidelines for interviews, selection, and background checks.',
      'Diversity and Inclusion: Ensure there is a commitment to creating a diverse and inclusive workplace across all companies.',
    ],
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-brand-teal to-brand-from',
    points: [
      'Create a group-wide onboarding process that introduces new hires to the group\u2019s values, policies, and benefits.',
      'Customize onboarding for specific companies within the group based on their operations, teams, and culture.',
    ],
  },
  {
    id: 'classification',
    title: 'Employee Classification',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'from-brand-steel to-brand-navy',
    points: [
      'Define employee types across the group (e.g., full-time, part-time, temporary, contractor).',
      'Outline expectations for each classification, including benefits and responsibilities.',
    ],
  },
  {
    id: 'conduct',
    title: 'Workplace Conduct & Expectations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-brand-from to-brand-teal',
    points: [
      'Develop a code of conduct that is applicable to all companies, ensuring consistency in ethical behavior and workplace culture.',
      'Address specific behavioral expectations, such as communication, teamwork, and professional development.',
    ],
  },
  {
    id: 'safety',
    title: 'Health & Safety',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01" />
      </svg>
    ),
    color: 'from-brand-navy to-brand-dark',
    points: [
      'Outline a group-wide health and safety policy that applies across all workplaces.',
      'Establish guidelines for reporting accidents, safety training, and employee well-being initiatives.',
    ],
  },
  {
    id: 'relations',
    title: 'Employee Relations & Conflict Resolution',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-brand-teal to-brand-dark',
    points: [
      'Provide a clear procedure for resolving workplace disputes, with a process that ensures fairness and consistency across all companies.',
      'Encourage an open-door policy where employees can express concerns.',
    ],
  },
  {
    id: 'training',
    title: 'Training & Development',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-brand-navy to-brand-from',
    points: [
      'Offer group-wide training programs for leadership development, technical skills, and personal growth.',
      'Allow for company-specific training needs that support business objectives and employee career paths.',
    ],
  },
  {
    id: 'privacy',
    title: 'Data Privacy & Confidentiality',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'from-brand-dark to-brand-navy',
    points: [
      'Establish clear policies for handling employee data, ensuring compliance with data protection laws (such as GDPR or local regulations).',
      'Outline employee confidentiality agreements and the handling of sensitive company information.',
    ],
  },
  {
    id: 'engagement',
    title: 'Employee Engagement & Communication',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'from-brand-steel to-brand-teal',
    points: [
      'Create a communication strategy to ensure employees are regularly updated on group-wide initiatives and changes.',
      'Implement employee engagement surveys to assess satisfaction and identify areas for improvement.',
    ],
  },
  {
    id: 'collaboration',
    title: 'Cross-Company Collaboration',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'from-brand-from to-brand-navy',
    points: [
      'Encourage collaboration and knowledge sharing across companies in the group.',
      'Implement cross-company projects or programs to promote engagement between different teams.',
    ],
  },
  {
    id: 'compliance',
    title: 'Legal Compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-brand-dark to-brand-steel',
    points: [
      'Ensure that all HR policies comply with local labor laws for each location the group operates in.',
      'Regularly update policies to reflect changes in the law.',
    ],
  },
]

const categoryIcons = {
  vision: '🎯',
  recruitment: '👥',
  onboarding: '🚀',
  classification: '📋',
  conduct: '⚖️',
  safety: '🛡️',
  relations: '🤝',
  training: '📚',
  privacy: '🔒',
  engagement: '💬',
  collaboration: '🔗',
  compliance: '✅',
}

const quickStats = [
  { value: '12', label: 'HR Policy Categories', suffix: '' },
  { value: '24', label: 'Group Companies Covered', suffix: '+', prefix: '/' },
  { value: '100', label: 'Compliance Standard', suffix: '%', prefix: '' },
  { value: '6', label: 'Countries of Operation', suffix: '+' },
]

export default function VenturisFacilities() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [completedPolicies, setCompletedPolicies] = useState([])
  const [activeRelation, setActiveRelation] = useState(null)

  const toggleCategory = (id) => {
    setActiveCategory(activeCategory === id ? null : id)
  }

  const toggleComplete = (id) => {
    setCompletedPolicies((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return policyCategories
    const q = searchQuery.toLowerCase()
    return policyCategories.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.points.some((p) => p.toLowerCase().includes(q))
    )
  }, [searchQuery])

  const progressPercent = Math.round(
    (completedPolicies.length / policyCategories.length) * 100
  )

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/Construction-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="animate-fade-in-down">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-0.5 bg-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-[0.2em]">HR & Operations</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Venturis Facilities<br />
              <span className="text-white">Management</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl leading-relaxed mb-10">
              Comprehensive HR policies and operational frameworks designed to align with our group vision, ensure legal compliance, and foster a culture of excellence across all companies.
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
              <a
                href="#policies"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                View Policies
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {quickStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white font-number">
                    {s.prefix}{s.value}{s.suffix}
                  </div>
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
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Framework</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Vision & Mission Alignment
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Every HR policy is anchored to our group vision, ensuring consistency across all companies while allowing operational flexibility.
          </p>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-teal via-brand-navy to-brand-from" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand-teal/[0.04] to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-navy/[0.04] to-transparent rounded-tr-full pointer-events-none" />

              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Vision & Culture Framework</h3>
                    <p className="text-brand-teal text-sm font-medium">How our policies connect vision to everyday practice</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="relative pl-8 lg:pl-10 border-l-2 border-brand-teal/20">
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-brand-teal -translate-x-[7px] ring-4 ring-brand-teal/10" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal">Vision Alignment</span>
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3">Strategic Direction</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      All HR policies are designed to support the group&apos;s overarching vision of becoming a globally recognized innovation-driven company. Every policy reflects our core values while providing the flexibility needed to address each company&apos;s unique operational requirements.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Anchored to group vision
                    </div>
                  </div>

                  <div className="relative pl-8 lg:pl-10 border-l-2 border-brand-navy/20">
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-brand-navy -translate-x-[7px] ring-4 ring-brand-navy/10" />
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy/10 to-brand-teal/10 flex items-center justify-center text-brand-navy">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy">Culture & Values</span>
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3">Unified Identity</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Our policies cultivate a consistent culture of integrity, innovation, and customer-centricity across all group companies. While each division retains its unique character, shared values create a unified identity that strengthens our collective brand and employee experience.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Consistent across all divisions
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    Group-wide consistency
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                    Company-specific flexibility
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-from" />
                    Values-driven culture
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                    Quarterly policy reviews
                  </span>
                </div>
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
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Expertise</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
          Specialized Workforce Solutions
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg text-center mb-16">
            Venturis Facilities Management provides certified, trained, and experienced personnel across every operational domain. From hospitality to heavy construction, our workforce is our strength.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group min-h-[320px] sm:min-h-[380px]">
              <img
                src="/hospitality.jpg"
                alt="Hospitality Services"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.701 2.701 0 002 15.546" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Division 01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Hospitality Management</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                  Premium hospitality staff trained in guest relations, concierge services, event coordination, and luxury hotel operations. We set the standard for exceptional guest experiences across the UAE.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group min-h-[320px] sm:min-h-[380px]">
              <img
                src="/construction-workers.jpg"
                alt="Construction Workforce"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Division 02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Construction Workforce</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Skilled laborers, site supervisors, and safety-certified construction personnel for large-scale commercial and residential projects.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group min-h-[280px] sm:min-h-[320px]">
              <img
                src="/hotel-management.jpg"
                alt="Hotel Management"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Division 03</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Hotel Operations</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  End-to-end hotel management staff including front desk, housekeeping, F&amp;B, and administrative personnel for luxury properties.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group min-h-[280px] sm:min-h-[320px]">
              <img
                src="/cleaning-staff.jpg"
                alt="Cleaning Services"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Division 04</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Cleaning & Hygiene</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Professional cleaning crews trained in industrial sanitation, deep cleaning protocols, and eco-friendly hygiene solutions for all facility types.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden group min-h-[280px] sm:min-h-[320px]">
              <img
                src="/admin-staff.jpg"
                alt="Administrative Staff"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Division 05</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Administrative Staff</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Qualified administrative professionals for office management, data entry, reception, HR support, and executive assistance across corporate environments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group min-h-[280px] sm:min-h-[320px] bg-gradient-to-br from-brand-teal to-brand-navy flex items-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">Integrated Services</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">Comprehensive Workforce Management</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  Venturis Facilities Management delivers end-to-end workforce solutions across all five divisions. From recruitment and training to deployment and performance monitoring, we ensure every client receives staff that meet the highest standards of professionalism, safety, and reliability.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Certified &amp; Trained
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Fully Insured
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    UAE-Wide Deployment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recruitment-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Talent Acquisition</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Recruitment & Hiring
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-12">
            Standardized recruitment processes that attract top talent while ensuring fairness, compliance, and diversity across all group companies.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Our recruitment framework ensures every hire meets the highest standards of professionalism, competency, and cultural fit, creating a unified talent acquisition approach across the entire group.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team recruitment collaboration"
                className="rounded-2xl shadow-xl w-full h-52 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Job Postings Standardization</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standardized job description templates and posting procedures ensure consistency in how roles are communicated across all group companies, reducing time-to-hire and improving candidate quality.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg shadow-brand-navy/20 mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Structured Hiring Process</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A clear, step-by-step hiring process from requisition approval through offer management ensures consistency, fairness, and full regulatory compliance.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center shadow-lg shadow-brand-steel/20 mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Interview & Selection Guidelines</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standardized interview frameworks, scoring rubrics, and selection criteria ensure objective candidate evaluation and consistent hiring decisions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center shadow-lg shadow-brand-from/20 mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Background Verification</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive background checks and credential verification processes protect the group while ensuring we hire only qualified and trustworthy professionals.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center shadow-lg shadow-brand-teal/20 mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our commitment to building diverse teams is embedded in every recruitment stage, from unbiased job descriptions to inclusive interview panels and equitable selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="onboarding-section" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Employee Experience</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Onboarding Process
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            A structured, welcoming onboarding experience that introduces new hires to our group values, policies, and culture while setting them up for long-term success.
          </p>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-navy to-brand-from" />
                <div className="relative pl-16 pb-12">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
                    01
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Employee Welcome</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      New hires receive a personalized welcome package with all onboarding materials, company swag, and access credentials before their first day.
                    </p>
                  </div>
                </div>
                <div className="relative pl-16 pb-12">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
                    02
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Company Policies Introduction</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      A comprehensive introduction to group policies, code of conduct, benefits enrollment, and compliance requirements.
                    </p>
                  </div>
                </div>
                <div className="relative pl-16 pb-12">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
                    03
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Team Integration</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Structured introductions to team members, department heads, and key stakeholders across the organization.
                    </p>
                  </div>
                </div>
                <div className="relative pl-16 pb-12">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
                    04
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Training & Orientation</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Role-specific training sessions combined with group-wide orientation covering our vision, values, and operational framework.
                    </p>
                  </div>
                </div>
                <div className="relative pl-16">
                  <div className="absolute left-3 w-7 h-7 rounded-full bg-gradient-to-br from-brand-teal to-brand-dark flex items-center justify-center text-white text-xs font-bold shadow-lg ring-4 ring-white">
                    05
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
                    <h3 className="text-lg font-bold text-brand-dark mb-2">Department-Specific Setup</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Tailored onboarding for each company within the group, addressing unique operational needs and team dynamics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office workspace"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-from/20 to-brand-teal/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classification-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Workforce Structure</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Employee Classification
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Clear definitions and expectations for each employee classification type across the group, ensuring consistent treatment and full regulatory compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-teal/[0.03] to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal font-bold text-sm shrink-0 ml-auto">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Full-Time Employees</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Permanent employment contracts with defined working hours
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Comprehensive benefits including health insurance and retirement plans
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Full access to training, development, and career progression programs
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Entitled to annual leave, sick leave, and statutory benefits
                </li>
              </ul>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-navy/[0.03] to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-navy/10 to-brand-steel/10 flex items-center justify-center text-brand-navy font-bold text-sm shrink-0 ml-auto">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Part-Time Staff</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Flexible working hours with pro-rated benefits
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Prorated leave entitlements and statutory benefits
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Access to training programs based on work schedule
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Clear expectations for availability and performance
                </li>
              </ul>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-steel/[0.03] to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-steel/10 to-brand-navy/10 flex items-center justify-center text-brand-steel font-bold text-sm shrink-0 ml-auto">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Temporary Staff</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-steel mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Fixed-term contracts with defined start and end dates
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-steel mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Role-specific orientation and safety training
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-steel mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Compliance with local labor laws for temporary workers
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-steel mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Clear scope of work and performance expectations
                </li>
              </ul>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-from/[0.03] to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center shadow-lg shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-from/10 to-brand-teal/10 flex items-center justify-center text-brand-from font-bold text-sm shrink-0 ml-auto">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Contractors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-from mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Independent contractor agreements with defined deliverables
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-from mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Self-managed tax and insurance obligations
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-from mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Project-based engagement with clear milestones
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-brand-from mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Access to relevant facilities and resources as needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="conduct-section" className="py-24 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-from text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-white/40" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">Workplace Culture</span>
            <span className="w-12 h-0.5 bg-white/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mt-4 mb-4">
            Workplace Conduct & Expectations
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg text-center mb-16">
            Establishing a culture of professionalism, respect, and continuous improvement across all group companies.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Code of Conduct</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A comprehensive code of conduct applicable across all companies, ensuring consistency in ethical behavior, integrity, and workplace professionalism.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Communication Standards</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Clear expectations for professional communication across all channels, promoting transparency, respect, and constructive dialogue.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Teamwork & Collaboration</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Fostering a collaborative environment where cross-functional teams work together effectively toward shared organizational goals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Workplace Behavior</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Guidelines for ethical decision-making, conflict of interest management, and maintaining the highest standards of professional integrity.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Development</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Commitment to continuous learning and career growth through structured development programs and regular performance feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="safety-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Workplace Safety</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Health & Safety
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Comprehensive health and safety policies that protect our people and ensure full compliance across all workplace environments.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Workplace safety"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-brand-teal/20 to-brand-navy/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-brand-from/20 to-brand-teal/20 rounded-2xl -z-10" />
              <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">Safety Policies</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-16">
                  Group-wide safety standards applicable across all workplaces, including risk assessments, PPE requirements, and emergency procedures.
                </p>
              </div>
              <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg shadow-brand-navy/20 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">Accident Reporting</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-16">
                  Clear procedures for reporting workplace incidents, accidents, and near-misses with defined escalation paths and investigation protocols.
                </p>
              </div>
              <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center shadow-lg shadow-brand-steel/20 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">Employee Wellbeing</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-16">
                  Wellbeing initiatives including mental health support, ergonomic assessments, and wellness programs to support our people.
                </p>
              </div>
              <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center shadow-lg shadow-brand-from/20 shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">Safety Training</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-16">
                  Mandatory safety training programs for all employees, including first aid certification, fire safety, and role-specific hazard awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="relations-section" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Workplace Harmony</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Employee Relations & Conflict Resolution
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Fostering a positive workplace environment through transparent communication, fair dispute resolution, and unwavering support for our employees.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500 overflow-hidden">
              <button
                onClick={() => setActiveRelation(activeRelation === 'open-door' ? null : 'open-door')}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-teal/10 transition-transform duration-500 ${activeRelation === 'open-door' ? 'scale-110' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-dark">Open-Door Policy</h3>
                </div>
                <svg className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-500 ${activeRelation === 'open-door' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeRelation === 'open-door' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    We maintain an open-door policy that encourages employees at all levels to voice concerns, share feedback, and seek guidance from leadership without fear of retaliation. This approach fosters transparency and trust across the entire organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500 overflow-hidden">
              <button
                onClick={() => setActiveRelation(activeRelation === 'dispute' ? null : 'dispute')}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-navy/10 transition-transform duration-500 ${activeRelation === 'dispute' ? 'scale-110' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-dark">Workplace Dispute Resolution</h3>
                </div>
                <svg className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-500 ${activeRelation === 'dispute' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeRelation === 'dispute' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    Our structured dispute resolution process ensures that workplace conflicts are addressed fairly and promptly. The process includes informal mediation, formal grievance filing, investigation, and resolution with clear timelines and appeal rights.
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500 overflow-hidden">
              <button
                onClick={() => setActiveRelation(activeRelation === 'support' ? null : 'support')}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-steel/10 transition-transform duration-500 ${activeRelation === 'support' ? 'scale-110' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 8v4m0 4h.01" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-dark">Employee Support</h3>
                </div>
                <svg className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-500 ${activeRelation === 'support' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeRelation === 'support' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive employee support programs including confidential counseling services, employee assistance programs, and access to ombudspersons who provide impartial guidance on workplace matters.
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500 overflow-hidden">
              <button
                onClick={() => setActiveRelation(activeRelation === 'fairness' ? null : 'fairness')}
                className="w-full flex items-center gap-4 p-6 text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-from/10 transition-transform duration-500 ${activeRelation === 'fairness' ? 'scale-110' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-brand-dark">Fairness & Transparency</h3>
                </div>
                <svg className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-500 ${activeRelation === 'fairness' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeRelation === 'fairness' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">
                    All policies and procedures are applied consistently across the group regardless of position, tenure, or location. Transparent decision-making processes ensure employees understand how outcomes are reached.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Growth & Learning</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Training & Development
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Empowering our people with world-class training programs that drive professional growth, technical excellence, and leadership capability.
          </p>

          <div className="relative rounded-3xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
              alt="Professional training session"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Featured Program</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Group-Wide Learning Initiative</h3>
              <p className="text-white/70 mt-2 max-w-2xl">
                Comprehensive training programs designed to develop leadership, technical skills, and career growth across all group companies.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-teal to-brand-navy group hover:scale-[1.02] transition-all duration-500">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center text-brand-teal shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center text-white text-xs font-bold shrink-0 ml-auto">1</div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Leadership Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Structured programs to identify and nurture future leaders, including mentorship, executive coaching, and comprehensive management training.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />Executive coaching programs</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />Management fundamentals</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />Strategic thinking workshops</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-navy to-brand-steel group hover:scale-[1.02] transition-all duration-500">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy/10 to-brand-steel/10 flex items-center justify-center text-brand-navy shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center text-white text-xs font-bold shrink-0 ml-auto">2</div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Technical Skills</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Role-specific technical training ensuring our teams stay at the forefront of industry best practices and emerging technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />Industry certification support</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />Technology stack training</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />Best practice workshops</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-steel to-brand-navy group hover:scale-[1.02] transition-all duration-500">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-steel/10 to-brand-navy/10 flex items-center justify-center text-brand-steel shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center text-white text-xs font-bold shrink-0 ml-auto">3</div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Career Growth</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Clear career progression frameworks with defined pathways for advancement and the resources needed to achieve professional goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-steel" />Individual development plans</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-steel" />Career pathway mapping</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-steel" />Performance coaching</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-from to-brand-teal group hover:scale-[1.02] transition-all duration-500">
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-from/10 to-brand-teal/10 flex items-center justify-center text-brand-from shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center text-white text-xs font-bold shrink-0 ml-auto">4</div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Team Learning Programs</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Collaborative learning experiences that build team cohesion and share knowledge across departments and companies within the group.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-from" />Cross-functional workshops</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-from" />Knowledge sharing sessions</li>
                  <li className="flex items-center gap-2 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-brand-from" />Team building retreats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy-section" className="py-24 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-white/40" />
            <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">Data Protection</span>
            <span className="w-12 h-0.5 bg-white/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mt-4 mb-4">
            Data Privacy & Confidentiality
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg text-center mb-16">
            Robust data protection frameworks ensuring employee information and company data are handled securely and in full compliance with global regulations.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Data Protection</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Strict protocols for collecting, storing, and processing employee personal data in compliance with GDPR and local data protection regulations across all jurisdictions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Confidentiality Agreements</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Standardized confidentiality agreements that protect proprietary information, trade secrets, and sensitive business data across all group companies.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sensitive Information Handling</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Clear guidelines for handling, storing, and disposing of sensitive information, including data classification levels and access control protocols.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Policies</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Regular audits and compliance reviews ensure ongoing adherence to data protection laws, with immediate remediation of identified gaps or risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="engagement-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Employee Voice</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Employee Engagement & Communication
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Keeping our people informed, connected, and engaged through effective communication strategies and meaningful engagement initiatives.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-brand-teal font-number">87%</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Employee Surveys</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Regular engagement surveys to measure satisfaction, gather feedback, and identify areas for improvement across all group companies and departments.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center shadow-lg shadow-brand-navy/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-brand-navy font-number">12</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Internal Communication</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multi-channel communication platforms ensuring timely and transparent information flow across all organizational levels and locations.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center shadow-lg shadow-brand-steel/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-brand-steel font-number">24</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Group-Wide Announcements</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Regular company-wide updates, newsletters, and announcements that keep all employees informed about strategic initiatives and achievements.
              </p>
            </div>
            <div className="lg:col-span-2 lg:col-start-2 group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-8 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center shadow-lg shadow-brand-from/20">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold text-brand-teal font-number">1.2k</span>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Employee Engagement Initiatives</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Programs and events designed to foster community, celebrate achievements, and promote work-life balance across all group companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="collaboration-section" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Synergy</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Cross-Company Collaboration
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Breaking down silos and fostering meaningful collaboration between group companies to drive innovation, shared success, and collective growth.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-4 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Business team collaboration"
                className="rounded-3xl shadow-2xl w-full h-72 object-cover"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-brand-teal/20 hidden lg:block -translate-y-1/2" />
              <div className="grid sm:grid-cols-2 gap-6 relative">
                <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center mb-4 shadow-lg shadow-brand-teal/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Shared Projects</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Cross-company project teams collaborate on strategic initiatives, combining diverse expertise to achieve exceptional results.
                  </p>
                </div>
                <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center mb-4 shadow-lg shadow-brand-navy/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Knowledge Sharing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Internal knowledge bases, best practice repositories, and cross-company learning sessions that accelerate collective expertise.
                  </p>
                </div>
                <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center mb-4 shadow-lg shadow-brand-steel/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Team Collaboration</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Cross-functional teams working together on shared goals, fostering innovation and collective problem-solving across boundaries.
                  </p>
                </div>
                <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center mb-4 shadow-lg shadow-brand-from/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Group Engagement</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Company-wide events, town halls, and social activities that unite employees from all group companies in shared experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="legal-compliance-section" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Regulatory Excellence</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Legal Compliance
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-16">
            Ensuring every HR policy meets local labor law requirements across all jurisdictions, with regular updates to maintain full compliance.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 text-center hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-teal/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Labor Law Compliance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All policies reviewed against local labor laws in every country of operation.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 text-center hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-navy/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">HR Policy Updates</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Quarterly reviews to incorporate legal changes and industry best practices.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 text-center hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-steel to-brand-navy flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-steel/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Workplace Regulations</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Adherence to all applicable workplace safety and employment regulations.
              </p>
            </div>
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 text-center hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-from to-brand-teal flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-from/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Ethical Operations</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Commitment to ethical business practices and corporate governance standards.
              </p>
            </div>
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
            <span className="text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">Legal Compliance</span>
            <span className="w-12 h-0.5 bg-white/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mt-4 mb-6">
            Commitment to Compliance
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto text-lg mb-12">
            We ensure every HR policy aligns with local labor laws across all jurisdictions we operate in, with regular reviews and updates to maintain full compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Local Law Adherence</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                All policies are reviewed against local labor laws in every country we operate, ensuring full legal compliance across UAE, South Africa, and international markets.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Regular Policy Updates</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Our HR team conducts quarterly reviews of all policies to incorporate legal changes, industry best practices, and evolving business needs.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Privacy & GDPR</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Strict data protection policies align with GDPR and equivalent local regulations, ensuring employee data is handled securely and transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Get Started</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mt-4 mb-4">
            Need Facilities Management?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-10">
            Let our team handle the policies and operations so you can focus on growing your business. Contact us for a tailored facilities management solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-brand-teal/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Request a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-brand-dark font-semibold rounded-xl hover:bg-gray-50 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
