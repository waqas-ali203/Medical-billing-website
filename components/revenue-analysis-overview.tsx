"use client"
import { motion } from "framer-motion"
import { CheckCircle, BarChart4, PieChart, LineChart, FileText } from "lucide-react"

export default function RevenueAnalysisOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-[#E6F4F1] text-[#1E3A8A] rounded-full text-sm font-medium mb-4"
            >
              Comprehensive Analysis
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Data Into Strategic Insights</h2>

            <p className="text-gray-600 mb-8">
              Our revenue analysis services provide detailed financial reporting and analytics that help identify
              revenue opportunities, optimize your practice's financial performance, and make data-driven decisions. We
              transform complex financial data into actionable insights that drive growth and profitability.
            </p>

            <div className="space-y-4">
              {[
                "Practice performance metrics and benchmarking",
                "Provider productivity analysis and comparison",
                "Payer mix optimization strategies",
                "Revenue cycle KPI tracking and improvement",
                "Customized financial dashboards and reporting",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-[#008080] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#008080]"
                whileHover={{ y: -10 }}
              >
                <BarChart4 className="h-10 w-10 text-[#008080] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Metrics</h3>
                <p className="text-sm text-gray-600">Track key performance indicators to measure practice success</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#008080]"
                whileHover={{ y: -10 }}
              >
                <PieChart className="h-10 w-10 text-[#008080] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Payer Analysis</h3>
                <p className="text-sm text-gray-600">Optimize your payer mix for maximum reimbursement</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#008080]"
                whileHover={{ y: -10 }}
              >
                <LineChart className="h-10 w-10 text-[#008080] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Trend Analysis</h3>
                <p className="text-sm text-gray-600">Identify patterns and trends in your financial data</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#008080]"
                whileHover={{ y: -10 }}
              >
                <FileText className="h-10 w-10 text-[#008080] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Reports</h3>
                <p className="text-sm text-gray-600">Tailored reports designed for your specific needs</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E6F4F1] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#A7C7E7] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

