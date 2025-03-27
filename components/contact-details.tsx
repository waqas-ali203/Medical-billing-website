"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react"

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  details: React.ReactNode[] //Modified details prop type
  index: number
}

function ContactCard({ icon, title, details, index }: ContactCardProps) {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#e9dfd4",
    },
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#e9dfd4",
        transition: { duration: 0.1 }, // Immediate transition on hover
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full" style={{ backgroundColor: "#95f6ee" }}>
          <div style={{ color: "#17918a" }}>{icon}</div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <div className="space-y-1">
            {details.map((detail, idx) => (
              <p key={idx} className="text-gray-600">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ContactDetails() {
  const contactInfo = [
    {
      icon: <MapPin size={24} color="#17918a" />,
      title: "Our Location",
      details: ["106 Tudor Court", "Springfield, NJ 07081", "United States"], //Changed Address
    },
    {
      icon: <Phone size={24} color="#17918a" />,
      title: "Phone Numbers",
      details: [
        <a key="phone" href="tel:+923186264059" className="hover:text-[#735739] transition-colors">
          +92 318 626 4059
        </a>,
        "Support: Available 24/7",
        "Fax: Available on request",
      ],
    },
    {
      icon: <Mail size={24} color="#17918a" />,
      title: "Email Addresses",
      details: [
        <a key="email" href="mailto:waqasansari4547@gmail.com" className="hover:text-[#735739] transition-colors">
          waqasansari4547@gmail.com
        </a>,
        "Support: Available 24/7",
        "Careers: Send your resume",
      ],
    },
    {
      icon: <Clock size={24} color="#17918a" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
    },
    {
      icon: <Globe size={24} color="#17918a" />,
      title: "Service Areas",
      details: ["All 50 States", "Remote Services Available", "International Clients Welcome"],
    },
    {
      icon: <Users size={24} color="#17918a" />,
      title: "Department Contacts",
      details: [
        <a key="sales" href="mailto:waqasansari4547@gmail.com" className="hover:text-[#735739] transition-colors">
          Sales: waqasansari4547@gmail.com
        </a>,
        <a key="support" href="mailto:waqasansari4547@gmail.com" className="hover:text-[#735739] transition-colors">
          Support: waqasansari4547@gmail.com
        </a>,
        <a key="management" href="mailto:waqasansari4547@gmail.com" className="hover:text-[#735739] transition-colors">
          Management: waqasansari4547@gmail.com
        </a>,
      ],
    },
  ]

  return (
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
            className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-blue-100 text-blue-800"
          
          >
            Contact Information
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch With Us</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and provide the support you need. Reach out to us through any of the
            following channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} icon={info.icon} title={info.title} details={info.details} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
};