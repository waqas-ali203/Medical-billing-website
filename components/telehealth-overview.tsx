"use client"

import { motion } from "framer-motion"
import { CheckCircle, Video, Globe, FileText, Shield } from "lucide-react"

export default function TelehealthOverview() {
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
              className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4"
            >
              Telehealth Billing Expertise
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Billing for Virtual Care</h2>

            <p className="text-gray-600 mb-8">
              Telehealth billing requires specialized knowledge of virtual care codes, modifiers, and payer-specific
              requirements. Our team stays current with the rapidly evolving telehealth reimbursement landscape to
              ensure you receive maximum payment for your virtual services.
            </p>

            <div className="space-y-4">
              {[
                "Expert knowledge of telehealth CPT codes and modifiers",
                "Understanding of state-specific telehealth regulations",
                "Familiarity with payer-specific virtual care policies",
                "Experience with various telehealth platforms and documentation requirements",
                "Strategies to optimize reimbursement for virtual services",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
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
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500"
                whileHover={{ y: -10 }}
              >
                <Video className="h-10 w-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Virtual Visit Coding</h3>
                <p className="text-sm text-gray-600">Accurate coding for all types of virtual encounters</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500"
                whileHover={{ y: -10 }}
              >
                <Globe className="h-10 w-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-State Compliance</h3>
                <p className="text-sm text-gray-600">Navigate complex interstate telehealth regulations</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500"
                whileHover={{ y: -10 }}
              >
                <FileText className="h-10 w-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Documentation Support</h3>
                <p className="text-sm text-gray-600">Guidance on telehealth-specific documentation requirements</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500"
                whileHover={{ y: -10 }}
              >
                <Shield className="h-10 w-10 text-teal-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Protection</h3>
                <p className="text-sm text-gray-600">Ensure compliance with telehealth billing regulations</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-50 rounded-full -z-10"></div>

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 mb-1">Processing Time</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24h</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <motion.div
                  className="h-full bg-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Average claim submission time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

