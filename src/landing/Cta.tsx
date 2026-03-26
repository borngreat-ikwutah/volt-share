import { Button } from '../components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#10b981] py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl mb-8 drop-shadow-sm">
          Ready to join the green revolution?
        </h2>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-emerald-50 mb-10 font-sans font-medium">
          Whether you want to earn from your roof or save on your bills, VoltShare connects you to the future of energy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-14 w-full sm:w-auto rounded-full bg-white px-8 text-lg font-bold text-[#10b981] shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 w-full sm:w-auto rounded-full border-2 border-white/20 bg-transparent px-8 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/30"
          >
            Explore the Marketplace
          </Button>
        </div>
      </div>
    </section>
  )
}
