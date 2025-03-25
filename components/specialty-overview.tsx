"use client"

import { motion } from "framer-motion"
import { CheckCircle, HeartPulse, Brain, Microscope, Bone } from "lucide-react"

export default function SpecialtyOverview() {
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
              className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4"
            >
              Specialty Expertise
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored Billing for Medical Specialties</h2>

            <p className="text-gray-600 mb-8">
              Each medical specialty has unique billing requirements, codes, and payer policies. Our team includes
              billing specialists with expertise in various medical specialties, ensuring accurate coding and maximum
              reimbursement for your specific practice.
            </p>

            <div className="space-y-4">
              {[
                "Specialty-specific coding expertise",
                "Knowledge of complex procedures and modifiers",
                "Familiarity with specialty-specific documentation requirements",
                "Understanding of payer policies for specialty services",
                "Experience with specialty-specific denials and appeals",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
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
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500"
                whileHover={{ y: -10 }}
              >
                <HeartPulse className="h-10 w-10 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cardiology</h3>
                <p className="text-sm text-gray-600">Expert billing for cardiac procedures and diagnostics</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500"
                whileHover={{ y: -10 }}
              >
                <Brain className="h-10 w-10 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Neurology</h3>
                <p className="text-sm text-gray-600">Specialized billing for neurological services</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500"
                whileHover={{ y: -10 }}
              >
                <Bone className="h-10 w-10 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Orthopedics</h3>
                <p className="text-sm text-gray-600">Comprehensive billing for orthopedic procedures</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500"
                whileHover={{ y: -10 }}
              >
                <Microscope className="h-10 w-10 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pathology</h3>
                <p className="text-sm text-gray-600">Accurate billing for laboratory and pathology services</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-50 rounded-full -z-10"></div>

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 mb-1">Claim Approval Rate</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">97%</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <motion.div
                  className="h-full bg-pink-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "97%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-2">For specialty practices</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

