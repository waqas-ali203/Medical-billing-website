"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, DollarSign, BarChart4 } from "lucide-react"

export default function PaymentPostingHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#008080] overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] text-white/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        >
          <CreditCard size={120} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[15%] text-white/10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <DollarSign size={100} />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-[25%] text-white/10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <BarChart4 size={80} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Payment Posting & Reconciliation
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Accurate <span className="text-[#A7C7E7]">Payment Posting</span> Services
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#A7C7E7] mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Our payment posting services ensure all payments are accurately recorded and reconciled, maintaining the
              integrity of your financial records and optimizing your revenue cycle.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-[#1E3A8A] hover:bg-[#E6F4F1] hover:text-[#008080]"
              >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                alt="Payment Posting"
                fill
                className="object-cover"
              />

              {/* Floating card elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#E6F4F1] p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Payment Accuracy</div>
                </div>
                <div className="text-3xl font-bold text-[#1E3A8A]">99.8%</div>
                <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#1E3A8A] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "99.8%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 bg-white rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#E6F4F1] p-2 rounded-full">
                    <BarChart4 className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Processing Time</div>
                </div>
                <div className="text-3xl font-bold text-[#1E3A8A]">24h</div>
                <p className="text-xs text-gray-500 mt-1">Average turnaround time for payment posting</p>
              </motion.div>
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
}

