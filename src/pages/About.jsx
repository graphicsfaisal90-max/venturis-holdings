const values = [
  {
    title: 'Integrity',
    desc: 'We conduct business with unwavering ethical standards and transparency in all our dealings.',
  },
  {
    title: 'Innovation',
    desc: 'We embrace creative solutions and cutting-edge approaches to stay ahead of the curve.',
  },
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards of quality and performance in every project.',
  },
  {
    title: 'Partnership',
    desc: 'We build lasting relationships with clients, partners, and communities based on trust and mutual success.',
  },
]

const team = [
  { name: 'John Venturis', role: 'Founder & CEO', bio: 'Over 20 years of experience in business development and strategic leadership across multiple industries.' },
  { name: 'Sarah Ndlovu', role: 'COO', bio: 'Expert in operations management with a proven track record of driving operational excellence.' },
  { name: 'Michael Kgosi', role: 'CFO', bio: 'Financial strategist with deep expertise in corporate finance and investment management.' },
  { name: 'Lebohang Molefe', role: 'Director of Operations', bio: 'Specializes in facilities management and large-scale project coordination.' },
]

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-from to-brand-to text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-brand-light max-w-3xl leading-relaxed">
            Venturis Holdings is a diversified group of companies committed to delivering exceptional value across interior solutions, facilities management, automotive services, and strategic investments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to create a multi-dimensional business group that could serve diverse needs under one umbrella, Venturis Holdings has grown from a single venture into a comprehensive holding company with four specialized divisions.
                </p>
                <p>
                  Our journey began with a simple belief: that excellence is not industry-specific. By bringing together talented teams across interiors, facilities, automotive, and investments, we've created a synergy that allows us to deliver holistic solutions to our clients.
                </p>
                <p>
                  Today, we stand as a trusted partner to businesses and individuals across South Africa, known for our reliability, innovation, and commitment to quality.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To drive sustainable growth and create lasting value for our stakeholders by delivering exceptional services across our diversified portfolio of companies.
              </p>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected diversified holding company, setting benchmarks for quality and innovation across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-from to-brand-to rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{member.name}</h3>
                <p className="text-brand-teal text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
