"use client"

import { motion } from "framer-motion"
import { Shield, DollarSign, Clock, Users, FileCheck, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function ComplianceAdvantages() {
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
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Key Benefits
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advantages of Our Compliance Services</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our compliance services can protect your practice while optimizing your revenue cycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                alt="Compliance Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <Shield className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reduced Risk</h3>
                <p className="text-gray-600">Minimize the risk of penalties and audits through proactive compliance.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <DollarSign className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Increased Revenue</h3>
                <p className="text-gray-600">Optimize billing practices while maintaining strict compliance.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <Clock className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Time Savings</h3>
                <p className="text-gray-600">Let our experts handle compliance so you can focus on patient care.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <AlertTriangle className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Protection</h3>
                <p className="text-gray-600">Be prepared for audits with proper documentation and processes.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <Users className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Confidence</h3>
                <p className="text-gray-600">Empower your team with knowledge of compliance requirements.</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <FileCheck className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Peace of Mind</h3>
                <p className="text-gray-600">Rest easy knowing your practice is meeting all regulatory requirements.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

