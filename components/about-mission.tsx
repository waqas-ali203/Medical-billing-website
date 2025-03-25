"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutMission() {
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
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Our Purpose
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving healthcare forward through optimized financial operations and exceptional service.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              Our Mission
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Empowering Healthcare Providers Through Financial Excellence
            </h3>

            <p className="text-gray-600">
              Our mission is to empower healthcare providers to focus on patient care by delivering exceptional medical
              billing services that optimize revenue, ensure compliance, and reduce administrative burden.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Maximize reimbursement through expert coding and billing practices",
                "Reduce claim denials and accelerate payment cycles",
                "Ensure compliance with ever-changing healthcare regulations",
                "Provide actionable financial insights to support practice growth",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
                alt="Healthcare Professionals"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-indigo-900/20"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                alt="Future of Healthcare"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Our Vision
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Transforming Healthcare Through Financial Innovation
            </h3>

            <p className="text-gray-600">
              We envision a healthcare ecosystem where providers can dedicate their full attention to patient care,
              unburdened by financial complexities, supported by innovative billing solutions that adapt to the evolving
              healthcare landscape.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Pioneer new approaches to revenue cycle management",
                "Leverage cutting-edge technology to automate routine billing tasks",
                "Develop predictive analytics to anticipate and prevent claim issues",
                "Create seamless integration between clinical and financial systems",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div className="pt-4" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
                "Our ultimate goal is to transform the financial side of healthcare, allowing providers to focus on what
                they do best – delivering exceptional patient care."
                <footer className="mt-2 font-medium text-gray-900">— Jane Smith, CEO</footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

