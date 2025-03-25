
import SolutionHeader from "@/components/solution-header"
import ClaimsProcessingOverview from "@/components/claims-processing-overview"
import ClaimsProcessingFeatures from "@/components/claims-processing-features"
import ClaimsProcessingStats from "@/components/claims-processing-stats"
import SolutionCTA from "@/components/solution-cta"

export default function ClaimsProcessingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SolutionHeader
        title="Claims Processing Services"
        description="Efficient claims submission and follow-up to minimize rejections and accelerate payments"
        icon="ClipboardCheck"
      />
      <ClaimsProcessingOverview />
      <ClaimsProcessingFeatures />
      <ClaimsProcessingStats />
      <SolutionCTA />
    </main>
  )
}

