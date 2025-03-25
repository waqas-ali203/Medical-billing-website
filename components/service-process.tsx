"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProcessStep {
  number: number
  title: string
  description: string
}

// Service-specific process steps
const processData: Record<string, { title: string; steps: ProcessStep[]; image: string }> = {
  "medical-coding": {
    title: "Our Medical Coding Process",
    steps: [
      {
        number: 1,
        title: "Documentation Review",
        description:
          "Our certified coders carefully review all clinical documentation to ensure completeness and accuracy.",
      },
      {
        number: 2,
        title: "Code Assignment",
        description:
          "We assign appropriate ICD-10-CM, CPT, and HCPCS codes based on the documented services and procedures.",
      },
      {
        number: 3,
        title: "Quality Assurance",
        description: "Each coding assignment undergoes a rigorous quality check to ensure accuracy and compliance.",
      },
      {
        number: 4,
        title: "Coding Optimization",
        description:
          "We identify opportunities to optimize coding while maintaining strict compliance with regulations.",
      },
      {
        number: 5,
        title: "Reporting & Feedback",
        description:
          "We provide regular reports and feedback on coding patterns and documentation improvement opportunities.",
      },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  },
  "claims-processing": {
    title: "Our Claims Processing Workflow",
    steps: [
      {
        number: 1,
        title: "Claim Generation",
        description: "We create clean, accurate claims based on the services provided and coding information.",
      },
      {
        number: 2,
        title: "Claim Scrubbing",
        description: "Each claim undergoes a thorough scrubbing process to identify and correct potential errors.",
      },
      {
        number: 3,
        title: "Electronic Submission",
        description: "Claims are submitted electronically to the appropriate payers in a timely manner.",
      },
      {
        number: 4,
        title: "Status Tracking",
        description: "We actively track the status of all claims to ensure they are processed promptly.",
      },
      {
        number: 5,
        title: "Follow-up & Resolution",
        description: "Our team follows up on pending and denied claims to ensure maximum reimbursement.",
      },
    ],
    image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=800&auto=format&fit=crop",
  },
}

// Default process for fallback
const defaultProcess = {
  title: "Our Service Process",
  steps: [
    {
      number: 1,
      title: "Initial Assessment",
      description: "We evaluate your current processes and identify areas for improvement.",
    },
    {
      number: 2,
      title: "Customized Solution",
      description: "We develop a tailored solution based on your practice's specific needs.",
    },
    {
      number: 3,
      title: "Implementation",
      description: "Our team seamlessly implements the solution with minimal disruption to your operations.",
    },
    {
      number: 4,
      title: "Ongoing Management",
      description: "We provide continuous management and optimization of your billing processes.",
    },
    {
      number: 5,
      title: "Regular Reporting",
      description: "You receive detailed reports and insights to track performance and results.",
    },
  ],
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
}

export default function ServiceProcess({ slug }: { slug: string }) {
  const process = processData[slug] || defaultProcess

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
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
            How It Works
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{process.title}</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures efficient, accurate, and compliant service delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f0ebe4] rounded-full flex items-center justify-center text-[#735739] font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image src={process.image || "/placeholder.svg"} alt="Service Process" fill className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#735739]/30 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#f0ebe4] rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e9dfd4] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

