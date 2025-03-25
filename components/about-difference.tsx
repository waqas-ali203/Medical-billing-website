"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award, Users, Clock, Shield, Headphones, TrendingUp } from "lucide-react"

interface DifferenceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function DifferenceCard({ icon, title, description, index }: DifferenceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#dbeafe",
      }}
    >
      <motion.div
        className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-blue-600">{icon}</div>
      </motion.div>

      <motion.h3 className="text-xl font-bold text-center mb-3" whileHover={{ color: "#2563eb" }}>
        {title}
      </motion.h3>

      <p className="text-gray-600 text-center">{description}</p>

      <motion.div
        className="w-12 h-1 bg-blue-200 mx-auto mt-4 rounded-full"
        whileHover={{ width: 60, backgroundColor: "#3b82f6" }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  )
}

export default function AboutDifference() {
  const differences = [
    {
      icon: <Award size={32} />,
      title: "Industry Expertise",
      description:
        "Our team consists of certified medical billing specialists with deep knowledge across various healthcare specialties.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Proven Results",
      description:
        "We consistently deliver a 30% average increase in collections for our clients within the first 6 months.",
    },
    {
      icon: <Clock size={32} />,
      title: "Rapid Implementation",
      description:
        "Our streamlined onboarding process gets your practice up and running with our services in just 2 weeks.",
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance Guarantee",
      description:
        "We ensure 100% compliance with all healthcare regulations, protecting your practice from penalties.",
    },
    {
      icon: <Headphones size={32} />,
      title: "Dedicated Support",
      description:
        "Each client is assigned a dedicated account manager available via phone, email, or chat whenever needed.",
    },
    {
      icon: <Users size={32} />,
      title: "Customized Solutions",
      description:
        "We tailor our services to your specific practice needs rather than offering one-size-fits-all solutions.",
    },
  ]

  return (
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
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Our Approach
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different?</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just another medical billing company. Our unique approach and commitment to excellence set us
            apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((difference, index) => (
            <DifferenceCard
              key={index}
              icon={difference.icon}
              title={difference.title}
              description={difference.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

