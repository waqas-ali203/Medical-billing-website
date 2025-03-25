"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, CheckCircle } from "lucide-react"

export default function CredentialingHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#0E6E6E] to-[#008080] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Credentialing Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/80 to-[#008080]/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Provider Enrollment Services
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Streamlined <span className="text-[#A7C7E7]">Credentialing</span> Services
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#E6F4F1] mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Our provider enrollment services simplify the complex credentialing process, ensuring timely enrollment
              with insurance companies and government programs so you can focus on patient care.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-[#1E3A8A] hover:bg-[#E6F4F1] hover:text-[#008080]"
              >
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
              className="mt-12 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {[
                "Reduce enrollment time by up to 60%",
                "Eliminate administrative burden",
                "Maximize revenue potential",
                "Stay current with re-credentialing requirements",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-[#A7C7E7] mt-1 flex-shrink-0" />
                  <span className="text-[#E6F4F1]">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Medical Credentialing"
                fill
                className="object-cover"
              />

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 left-10 bg-white/90 rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#E6F4F1] p-2 rounded-full">
                    <Users className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Providers Enrolled</div>
                </div>
                <div className="text-3xl font-bold text-[#1E3A8A]">1,500+</div>
                <p className="text-xs text-gray-500 mt-1">Across all specialties</p>
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-10 bg-white/90 rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#E6F4F1] p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Success Rate</div>
                </div>
                <div className="text-3xl font-bold text-[#1E3A8A]">98%</div>
                <p className="text-xs text-gray-500 mt-1">First-time approval rate</p>
              </motion.div>
            </div>
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

