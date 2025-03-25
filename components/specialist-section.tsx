"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  FileText,
  ClipboardCheck,
  CreditCard,
  BarChart4,
  Shield,
  Phone,
  Users,
  Database,
  FileCheck,
  Stethoscope,
  Receipt,
  HeartPulse,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, backgroundColor: "#f8fafc" }}
    >
      <motion.div
        className="bg-primary/10 p-4 rounded-full w-fit mb-4 mx-auto"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-primary">{icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>

      <motion.div
        className="w-12 h-1 bg-primary/30 mx-auto mt-4 rounded-full"
        whileHover={{ width: 60, backgroundColor: "#0070f3" }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  )
}

export default function SpecialistSection() {
  const services = [
    {
      icon: <FileText size={28} />,
      title: "Medical Coding",
      description: "Accurate coding services for all medical specialties to ensure proper reimbursement.",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Claims Processing",
      description: "Efficient claims submission and follow-up to minimize rejections and denials.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Payment Posting",
      description: "Timely and accurate posting of payments to maintain financial records.",
    },
    {
      icon: <BarChart4 size={28} />,
      title: "Revenue Analysis",
      description: "Detailed financial reporting and analysis to identify revenue opportunities.",
    },
    {
      icon: <Shield size={28} />,
      title: "Compliance Services",
      description: "Ensuring adherence to healthcare regulations and billing requirements.",
    },
    {
      icon: <Users size={28} />,
      title: "Credentialing",
      description: "Provider enrollment services with insurance companies and government programs.",
    },
    {
      icon: <Database size={28} />,
      title: "Practice Management",
      description: "Comprehensive solutions to streamline your practice operations.",
    },
    {
      icon: <FileCheck size={28} />,
      title: "Audit Support",
      description: "Expert assistance during payer audits to minimize financial impact.",
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Provider Education",
      description: "Training for healthcare providers on documentation best practices.",
    },
    {
      icon: <Receipt size={28} />,
      title: "Patient Billing",
      description: "Professional handling of patient statements and payment collection.",
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Denial Management",
      description: "Strategic approach to reduce claim denials and increase collections.",
    },
    {
      icon: <Phone size={28} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your medical billing needs.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
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
            Comprehensive Solutions
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical billing solutions tailored to your practice's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {}}
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

