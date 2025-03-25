"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function RevenueAnalysisTestimonials() {
  const testimonials = [
    {
      quote:
        "The revenue analysis reports have transformed how we make decisions. We've increased our revenue by 28% in just six months by implementing the recommended changes.",
      author: "Dr. Michael Chen",
      position: "Medical Director, Family Health Clinic",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The insights from the payer performance reports allowed us to renegotiate contracts with our top payers, resulting in a 15% increase in reimbursement rates.",
      author: "Sarah Johnson",
      position: "Practice Manager, Orthopedic Associates",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The operational efficiency reports helped us identify workflow bottlenecks we didn't even know existed. Our patient throughput has improved by 30% as a result.",
      author: "Dr. James Wilson",
      position: "CEO, Cardiology Partners",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#008080] text-white relative overflow-hidden">
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

          <p className="text-[#A7C7E7] max-w-2xl mx-auto">
            Hear from healthcare providers who have transformed their practices with our revenue analysis services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-6 right-6 text-white/30">
                <Quote size={40} />
              </div>

              <p className="text-white mb-6 relative z-10">{testimonial.quote}</p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-[#A7C7E7]">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Practice?</h3>
          <p className="text-[#A7C7E7] mb-6">
            Join hundreds of healthcare providers who have optimized their revenue cycle and financial performance with
            our revenue analysis services.
          </p>
          <motion.button
            className="px-8 py-3 bg-white text-[#1E3A8A] hover:text-[#008080] rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

