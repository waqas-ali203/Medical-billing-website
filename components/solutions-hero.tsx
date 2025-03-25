"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ClipboardCheck, CreditCard, BarChart4, Shield, Users } from "lucide-react"
import Link from "next/link"

interface SolutionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  index: number
}

function SolutionCard({ icon, title, description, href, index }: SolutionCardProps) {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-l-4 border-teal hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href={href} className="block h-full">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-lightblue/20 p-3 rounded-full mt-1">
              <div className="text-darkblue">{icon}</div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkblue mb-2">{title}</h3>
              <p className="text-charcoal text-sm">{description}</p>

              <div className="flex items-center mt-4 text-teal font-medium text-sm">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SolutionsHero() {
  const solutions = [
    {
      icon: <FileText size={24} />,
      title: "Medical Coding",
      description: "Expert coding services for all medical specialties to ensure proper reimbursement.",
      href: "/solutions/medical-coding",
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Claims Processing",
      description: "Efficient claims submission and follow-up to minimize rejections and denials.",
      href: "/solutions/claims-processing",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Posting",
      description: "Accurate and timely posting of payments to maintain financial records.",
      href: "/solutions/payment-posting",
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Revenue Analysis",
      description: "Detailed financial reporting and analysis to identify revenue opportunities.",
      href: "/solutions/revenue-analysis",
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance Services",
      description: "Ensuring adherence to healthcare regulations and billing requirements.",
      href: "/solutions/compliance-services",
    },
    {
      icon: <Users size={24} />,
      title: "Credentialing",
      description: "Provider enrollment services with insurance companies and government programs.",
      href: "/solutions/credentialing",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background Pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-teal/80"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white"
            >
              Comprehensive Medical Billing Solutions
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our <span className="text-lightblue-light">Billing Solutions</span> for Healthcare Providers
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Explore our comprehensive suite of medical billing solutions designed to optimize your revenue cycle and
              streamline your practice's financial operations.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-emerald hover:bg-emerald-dark text-white transition-all duration-300"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20 transition-all duration-300"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                index={index}
              />
            ))}
          </div>
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

