"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PaymentPostingWorkflow() {
  const steps = [
    {
      title: "Payment Receipt",
      description: "We receive and organize electronic and paper payments from all payers and patients.",
    },
    {
      title: "Payment Verification",
      description: "Each payment is verified against the corresponding claim to ensure accuracy.",
    },
    {
      title: "ERA/EOB Processing",
      description: "Electronic remittance advice and explanation of benefits documents are processed and reconciled.",
    },
    {
      title: "Payment Posting",
      description: "Payments are posted to the correct accounts with proper allocation to specific charges.",
    },
    {
      title: "Adjustment Processing",
      description: "Contractual adjustments, write-offs, and other adjustments are properly recorded.",
    },
    {
      title: "Balance Reconciliation",
      description: "Patient and insurance balances are reconciled to ensure accuracy.",
    },
    {
      title: "Reporting & Analysis",
      description: "Detailed reports are generated to provide insights into payment trends and issues.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
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
            Our Process
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Posting Workflow</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined payment posting process ensures accuracy, efficiency, and transparency at every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#e9dfd4] transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 flex justify-center">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#735739] max-w-md"
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  >
                    <h3 className="text-xl font-bold text-[#735739] mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                  <div className="w-12 h-12 bg-[#735739] rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  {/* Connector line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 bottom-0 w-1 bg-[#e9dfd4] md:hidden"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-white rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#735739] mb-4">Our Payment Posting Results</h3>
              <p className="text-gray-600 mb-6">
                Our payment posting services deliver measurable results that improve your practice's financial
                performance and operational efficiency.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#735739] mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Posting Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#735739] mb-1">24h</div>
                  <div className="text-sm text-gray-600">Average Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#735739] mb-1">15%</div>
                  <div className="text-sm text-gray-600">Reduced A/R Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#735739] mb-1">100%</div>
                  <div className="text-sm text-gray-600">HIPAA Compliant</div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                alt="Payment Posting Results"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

