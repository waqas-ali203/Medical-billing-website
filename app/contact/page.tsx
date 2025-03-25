import ContactHero from "@/components/contact-hero"
import ContactDetails from "@/components/contact-details"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden w-full">
        <ContactHero />
        <ContactDetails />
        <ContactMap />
      </div>
    </main>
  )
}

