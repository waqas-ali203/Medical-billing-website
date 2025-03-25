
import SolutionHeader from "@/components/solution-header"
import MedicalCodingOverview from "@/components/medical-coding-overview"
import MedicalCodingProcess from "@/components/medical-coding-process"
import MedicalCodingBenefits from "@/components/medical-coding-benefits"
import SolutionCTA from "@/components/solution-cta"

export default function MedicalCodingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SolutionHeader
        title="Medical Coding Services"
        description="Expert medical coding services to ensure accurate reimbursement and compliance"
        icon="FileText"
      />
      <MedicalCodingOverview />
      <MedicalCodingProcess />
      <MedicalCodingBenefits />
      <SolutionCTA />
    </main>
  )
}

