"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imagePath: string
  index: number
}

function ServiceCard({ title, description, imagePath, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    hovered: { scale: 1.1 },
    notHovered: { scale: 1 },
  }

  const descriptionVariants = {
    hidden: { height: 0, opacity: 0, y: 50 },
    visible: { height: "auto", opacity: 1, y: 0 },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 cursor-pointer`} // Reduced duration
      style={{ height: "250px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }} // Added spring
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300" // Reduced duration
        style={{ backgroundImage: `url(${imagePath})` }}
        variants={imageVariants}
        animate={isHovered ? "hovered" : "notHovered"}
        transition={{ duration: 0.2 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 to-darkblue/20 z-10" />

      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-white"
        animate={{
          justifyContent: isHovered ? "flex-start" : "center",
          alignItems: "center",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center"
          variants={titleVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "visible"} // Always animate in
          transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {!isHovered && (
            <motion.p
              className="text-sm text-gray-200 line-clamp-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          transition={{ duration: 0.4, type: "spring", stiffness: 80, damping: 12 }}
          className="overflow-hidden w-full mt-4"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: "20px",
            backdropFilter: isHovered ? "blur(5px)" : "none",
            backgroundColor: isHovered ? "rgba(0, 0, 0, 0.3)" : "transparent",
          }}
        >
          <p className="text-sm text-gray-200">{description}</p>
          <button className="mt-4 px-4 py-2 bg-emerald hover:bg-emerald-dark text-white rounded-md text-sm transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function CardSection() {
  const services = [
    {
      title: "Medical Coding",
      description:
        "Our expert team ensures accurate coding for all medical procedures, maximizing reimbursement and minimizing claim denials.",
      imagePath: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Insurance Verification",
      description:
        "We verify patient insurance coverage before appointments to reduce claim rejections and improve cash flow.",
      imagePath: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Claims Processing",
      description:
        "Our streamlined claims processing system ensures timely submission and follow-up for faster payments.",
      imagePath: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Revenue Cycle Management",
      description: "Comprehensive revenue cycle management to optimize your practice's financial performance.",
      imagePath: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop"
          alt="Medical Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-softgray"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-lightblue text-darkblue rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-darkblue"
          >
            Our Medical Billing Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-charcoal max-w-2xl mx-auto"
          >
            Comprehensive solutions to streamline your healthcare practice's financial operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imagePath={service.imagePath}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
};