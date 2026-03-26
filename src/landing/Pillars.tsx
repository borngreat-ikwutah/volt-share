import { Sun, Zap, Wallet } from 'lucide-react'

const pillars = [
  {
    title: 'Fund a Panel',
    description: 'Help neighbors go green by funding solar installations. Empower your community to generate clean energy and earn rewards over time.',
    icon: Sun,
  },
  {
    title: 'Buy Local Energy',
    description: 'Purchase affordable, renewable energy directly from the local micro-grid. Lower your electricity bills while supporting a sustainable future.',
    icon: Zap,
  },
  {
    title: 'Cash Out Earnings',
    description: 'Share your excess solar energy with the marketplace. Track your environmental impact and withdraw your earnings seamlessly at any time.',
    icon: Wallet,
  },
]

export default function Pillars() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Everything you need, <br className="hidden sm:block" />
            in one green marketplace.
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-sans max-w-2xl mx-auto">
            Whether you're looking to save on your energy bill, support green initiatives, or earn from your rooftop solar panels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col items-center rounded-[2rem] bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(16,185,129,0.12)]"
            >
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#10b981]/10 transition-colors duration-300 group-hover:bg-[#10b981]/20">
                <pillar.icon className="h-10 w-10 text-[#10b981]" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-slate-600 font-sans text-lg leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
