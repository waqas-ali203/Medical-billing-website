
import HeroSection from "@/components/hero-section"
import CardSection from "@/components/card-section"
import PerformanceSection from "@/components/performance-section"
import CarouselSection from "@/components/carousel-section"
import ChooseUsSection from "@/components/choose-us-section"
import SpecialistSection from "@/components/specialist-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden w-full">
        <HeroSection />
        <CardSection />
        <PerformanceSection />
        <CarouselSection />
        <ChooseUsSection />
        <SpecialistSection />
        <ContactSection />
      </div>
    </main>
  )
}

