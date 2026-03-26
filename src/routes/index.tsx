import { createFileRoute } from '@tanstack/react-router'
import { generateSeo } from '../utils/seo'
import Hero from '#/landing/Hero'
import Pillars from '#/landing/Pillars'
import RoleToggle from '#/landing/RoleToggle'
import Impact from '#/landing/Impact'
import Cta from '#/landing/Cta'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: generateSeo({
      title: 'Home',
      description: 'Start simple, ship quickly.',
    }),
  }),
})

function App() {
  return (
    <main className="flex min-h-screen flex-col text-foreground w-full">
      <Hero />
      <Pillars />
      <RoleToggle />
      <Impact />
      <Cta />
    </main>
  )
}
