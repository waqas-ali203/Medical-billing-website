"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactHero() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Office Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-teal/80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
          >
            We're Here To Help
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact <span className="text-lightblue">Our Team</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about our medical billing services? Our team of experts is ready to assist you with any
            inquiries and provide the support you need.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: <Phone className="h-6 w-6" color="white"/>,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri, 9am-5pm EST",
              },
              {
                icon: <Mail className="h-6 w-6" color="white"/>,
                title: "Email Us",
                info: "info@medicalbilling.com",
                description: "We respond within 24 hours",
              },
              {
                icon: <MapPin className="h-6 w-6" color="white"/>,
                title: "Visit Us",
                info: "123 Medical Plaza",
                description: "New York, NY 10001",
              },
              {
                icon: <Clock className="h-6 w-6" color="white"/>,
                title: "Business Hours",
                info: "Monday - Friday",
                description: "9:00 AM - 5:00 PM EST",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center cursor-pointer"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover" //Added whileHover
                transition={{ duration: 0.02, delay: 0, ease: "linear" }}
              >
                <div className="bg-emerald/20 p-3 rounded-full mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-lightblue font-medium">{item.info}</p>
                <p className="text-white/70 text-sm mt-1">{item.description}</p>
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
  )
};