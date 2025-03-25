"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart4, CheckCircle, ArrowRight, PieChart, LineChart, FileText } from "lucide-react"

export default function RevenueAnalysisPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero Section - Full-width with animated background */}
      <section className="relative bg-gradient-to-br from-amber-600 to-amber-800 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-[10%] left-[10%] text-white/5"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8 }}
          >
            <BarChart4 size={300} />
          </motion.div>

          <motion.div
            className="absolute top-[30%] right-[15%] text-white/5"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, delay: 1 }}
          >
            <PieChart size={200} />
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[20%] text-white/5"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 12, delay: 2 }}
          >
            <LineChart size={250} />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Data-Driven <span className="text-amber-200">Revenue Analysis</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-amber-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlock the full potential of your practice with comprehensive financial reporting and analysis that
              identifies revenue opportunities and optimizes your bottom line.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full bg-white text-amber-700 hover:bg-amber-50">
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white hover:bg-white/20"
              >
                View Sample Reports <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { value: "30%", label: "Revenue Increase" },
                { value: "25%", label: "Cost Reduction" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Report Types" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-amber-200">{stat.label}</div>
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

      {/* Features Section - Grid with icons */}
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
                className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
              >
                Comprehensive Analysis
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Data Into Strategic Insights</h2>

              <p className="text-gray-600 mb-8">
                Our revenue analysis services provide detailed financial reporting and analytics that help identify
                revenue opportunities, optimize your practice's financial performance, and make data-driven decisions.
                We transform complex financial data into actionable insights that drive growth and profitability.
              </p>

              <div className="space-y-4">
                {[
                  "Practice performance metrics and benchmarking",
                  "Provider productivity analysis and comparison",
                  "Payer mix optimization strategies",
                  "Revenue cycle KPI tracking and improvement",
                  "Customized financial dashboards and reporting",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
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
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500"
                  whileHover={{ y: -10 }}
                >
                  <BarChart4 className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Metrics</h3>
                  <p className="text-sm text-gray-600">Track key performance indicators to measure practice success</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500"
                  whileHover={{ y: -10 }}
                >
                  <PieChart className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Payer Analysis</h3>
                  <p className="text-sm text-gray-600">Optimize your payer mix for maximum reimbursement</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500"
                  whileHover={{ y: -10 }}
                >
                  <LineChart className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Trend Analysis</h3>
                  <p className="text-sm text-gray-600">Identify patterns and trends in your financial data</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500"
                  whileHover={{ y: -10 }}
                >
                  <FileText className="h-10 w-10 text-amber-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Reports</h3>
                  <p className="text-sm text-gray-600">Tailored reports designed for your specific needs</p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-50 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reports Section - Tabs layout */}
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
              className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4"
            >
              Comprehensive Reporting
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customized Analytics & Reports</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our revenue analysis services include a wide range of customized reports and analytics designed to provide
              actionable insights for your practice.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-700 mb-4">Financial Performance Reports</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive financial reports that provide a clear picture of your practice's financial health and
                    performance.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Revenue by provider, location, and service",
                      "Expense analysis and cost control",
                      "Profit and loss statements",
                      "Cash flow analysis",
                      "Budget vs. actual comparison",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                          <div className="h-3 w-3 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Financial Performance Reports"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-amber-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
            >
              Success Stories
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>

            <p className="text-amber-100 max-w-2xl mx-auto">
              Hear from healthcare providers who have transformed their practices with our revenue analysis services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The revenue analysis reports have transformed how we make decisions. We've increased our revenue by 28% in just six months by implementing the recommended changes.",
                author: "Dr. Michael Chen",
                position: "Medical Director, Family Health Clinic",
              },
              {
                quote:
                  "The insights from the payer performance reports allowed us to renegotiate contracts with our top payers, resulting in a 15% increase in reimbursement rates.",
                author: "Sarah Johnson",
                position: "Practice Manager, Orthopedic Associates",
              },
              {
                quote:
                  "The operational efficiency reports helped us identify workflow bottlenecks we didn't even know existed. Our patient throughput has improved by 30% as a result.",
                author: "Dr. James Wilson",
                position: "CEO, Cardiology Partners",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <p className="text-white mb-6 relative z-10">{testimonial.quote}</p>

                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-amber-200">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your Revenue Cycle?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today for a free consultation and discover how our expert revenue analysis services can help
              you identify opportunities, optimize your financial performance, and make data-driven decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full bg-amber-600 hover:bg-amber-700 text-white">
                <a href="mailto:waqasansari4547@gmail.com">Contact Us Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <a href="tel:+923186264059">
                  Call Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

