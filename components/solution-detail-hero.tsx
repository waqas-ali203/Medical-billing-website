"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceDetailHeroProps {
  title: string
  description: string
  image: string
  color: string
}

export default function ServiceDetailHero({ title, description, image, color }: ServiceDetailHeroProps) {
  // Updated color map to use shades of #735739 (taupe/brown)
  const colorMap = {
    blue: "from-[#735739] to-[#8a6a45]",
    green: "from-[#735739] to-[#8a6a45]",
    purple: "from-[#735739] to-[#8a6a45]",
    indigo: "from-[#735739] to-[#8a6a45]",
    red: "from-[#735739] to-[#8a6a45]",
  }

  const gradientClass = colorMap[color as keyof typeof colorMap] || "from-[#735739] to-[#8a6a45]"

  return (
    <section className={`relative bg-gradient-to-r ${gradientClass} text-white overflow-hidden`}>
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            Our Services
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-[#735739] hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg">
                <a href="mailto:waqasansari4547@gmail.com">Request a Quote</a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
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

