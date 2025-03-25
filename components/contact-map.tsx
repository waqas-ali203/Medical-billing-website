"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

export default function ContactMap() {
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
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Our Location
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in the United States. Contact us to schedule a meeting or consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359630.09737905!2d-113.7240346!3d36.2410748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1710866291600!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#f0ebe4] p-3 rounded-full">
                <MapPin className="h-6 w-6 text-[#735739]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600">
                  123 Medical Plaza, Suite 456
                  <br />
                  Healthcare City, USA
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#735739] rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Email:{" "}
                  <a href="mailto:waqasansari4547@gmail.com" className="text-[#735739] hover:underline">
                    waqasansari4547@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#735739] rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Phone:{" "}
                  <a href="tel:+923186264059" className="text-[#735739] hover:underline">
                    +92 318 626 4059
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#735739] rounded-full"></div>
                <span className="text-sm text-gray-600">Accessible by public transportation</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#735739] to-[#8a6a45] hover:from-[#5d472e] hover:to-[#735739]"
                onClick={() => window.open("https://maps.google.com/?q=USA", "_blank")}
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

