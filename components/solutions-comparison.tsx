"use client"

import { motion } from "framer-motion"
import { CheckCircle, X } from "lucide-react"

export default function SolutionsComparison() {
  const comparisonData = [
    {
      feature: "Medical Coding",
      inHouse: "Limited specialty expertise",
      ourService: "Certified coders with specialty-specific knowledge",
    },
    {
      feature: "Claims Processing",
      inHouse: "Manual submission process",
      ourService: "Automated submission with pre-claim scrubbing",
    },
    {
      feature: "Denial Management",
      inHouse: "Reactive approach",
      ourService: "Proactive prevention and rapid resolution",
    },
    {
      feature: "Compliance",
      inHouse: "Limited resources for updates",
      ourService: "Continuous monitoring and implementation of changes",
    },
    {
      feature: "Technology",
      inHouse: "High upfront and maintenance costs",
      ourService: "State-of-the-art systems included in service",
    },
    {
      feature: "Staffing",
      inHouse: "Recruitment, training, turnover challenges",
      ourService: "Dedicated team with no staffing concerns",
    },
    {
      feature: "Reporting",
      inHouse: "Basic financial reports",
      ourService: "Comprehensive analytics and actionable insights",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-softgray">
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
            className="inline-block px-4 py-1 bg-lightblue/20 text-darkblue rounded-full text-sm font-medium mb-4"
          >
            Why Outsource
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkblue">
            In-House vs. Our Medical Billing Services
          </h2>

          <p className="text-charcoal max-w-2xl mx-auto">
            See how our professional medical billing services compare to managing billing in-house
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 text-center py-4 bg-teal text-white font-bold">
            <div>Feature</div>
            <div>In-House Billing</div>
            <div>Our Billing Services</div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-3 py-4 px-4 ${index % 2 === 0 ? "bg-white" : "bg-lightblue/5"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="font-medium text-darkblue">{item.feature}</div>
              <div className="flex items-center justify-center">
                <div className="flex items-start gap-2 text-left">
                  <X className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal text-sm">{item.inHouse}</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-start gap-2 text-left">
                  <CheckCircle className="h-5 w-5 text-emerald mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal text-sm">{item.ourService}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-charcoal">
          <p>
            Our medical billing services eliminate the challenges of in-house billing while delivering superior results.
          </p>
        </div>
      </div>
    </section>
  )
}

