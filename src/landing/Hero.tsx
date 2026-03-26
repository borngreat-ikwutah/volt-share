import { Button } from '../components/ui/button'

export default function Hero() {
  return (
    <section className="bg-background pt-20 sm:pt-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-[5rem] lg:leading-[1.05] mb-6">
          Powering is the new sharing
        </h1>

        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground font-sans font-medium mb-10">
          The freedom to go green without paying for expensive installations or
          maintenance. All you need is an account and a neighborhood.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-24">
          <Button className="h-14 w-full sm:w-auto rounded-full bg-[#10b981] px-10 text-lg font-bold text-white shadow-none transition-colors hover:bg-[#059669]">
            Get VoltShare
          </Button>

          <Button
            variant="secondary"
            className="h-14 w-full sm:w-auto rounded-full bg-slate-200/80 px-10 text-lg font-bold text-slate-900 shadow-none transition-colors hover:bg-slate-300/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            Explore Marketplace
          </Button>
        </div>
      </div>

      {/* Massive edge-to-edge (or near edge-to-edge) image with rounded top corners like Bolt */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-t-[2rem] sm:rounded-t-[3rem] aspect-[4/3] sm:aspect-[21/9] bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
            alt="Modern home integrated with bright solar panels"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
