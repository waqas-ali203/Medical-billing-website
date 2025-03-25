"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function MedicalCodingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
            alt="Medical Coding Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Expert Medical Coding Services
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Medical Coding Services
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our expert medical coding services ensure accurate and compliant coding for all medical specialties,
              maximizing reimbursement while minimizing audit risks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="rounded-full bg-white text-blue-700 hover:bg-blue-50">
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

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
              >
                Expert Coding Services
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Accurate Coding for Maximum Reimbursement</h2>

              <p className="text-gray-600 mb-8">
                Our team of certified medical coders ensures accurate and compliant coding for all medical specialties,
                maximizing reimbursement while minimizing audit risks. We stay up-to-date with the latest coding changes
                and regulations to ensure your claims are processed correctly the first time.
              </p>

              <div className="space-y-4">
                {[
                  "ICD-10-CM, CPT, and HCPCS coding expertise",
                  "Specialty-specific coding knowledge",
                  "Regular updates on coding changes and regulations",
                  "Coding audit and optimization services",
                  "Detailed documentation review and feedback",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Medical Coding"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>

              {/* Stats card */}
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-gray-500 mb-1">Coding Accuracy</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">99.7%</div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.7%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            >
              Our Process
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Coding Workflow</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined medical coding process ensures accurate, compliant, and optimized coding for maximum
              reimbursement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
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
                description:
                  "Each coding assignment undergoes a rigorous quality check to ensure accuracy and compliance.",
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
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  {index < 4 && <div className="w-0.5 h-16 bg-blue-200 mx-auto mt-2"></div>}
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your Medical Coding?
            </motion.h2>

            <motion.p
              className="text-lg text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert coding services can improve your
              reimbursement rates, reduce denials, and streamline your revenue cycle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-white text-blue-700 hover:bg-blue-50">
                <a href="mailto:waqasansari4547@gmail.com">Contact Us Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20"
              >
                <a href="tel:+923186264059">
                  Call Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-blue-200 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              No obligation. We'll analyze your current coding process and show you how we can help.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

