"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background Pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/80 to-teal/70"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Comprehensive Medical Billing Solutions
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Streamline Your <span className="text-lightblue-light">Healthcare Billing</span> Process
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Our comprehensive medical billing services are designed to maximize your revenue, reduce administrative
              burden, and optimize your practice's financial performance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-emerald hover:bg-emerald-dark text-white transition-all duration-300"
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                className="rounded-full border-2 border-white text-darkblue bg-white hover:text-darkblue hover:bg-transparent transition-all duration-300"
                variant="outline"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Core Services</h3>
              <div className="space-y-4">
                {[
                  "Medical Coding & Documentation",
                  "Claims Processing & Submission",
                  "Payment Posting & Reconciliation",
                  "Denial Management & Appeals",
                  "Revenue Cycle Optimization",
                  "Compliance & Regulatory Support",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                    <span className="text-white">{service}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/80">Average Revenue Increase</p>
                    <p className="text-3xl font-bold text-white">30%</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Client Satisfaction</p>
                    <p className="text-3xl font-bold text-white">98%</p>
                  </div>
                </div>
              </div>
            </div>
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
  )
};