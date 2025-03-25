
import CredentialingHero from "@/components/credentialing-hero"
import CredentialingOverview from "@/components/credentialing-overview"
import CredentialingProcess from "@/components/credentialing-process"
import CredentialingFAQ from "@/components/credentialing-faq"
import SolutionCTA from "@/components/solution-cta"
export default function CredentialingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <CredentialingHero />
      <CredentialingOverview />
      <CredentialingProcess />
      <CredentialingFAQ />
      <SolutionCTA />
    </main>
  )
}

