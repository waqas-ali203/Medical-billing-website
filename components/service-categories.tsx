"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

interface CategoryProps {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  active: boolean
  onClick: () => void
}

function Category({ id, title, description, features, image, active, onClick }: CategoryProps) {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 border-l-4 ${
        active ? "border-[#735739] bg-[#f0ebe4]/50" : "border-transparent hover:border-[#e9dfd4]"
      } px-6 py-4 rounded-r-lg`}
      onClick={onClick}
    >
      <h3 className={`text-xl font-bold mb-2 ${active ? "text-[#735739]" : "text-gray-900"}`}>{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
    </div>
  )
}

export default function ServiceCategories() {
  const categories = [
    {
      id: "primary-care",
      title: "Primary Care Practices",
      description: "Tailored billing solutions for family medicine, internal medicine, and pediatric practices.",
      features: [
        "Specialized coding for preventive services",
        "Efficient management of chronic care billing",
        "Vaccine and immunization claim processing",
        "Patient eligibility verification",
        "Coordination of benefits handling",
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "specialty",
      title: "Specialty Practices",
      description: "Expert billing services for cardiology, orthopedics, neurology, and other specialty practices.",
      features: [
        "Procedure-specific coding expertise",
        "Complex diagnostic test billing",
        "Surgery and treatment coding",
        "Prior authorization management",
        "Specialty-specific compliance guidance",
      ],
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "mental-health",
      title: "Mental Health Providers",
      description: "Specialized billing services for psychiatrists, psychologists, and behavioral health practices.",
      features: [
        "Therapy session coding and billing",
        "Insurance verification for mental health benefits",
        "Telehealth service billing",
        "Substance abuse treatment coding",
        "Mental health parity compliance",
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "hospitals",
      title: "Hospitals & Facilities",
      description: "Comprehensive billing solutions for hospitals, surgical centers, and healthcare facilities.",
      features: [
        "Inpatient and outpatient coding",
        "Emergency department billing",
        "Facility fee processing",
        "DRG optimization",
        "Charge capture improvement",
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  const currentCategory = categories.find((cat) => cat.id === activeCategory) || categories[0]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Specialized Solutions
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Your Practice</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We understand that different healthcare specialties have unique billing requirements. Our services are
            customized to address the specific needs of your practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-2">
            {categories.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                features={category.features}
                image={category.image}
                active={category.id === activeCategory}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentCategory.title}</h3>
                <p className="text-gray-600 mb-6">{currentCategory.description}</p>

                <div className="space-y-3 mb-6">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#735739] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={currentCategory.image || "/placeholder.svg"}
                  alt={currentCategory.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

