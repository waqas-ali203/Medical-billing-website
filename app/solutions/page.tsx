
import SolutionsHero from "@/components/solutions-hero"
import SolutionsOverview from "@/components/solutions-overview"
import SolutionsComparison from "@/components/solutions-comparison"
import SolutionsIntegration from "@/components/solutions-integration"
import SolutionsCallout from "@/components/solutions-callout"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden w-full">
        <SolutionsHero />
        <SolutionsOverview />
        <SolutionsComparison />
        <SolutionsIntegration />
        <SolutionsCallout />
      </div>
    </main>
  )
}

