"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

interface PricingTierProps {
  name: string
  price: string
  description: string
  features: string[]
  notIncluded?: string[]
  popular?: boolean
  index: number
}

function PricingTier({
  name,
  price,
  description,
  features,
  notIncluded = [],
  popular = false,
  index,
}: PricingTierProps) {
  return (
    <motion.div
      className={`rounded-xl shadow-lg overflow-hidden ${
        popular ? "border-2 border-[#735739] scale-105 z-10" : "border border-gray-200"
      } bg-white`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      {popular && <div className="bg-[#735739] text-white text-center py-2 text-sm font-medium">Most Popular</div>}

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== "Custom" && <span className="text-gray-600 ml-1">/month</span>}
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-[#735739] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}

          {notIncluded.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 opacity-60">
              <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-500">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className={`w-full ${
            popular
              ? "bg-[#735739] hover:bg-[#5d472e]"
              : "bg-white text-[#735739] border-2 border-[#735739] hover:bg-[#f0ebe4]"
          }`}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  )
}

export default function ServicePricing() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$999",
      description: "Perfect for small practices with basic billing needs",
      features: [
        "Claims submission and processing",
        "Payment posting",
        "Basic reporting",
        "Patient statement processing",
        "Email support",
      ],
      notIncluded: ["Dedicated account manager", "Custom reporting", "Compliance monitoring"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Ideal for growing practices with moderate volume",
      features: [
        "Everything in Basic",
        "Dedicated account manager",
        "Denial management",
        "Custom reporting",
        "Compliance monitoring",
        "Phone and email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large practices and healthcare systems",
      features: [
        "Everything in Professional",
        "Revenue cycle consulting",
        "Advanced analytics",
        "Practice management integration",
        "Credentialing services",
        "Priority support",
        "Quarterly business reviews",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
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
            Pricing Plans
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Options</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your practice's needs and budget. All plans include our core billing services
            with different levels of support and features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              notIncluded={tier.notIncluded}
              popular={tier.popular}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution? Contact us for a personalized quote.</p>
          <Button variant="outline" className="border-[#735739] text-[#735739] hover:bg-[#f0ebe4]">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

