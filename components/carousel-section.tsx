"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SlideProps {
  image: string
  title: string
  description: string
  features: string[]
}

export default function CarouselSection() {
  const slides: SlideProps[] = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      title: "Advanced Medical Billing Software",
      description:
        "Our state-of-the-art billing software integrates seamlessly with your existing systems, providing real-time insights and analytics to optimize your revenue cycle.",
      features: [
        "Automated claim submission",
        "Real-time eligibility verification",
        "Customizable reporting dashboard",
        "Integrated coding assistance",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600&auto=format&fit=crop",
      title: "Expert Billing Specialists",
      description:
        "Our team of certified billing specialists has extensive experience in various medical specialties, ensuring accurate coding and maximum reimbursement for your services.",
      features: [
        "Certified coding professionals",
        "Specialty-specific expertise",
        "Ongoing education and training",
        "Dedicated account managers",
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our medical billing services can transform your practice
          </p>
        </motion.div>

        <div className="carousel-container">
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-6"
              >
                <motion.div
                  className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Image
                    src={slides[currentIndex].image || "/placeholder.svg"}
                    alt={slides[currentIndex].title}
                    fill
                    className="object-cover"
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <div className="p-6 text-white">
                      <div className="text-sm font-medium mb-1">Featured Solution</div>
                      <div className="text-xl font-bold">{slides[currentIndex].title}</div>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {slides[currentIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {slides[currentIndex].description}
                  </motion.p>

                  <motion.div
                    className="space-y-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <div className="font-medium text-gray-900">Key Features:</div>
                    {slides[currentIndex].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    className="px-6 py-2 bg-primary text-white rounded-md mt-4 hover:bg-primary/90 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white p-2 rounded-full shadow-lg z-10"
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white p-2 rounded-full shadow-lg z-10"
              aria-label="Next slide"
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </motion.button>

            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

