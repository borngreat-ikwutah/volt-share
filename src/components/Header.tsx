import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground no-underline transition-opacity hover:opacity-90"
          >
            <Logo className="h-8 w-8 text-[#10b981]" />
            <span className="text-base font-semibold text-foreground">
              VoltShare
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium md:flex font-sans">
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Marketplace
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Impact
          </Link>
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Creators
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <Link
            to="/"
            className="inline-flex h-9 items-center justify-center rounded-full bg-[#10b981] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#059669] sm:ml-2"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
