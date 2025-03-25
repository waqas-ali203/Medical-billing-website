"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, FileText } from "lucide-react"

export default function MedicalCodingOverview() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Coding Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white to-white/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
              Expert Medical Coding
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6">
              Accurate Coding for Optimal Reimbursement
            </h2>

            <p className="text-gray-700 mb-8">
              Our certified medical coders ensure accurate code assignment for all diagnoses, procedures, and services
              provided by your healthcare facility. We stay current with the latest coding guidelines and regulatory
              changes to maximize your reimbursement while maintaining compliance.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Certified professional coders with specialty-specific expertise",
                "Comprehensive knowledge of ICD-10-CM, CPT, and HCPCS coding systems",
                "Regular quality audits to ensure coding accuracy",
                "Ongoing education to stay current with coding updates",
                "Detailed documentation review to support code assignment",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-darkblue to-teal p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-darkblue">Coding Accuracy Rates</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Diagnosis Coding", value: "99.2%" },
                    { label: "Procedure Coding", value: "98.7%" },
                    { label: "Modifier Usage", value: "99.5%" },
                    { label: "Documentation Support", value: "97.8%" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">{stat.label}</span>
                        <span className="text-darkblue font-bold">{stat.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal to-emerald h-2 rounded-full"
                          style={{
                            width: stat.value,
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 text-sm italic">
                    "Our coding accuracy directly impacts your bottom line. Each percentage point improvement in coding
                    accuracy can result in a 3-5% increase in revenue."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald/20 rounded-full z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal/10 rounded-full z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

