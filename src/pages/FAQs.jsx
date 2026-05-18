import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What is Venturis Holdings?',
    a: 'Venturis Holdings is a diversified group of companies operating across interior design, facilities management, automotive services, and strategic investments. We bring together specialized expertise under one umbrella to deliver comprehensive solutions.',
  },
  {
    q: 'How do I know which division I need?',
    a: 'If you\'re unsure which division best suits your needs, simply contact us and we\'ll guide you. Many of our clients engage multiple divisions for different aspects of their projects.',
  },
  {
    q: 'Do you work on residential projects?',
    a: 'Yes. Venturis Interiors handles residential interior design and renovation projects. Contact them directly for residential enquiries.',
  },
  {
    q: 'What areas do you service?',
    a: 'We are based in Johannesburg, South Africa, and service clients across Gauteng and surrounding provinces. For larger projects, we can accommodate national requirements.',
  },
  {
    q: 'How can I get a quote?',
    a: 'Simply fill out the contact form on our website, and a representative from the relevant division will get back to you within 24-48 hours with a preliminary assessment.',
  },
  {
    q: 'Do you offer fleet management for small businesses?',
    a: 'Absolutely. Venturis Wheels provides scalable fleet management solutions suitable for businesses of all sizes, from small fleets of 5 vehicles to large operations of 200+.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'Timelines vary based on the scope and complexity of the project. During our initial consultation, we will provide a detailed timeline. We pride ourselves on delivering projects on schedule.',
  },
  {
    q: 'Are you looking for investment partners?',
    a: 'Venturis Holdings is always open to strategic partnerships and investment opportunities. Reach out to our Holdings division to discuss potential collaborations.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-brand-light max-w-3xl leading-relaxed">
            Find answers to common questions about Venturis Holdings and our services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-brand-dark pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">We're here to help. Get in touch with our team.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
