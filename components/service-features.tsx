"use client"

import type React from "react"

import { motion } from "framer-motion"
import { FileText, ClipboardCheck, CreditCard, BarChart4, Shield, Users } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-[#e9dfd4]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-[#f0ebe4] p-3 rounded-full mt-1">
          <div className="text-[#735739]">{icon}</div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServiceFeatures() {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Medical Coding",
      description: "Expert coding services for all medical specialties to ensure proper reimbursement and compliance.",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Claims Processing",
      description: "Efficient claims submission and follow-up to minimize rejections and accelerate payments.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Posting",
      description: "Accurate and timely posting of payments to maintain the integrity of your financial records.",
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Revenue Analysis",
      description: "Detailed financial reporting and analysis to identify opportunities for revenue optimization.",
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance Services",
      description: "Ensuring adherence to healthcare regulations and billing requirements to avoid penalties.",
    },
    {
      icon: <Users size={24} />,
      title: "Credentialing",
      description: "Provider enrollment services with insurance companies and government programs.",
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
            Our Expertise
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Billing Services</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of medical billing services tailored to your practice's unique needs. Each service
            is designed to optimize your revenue cycle and improve your bottom line.
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

