import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const services = [
  { name: 'Venturis Partners', path: '/services/partners' },
  { name: 'Venturis Realtors', path: '/services/realtors' },
  { name: 'Venturis Facilities Management', path: '/services/facilities' },
  { name: 'Venturis Wheels', path: '/services/wheels' },
  { name: 'Venturis Interiors', path: '/services/interiors' },
  { name: 'Venturis Tourism', path: '/services/tourism' },
]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: true },
  { name: 'Projects', path: '/projects' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Venturis Holdings" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-brand-dark bg-brand-light'
                          : 'text-gray-600 hover:text-brand-dark hover:bg-brand-light'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-dark hover:bg-brand-light transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-dark bg-brand-light'
                        : 'text-gray-600 hover:text-brand-dark hover:bg-brand-light'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>

          <button
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy text-white shadow-lg shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/30 transition-all duration-300 active:scale-95"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
          <div className="px-4 py-5 space-y-1.5">
            {navLinks.map((link, i) => {
              const delay = i * 60
              return link.dropdown ? (
                <div
                  key={link.name}
                  className={`transition-all duration-300 ease-out ${
                    mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-brand-teal to-brand-navy shadow-md shadow-brand-teal/20'
                          : 'text-gray-700 hover:bg-brand-light hover:text-brand-dark'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  <div className="ml-4 mt-1.5 space-y-1 border-l-2 border-brand-teal/20 pl-4">
                    {services.map((s, j) => (
                      <div
                        key={s.path}
                        className={`transition-all duration-300 ease-out ${
                          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                        }`}
                        style={{ transitionDelay: `${delay + 80 + j * 40}ms` }}
                      >
                        <NavLink
                          to={s.path}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? 'text-brand-teal bg-brand-light font-semibold'
                                : 'text-gray-500 hover:text-brand-dark hover:bg-gray-50'
                            }`
                          }
                        >
                          {s.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  key={link.name}
                  className={`transition-all duration-300 ease-out ${
                    mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-brand-teal to-brand-navy shadow-md shadow-brand-teal/20'
                          : 'text-gray-700 hover:bg-brand-light hover:text-brand-dark'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </div>
              )
            })}
          </div>
        </div>
    </header>
  )
}
