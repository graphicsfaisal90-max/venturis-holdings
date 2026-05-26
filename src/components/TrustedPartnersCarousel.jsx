import { useState, useEffect, useCallback } from 'react'

const logos = [
  '37595a4a-13d9-456f-9d75-17631e2e45d0.png',
  '549544db-680f-48e5-9b29-0d1ec597ad05.png',
  '69e2a94c-8442-4648-889e-51053c08238a.png',
  '7f9e4599-cd35-42bb-b476-699ea241015e.png',
  '8487ffb8-1bf7-4b63-a601-e442c214b078.png',
  'a5f64c2d-0482-4227-a9be-be14591f92d5.png',
  'a8003c87-93b9-4a36-857f-7d4d3522462b.png',
  'd4a3afce-4a14-4bca-8d2c-24b45fe53045.png',
  'd78e3a8c-aa90-433c-bb20-b731331601b3.png',
  'Untitled design.png',
]

const base = '/Trusted Government Partners/'

export default function TrustedPartnersCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = logos.length

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const visible = []
  for (let i = 0; i < 5; i++) {
    const idx = (current + i) % total
    visible.push({ name: logos[idx], index: idx })
  }

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-teal/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-navy/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-4 justify-center mb-4">
          <span className="w-12 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy" />
          <span className="text-sm font-semibold text-brand-teal uppercase tracking-[0.2em]">Our Partners</span>
          <span className="w-12 h-0.5 bg-gradient-to-r from-brand-navy to-brand-teal" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark text-center mt-4 mb-4">
Trusted Channel Partners
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg text-center mb-16 leading-relaxed">
          Associated with trusted UAE government authorities and regulatory entities to ensure excellence, compliance, and professional business operations.
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg shadow-black/5 border border-gray-100 flex items-center justify-center text-brand-navy hover:bg-gradient-to-br hover:from-brand-teal hover:to-brand-navy hover:text-white hover:shadow-xl hover:shadow-brand-teal/20 hover:scale-110 active:scale-95 transition-all duration-300 hidden lg:flex"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg shadow-black/5 border border-gray-100 flex items-center justify-center text-brand-navy hover:bg-gradient-to-br hover:from-brand-teal hover:to-brand-navy hover:text-white hover:shadow-xl hover:shadow-brand-teal/20 hover:scale-110 active:scale-95 transition-all duration-300 hidden lg:flex"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="hidden lg:grid grid-cols-5 gap-6">
            {visible.map((logo) => (
              <LogoCard key={`${logo.name}-${logo.index}`} name={logo.name} />
            ))}
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
            {visible.slice(0, 3).map((logo) => (
              <LogoCard key={`${logo.name}-${logo.index}`} name={logo.name} />
            ))}
          </div>

          <div className="grid md:hidden grid-cols-2 gap-4">
            {visible.slice(0, 2).map((logo) => (
              <LogoCard key={`${logo.name}-${logo.index}`} name={logo.name} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? 'w-10 h-2 bg-gradient-to-r from-brand-teal to-brand-navy shadow-md shadow-brand-teal/25'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoCard({ name }) {
  return (
    <div className="group relative">
      <div className="relative h-28 sm:h-32 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-teal/15 hover:border-brand-teal/20 hover:-translate-y-1.5 transition-all duration-500 flex items-center justify-center p-6 sm:p-8 overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 via-brand-teal/0 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-brand-teal/10 to-brand-navy/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={`${base}${name}`}
          alt="Government Partner"
          className="max-h-full max-w-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  )
}
