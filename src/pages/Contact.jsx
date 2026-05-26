import { useState, useEffect, useRef } from 'react'
import { submitContactForm } from '../supabase'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const divisions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'interiors', label: 'Venturis Interiors' },
  { value: 'facilities', label: 'Venturis Facilities' },
  { value: 'wheels', label: 'Venturis Wheels' },
  { value: 'holdings', label: 'Venturis Holdings LLC' },
]

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Head Office',
    lines: ['5th Floor, Al Saqr Tower, SZR', 'Dubai, UAE'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'US Office',
    lines: ['9219 Tamworth Road', 'Jacksonville, Florida, USA'],
    note: 'Book an Appointment Before Visit',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    lines: ['info@venturisholdings.com'],
    href: 'mailto:info@venturisholdings.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Phone',
    lines: ['+971 58 531 8860', '+1 (904) 6550900'],
    href: 'tel:+971585318860',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Business Hours',
    lines: ['Mon - Sat: 10:00 AM - 7:00 PM', 'Sunday: Closed'],
  },
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

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', division: 'general', message: '',
  })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })
    try {
      await submitContactForm(form)
      setStatus({ type: 'success', text: 'Thank you! Your message has been received. We will get back to you within 24-48 hours.' })
      setForm({ name: '', email: '', phone: '', company: '', division: 'general', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Something went wrong. Please try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Venturis Holdings LLC — reach out for business inquiries, partnerships, or project discussions. Call +971 58 531 8860 or email info@venturisholdings.com."
        path="/contact"
        keywords="contact Venturis Holdings LLC, Dubai business inquiries, UAE holding company contact, Venturis phone number, Venturis email, business partnerships UAE"
      />
      {/* ============ HERO ============ */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-teal)_0%,_transparent_60%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-brand-navy)_0%,_transparent_60%)] opacity-15" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-brand-teal" />
              <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="-mt-20 relative z-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* === FORM === */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl shadow-brand-teal/5 border border-gray-100 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-8">Fill out the form below and we'll get back to you within 24-48 hours.</p>

                {status.text && (
                  <div className={`mb-6 p-4 rounded-xl text-sm ${
                    status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      {status.type === 'success' ? (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {status.text}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                      <input
                        type="text" id="name" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                      <input
                        type="email" id="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm"
                        placeholder="+971 58 531 8860"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                      <input
                        type="text" id="company" name="company" value={form.company} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm"
                        placeholder="Venturis Holdings LLC"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="division" className="block text-sm font-medium text-gray-700 mb-1.5">Select Division <span className="text-red-400">*</span></label>
                    <select
                      id="division" name="division" required value={form.division} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm"
                    >
                      {divisions.map((d) => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                    <textarea
                      id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-colors text-sm resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit" disabled={submitting}
                    className="w-full px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* === INFO === */}
            <AnimatedSection className="lg:col-span-2 space-y-5">
              {contactInfo.map((info, i) => (
                <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 flex items-center justify-center shrink-0 group-hover:from-brand-teal group-hover:to-brand-navy transition-all duration-500">
                      <span className="text-brand-teal group-hover:text-white transition-colors duration-500">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-1">{info.title}</h3>
                      {info.lines.map((line, j) => (
                        info.href ? (
                          <a key={j} href={info.href} className="block text-gray-500 text-sm hover:text-brand-teal transition-colors">{line}</a>
                        ) : (
                          <p key={j} className="text-gray-500 text-sm">{line}</p>
                        )
                      ))}
                      {info.note && (
                        <p className="mt-2 text-xs font-semibold text-brand-teal uppercase tracking-wider bg-brand-teal/5 px-3 py-1.5 rounded-lg border border-brand-teal/20 inline-block">
                          {info.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-brand-teal/5 to-brand-navy/5 rounded-2xl p-6 border border-brand-teal/10 text-center">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Prefer to speak with us directly? Call our team during business hours and we'll be happy to assist you.
                </p>
                <a
                  href="tel:+971585318860"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +971 58 531 8860
                </a>
              </div>
            </AnimatedSection>
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
          <AnimatedSection>
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-[0.2em]">Join Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg mb-10">
              Let's discuss how Venturis Holdings LLC can help bring your vision to life with our comprehensive suite of services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-teal to-brand-navy text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Explore Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
