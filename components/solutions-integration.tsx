"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Database, Lock, RefreshCw, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntegrationCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function IntegrationCard({ icon, title, description, index }: IntegrationCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="bg-lightblue/10 p-3 rounded-full w-fit mb-4">
        <div className="text-darkblue">{icon}</div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-darkblue">{title}</h3>
      <p className="text-charcoal">{description}</p>
    </motion.div>
  )
}

export default function SolutionsIntegration() {
  const integrations = [
    {
      icon: <Database size={24} />,
      title: "EHR/EMR Integration",
      description: "Seamless integration with all major electronic health record and practice management systems.",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-Time Verification",
      description: "Instant insurance eligibility verification and benefits information.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Automated Workflows",
      description: "Streamlined processes that reduce manual tasks and improve efficiency.",
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Data Exchange",
      description: "HIPAA-compliant data transfer with end-to-end encryption.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E3A8A' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-lightblue/20 text-darkblue rounded-full text-sm font-medium mb-4"
            >
              Seamless Integration
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-darkblue">Integrate With Your Existing Systems</h2>

            <p className="text-charcoal mb-6">
              Our solutions are designed to work with your current healthcare technology ecosystem. We offer seamless
              integration with all major EHR/EMR systems, practice management software, and other healthcare
              applications.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "No disruption to your current workflows",
                "Minimal training required for your staff",
                "Bi-directional data exchange",
                "Custom integration solutions available",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                  <span className="text-charcoal">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-teal hover:bg-teal-dark text-white flex items-center gap-2">
              Request Integration Information <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration, index) => (
                <IntegrationCard
                  key={index}
                  icon={integration.icon}
                  title={integration.title}
                  description={integration.description}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              className="relative rounded-xl overflow-hidden shadow-lg h-[200px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                alt="Integration Partners"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Compatible With 50+ Systems</h3>
                <p className="text-white/90">Including Epic, Cerner, Allscripts, athenahealth, and more</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

