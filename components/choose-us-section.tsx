"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Award, Clock, Shield, BarChart4, Users } from "lucide-react"

export default function ChooseUsSection() {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-teal" />,
      title: "Specialized Medical Billing Expertise",
      description:
        "Our team consists of certified medical billing specialists with expertise across various healthcare specialties.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-emerald" />,
      title: "Increased Revenue Collection",
      description:
        "Our proven processes help healthcare providers collect more of what they're owed, faster and with less hassle.",
    },
    {
      icon: <Clock className="h-8 w-8 text-lightblue" />,
      title: "Reduced Administrative Burden",
      description: "We handle the complex billing tasks so your staff can focus on providing quality patient care.",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange" />,
      title: "Compliance Assurance",
      description: "We stay up-to-date with changing regulations to ensure your billing practices remain compliant.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-darkblue" />,
      title: "Transparent Reporting",
      description: "Access real-time reports and analytics to track your practice's financial performance.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange" />,
      title: "Dedicated Support Team",
      description: "Our responsive customer service team is always available to address your questions and concerns.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 relative overflow-hidden">
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
        <motion.div
          className="text-center mb-12"
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
            className="inline-block px-4 py-1 bg-lightblue text-darkblue rounded-full text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-darkblue">Why Choose Our Organization</h2>
          <p className="text-charcoal max-w-2xl mx-auto">
            We deliver exceptional medical billing services that help healthcare providers thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-softgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{reason.icon}</div>
                  <div>
                    <h3 className="font-bold text-darkblue mb-2">{reason.title}</h3>
                    <p className="text-sm text-charcoal">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/choose-us.png"
                alt="Medical Billing Professionals"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-darkblue/70 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ left: 0 }} // Ensure it doesn't go beyond the left edge
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald/20 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-emerald" />
                </div>
                <div className="font-bold text-lg text-darkblue">Proven Results</div>
              </div>
              <p className="text-charcoal text-sm">
                "Our practice saw a 32% increase in collections within the first 3 months of partnering with this team."
              </p>
              <div className="mt-3 text-sm font-medium text-darkblue">- Dr. Sarah Johnson, Family Medicine</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

