
import TelehealthHero from "@/components/telehealth-hero"
import TelehealthOverview from "@/components/telehealth-overview"
import TelehealthFeatures from "@/components/telehealth-features"
import TelehealthProcess from "@/components/telehealth-process"
import SolutionCTA from "@/components/solution-cta"
export default function TelehealthBillingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <TelehealthHero />
      <TelehealthOverview />
      <TelehealthFeatures />
      <TelehealthProcess />
      <SolutionCTA />
    </main>
  )
}

