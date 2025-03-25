"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileCheck, BookOpen } from "lucide-react"
import Image from "next/image"

export default function ComplianceHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#008080] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Compliance Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="25"
              cy="25"
              r="12"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            ></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center text-white max-w-4xl mx-auto">
          <motion.div
            className="bg-white/20 p-4 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="h-12 w-12" />
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Healthcare <span className="text-[#A7C7E7]">Compliance Services</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#E6F4F1] mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ensure adherence to healthcare regulations and billing requirements with our comprehensive compliance
            services. Protect your practice from penalties and audits while maintaining the highest standards of
            integrity.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="rounded-full bg-white text-[#1E3A8A] hover:bg-[#E6F4F1] hover:text-[#008080]">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white text-white hover:bg-white/20"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: <Shield className="h-8 w-8 text-[#1E3A8A]" />,
                title: "HIPAA Compliance",
                description: "Ensure protection of patient health information",
              },
              {
                icon: <FileCheck className="h-8 w-8 text-[#1E3A8A]" />,
                title: "Documentation Review",
                description: "Comprehensive review of clinical documentation",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-[#1E3A8A]" />,
                title: "Regulatory Updates",
                description: "Stay current with changing healthcare regulations",
              },
            ].map((feature, index) => (
              <motion.div key={index} className="bg-white/90 rounded-xl p-6 text-center" whileHover={{ y: -10 }}>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-24"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
        </svg>
      </div>
    </section>
  )
}

