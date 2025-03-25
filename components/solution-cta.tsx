"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export default function SolutionCTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-darkblue to-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="p-8 md:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Medical Billing?
              </h2>

              <p className="text-lightblue text-lg mb-8">
                Our specialized solutions are designed to address your unique challenges and help you achieve optimal
                financial performance.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Customized solutions for your specialty",
                  "Dedicated account manager for your practice",
                  "Seamless integration with your existing systems",
                  "Ongoing support and performance optimization",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div className="flex flex-wrap gap-4">
                <Button className="bg-white text-darkblue hover:bg-lightblue hover:text-darkblue rounded-full px-8 py-6 text-lg shadow-lg">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Us
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-full min-h-[300px] bg-teal hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-20 pattern-dots pattern-blue-500 pattern-bg-transparent pattern-size-4"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
                <div className="text-center">
                  <div className="text-white text-5xl font-bold mb-4">30%</div>
                  <div className="text-lightblue text-xl">Average Revenue Increase</div>

                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white italic">
                      "Since implementing their solution, our claims processing time has decreased by 40% and our
                      collection rate has improved significantly."
                    </p>
                    <p className="text-lightblue mt-4">— Dr. Jennifer Adams, Cardiology Practice</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

