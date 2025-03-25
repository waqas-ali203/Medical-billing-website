"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PieChart, TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function RevenueAnalysisReports() {
  const [activeTab, setActiveTab] = useState("financial")

  const reports = {
    financial: {
      title: "Financial Performance Reports",
      description:
        "Comprehensive financial reports that provide a clear picture of your practice's financial health and performance.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Revenue by provider, location, and service",
        "Expense analysis and cost control",
        "Profit and loss statements",
        "Cash flow analysis",
        "Budget vs. actual comparison",
      ],
      icon: <DollarSign className="h-6 w-6" />,
    },
    operational: {
      title: "Operational Efficiency Reports",
      description: "Detailed reports that help identify operational inefficiencies and opportunities for improvement.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Appointment utilization rates",
        "Provider productivity metrics",
        "Staff efficiency analysis",
        "Resource allocation optimization",
        "Workflow bottleneck identification",
      ],
      icon: <TrendingUp className="h-6 w-6" />,
    },
    payer: {
      title: "Payer Performance Reports",
      description: "In-depth analysis of payer performance to optimize your payer mix and reimbursement rates.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Payer mix analysis",
        "Reimbursement rate comparison",
        "Contract performance evaluation",
        "Denial rate by payer",
        "Payment velocity tracking",
      ],
      icon: <PieChart className="h-6 w-6" />,
    },
    patient: {
      title: "Patient Demographics Reports",
      description: "Detailed patient demographic analysis to help target your marketing efforts and service offerings.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Patient age and gender distribution",
        "Geographic distribution analysis",
        "Insurance coverage breakdown",
        "Visit frequency patterns",
        "Service utilization by demographic",
      ],
      icon: <Users className="h-6 w-6" />,
    },
  }

  const activeReport = reports[activeTab as keyof typeof reports]

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
            className="inline-block px-4 py-1 bg-[#E6F4F1] text-[#1E3A8A] rounded-full text-sm font-medium mb-4"
          >
            Comprehensive Reporting
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customized Analytics & Reports</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our revenue analysis services include a wide range of customized reports and analytics designed to provide
            actionable insights for your practice.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.entries(reports).map(([key, report]) => (
              <motion.button
                key={key}
                className={`flex items-center gap-2 px-6 py-3 rounded-full m-2 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-[#1E3A8A] to-[#008080] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={activeTab === key ? "text-white" : "text-[#008080]"}>{report.icon}</span>
                <span>{report.title.split(" ")[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">{activeReport.title}</h3>
                <p className="text-gray-600 mb-6">{activeReport.description}</p>

                <div className="space-y-3">
                  {activeReport.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="bg-[#E6F4F1] p-1 rounded-full mt-0.5">
                        <div className="h-3 w-3 bg-[#008080] rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={activeReport.image || "/placeholder.svg"}
                  alt={activeReport.title}
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

