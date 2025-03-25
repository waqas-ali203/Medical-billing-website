"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Shield, FileText, BookOpen, Users, AlertTriangle, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ x: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full mt-1">
          <div className="text-blue-600">{icon}</div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ComplianceServices() {
  const services = [
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
      description: "Regular updates on changing healthcare regulations and guidance on implementing necessary changes.",
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
      description: "Customized training programs to ensure your staff understands and follows compliance requirements.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Compliance Monitoring",
      description:
        "Ongoing monitoring of billing practices to identify and address potential compliance issues before they become problems.",
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
            Our Services
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Compliance Solutions</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our compliance services include a range of solutions designed to help your practice maintain regulatory
            compliance while optimizing your billing processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

