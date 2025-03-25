"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FileText, Search, CheckSquare, BarChart4 } from "lucide-react"

export default function MedicalCodingProcess() {
  const steps = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Documentation Review",
      description:
        "Our coders carefully review all clinical documentation to ensure complete understanding of the patient encounter.",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Code Assignment",
      description:
        "Accurate codes are assigned based on documentation using current ICD-10-CM, CPT, and HCPCS code sets.",
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-white" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks are performed to verify coding accuracy and compliance with guidelines.",
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-white" />,
      title: "Performance Reporting",
      description: "Detailed reports track coding accuracy, productivity, and identify opportunities for improvement.",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkblue to-teal opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
            Our Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6">Streamlined Medical Coding Workflow</h2>

          <p className="text-gray-700">
            Our systematic approach to medical coding ensures accuracy, efficiency, and compliance at every step of the
            process. We've refined our workflow to maximize productivity while maintaining the highest quality
            standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border-t-4 border-teal">
                <div className="absolute -top-5 left-6 bg-gradient-to-r from-teal to-darkblue rounded-full p-3 shadow-lg">
                  {step.icon}
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-bold text-darkblue mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="absolute top-2 right-4 text-5xl font-bold text-gray-100 opacity-50">{index + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 bg-gradient-to-r from-darkblue/5 to-teal/5 rounded-xl border border-teal/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-full">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Certified Medical Coder"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-darkblue mb-2">Expert Insight</h4>
              <p className="text-gray-700 italic">
                "Proper medical coding is the foundation of revenue cycle management. Our team's attention to detail
                ensures that every billable service is accurately captured, maximizing your reimbursement while
                maintaining compliance with all regulatory requirements."
              </p>
              <p className="text-teal font-medium mt-2">— Jennifer Miller, CPC, Director of Coding Services</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

