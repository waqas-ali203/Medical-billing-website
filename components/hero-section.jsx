"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Stethoscope, FileText, CreditCard, Activity } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bacckgound.jpg"
          alt="Medical Billing Hero Background"
          fill
          className="object-cover"
        />
       <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#008080] mix-blend-overlay opacity-70"></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-[10%] text-lightblue opacity-70 max-w-full overflow-hidden z-10">
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          <Stethoscope size={32} />
        </motion.div>
      </div>

      <div className="absolute top-40 right-[15%] text-lightblue opacity-70 max-w-full overflow-hidden z-10">
        <motion.div
          animate={{ y: [0, 5, 0], rotate: [0, -2, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut", delay: 0.5 }}
        >
          <FileText size={24} />
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-[20%] text-lightblue opacity-70 max-w-full overflow-hidden z-10">
        <motion.div
          animate={{ y: [0, 5, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <CreditCard size={28} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-4 glass-card text-sm font-medium"
            >
              Trusted by 500+ Healthcare Providers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            >
              Utopia Medical Billing{" "}
              <span className="text-lightblue-light relative inline-block">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-emerald/30 -z-10"></span>
                <TypeAnimation
                  sequence={[
                    "Solutions",
                    1000,
                    "Revenue Cycle",
                    1000,
                    "Claims Processing",
                    1000,
                    "Coding Services",
                    1000,
                  ]}
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="inline-block"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg mb-6 text-white/90 max-w-xl"
            >
              Streamline your medical billing process with our comprehensive solutions. We help healthcare providers
              maximize revenue and reduce administrative burden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="default"
                className="bg-emerald hover:bg-emerald-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
              <Button
  size="default"
  variant="outline"
  className="border-2 border-teal-600 bg-white/30 text-teal-800 hover:bg-teal-600 hover:border-teal-900 hover:text-white rounded-full transition-all duration-300"
>
  Learn More <ArrowRight className="ml-2 h-4 w-4" />
</Button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-2"
            >
              {[
                "Increase collections by up to 30%",
                "Reduce claim denials by up to 40%",
                "Improve cash flow and reduce A/R days",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 text-emerald" />
                  <span className="text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[300px] md:h-[350px] hidden lg:block"
          >
            {/* Doctor Image */}
            {/* <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/hero.png"
                alt="Doctor with Medical Billing System"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue/50 to-transparent"></div>
            </div> */}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-5 -right-5 glass-card p-3 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="bg-emerald/20 p-1.5 rounded-full">
                  <Activity className="h-5 w-5 text-emerald" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Success Rate</div>
                  <div className="text-xl font-bold text-white">98.5%</div>
                </div>
              </div>
            </motion.div>

            {/* Claims Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, y: 60 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-20 -left-5 glass-card p-3 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="bg-orange/20 p-1.5 rounded-full">
                  <FileText className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Claims Processed</div>
                  <div className="text-xl font-bold text-white">1M+</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 250 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute -bottom-5 right-5 glass-card p-3 rounded-xl shadow-xl max-w-[200px]"
            >
              <div className="text-white/90 italic text-xs">
                "Our practice saw a 32% increase in collections within the first 3 months."
              </div>
              <div className="text-white font-medium text-xs mt-1">- Dr. Sarah Johnson</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

