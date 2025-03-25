"use client"

import type React from "react"

import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Shield, Users, HeartPulse } from "lucide-react"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function BenefitCard({ icon, title, description, index }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#e9dfd4",
      }}
    >
      <motion.div
        className="w-16 h-16 bg-[#f0ebe4] rounded-full flex items-center justify-center mb-6 mx-auto"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-[#735739]">{icon}</div>
      </motion.div>

      <motion.h3 className="text-xl font-bold text-center mb-3" whileHover={{ color: "#735739" }}>
        {title}
      </motion.h3>

      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  )
}

// Service-specific benefits data
const benefitsData: Record<string, Array<{ icon: React.ReactNode; title: string; description: string }>> = {
  "medical-coding": [
    {
      icon: <TrendingUp size={32} />,
      title: "Increased Revenue",
      description:
        "Accurate coding ensures proper reimbursement for all services provided, maximizing your revenue potential.",
    },
    {
      icon: <Clock size={32} />,
      title: "Time Savings",
      description: "Our expert coders handle complex coding tasks, freeing up your staff to focus on patient care.",
    },
    {
      icon: <Shield size={32} />,
      title: "Reduced Audit Risk",
      description: "Compliant coding practices minimize the risk of audits and potential penalties.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Minimized Claim Denials",
      description: "Proper coding from the start reduces claim denials and the need for resubmissions.",
    },
  ],
  "claims-processing": [
    {
      icon: <Clock size={32} />,
      title: "Faster Payments",
      description: "Efficient claims processing accelerates your revenue cycle and improves cash flow.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Higher Acceptance Rates",
      description: "Our claim scrubbing process ensures clean claims with higher first-pass acceptance rates.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Reduced Administrative Costs",
      description: "Outsourcing claims processing reduces staffing and training costs for your practice.",
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance Assurance",
      description: "All claims are processed in accordance with payer requirements and healthcare regulations.",
    },
  ],
}

// Default benefits for fallback
const defaultBenefits = [
  {
    icon: <TrendingUp size={32} />,
    title: "Increased Revenue",
    description: "Our services help maximize reimbursement and improve your bottom line.",
  },
  {
    icon: <Clock size={32} />,
    title: "Time Savings",
    description: "We handle administrative tasks so your team can focus on patient care.",
  },
  {
    icon: <DollarSign size={32} />,
    title: "Cost Reduction",
    description: "Outsourcing billing functions reduces overhead and staffing costs.",
  },
  {
    icon: <Shield size={32} />,
    title: "Compliance Assurance",
    description: "We ensure adherence to all healthcare regulations and billing requirements.",
  },
  {
    icon: <Users size={32} />,
    title: "Expert Support",
    description: "Access to a team of billing specialists with industry expertise.",
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Improved Patient Experience",
    description: "Better billing processes lead to improved patient satisfaction.",
  },
]

export default function ServiceBenefits({ slug }: { slug: string }) {
  const benefits = benefitsData[slug] || defaultBenefits

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
            Key Advantages
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Service</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our specialized services can transform your practice's financial performance and operational
            efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

