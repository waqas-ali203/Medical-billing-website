"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, CreditCard, Receipt, FileCheck, Clock, RefreshCw } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#008080]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ x: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-[#E6F4F1] p-3 rounded-full mt-1">
          <div className="text-[#1E3A8A]">{icon}</div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function PaymentPostingOverview() {
  const features = [
    {
      icon: <CreditCard size={24} />,
      title: "ERA/EOB Reconciliation",
      description:
        "We accurately reconcile electronic remittance advice (ERA) and explanation of benefits (EOB) documents with your claims.",
    },
    {
      icon: <Receipt size={24} />,
      title: "Payment Variance Identification",
      description:
        "Our team identifies and resolves payment variances to ensure you receive proper reimbursement for services provided.",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Contractual Adjustment Posting",
      description:
        "We properly post contractual adjustments according to payer contracts to maintain accurate financial records.",
    },
    {
      icon: <Clock size={24} />,
      title: "Timely Processing",
      description: "All payments are posted within 24-48 hours of receipt to maintain an efficient revenue cycle.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Payment Reconciliation",
      description:
        "We ensure all payments are properly reconciled with your bank deposits and practice management system.",
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
            className="inline-block px-4 py-1 bg-[#E6F4F1] text-[#1E3A8A] rounded-full text-sm font-medium mb-4"
          >
            Comprehensive Payment Posting
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accurate Financial Record Management</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our payment posting services ensure all payments are accurately recorded, reconciled, and managed to
            maintain the integrity of your financial records and optimize your revenue cycle.
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

        <motion.div
          className="mt-16 bg-[#E6F4F1] rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-gradient-to-r from-[#1E3A8A] to-[#008080] rounded-full p-6 text-white">
                <CreditCard size={48} />
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Why Accurate Payment Posting Matters</h3>
              <p className="text-gray-700 mb-4">
                Accurate payment posting is the foundation of a healthy revenue cycle. Errors in payment posting can
                lead to incorrect patient balances, revenue leakage, and compliance issues. Our expert team ensures
                every payment is posted correctly, helping you maintain financial integrity and optimize cash flow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Prevents revenue leakage",
                  "Ensures accurate patient balances",
                  "Maintains compliance with payer contracts",
                  "Improves financial reporting accuracy",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#1E3A8A] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

