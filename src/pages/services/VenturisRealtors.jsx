import { Link } from 'react-router-dom'

export default function VenturisRealtors() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-lg mx-auto px-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-dark text-sm mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Venturis Realtors</h1>
        <p className="text-gray-500">Content coming soon.</p>
      </div>
    </section>
  )
}
