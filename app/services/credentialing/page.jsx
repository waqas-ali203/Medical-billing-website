"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, ArrowRight, FileText, Clock, AlertCircle } from "lucide-react"

export default function CredentialingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section - Side by side layout with image */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
            alt="Credentialing Background"
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
                Provider Enrollment Services
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Credentialing Services
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-indigo-100 mb-8"
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
                <Button size="lg" className="rounded-full bg-white text-indigo-700 hover:bg-indigo-50">
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
                    <CheckCircle className="h-5 w-5 text-indigo-200 mt-1 flex-shrink-0" />
                    <span className="text-indigo-100">{item}</span>
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
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                  alt="Credentialing Services"
                  fill
                  className="object-cover"
                />

                {/* Floating card elements */}
                <motion.div
                  className="absolute top-10 right-10 bg-white rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Providers Enrolled</div>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600">1,500+</div>
                  <p className="text-xs text-gray-500 mt-1">Across all specialties</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-10 bg-white rounded-lg shadow-xl p-4 z-20 max-w-[200px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Success Rate</div>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600">98%</div>
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

      {/* Overview Section */}
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
                className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4"
              >
                Provider Enrollment
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamlined Credentialing Services</h2>

              <p className="text-gray-600 mb-8">
                Our credentialing services simplify the complex process of provider enrollment with insurance companies
                and government programs. We handle the paperwork, follow up with payers, and track the status of your
                applications, allowing you to focus on patient care.
              </p>

              <div className="space-y-4">
                {[
                  "Payer enrollment management for all major insurance companies",
                  "CAQH profile creation and maintenance",
                  "Medicare and Medicaid enrollment",
                  "Credentialing status tracking and reporting",
                  "Re-credentialing management and timely renewals",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                  alt="Credentialing Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-50 rounded-full -z-10"></div>

              {/* Stats card */}
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-gray-500 mb-1">Time Savings</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">60%</div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <motion.div
                    className="h-full bg-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Reduction in credentialing time</p>
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
              className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4"
            >
              Our Process
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Credentialing Workflow</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined credentialing process ensures efficient provider enrollment with minimal disruption to
              your practice.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                icon: <FileText className="h-6 w-6 text-white" />,
                title: "Document Collection",
                description:
                  "We gather all necessary documentation from providers, including licenses, certifications, and education history.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-white" />,
                title: "Application Preparation",
                description:
                  "Our team prepares and submits enrollment applications to all requested insurance companies and government programs.",
              },
              {
                icon: <Clock className="h-6 w-6 text-white" />,
                title: "Status Tracking",
                description:
                  "We actively track the status of all applications and follow up regularly to ensure timely processing.",
              },
              {
                icon: <AlertCircle className="h-6 w-6 text-white" />,
                title: "Issue Resolution",
                description:
                  "If any issues arise during the credentialing process, we promptly address them to prevent delays.",
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Approval & Maintenance",
                description:
                  "Once approved, we maintain a database of all credentialing information and monitor expiration dates for timely renewals.",
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
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  {index < 4 && <div className="w-0.5 h-16 bg-indigo-200 mx-auto mt-2"></div>}
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

      {/* FAQ Section */}
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
              className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4"
            >
              Common Questions
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our credentialing services. If you don't see your question here,
              please contact us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            {[
              {
                question: "How long does the credentialing process typically take?",
                answer:
                  "The credentialing process typically takes 60-120 days, depending on the insurance company or government program. Our services can help reduce this timeframe by ensuring accurate application submission and proactive follow-up.",
              },
              {
                question: "Can you credential providers in multiple states?",
                answer:
                  "Yes, we provide credentialing services for providers in all 50 states. Our team is familiar with the specific requirements of each state and can handle multi-state credentialing efficiently.",
              },
              {
                question: "Do you handle re-credentialing?",
                answer:
                  "Yes, we manage the entire re-credentialing process. We track expiration dates and initiate the renewal process well in advance to ensure continuous participation with insurance companies and government programs.",
              },
              {
                question: "What information do you need from our providers to start the credentialing process?",
                answer:
                  "We typically need basic demographic information, education and training history, work history, license information, malpractice insurance details, and other professional credentials. We provide a comprehensive checklist to ensure we gather all necessary information.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 last:border-0 py-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Streamline Your Credentialing Process?
            </motion.h2>

            <motion.p
              className="text-lg text-indigo-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert credentialing services can save you
              time, reduce administrative burden, and maximize your revenue potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-white text-indigo-700 hover:bg-indigo-50">
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
              className="text-sm text-indigo-200 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              No obligation. We'll analyze your current credentialing process and show you how we can help.
            </motion.p>
          </div>
        </div>
      </section>
    </main>
  )
}

