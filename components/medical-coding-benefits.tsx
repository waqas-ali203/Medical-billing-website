"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { DollarSign, Clock, Shield, TrendingUp, FileCheck, Users } from "lucide-react"

export default function MedicalCodingBenefits() {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-emerald" />,
      title: "Increased Revenue",
      description: "Accurate coding captures all billable services, reducing missed revenue opportunities.",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald" />,
      title: "Faster Reimbursement",
      description: "Properly coded claims are processed more quickly, improving cash flow.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald" />,
      title: "Reduced Compliance Risk",
      description: "Expert coding minimizes the risk of audits, penalties, and reputational damage.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald" />,
      title: "Improved Productivity",
      description: "Outsourced coding allows your staff to focus on patient care and other priorities.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-emerald" />,
      title: "Fewer Denials",
      description: "Accurate coding reduces claim denials and the need for time-consuming appeals.",
    },
    {
      icon: <Users className="h-6 w-6 text-emerald" />,
      title: "Scalable Resources",
      description: "Flexible coding support that scales with your practice's volume and needs.",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Coding Benefits"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-emerald/10 text-emerald rounded-full text-sm font-medium mb-4">
            Key Benefits
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-darkblue mb-6">Why Choose Our Medical Coding Services</h2>

          <p className="text-gray-700">
            Our expert medical coding services deliver tangible benefits that directly impact your bottom line while
            ensuring compliance with all regulatory requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-emerald/10 p-3 rounded-full w-fit mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-darkblue mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-darkblue to-teal rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4">See the Difference Expert Coding Makes</h3>
              <p className="text-lightblue mb-6">
                Our clients typically see significant improvements in their revenue cycle metrics after implementing our
                medical coding services.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Increase in Revenue", value: "15-30%" },
                  { label: "Reduction in Denials", value: "40%" },
                  { label: "Decrease in A/R Days", value: "25%" },
                  { label: "Coding Accuracy", value: "99%" },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white">{stat.label}</span>
                    <span className="text-emerald font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 flex items-center">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Client Success Story</h4>
                <p className="text-lightblue italic mb-6">
                  "After switching to their medical coding services, our claim denial rate dropped from 12% to just 3%,
                  and our monthly revenue increased by 22%. Their expertise in specialty-specific coding has been
                  invaluable to our practice."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">Dr. Michael Chen</p>
                    <p className="text-lightblue text-sm">Cardiology Associates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

