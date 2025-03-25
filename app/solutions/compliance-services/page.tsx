
import ComplianceHero from "@/components/compliance-hero"
import ComplianceOverview from "@/components/compliance-overview"
import ComplianceServices from "@/components/compliance-services"
import ComplianceAdvantages from "@/components/compliance-advantages"
import SolutionCTA from "@/components/solution-cta"

export default function ComplianceServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ComplianceHero />
      <ComplianceOverview />
      <ComplianceServices />
      <ComplianceAdvantages />
      <SolutionCTA />
    </main>
  )
}

