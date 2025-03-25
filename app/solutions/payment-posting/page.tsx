
import PaymentPostingHero from "@/components/payment-posting-hero"
import PaymentPostingOverview from "@/components/payment-posting-overview"
import PaymentPostingWorkflow from "@/components/payment-posting-workflow"
import PaymentPostingBenefits from "@/components/payment-posting-benefits"
import SolutionCTA from "@/components/solution-cta"

export default function PaymentPostingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PaymentPostingHero />
      <PaymentPostingOverview />
      <PaymentPostingWorkflow />
      <PaymentPostingBenefits />
      <SolutionCTA />
    </main>
  )
}

