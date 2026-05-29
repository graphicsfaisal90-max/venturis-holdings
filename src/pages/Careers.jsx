import { useState, useEffect, useRef } from 'react'
import { submitJobApplication } from '../supabase'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const divisions = [
  { value: '', label: 'Select Division' },
  { value: 'interiors', label: 'Venturis Interiors' },
  { value: 'facilities', label: 'Venturis Facilities' },
  { value: 'realtors', label: 'Venturis Realtors' },
  { value: 'partners', label: 'Venturis Partners' },
  { value: 'wheels', label: 'Venturis Wheels' },
  { value: 'tourism', label: 'Venturis Tourism' },
  { value: 'corporate', label: 'Corporate / Administration' },
]

const positions = [
  { value: '', label: 'Select Position' },
  { value: 'project-manager', label: 'Project Manager' },
  { value: 'interior-designer', label: 'Interior Designer' },
  { value: 'architect', label: 'Architect' },
  { value: 'real-estate-agent', label: 'Real Estate Agent' },
  { value: 'facility-manager', label: 'Facility Manager' },
  { value: 'business-development', label: 'Business Development Executive' },
  { value: 'marketing', label: 'Marketing Specialist' },
  { value: 'accountant', label: 'Accountant / Finance' },
  { value: 'hr', label: 'HR Executive' },
  { value: 'admin', label: 'Administrative Assistant' },
  { value: 'driver', label: 'Driver' },
  { value: 'other', label: 'Other' },
]

const employmentTypes = [
  { value: 'full-time', label: 'Full-Time' },
  { value: 'part-time', label: 'Part-Time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'remote', label: 'Remote' },
]

const hearAbout = [
  { value: '', label: 'Select' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'indeed', label: 'Indeed' },
  { value: 'company-website', label: 'Company Website' },
  { value: 'referral', label: 'Employee Referral' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'recruitment-agency', label: 'Recruitment Agency' },
  { value: 'job-portal', label: 'Job Portal' },
  { value: 'other', label: 'Other' },
]

const qualifications = [
  { value: '', label: 'Select Qualification' },
  { value: 'high-school', label: 'High School / Secondary' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'bachelors', label: "Bachelor's Degree" },
  { value: 'masters', label: "Master's Degree" },
  { value: 'phd', label: 'PhD / Doctorate' },
  { value: 'professional', label: 'Professional Certification' },
  { value: 'other', label: 'Other' },
]

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Work-Life Balance',
    description: 'Flexible working hours and hybrid work options to help you maintain a healthy work-life balance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Growth Opportunities',
    description: 'Continuous learning, professional development programs, and clear career progression paths.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaborative Culture',
    description: 'Work alongside talented professionals in a supportive and innovative team environment.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Comprehensive Benefits',
    description: 'Competitive salary, health insurance, annual bonuses, and additional perks for eligible employees.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Exposure',
    description: 'Work on international projects and gain exposure to diverse markets across the UAE and beyond.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Innovation & Technology',
    description: 'Access to cutting-edge tools, software, and technologies to excel in your role.',
  },
]

const formSections = [
  { id: 1, label: 'Personal Info' },
  { id: 2, label: 'Position' },
  { id: 3, label: 'Experience' },
  { id: 4, label: 'Education' },
  { id: 5, label: 'Resume' },
  { id: 6, label: 'Cover Letter' },
]

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

function CountUp({ end, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const step = Math.ceil(end / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight font-number">
        {count}{suffix}
      </div>
      <div className="text-white/50 text-xs uppercase tracking-[0.15em]">{label}</div>
    </div>
  )
}

export default function Careers() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', address: '', position: '', division: '',
    experience: '', currentCompany: '', currentRole: '', qualification: '',
    fieldOfStudy: '', institution: '', coverLetter: '', linkedinUrl: '',
    portfolioUrl: '', employmentType: 'full-time', startDate: '', hearAbout: '',
  })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const formRef = useRef(null)

  function handleChange(e) {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setResumeFile(files[0])
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })
    try {
      const result = await submitJobApplication(form, resumeFile)
      const resumeUrl = Array.isArray(result) && result[0]?.resume_url ? result[0].resume_url : null
      try {
        await fetch('/send-email.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, resumeUrl, resumeFileName: resumeFile?.name || null }),
        })
      } catch (_) {}
      setStatus({ type: 'success', text: 'Thank you for your application! We have received your details and our HR team will review them shortly.' })
      setForm({
        fullName: '', email: '', phone: '', address: '', position: '', division: '',
        experience: '', currentCompany: '', currentRole: '', qualification: '',
        fieldOfStudy: '', institution: '', coverLetter: '', linkedinUrl: '',
        portfolioUrl: '', employmentType: 'full-time', startDate: '', hearAbout: '',
      })
      setResumeFile(null)
      if (formRef.current) {
        const fileInput = formRef.current.querySelector('input[type=file]')
        if (fileInput) fileInput.value = ''
      }
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Something went wrong. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Careers at Venturis Holdings LLC UAE | Join Our Team"
        description="Explore career opportunities at Venturis Holdings LLC UAE. Join a dynamic team across our divisions — Interiors, Facilities, Realtors, Partners, Wheels, and Tourism. Apply online today."
        path="/careers"
        keywords="careers Venturis Holdings LLC, jobs Dubai, Venturis careers, UAE jobs, interior design jobs Dubai, real estate jobs Dubai, facilities management careers, business development jobs UAE"
      />

      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          <img src="/Careers.png" alt="Careers at Venturis Holdings" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all duration-300 mb-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-0.5 bg-brand-teal" />
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Careers</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-8">
              Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-white to-brand-teal/60">
                Venturis
              </span>{' '}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light text-white/70">
                Team
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed mb-12">
              Discover your potential and build a rewarding career with a diverse portfolio of opportunities across our dynamic divisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#application-form"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative">Apply Now</span>
                <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/15 text-white/80 font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                Why Join Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark rounded-2xl shadow-2xl p-8 sm:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <CountUp end={6} suffix="+" label="Divisions" />
                <CountUp end={50} suffix="+" label="Team Members" />
                <CountUp end={15} suffix="+" label="Nationalities" />
                <CountUp end={200} suffix="+" label="Projects Delivered" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ WHY JOIN US ============ */}
      <section id="benefits" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Why Join Us</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mt-4 mb-4">
              More Than a Job,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">a Career</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              At Venturis Holdings, we invest in our people. Here's what you can expect when you join our team.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i}>
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl group-hover:bg-brand-teal/10 transition-all duration-700" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mb-5 group-hover:from-brand-teal group-hover:to-brand-navy group-hover:shadow-lg group-hover:shadow-brand-teal/20 transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{benefit.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors duration-500">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OPEN POSITIONS ============ */}
      <section id="open-positions" className="py-32 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Open Positions</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mt-4 mb-4">Current Openings</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore our current vacancies and find the role that matches your skills and aspirations.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-xl mx-auto">
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.02] to-brand-navy/[0.02]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-navy opacity-30" />
                <div className="relative p-12 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">No Open Positions at the Moment</h3>
                  <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                    We don't have any active vacancies right now, but we're always on the lookout for talented individuals. 
                    Feel free to submit your application and we'll keep your resume on file for future opportunities.
                  </p>
                  <a
                    href="#application-form"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    Submit Your Application
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ APPLICATION FORM ============ */}
      <section id="application-form" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center gap-4 justify-center mb-4">
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Apply Now</span>
              <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mt-4 mb-4">
              Submit Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-navy">Application</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Take the first step towards joining our team. Fill out the form below and our HR team will review your application.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-teal/[0.03] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-navy/[0.03] rounded-full blur-3xl pointer-events-none" />
              <div className="relative bg-white rounded-3xl shadow-xl shadow-brand-teal/5 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal via-brand-navy to-brand-teal" />
                <div className="p-8 sm:p-12">
                  {/* Progress Steps */}
                  <div className="hidden sm:flex items-center justify-center gap-2 mb-12">
                    {formSections.map((s, i) => (
                      <div key={s.id} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-md shadow-brand-teal/20">
                          <span className="text-xs font-bold text-white">{s.id}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{s.label}</span>
                        {i < formSections.length - 1 && (
                          <div className="w-6 h-px bg-gradient-to-r from-brand-teal/30 to-transparent mx-1" />
                        )}
                      </div>
                    ))}
                  </div>

                  {status.text && (
                    <div className={`mb-8 p-5 rounded-xl text-sm ${
                      status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        {status.type === 'success' ? (
                          <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span className="leading-relaxed">{status.text}</span>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                    {/* Section 1 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">1</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Personal Information</h3>
                          <p className="text-xs text-gray-400">Your basic contact details</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="group/field">
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Full Name <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <input type="text" id="fullName" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Email Address <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Phone Number <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            <input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange} placeholder="+971 58 531 8860" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Current Address</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <input type="text" id="address" name="address" value={form.address} onChange={handleChange} placeholder="Dubai, UAE" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">2</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Position Details</h3>
                          <p className="text-xs text-gray-400">Tell us about the role you're interested in</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="group/field">
                          <label htmlFor="position" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Position Applying For <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <select id="position" name="position" required value={form.position} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm appearance-none">
                              {positions.map((p) => (
                                <option key={p.value} value={p.value} disabled={p.value === ''}>{p.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="division" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Division / Department <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <select id="division" name="division" required value={form.division} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm appearance-none">
                              {divisions.map((d) => (
                                <option key={d.value} value={d.value} disabled={d.value === ''}>{d.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="employmentType" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Employment Type <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <select id="employmentType" name="employmentType" required value={form.employmentType} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm appearance-none">
                              {employmentTypes.map((t) => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="startDate" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Available Start Date</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <input type="date" id="startDate" name="startDate" value={form.startDate} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">3</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Work Experience</h3>
                          <p className="text-xs text-gray-400">Your professional background</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="group/field">
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Years of Experience</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            <input type="number" id="experience" name="experience" min="0" max="50" value={form.experience} onChange={handleChange} placeholder="5" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Current / Last Company</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <input type="text" id="currentCompany" name="currentCompany" value={form.currentCompany} onChange={handleChange} placeholder="Company name" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="currentRole" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Current / Last Job Title</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input type="text" id="currentRole" name="currentRole" value={form.currentRole} onChange={handleChange} placeholder="Senior Designer" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">4</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Education</h3>
                          <p className="text-xs text-gray-400">Your academic background</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="group/field">
                          <label htmlFor="qualification" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Highest Qualification <span className="text-red-400">*</span></label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                            <select id="qualification" name="qualification" required value={form.qualification} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm appearance-none">
                              {qualifications.map((q) => (
                                <option key={q.value} value={q.value} disabled={q.value === ''}>{q.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Field of Study</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            <input type="text" id="fieldOfStudy" name="fieldOfStudy" value={form.fieldOfStudy} onChange={handleChange} placeholder="Business Administration" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="institution" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Institution</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <input type="text" id="institution" name="institution" value={form.institution} onChange={handleChange} placeholder="University name" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 5 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">5</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Resume & Links</h3>
                          <p className="text-xs text-gray-400">Upload your CV and share your professional profiles</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label htmlFor="resume" className="block text-sm font-medium text-gray-600 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label>
                          <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-8 bg-gray-50 hover:border-brand-teal/40 hover:bg-brand-teal/[0.02] transition-all duration-300 group/file">
                            <input type="file" id="resume" name="resume" required accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center mx-auto mb-4 group-hover/file:from-brand-teal group-hover/file:to-brand-navy transition-all duration-500">
                                <svg className="w-8 h-8 text-brand-teal group-hover/file:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                              </div>
                              <p className="text-sm text-gray-500">
                                <span className="text-brand-teal font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX, JPG, PNG — Max 10MB</p>
                            </div>
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">LinkedIn Profile URL</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
                            <input type="url" id="linkedinUrl" name="linkedinUrl" value={form.linkedinUrl} onChange={handleChange} placeholder="https://linkedin.com/in/username" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Portfolio / Website URL</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            <input type="url" id="portfolioUrl" name="portfolioUrl" value={form.portfolioUrl} onChange={handleChange} placeholder="https://yourportfolio.com" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm placeholder:text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 6 */}
                    <div className="group/section">
                      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 group-focus-within/section:border-brand-teal/30 transition-colors duration-500">
                        <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-teal/20 before:absolute before:inset-0 before:rounded-xl before:animate-ping before:bg-brand-teal/20 before:opacity-0 group-focus-within/section:before:opacity-100">6</span>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-focus-within/section:text-brand-teal transition-colors">Cover Letter & Additional Info</h3>
                          <p className="text-xs text-gray-400">Tell us more about yourself</p>
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div className="group/field">
                          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">Cover Letter / Message</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-4 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            <textarea id="coverLetter" name="coverLetter" rows={6} value={form.coverLetter} onChange={handleChange} placeholder="Tell us why you'd be a great fit for this role..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm resize-y placeholder:text-gray-300" />
                          </div>
                        </div>
                        <div className="group/field">
                          <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-600 mb-1.5 group-focus-within/field:text-brand-teal transition-colors">How did you hear about us?</label>
                          <div className="relative">
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-brand-teal transition-colors pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <select id="hearAbout" name="hearAbout" value={form.hearAbout} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal focus:bg-white outline-none transition-all duration-300 text-sm appearance-none">
                              {hearAbout.map((h) => (
                                <option key={h.value} value={h.value} disabled={h.value === ''}>{h.label}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="bg-gradient-to-br from-brand-teal/[0.04] to-brand-navy/[0.04] rounded-2xl p-8 border border-brand-teal/10">
                      <div className="flex items-start gap-3 mb-6">
                        <input type="checkbox" id="agree" required className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-teal focus:ring-brand-teal shrink-0" />
                        <label htmlFor="agree" className="text-sm text-gray-500 leading-relaxed">
                          I confirm that the information provided is accurate and complete. I agree to the{' '}
                          <a href="#" className="text-brand-teal hover:underline font-medium">Privacy Policy</a> and consent to Venturis Holdings processing my personal data for recruitment purposes. <span className="text-red-400">*</span>
                        </label>
                      </div>
                      <button type="submit" disabled={submitting} className="group relative w-full px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-teal/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none">
                        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 disabled:hidden" />
                        {submitting ? (
                          <span className="relative flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting Application...
                          </span>
                        ) : (
                          <span className="relative flex items-center justify-center gap-2">
                            Submit Application
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-black to-brand-dark" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-brand-navy rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-from/30 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-4">
              Questions About Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Application?</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg mb-12">
              Our HR team is here to help. Reach out to us with any questions about the application process or career opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-teal/30 hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative">Contact HR Team</span>
                <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
