"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, FileText, ClipboardCheck, CreditCard, BarChart4, Shield } from "lucide-react"

interface ServiceData {
  title: string
  description: string
  features: string[]
  image: string
  icon: React.ReactNode
}

const serviceData: Record<string, ServiceData> = {
  "medical-coding": {
    title: "Expert Medical Coding Services",
    description:
      "Our team of certified medical coders ensures accurate and compliant coding for all medical specialties, maximizing reimbursement while minimizing audit risks.",
    features: [
      "ICD-10-CM, CPT, and HCPCS coding expertise",
      "Specialty-specific coding knowledge",
      "Regular updates on coding changes and regulations",
      "Coding audit and optimization services",
      "Detailed documentation review and feedback",
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    icon: <FileText className="h-8 w-8 text-[#735739]" />,
  },
  "claims-processing": {
    title: "Efficient Claims Processing",
    description:
      "Our streamlined claims processing system ensures timely submission and follow-up, reducing denials and accelerating your revenue cycle.",
    features: [
      "Electronic claims submission to all major payers",
      "Claim scrubbing and error detection before submission",
      "Rejection analysis and correction",
      "Timely filing management",
      "Automated follow-up on pending claims",
    ],
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=800&auto=format&fit=crop",
    icon: <ClipboardCheck className="h-8 w-8 text-[#735739]" />,
  },
  "payment-posting": {
    title: "Accurate Payment Posting",
    description:
      "Our payment posting services ensure all payments are accurately recorded and reconciled, maintaining the integrity of your financial records.",
    features: [
      "ERA/EOB reconciliation",
      "Payment variance identification",
      "Contractual adjustment posting",
      "Patient payment processing",
      "Detailed payment reports",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    icon: <CreditCard className="h-8 w-8 text-[#735739]" />,
  },
  "revenue-analysis": {
    title: "Comprehensive Revenue Analysis",
    description:
      "Our detailed financial reporting and analysis help identify revenue opportunities and optimize your practice's financial performance.",
    features: [
      "Practice performance metrics",
      "Provider productivity analysis",
      "Payer mix optimization",
      "Revenue cycle KPI tracking",
      "Customized financial dashboards",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    icon: <BarChart4 className="h-8 w-8 text-[#735739]" />,
  },
  "compliance-services": {
    title: "Healthcare Compliance Services",
    description:
      "Our compliance services ensure your practice adheres to all healthcare regulations and billing requirements, protecting you from penalties and audits.",
    features: [
      "HIPAA compliance monitoring",
      "Documentation review and improvement",
      "Regulatory updates and training",
      "Audit preparation assistance",
      "Compliance risk assessment",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    icon: <Shield className="h-8 w-8 text-[#735739]" />,
  },
}

// Default service data for fallback
const defaultService: ServiceData = {
  title: "Our Professional Services",
  description: "We provide comprehensive medical billing services tailored to your practice's unique needs.",
  features: [
    "Expert team of certified professionals",
    "Customized solutions for your practice",
    "State-of-the-art technology",
    "Ongoing support and training",
    "Regular performance reporting",
  ],
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  icon: <FileText className="h-8 w-8 text-[#735739]" />,
}

export default function ServiceOverview({ slug }: { slug: string }) {
  const service = serviceData[slug] || defaultService

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#f0ebe4] p-3 rounded-full">{service.icon}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
            </div>

            <p className="text-gray-600 text-lg">{service.description}</p>

            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>

              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#735739] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f0ebe4] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e9dfd4] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

