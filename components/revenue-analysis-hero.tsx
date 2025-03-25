"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart4, PieChart, LineChart, TrendingUp } from "lucide-react"

export default function RevenueAnalysisHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-[#1E3A8A] to-[#008080] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-[10%] left-[10%] text-white/5" style={{ y }}>
          <BarChart4 size={300} />
        </motion.div>

        <motion.div
          className="absolute top-[30%] right-[15%] text-white/5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        >
          <PieChart size={200} />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] left-[20%] text-white/5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        >
          <LineChart size={250} />
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] right-[10%] text-white/5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        >
          <TrendingUp size={180} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Data-Driven <span className="text-[#e9dfd4]">Revenue Analysis</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#A7C7E7] mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the full potential of your practice with comprehensive financial reporting and analysis that
            identifies revenue opportunities and optimizes your bottom line.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full bg-white text-[#1E3A8A] hover:bg-[#E6F4F1] hover:text-[#008080]">
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white text-white hover:bg-white/20"
            >
              View Sample Reports <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "30%", label: "Revenue Increase" },
              { value: "25%", label: "Cost Reduction" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Report Types" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-[#A7C7E7]">{stat.label}</div>
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
  )
}

