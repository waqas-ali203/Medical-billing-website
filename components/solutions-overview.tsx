"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionsOverview() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E3A8A' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
            className="inline-block px-4 py-1 bg-lightblue/20 text-darkblue rounded-full text-sm font-medium mb-4"
          >
            Our Approach
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkblue">Comprehensive Billing Solutions</h2>

          <p className="text-charcoal max-w-2xl mx-auto">
            Our integrated approach to medical billing addresses every aspect of your revenue cycle, from patient
            registration to payment reconciliation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-darkblue mb-6">Streamlined Revenue Cycle Management</h3>

            <p className="text-charcoal mb-8">
              Our comprehensive suite of medical billing solutions is designed to optimize every stage of your revenue
              cycle. We combine industry expertise with cutting-edge technology to maximize reimbursements, reduce
              denials, and accelerate your cash flow.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "End-to-end revenue cycle management",
                "Specialty-specific billing expertise",
                "Advanced technology integration",
                "Dedicated account management",
                "Transparent reporting and analytics",
                "Ongoing compliance monitoring",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                  <span className="text-charcoal">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button className="bg-teal hover:bg-teal-dark text-white">Explore Our Solutions</Button>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                alt="Medical Billing Solutions"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-darkblue/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-lg">Average Collection Rate</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-lightblue/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

