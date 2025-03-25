
import RevenueAnalysisHero from "@/components/revenue-analysis-hero"
import RevenueAnalysisOverview from "@/components/revenue-analysis-overview"
import RevenueAnalysisReports from "@/components/revenue-analysis-reports"
import RevenueAnalysisTestimonials from "@/components/revenue-analysis-testimonials"
import SolutionCTA from "@/components/solution-cta"

export default function RevenueAnalysisPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <RevenueAnalysisHero />
      <RevenueAnalysisOverview />
      <RevenueAnalysisReports />
      <RevenueAnalysisTestimonials />
      <SolutionCTA />
    </main>
  )
}

