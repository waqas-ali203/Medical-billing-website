"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Calendar, DollarSign, Clock } from "lucide-react"
import Image from "next/image"

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  icon: React.ReactNode
  delay?: number
}

function StatCounter({ value, label, suffix = "", icon, delay = 0 }: StatCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(counterRef, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 20
      const stepValue = value / steps
      let currentStep = 0

      interval = setInterval(() => {
        currentStep += 1
        setCount(Math.min(Math.round(stepValue * currentStep), value))

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, duration / steps)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={counterRef}
      className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-teal"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-teal/10 text-teal">{icon}</div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-darkblue">
        {count}
        {suffix}
      </div>
      <div className="text-charcoal mt-2">{label}</div>
    </motion.div>
  )
}

export default function PerformanceSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue to-teal opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Performance Metrics
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We take pride in our achievements and the value we bring to healthcare providers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter value={500} label="Healthcare Providers" suffix="+" icon={<Users size={24} />} delay={0} />
          <StatCounter value={15} label="Years Experience" icon={<Calendar size={24} />} delay={0.1} />
          <StatCounter value={98} label="Collection Rate" suffix="%" icon={<DollarSign size={24} />} delay={0.2} />
          <StatCounter value={24} label="Hour Support" icon={<Clock size={24} />} delay={0.3} />
        </div>
      </div>
    </section>
  )
}

