"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ClipboardCheck, Search, AlertCircle, Clock, BarChart4, RefreshCw } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, borderColor: "#e9dfd4" }}
    >
      <div className="bg-[#f0ebe4] p-3 rounded-full w-fit mb-4">
        <div className="text-[#735739]">{icon}</div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function ClaimsProcessingFeatures() {
  const features = [
    {
      icon: <ClipboardCheck size={24} />,
      title: "Clean Claims Submission",
      description:
        "We ensure all claims are submitted with accurate information to maximize first-pass acceptance rates.",
    },
    {
      icon: <Search size={24} />,
      title: "Claim Scrubbing",
      description: "Our advanced scrubbing technology identifies and corrects potential errors before submission.",
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Denial Management",
      description:
        "We analyze denied claims, identify root causes, and resubmit with corrections to maximize reimbursement.",
    },
    {
      icon: <Clock size={24} />,
      title: "Timely Filing Tracking",
      description: "We monitor filing deadlines to ensure all claims are submitted within payer-specific timeframes.",
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Performance Analytics",
      description:
        "Detailed reporting on claims status, denial rates, and reimbursement trends to optimize your revenue cycle.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Automated Follow-up",
      description:
        "Systematic follow-up on pending claims to ensure timely payment and reduce accounts receivable days.",
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
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Key Features
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Claims Processing</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our claims processing services include a range of features designed to maximize reimbursement and accelerate
            your revenue cycle.
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

