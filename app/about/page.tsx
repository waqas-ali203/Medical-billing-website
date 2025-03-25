import AboutHero from "@/components/about-hero"
import AboutDifference from "@/components/about-difference"
import AboutValues from "@/components/about-values"
import AboutMission from "@/components/about-mission"

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden w-full">
        <AboutHero />
        <AboutDifference />
        <AboutValues />
        <AboutMission />
      </div>
    </main>
  )
}

