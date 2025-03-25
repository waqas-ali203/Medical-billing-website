"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Shield, BarChart4 } from "lucide-react"

interface ValueCardProps {
  icon: React.ReactNode
  color: string
  title: string
  description: string
  index: number
}

function ValueCard({ icon, color, title, description, index }: ValueCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className={`absolute inset-0 ${color} opacity-10`}></div>

      <div className="relative p-6 md:p-8">
        <motion.div
          className={`w-16 h-16 ${color} bg-opacity-20 rounded-full flex items-center justify-center mb-6`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={color.replace("bg-", "text-")}>{icon}</div>
        </motion.div>

        <motion.h3
          className="text-xl font-bold mb-3"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>

        <p className="text-gray-600">{description}</p>
      </div>

      <motion.div
        className={`h-1 w-full ${color}`}
        whileHover={{ height: 4 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  )
}

export default function AboutValues() {
  const values = [
    {
      icon: <Heart size={32} />,
      color: "bg-red-500",
      title: "Compassion",
      description:
        "We understand the challenges healthcare providers face and approach our work with empathy and dedication to easing their administrative burden.",
    },
    {
      icon: <Lightbulb size={32} />,
      color: "bg-yellow-500",
      title: "Innovation",
      description:
        "We continuously seek new technologies and methodologies to improve our services and deliver better results for our clients.",
    },
    {
      icon: <Users size={32} />,
      color: "bg-blue-500",
      title: "Partnership",
      description:
        "We view ourselves as an extension of your team, working collaboratively to achieve your financial goals and support your practice's growth.",
    },
    {
      icon: <Shield size={32} />,
      color: "bg-green-500",
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our operations, ensuring transparency, honesty, and accountability in everything we do.",
    },
    {
      icon: <BarChart4 size={32} />,
      color: "bg-purple-500",
      title: "Excellence",
      description:
        "We are committed to delivering exceptional service and results, continuously measuring and improving our performance to exceed expectations.",
    },
  ]

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
            Our Foundation
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide our decisions, shape our culture, and define how we interact with our clients and
            each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              color={value.color}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

