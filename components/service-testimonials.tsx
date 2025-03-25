"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  position: string
  image: string
  rating: number
}

function TestimonialCard({ quote, author, position, image, rating }: TestimonialProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute top-6 right-6 text-[#e9dfd4]">
        <Quote size={40} />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-[#735739] fill-[#735739]" : "text-gray-300"}`} />
        ))}
      </div>

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

export default function ServiceTestimonials() {
  const testimonials = [
    {
      quote:
        "Their medical billing services have transformed our practice. We've seen a 30% increase in collections and a significant reduction in claim denials.",
      author: "Dr. Sarah Johnson",
      position: "Family Medicine Practice",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote:
        "The expertise and attention to detail from this team is exceptional. They've streamlined our billing process and improved our cash flow dramatically.",
      author: "Mark Williams",
      position: "Orthopedic Clinic Administrator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote:
        "We were struggling with coding compliance until we found this team. They've implemented processes that ensure accurate coding while maximizing our reimbursement.",
      author: "Dr. Emily Chen",
      position: "Cardiology Practice",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#735739] relative overflow-hidden">
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
            className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 text-white"
          >
            Client Success Stories
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>

          <p className="text-[#e9dfd4] max-w-2xl mx-auto">
            Don't just take our word for it. Hear from healthcare providers who have transformed their practices with
            our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

