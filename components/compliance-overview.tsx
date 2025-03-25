"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, FileText, BookOpen, Users } from "lucide-react"

export default function ComplianceOverview() {
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
              className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            >
              Compliance Expertise
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensuring Healthcare Regulatory Compliance</h2>

            <p className="text-gray-600 mb-8">
              Our compliance services help healthcare providers navigate the complex landscape of healthcare
              regulations, ensuring adherence to all requirements while optimizing your billing processes. We stay
              up-to-date with changing regulations so you don't have to.
            </p>

            <div className="space-y-4">
              {[
                "HIPAA compliance monitoring and risk assessment",
                "Documentation review and improvement recommendations",
                "Regular updates on regulatory changes",
                "Audit preparation and support",
                "Staff training on compliance requirements",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
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
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
                whileHover={{ y: -10 }}
              >
                <Shield className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA Compliance</h3>
                <p className="text-sm text-gray-600">Protect patient health information and avoid penalties</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
                whileHover={{ y: -10 }}
              >
                <FileText className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">Ensure proper documentation for billing compliance</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
                whileHover={{ y: -10 }}
              >
                <BookOpen className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Regulatory Updates</h3>
                <p className="text-sm text-gray-600">Stay current with changing healthcare regulations</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
                whileHover={{ y: -10 }}
              >
                <Users className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Training</h3>
                <p className="text-sm text-gray-600">Comprehensive compliance training for your team</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

