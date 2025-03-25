"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface StatItemProps {
  value: string
  label: string
  description: string
  index: number
}

function StatItem({ value, label, description, index }: StatItemProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-[#735739] mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function ClaimsProcessingStats() {
  const stats = [
    {
      value: "95%",
      label: "First-Pass Acceptance",
      description:
        "Our clean claims submission process achieves a 95% first-pass acceptance rate, well above the industry average.",
    },
    {
      value: "48h",
      label: "Average Submission Time",
      description:
        "We submit claims within 48 hours of service, accelerating your revenue cycle and improving cash flow.",
    },
    {
      value: "30%",
      label: "Reduction in Denials",
      description: "Our clients experience an average 30% reduction in claim denials after implementing our services.",
    },
    {
      value: "15d",
      label: "Reduced A/R Days",
      description:
        "We help reduce accounts receivable days by an average of 15 days through efficient claims processing.",
    },
  ]

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <motion.div className="container mx-auto px-4" style={{ opacity }}>
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
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Performance Metrics
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Claims Processing Results</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver measurable results that improve your practice's financial performance and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} description={stat.description} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

