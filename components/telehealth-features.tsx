"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Video, Globe, FileText, Shield, Clock, DollarSign } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ x: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-teal-100 p-3 rounded-full mt-1">
          <div className="text-teal-600">{icon}</div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TelehealthFeatures() {
  const features = [
    {
      icon: <Video size={24} />,
      title: "Platform-Specific Billing",
      description:
        "Tailored billing solutions for various telehealth platforms including Zoom, Teladoc, Doxy.me, and custom solutions.",
    },
    {
      icon: <Globe size={24} />,
      title: "Multi-State Licensing",
      description:
        "Navigate the complex landscape of interstate telehealth billing with our expertise in multi-state regulations.",
    },
    {
      icon: <FileText size={24} />,
      title: "Telehealth Documentation",
      description:
        "Guidance on telehealth-specific documentation requirements to ensure compliance and maximize reimbursement.",
    },
    {
      icon: <Shield size={24} />,
      title: "Regulatory Compliance",
      description:
        "Stay compliant with rapidly evolving telehealth regulations, including HIPAA and state-specific requirements.",
    },
    {
      icon: <Clock size={24} />,
      title: "Real-Time Eligibility",
      description:
        "Verify patient eligibility for telehealth services in real-time to reduce claim denials and improve cash flow.",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Reimbursement Optimization",
      description:
        "Maximize reimbursement for telehealth services with our knowledge of payer-specific telehealth policies.",
    },
  ]

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
            className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4"
          >
            Key Features
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Telehealth Billing</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our telehealth billing services include a range of features designed to maximize reimbursement and ensure
            compliance with the unique requirements of virtual care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

