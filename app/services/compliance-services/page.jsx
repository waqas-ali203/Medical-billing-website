"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  BookOpen,
  Users,
  AlertTriangle,
  DollarSign,
  Clock,
} from "lucide-react"

export default function ComplianceServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section - Centered with animated background pattern */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle
                id="pattern-circle"
                cx="25"
                cy="25"
                r="12"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              ></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="bg-white/20 p-4 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="h-12 w-12" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Healthcare <span className="text-red-200">Compliance Services</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-red-100 mb-8 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ensure adherence to healthcare regulations and billing requirements with our comprehensive compliance
              services. Protect your practice from penalties and audits while maintaining the highest standards of
              integrity.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full bg-white text-red-700 hover:bg-red-50">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  icon: <Shield className="h-8 w-8 text-red-700" />,
                  title: "HIPAA Compliance",
                  description: "Ensure protection of patient health information",
                },
                {
                  icon: <FileText className="h-8 w-8 text-red-700" />,
                  title: "Documentation Review",
                  description: "Comprehensive review of clinical documentation",
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-red-700" />,
                  title: "Regulatory Updates",
                  description: "Stay current with changing healthcare regulations",
                },
              ].map((feature, index) => (
                <motion.div key={index} className="bg-white rounded-xl p-6 text-center" whileHover={{ y: -10 }}>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 md:h-24"
            fill="white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
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
                className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4"
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
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
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
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500"
                  whileHover={{ y: -10 }}
                >
                  <Shield className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA Compliance</h3>
                  <p className="text-sm text-gray-600">Protect patient health information and avoid penalties</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500"
                  whileHover={{ y: -10 }}
                >
                  <FileText className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-sm text-gray-600">Ensure proper documentation for billing compliance</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500"
                  whileHover={{ y: -10 }}
                >
                  <BookOpen className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Regulatory Updates</h3>
                  <p className="text-sm text-gray-600">Stay current with changing healthcare regulations</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500"
                  whileHover={{ y: -10 }}
                >
                  <Users className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Training</h3>
                  <p className="text-sm text-gray-600">Comprehensive compliance training for your team</p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-50 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4"
            >
              Our Services
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Compliance Solutions</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our compliance services include a range of solutions designed to help your practice maintain regulatory
              compliance while optimizing your billing processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Shield size={24} />,
                title: "HIPAA Compliance",
                description:
                  "Comprehensive HIPAA compliance monitoring, risk assessment, and remediation to protect patient information.",
              },
              {
                icon: <FileText size={24} />,
                title: "Documentation Review",
                description:
                  "Thorough review of clinical documentation to ensure it meets regulatory requirements and supports proper billing.",
              },
              {
                icon: <BookOpen size={24} />,
                title: "Regulatory Updates",
                description:
                  "Regular updates on changing healthcare regulations and guidance on implementing necessary changes.",
              },
              {
                icon: <AlertTriangle size={24} />,
                title: "Audit Preparation",
                description:
                  "Comprehensive preparation for payer audits, including documentation compilation and response strategy.",
              },
              {
                icon: <Users size={24} />,
                title: "Staff Training",
                description:
                  "Customized training programs to ensure your staff understands and follows compliance requirements.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Compliance Monitoring",
                description:
                  "Ongoing monitoring of billing practices to identify and address potential compliance issues before they become problems.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  x: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full mt-1">
                    <div className="text-red-600">{service.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
              className="inline-block px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4"
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
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-50 rounded-full -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <Shield className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Reduced Risk</h3>
                  <p className="text-gray-600">
                    Minimize the risk of penalties and audits through proactive compliance.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <DollarSign className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Increased Revenue</h3>
                  <p className="text-gray-600">Optimize billing practices while maintaining strict compliance.</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <Clock className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Time Savings</h3>
                  <p className="text-gray-600">Let our experts handle compliance so you can focus on patient care.</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Protection</h3>
                  <p className="text-gray-600">Be prepared for audits with proper documentation and processes.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Ensure Your Practice's Compliance?
            </motion.h2>

            <motion.p
              className="text-lg text-red-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert compliance services can protect your
              practice from penalties and audits while optimizing your billing processes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-white text-red-700 hover:bg-red-50">
                <a href="mailto:waqasansari4547@gmail.com">Contact Us Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20"
              >
                <a href="tel:+923186264059">
                  Call Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-red-200 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              No obligation. We'll analyze your current compliance processes and show you how we can help.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

