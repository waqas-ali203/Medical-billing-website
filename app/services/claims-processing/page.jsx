"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, CheckCircle, ArrowRight, AlertCircle, Clock, BarChart4, RefreshCw } from "lucide-react"

export default function ClaimsProcessingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section - Side by side layout */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=1920&auto=format&fit=crop"
            alt="Claims Processing Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
              >
                Streamlined Claims Processing
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Claims Processing Services
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-green-100 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Our streamlined claims processing system ensures timely submission and follow-up, reducing denials and
                accelerating your revenue cycle.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button size="lg" className="rounded-full bg-white text-green-700 hover:bg-green-50">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=800&auto=format&fit=crop"
                  alt="Claims Processing"
                  fill
                  className="object-cover"
                />

                {/* Stats card */}
                <motion.div
                  className="absolute bottom-10 right-10 bg-white rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">First-Pass Rate</div>
                  </div>
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <p className="text-xs text-gray-500 mt-1">Industry average: 70%</p>
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

      {/* Features Section - Grid layout */}
      <section className="py-16 md:py-24 bg-white">
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
              className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
            >
              Key Features
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Claims Processing</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our claims processing services include a range of features designed to maximize reimbursement and
              accelerate your revenue cycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <ClipboardCheck size={24} />,
                title: "Clean Claims Submission",
                description:
                  "We ensure all claims are submitted with accurate information to maximize first-pass acceptance rates.",
              },
              {
                icon: <AlertCircle size={24} />,
                title: "Claim Scrubbing",
                description:
                  "Our advanced scrubbing technology identifies and corrects potential errors before submission.",
              },
              {
                icon: <Clock size={24} />,
                title: "Timely Filing Tracking",
                description:
                  "We monitor filing deadlines to ensure all claims are submitted within payer-specific timeframes.",
              },
              {
                icon: <BarChart4 size={24} />,
                title: "Performance Analytics",
                description:
                  "Detailed reporting on claims status, denial rates, and reimbursement trends to optimize your revenue cycle.",
              },
              {
                icon: <RefreshCw size={24} />,
                title: "Automated Follow-up",
                description:
                  "Systematic follow-up on pending claims to ensure timely payment and reduce accounts receivable days.",
              },
              {
                icon: <CheckCircle size={24} />,
                title: "Denial Management",
                description:
                  "We analyze denied claims, identify root causes, and resubmit with corrections to maximize reimbursement.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  x: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full mt-1">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
            >
              Performance Metrics
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Claims Processing Results</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver measurable results that improve your practice's financial performance and operational
              efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "95%",
                label: "First-Pass Acceptance",
                description:
                  "Our clean claims submission process achieves a 95% first-pass acceptance rate, well above the industry average.",
              },
              {
                value: "48h",
                label: "Average Submission Time",
                description:
                  "We submit claims within 48 hours of service, accelerating your revenue cycle and improving cash flow.",
              },
              {
                value: "30%",
                label: "Reduction in Denials",
                description:
                  "Our clients experience an average 30% reduction in claim denials after implementing our services.",
              },
              {
                value: "15d",
                label: "Reduced A/R Days",
                description:
                  "We help reduce accounts receivable days by an average of 15 days through efficient claims processing.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-green-600 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Streamline Your Claims Processing?
            </motion.h2>

            <motion.p
              className="text-lg text-green-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert claims processing services can reduce
              denials, accelerate payments, and improve your bottom line.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-white text-green-700 hover:bg-green-50">
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
              className="text-sm text-green-200 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              No obligation. We'll analyze your current claims process and show you how we can help.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

