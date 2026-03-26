import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function Impact() {
  const [creditCount, setCreditCount] = useState(0)
  const targetCredit = 1428570 // Example target number

  // Simple counting animation
  useEffect(() => {
    let start = 0
    const duration = 2500 // 2.5 seconds
    const interval = 16 // ~60fps
    const increment = targetCredit / (duration / interval)

    const timer = setInterval(() => {
      start += increment
      if (start >= targetCredit) {
        setCreditCount(targetCredit)
        clearInterval(timer)
      } else {
        setCreditCount(Math.floor(start))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#10b981]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Impact Counter Section */}
        <div className="mb-24">
          <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
            Our Community Impact
          </p>
          <div className="flex justify-center items-baseline font-display font-extrabold text-[#10b981]">
            <span className="text-3xl sm:text-5xl md:text-6xl mr-2 sm:mr-4">
              ₦
            </span>
            <span className="text-6xl sm:text-8xl md:text-9xl tracking-tighter">
              {creditCount.toLocaleString()}
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl ml-2 sm:ml-4">
              +
            </span>
          </div>
          <p className="mt-6 text-xl sm:text-2xl text-slate-600 font-sans font-medium">
            in Energy Credits distributed by the VoltShare network.
          </p>
        </div>

        {/* Trust & Security Section */}
        <div className="mx-auto max-w-4xl border-t border-slate-100 pt-16 mt-16">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2 border border-slate-200">
              <ShieldCheck className="h-5 w-5 text-[#10b981]" />
              <span className="text-sm font-bold text-slate-700">
                Bank-Grade Security & Payments
              </span>
            </div>

            <p className="text-sm font-medium text-slate-400">
              Powered by industry-leading infrastructure
            </p>

            {/* Logos Grid */}
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
              {/* Interswitch */}
              <img
                src="https://buildathon.enyata.com/assets/interswitch_logo-D8QWSJvT.svg"
                alt="Interswitch"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Interswitch-900x0.png'
                  e.currentTarget.onerror = null
                }}
              />

              {/* Enyata */}
              <img
                src="https://buildathon.enyata.com/assets/enyata_logo-C_rjIyWG.svg"
                alt="Enyata"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://buildathon.enyata.com/assets/enyata_logo-C_rjIyWG.svg'
                  e.currentTarget.onerror = null
                }}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEEdbZ29ffod5cR6mkduoRQ7VBxvXnaHy4A&s"
                alt="VoltShare"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://buildathon.enyata.com/assets/enyata_logo-C_rjIyWG.svg'
                  e.currentTarget.onerror = null
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
