"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Clock, AlertCircle, Users } from "lucide-react"

export default function CredentialingProcess() {
  const steps = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Document Collection",
      description:
        "We gather all necessary documentation from providers, including licenses, certifications, and education history.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Application Preparation",
      description:
        "Our team prepares and submits enrollment applications to all requested insurance companies and government programs.",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Status Tracking",
      description:
        "We actively track the status of all applications and follow up regularly to ensure timely processing.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-white" />,
      title: "Issue Resolution",
      description: "If any issues arise during the credentialing process, we promptly address them to prevent delays.",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Approval & Maintenance",
      description:
        "Once approved, we maintain a database of all credentialing information and monitor expiration dates for timely renewals.",
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
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Our Process
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentialing Workflow</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined credentialing process ensures efficient provider enrollment with minimal disruption to your
            practice.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6 mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#735739] rounded-full flex items-center justify-center">{step.icon}</div>
                {index < steps.length - 1 && <div className="w-0.5 h-16 bg-[#e9dfd4] mx-auto mt-2"></div>}
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

