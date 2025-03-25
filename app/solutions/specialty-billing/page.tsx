
import SpecialtyHero from "@/components/specialty-hero"
import SpecialtyOverview from "@/components/specialty-overview"
import SpecialtyServices from "@/components/specialty-services"
import SpecialtyTestimonials from "@/components/specialty-testimonials"
import SolutionCTA from "@/components/solution-cta"

export default function SpecialtyBillingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SpecialtyHero />
      <SpecialtyOverview />
      <SpecialtyServices />
      <SpecialtyTestimonials />
      <SolutionCTA />
    </main>
  )
}

