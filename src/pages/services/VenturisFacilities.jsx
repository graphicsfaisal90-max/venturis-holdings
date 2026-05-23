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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-navy to-brand-from/90" />
        <div className="absolute inset-0 bg-brand-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
            className="w-full h-full object-cover"
            onError={(e) => { console.log('Video error:', e.target.error) }}
          >
            <source src="/Construction-hero.mp4" type="video/mp4" />
          </video>
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
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-navy rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative bg-white rounded-3xl p-10 sm:p-12 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Vision Alignment</h3>
                    <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.15em] mt-1">Strategic Direction</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  All HR policies are designed to support the group&apos;s overarching vision of becoming a globally recognized innovation-driven company. Every policy reflects our core values while providing the flexibility needed to address each company&apos;s unique operational requirements.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy to-brand-teal rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative bg-white rounded-3xl p-10 sm:p-12 shadow-lg border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center shadow-lg shadow-brand-teal/20 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Culture & Values</h3>
                    <p className="text-brand-teal text-sm font-semibold uppercase tracking-[0.15em] mt-1">Unified Identity</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our policies cultivate a consistent culture of integrity, innovation, and customer-centricity across all group companies. While each division retains its unique character, shared values create a unified identity that strengthens our collective brand and employee experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="policies" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 justify-center mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">HR Policies</span>
            <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
            Comprehensive Policy Framework
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg text-center mb-6">
            Browse, search, and track our complete HR policy catalog covering every aspect of facilities management and employee relations.
          </p>

          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search policies by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-brand-dark">Policy Implementation Progress</span>
                <span className="text-sm font-bold text-brand-teal">{completedPolicies.length}/{policyCategories.length} Completed</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-teal to-brand-navy rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Mark policies as completed to track implementation progress across the group.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 text-lg font-medium">No policies match your search</p>
                <p className="text-gray-400 text-sm mt-1">Try different keywords or clear the search</p>
              </div>
            ) : (
              filteredCategories.map((cat) => {
                const isOpen = activeCategory === cat.id
                const isCompleted = completedPolicies.includes(cat.id)
                return (
                  <div
                    key={cat.id}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-brand-teal/10 transition-all duration-500 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-teal/10 transition-transform duration-500 ${isOpen ? 'scale-110' : ''}`}
                      >
                        <span className="text-lg">{categoryIcons[cat.id]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-brand-dark truncate">{cat.title}</h3>
                          {isCompleted && (
                            <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-navy text-white rounded-full">
                              Done
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-0.5">{cat.points.length} policy item{cat.points.length > 1 ? 's' : ''}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleComplete(cat.id)
                        }}
                        className={`shrink-0 w-7 h-7 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                          isCompleted
                            ? 'bg-gradient-to-br from-brand-teal to-brand-navy border-transparent text-white shadow-md shadow-brand-teal/20'
                            : 'border-gray-300 hover:border-brand-teal hover:bg-brand-light'
                        }`}
                        title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                      >
                        {isCompleted && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <svg
                        className={`shrink-0 w-5 h-5 text-gray-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-4" />
                        <ul className="space-y-3">
                          {cat.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm`}>
                                {i + 1}
                              </div>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
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
