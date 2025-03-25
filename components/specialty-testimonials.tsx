"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  quote: string
  author: string
  position: string
  specialty: string
  image: string
  index: number
}

function TestimonialCard({ quote, author, position, specialty, image, index }: TestimonialProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute top-6 right-6 text-pink-200">
        <Quote size={40} />
      </div>

      <div className="mb-4 text-sm font-medium text-pink-600">{specialty} Practice</div>

      <p className="text-gray-700 mb-6 relative z-10">{quote}</p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>

        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function SpecialtyTestimonials() {
  const testimonials = [
    {
      quote:
        "Their specialized knowledge of cardiology billing has increased our collections by 35% and significantly reduced our denials.",
      author: "Dr. James Wilson",
      position: "Cardiologist",
      specialty: "Cardiology",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a neurology practice, we have complex billing needs. This team understands our specialty and has streamlined our entire revenue cycle.",
      author: "Dr. Sarah Chen",
      position: "Neurologist",
      specialty: "Neurology",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Our orthopedic practice has seen a dramatic improvement in reimbursement rates since switching to this billing service.",
      author: "Dr. Michael Rodriguez",
      position: "Orthopedic Surgeon",
      specialty: "Orthopedics",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
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
            className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4"
          >
            Success Stories
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Specialty Clients Say</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from specialty healthcare providers who have transformed their billing processes with our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              specialty={testimonial.specialty}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

