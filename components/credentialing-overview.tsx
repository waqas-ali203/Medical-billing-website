"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CredentialingOverview() {
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
              className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
            >
              Provider Enrollment
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamlined Credentialing Services</h2>

            <p className="text-gray-600 mb-8">
              Our credentialing services simplify the complex process of provider enrollment with insurance companies
              and government programs. We handle the paperwork, follow up with payers, and track the status of your
              applications, allowing you to focus on patient care.
            </p>

            <div className="space-y-4">
              {[
                "Payer enrollment management for all major insurance companies",
                "CAQH profile creation and maintenance",
                "Medicare and Medicaid enrollment",
                "Credentialing status tracking and reporting",
                "Re-credentialing management and timely renewals",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-[#735739] mt-1 flex-shrink-0" />
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
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Credentialing Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#735739]/70 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f0ebe4] rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e9dfd4] rounded-full -z-10"></div>

            {/* Stats card */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-500 mb-1">Time Savings</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">60%</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <motion.div
                  className="h-full bg-[#735739] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Reduction in credentialing time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

