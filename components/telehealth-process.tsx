"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TelehealthProcess() {
  const steps = [
    {
      title: "Platform Integration",
      description: "We integrate with your telehealth platform to ensure seamless data flow and accurate billing.",
    },
    {
      title: "Eligibility Verification",
      description: "We verify patient eligibility for telehealth services with their insurance provider.",
    },
    {
      title: "Documentation Review",
      description: "Our team reviews telehealth documentation to ensure it meets payer-specific requirements.",
    },
    {
      title: "Coding & Claim Preparation",
      description: "We apply appropriate telehealth codes, modifiers, and place of service codes.",
    },
    {
      title: "Claim Submission",
      description: "Claims are submitted electronically with telehealth-specific information.",
    },
    {
      title: "Payment Posting",
      description: "Payments are posted accurately with attention to telehealth-specific reimbursement rates.",
    },
    {
      title: "Denial Management",
      description: "We handle telehealth-specific denials with expert knowledge of virtual care policies.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
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
            Our Process
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Telehealth Billing Workflow</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined telehealth billing process ensures accuracy, efficiency, and compliance with the unique
            requirements of virtual care billing.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-teal-200 transform -translate-x-1/2 hidden md:block"></div>

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
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500 max-w-md"
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  >
                    <h3 className="text-xl font-bold text-teal-700 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  {/* Connector line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 bottom-0 w-1 bg-teal-200 md:hidden"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-teal-50 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Telehealth Billing Results</h3>
              <p className="text-gray-600 mb-6">
                Our telehealth billing services deliver measurable results that improve your practice's financial
                performance and operational efficiency.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Clean Claim Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Average Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">HIPAA Compliant</div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Telehealth Billing Results"
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

