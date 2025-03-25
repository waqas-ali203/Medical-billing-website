"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, toggleOpen, index }: FAQItemProps) {
  return (
    <motion.div
      className="border-b border-gray-200 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-900 focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#735739] transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-600">{answer}</div>
      </motion.div>
    </motion.div>
  )
}

export default function CredentialingFAQ() {
  const faqs = [
    {
      question: "How long does the credentialing process typically take?",
      answer:
        "The credentialing process typically takes 60-120 days, depending on the insurance company or government program. Our services can help reduce this timeframe by ensuring accurate application submission and proactive follow-up.",
    },
    {
      question: "Can you credential providers in multiple states?",
      answer:
        "Yes, we provide credentialing services for providers in all 50 states. Our team is familiar with the specific requirements of each state and can handle multi-state credentialing efficiently.",
    },
    {
      question: "Do you handle re-credentialing?",
      answer:
        "Yes, we manage the entire re-credentialing process. We track expiration dates and initiate the renewal process well in advance to ensure continuous participation with insurance companies and government programs.",
    },
    {
      question: "What information do you need from our providers to start the credentialing process?",
      answer:
        "We typically need basic demographic information, education and training history, work history, license information, malpractice insurance details, and other professional credentials. We provide a comprehensive checklist to ensure we gather all necessary information.",
    },
    {
      question: "Do you handle CAQH profile management?",
      answer:
        "Yes, we create and maintain CAQH profiles for providers, ensuring they are complete, accurate, and up-to-date. We also handle the quarterly attestations required by CAQH.",
    },
    {
      question: "How do you keep us updated on the credentialing status?",
      answer:
        "We provide regular status updates through a secure online portal and scheduled reports. You'll have visibility into the status of each application at every stage of the process.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Common Questions
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our credentialing services. If you don't see your question here,
            please contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

