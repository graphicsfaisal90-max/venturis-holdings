import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Sandton Corporate HQ',
    division: 'Interiors',
    desc: 'Complete fit-out of a 15-floor corporate headquarters in Sandton, including executive suites, open-plan offices, and collaborative spaces.',
    year: '2025',
  },
  {
    title: 'Greenacres Shopping Centre',
    division: 'Facilities',
    desc: 'Ongoing facilities management contract covering maintenance, security, cleaning, and waste management for a major retail centre.',
    year: '2024',
  },
  {
    title: 'City Fleet Upgrade',
    division: 'Wheels',
    desc: 'Supply and management of 50 new vehicles for municipal fleet, including maintenance tracking and reporting systems.',
    year: '2025',
  },
  {
    title: 'Tech Park Development',
    division: 'Holdings',
    desc: 'Strategic investment and development of a 5-acre technology park, housing startups and established tech companies.',
    year: '2024',
  },
  {
    title: 'Luxury Residential Estate',
    division: 'Interiors',
    desc: 'Interior design and fit-out for 12 luxury homes in a gated estate, featuring bespoke joinery and premium finishes.',
    year: '2024',
  },
  {
    title: 'Industrial Park FM',
    division: 'Facilities',
    desc: 'Comprehensive facilities management for a 50,000 sqm industrial park including 24/7 security and preventive maintenance.',
    year: '2025',
  },
  {
    title: 'National Logistics Fleet',
    division: 'Wheels',
    desc: 'Full fleet management solution for a national logistics company, covering 120 vehicles across 6 provinces.',
    year: '2024',
  },
  {
    title: 'Hospitality Group Acquisition',
    division: 'Holdings',
    desc: 'Advised on and facilitated the acquisition of a 3-property hospitality group, including due diligence and integration planning.',
    year: '2025',
  },
]

const divisions = ['All', 'Interiors', 'Facilities', 'Wheels', 'Holdings']

export default function Projects() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-brand-light max-w-3xl leading-relaxed">
            A showcase of the work we've delivered across our divisions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-2 bg-gradient-to-r from-brand-from to-brand-to" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-teal bg-brand-light px-2.5 py-1 rounded-full">{p.division}</span>
                    <span className="text-xs text-gray-400">{p.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Want to See More?</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss your project requirements.</p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors">Start a Project</Link>
        </div>
      </section>
    </>
  )
}
