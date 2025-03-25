
import ServiceHero from "@/components/service-hero"
import ServiceCards from "@/components/service-cards"
import ServiceCTA from "@/components/service-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden w-full">
        <ServiceHero />
        <ServiceCards />
        <ServiceCTA />
      </div>
    </main>
  )
}

