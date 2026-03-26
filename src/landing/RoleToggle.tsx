import { useState } from 'react'
import { ArrowRight, Leaf, Coins } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function RoleToggle() {
  const [role, setRole] = useState<'creator' | 'neighbor'>('creator')

  const content = {
    creator: {
      tag: 'For Solar Owners',
      title: 'Share your Solar. Earn passively.',
      description:
        "Turn your roof into a continuous revenue stream. Sell your excess solar energy directly to your local community, track your earnings in real-time, and speed up the world's transition to renewable energy.",
      features: [
        { icon: Coins, text: "Get paid monthly for the energy you don't use." },
        {
          icon: Leaf,
          text: "Reduce your neighborhood's overall carbon footprint.",
        },
      ],
      cta: 'Become a Creator',
      imgUrl:
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop',
    },
    neighbor: {
      tag: 'For Neighbors',
      title: 'Buy Affordable Power. Go Green.',
      description:
        'Access clean, local energy without needing to install your own panels. Lower your electricity bills by connecting to neighborhood micro-grids and supporting local solar creators.',
      features: [
        { icon: Leaf, text: '100% renewable energy sourced from local roofs.' },
        {
          icon: Coins,
          text: 'Lower, transparent rates compared to traditional grids.',
        },
      ],
      cta: 'Find Local Energy',
      imgUrl:
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    },
  }

  const activeContent = content[role]

  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Toggle Switch */}
          <div className="relative flex rounded-full bg-slate-200/60 p-1.5 mb-12 sm:mb-20 shadow-inner">
            <button
              onClick={() => setRole('creator')}
              className={`relative z-10 w-40 sm:w-56 rounded-full py-3.5 text-sm font-bold transition-all duration-300 ${
                role === 'creator'
                  ? 'text-slate-900 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Share your Solar
            </button>
            <button
              onClick={() => setRole('neighbor')}
              className={`relative z-10 w-40 sm:w-56 rounded-full py-3.5 text-sm font-bold transition-all duration-300 ${
                role === 'neighbor'
                  ? 'text-slate-900 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Buy Affordable Power
            </button>
          </div>

          {/* Content Area */}
          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="flex flex-col items-start min-h-[400px] justify-center">
              <span className="inline-flex items-center rounded-full bg-[#10b981]/10 px-4 py-1.5 text-sm font-bold tracking-wide text-[#10b981] mb-6 uppercase">
                {activeContent.tag}
              </span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                {activeContent.title}
              </h2>
              <p className="text-lg text-slate-600 font-sans mb-8 leading-relaxed">
                {activeContent.description}
              </p>

              <ul className="space-y-5 mb-10 w-full">
                {activeContent.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-slate-700 font-semibold"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10b981]/10">
                      <feature.icon className="h-6 w-6 text-[#10b981]" />
                    </div>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <Button className="h-14 rounded-full bg-[#10b981] px-8 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-lg">
                {activeContent.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Image Side */}
            <div className="mt-12 lg:mt-0 relative w-full h-full">
              <div className="island-shell relative overflow-hidden rounded-[2rem] aspect-[4/3] lg:aspect-square shadow-2xl shadow-slate-200/50">
                {/* We use a key on the image to force a re-render/fade when the image URL changes */}
                <img
                  key={activeContent.imgUrl}
                  src={activeContent.imgUrl}
                  alt={activeContent.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105 animate-in fade-in zoom-in-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
