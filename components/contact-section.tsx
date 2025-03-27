"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    specialty: "",
    message: "",
    monthlyBilling: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        specialty: "",
        message: "",
        monthlyBilling: "",
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const iconStyle = {
    color: "#17918a",
  }

  const iconContainerStyle = {
    backgroundColor: "#95f6ee",
  }

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to learn how we can help optimize your medical billing process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-gray-600">
              Our team of medical billing experts is ready to help you streamline your billing process, increase
              collections, and reduce administrative burden. Contact us today to learn more about our services and how
              we can tailor our solutions to meet your specific needs.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={iconContainerStyle}>
                  <MapPin className="h-5 w-5" style={iconStyle} />
                </div>
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-gray-600">123 Medical Plaza, Suite 456, Healthcare City, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full" style={iconContainerStyle}>
                  <Phone className="h-5 w-5" style={iconStyle} />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a href="tel:+923186264059" className="text-gray-600 hover:text-primary transition-colors">
                    +92 318 626 4059
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full" style={iconContainerStyle}>
                  <Mail className="h-5 w-5" style={iconStyle} />
                </div>
                <div>
                  <h4 className="font-medium">Email Address</h4>
                  <a
                    href="mailto:waqasansari4547@gmail.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    waqasansari4547@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className=" p-3 rounded-full" style={iconContainerStyle}>
                  <Clock className="h-5 w-5" style={iconStyle} />
                </div>
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700 mb-4">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  style={{
                    backgroundColor: "#17918a",
                    color: "white",
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Practice/Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Healthcare Practice"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="specialty" className="block text-sm font-medium mb-1">
                    Medical Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Specialty</option>
                    <option value="family-medicine">Family Medicine</option>
                    <option value="internal-medicine">Internal Medicine</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="neurology">Neurology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="monthlyBilling" className="block text-sm font-medium mb-1">
                    Monthly Billing Volume
                  </label>
                  <select
                    id="monthlyBilling"
                    name="monthlyBilling"
                    value={formData.monthlyBilling}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Billing Volume</option>
                    <option value="1k-15k">1k - 15k</option>
                    <option value="15k-30k">15k - 30k</option>
                    <option value="30k-60k">30k - 60k</option>
                    <option value="60k-100k">60k - 100k</option>
                    <option value="above-100k">Above 100k</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your billing needs..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#17918a",
                    color: "white",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
};