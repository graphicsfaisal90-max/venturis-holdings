const logos = [
  { file: 'VISA-logo.png', name: 'Visa' },
  { file: 'Mastercard-logo.svg', name: 'Mastercard' },
  { file: 'American-Express-Color.png', name: 'American Express' },
  { file: 'Apple_Pay_logo.svg.png', name: 'Apple Pay' },
  { file: 'Google_Pay_Logo.svg.png', name: 'Google Pay' },
  { file: 'paypal-logo-png-2.png', name: 'PayPal' },
  { file: '1_myUsgaquInAWyZbb4GzWvg.png', name: 'Payment Gateway' },
  { file: '384578.svg', name: 'Payment Gateway' },
  { file: '65845ca6df37fcb3769be696_cdfd31fe33088ad8ad9be156ad812846_Isolation_Mode.svg', name: 'Payment Gateway' },
  { file: 'Stripe logo.svg', name: 'Stripe' },
]

const base = '/Payment methods/'

export default function PaymentMethodsCarousel() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/5 border border-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-[0.15em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            Secure Payments
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-5">
            <span className="text-brand-teal">We Accept</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We support secure and verified payment gateways to ensure smooth global transactions.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 mb-6 animate-marquee-left hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={`row1-${i}`} logo={logo} />
          ))}
        </div>
        <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={`row2-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
          width: fit-content;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  )
}

function LogoCard({ logo }) {
  return (
    <div className="group flex-shrink-0 w-36 sm:w-44 h-24 sm:h-28 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 hover:border-brand-teal/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-5 sm:p-6 cursor-pointer">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={`${base}${logo.file}`}
          alt={logo.name}
          className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  )
}
