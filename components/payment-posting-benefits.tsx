"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Shield, FileCheck, Users } from "lucide-react"

export default function PaymentPostingBenefits() {
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-[#008080]" />,
      title: "Improved Cash Flow",
      description: "Faster payment posting leads to improved cash flow and reduced days in accounts receivable.",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#008080]" />,
      title: "Time Savings",
      description:
        "Our team handles time-consuming payment posting tasks, freeing up your staff to focus on patient care.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#008080]" />,
      title: "Reduced Revenue Leakage",
      description: "Accurate payment posting prevents revenue leakage and ensures you receive proper reimbursement.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#008080]" />,
      title: "Enhanced Compliance",
      description: "Our processes ensure compliance with payer contracts and healthcare regulations.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-[#008080]" />,
      title: "Improved Reporting",
      description: "Accurate payment posting leads to better financial reporting and decision-making.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#008080]" />,
      title: "Better Patient Experience",
      description: "Accurate patient balances lead to improved patient satisfaction and fewer billing inquiries.",
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
            Key Advantages
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Payment Posting Services</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our expert payment posting services can transform your practice's financial performance and
            operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:bg-[#E6F4F1] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-6">{benefit.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

