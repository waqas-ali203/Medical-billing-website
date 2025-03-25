"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Award, Clock, TrendingUp } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background Pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-teal/80"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-[10%] text-lightblue opacity-20">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Users size={80} />
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-[10%] text-lightblue opacity-20">
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Award size={60} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            Trusted Medical Billing Partner Since 2005
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-lightblue">Our Organization</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're a team of dedicated healthcare billing professionals committed to helping medical practices optimize
            their revenue cycle and focus on what matters most – patient care.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: <Users className="h-8 w-8" />, text: "500+ Clients", subtext: "Trusted Partners" },
              { icon: <Award className="h-8 w-8" />, text: "98% Success", subtext: "Claim Approval" },
              { icon: <Clock className="h-8 w-8" />, text: "15+ Years", subtext: "Industry Experience" },
              { icon: <TrendingUp className="h-8 w-8" />, text: "30% Increase", subtext: "Average Revenue" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">{item.icon}</div>
                <p className="font-bold text-xl md:text-2xl text-white">{item.text}</p>
                <p className="text-sm text-lightblue">{item.subtext}</p>
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

