"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle, ArrowRight, Receipt, FileCheck, Clock, RefreshCw } from "lucide-react"

export default function PaymentPostingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section - Centered layout with background image */}
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1920&auto=format&fit=crop"
            alt="Payment Posting Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Payment Posting & Reconciliation
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Payment Posting Services
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-purple-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our payment posting services ensure all payments are accurately recorded and reconciled, maintaining the
              integrity of your financial records and optimizing your revenue cycle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="rounded-full bg-white text-purple-700 hover:bg-purple-50">
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

      {/* Features Section - Card layout */}
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
              className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4"
            >
              Comprehensive Payment Posting
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accurate Financial Record Management</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our payment posting services ensure all payments are accurately recorded, reconciled, and managed to
              maintain the integrity of your financial records and optimize your revenue cycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <CreditCard size={24} />,
                title: "ERA/EOB Reconciliation",
                description:
                  "We accurately reconcile electronic remittance advice (ERA) and explanation of benefits (EOB) documents with your claims.",
              },
              {
                icon: <Receipt size={24} />,
                title: "Payment Variance Identification",
                description:
                  "Our team identifies and resolves payment variances to ensure you receive proper reimbursement for services provided.",
              },
              {
                icon: <FileCheck size={24} />,
                title: "Contractual Adjustment Posting",
                description:
                  "We properly post contractual adjustments according to payer contracts to maintain accurate financial records.",
              },
              {
                icon: <Clock size={24} />,
                title: "Timely Processing",
                description:
                  "All payments are posted within 24-48 hours of receipt to maintain an efficient revenue cycle.",
              },
              {
                icon: <RefreshCw size={24} />,
                title: "Payment Reconciliation",
                description:
                  "We ensure all payments are properly reconciled with your bank deposits and practice management system.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Accuracy Verification",
                description:
                  "Each payment posting undergoes a verification process to ensure 100% accuracy in your financial records.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <div className="text-purple-600">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline layout */}
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
              className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4"
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
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 relative">
              {[
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
                  description:
                    "Electronic remittance advice and explanation of benefits documents are processed and reconciled.",
                },
                {
                  title: "Payment Posting",
                  description:
                    "Payments are posted to the correct accounts with proper allocation to specific charges.",
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
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 max-w-md"
                      whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                    >
                      <h3 className="text-xl font-bold text-purple-700 mb-2">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex justify-center relative">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                    {/* Connector line for mobile */}
                    {index < 6 && <div className="absolute top-12 bottom-0 w-1 bg-purple-200 md:hidden"></div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your Payment Posting?
            </motion.h2>

            <motion.p
              className="text-lg text-purple-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert payment posting services can improve
              your financial accuracy, reduce revenue leakage, and streamline your revenue cycle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-white text-purple-700 hover:bg-purple-50">
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
              className="text-sm text-purple-200 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              No obligation. We'll analyze your current payment posting process and show you how we can help.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

