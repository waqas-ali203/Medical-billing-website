"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  FileText,
  ClipboardCheck,
  CreditCard,
  BarChart4,
  ShieldCheck,
  UserCheck,
  Video,
  Stethoscope,
} from "lucide-react"

const iconMap = {
  FileText: FileText,
  ClipboardCheck: ClipboardCheck,
  CreditCard: CreditCard,
  BarChart4: BarChart4,
  ShieldCheck: ShieldCheck,
  UserCheck: UserCheck,
  Video: Video,
  Stethoscope: Stethoscope,
}

interface SolutionHeaderProps {
  title: string
  description: string
  icon: keyof typeof iconMap
}

export default function SolutionHeader({ title, description, icon }: SolutionHeaderProps) {
  const Icon = iconMap[icon]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Solution Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-teal/80"></div>
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ opacity: 0.3, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 8,
            }}
            fill="rgba(255, 255, 255, 0.8)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0.3, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 6,
              delay: 0.5,
            }}
            fill="rgba(255, 255, 255, 0.6)"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Icon className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-1/4 -left-16 w-32 h-32 bg-lightblue/10 rounded-full blur-2xl z-0"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-1/4 -right-16 w-40 h-40 bg-emerald/10 rounded-full blur-3xl z-0"
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

