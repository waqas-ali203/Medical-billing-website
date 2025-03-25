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

export default function ServiceFAQ() {
  const faqs = [
    {
      question: "How quickly can you implement your billing services for my practice?",
      answer:
        "We typically complete implementation within 2-3 weeks, depending on the size and complexity of your practice. Our streamlined onboarding process includes system integration, staff training, and a smooth transition plan to minimize disruption to your operations.",
    },
    {
      question: "Will I need to change my existing EHR/EMR system?",
      answer:
        "No, our billing services are designed to work with most major EHR/EMR systems. We have experience integrating with over 50 different platforms and can adapt to your existing workflow rather than requiring you to change your systems.",
    },
    {
      question: "How do you handle claim denials?",
      answer:
        "We have a dedicated denial management team that analyzes each denied claim, identifies the root cause, makes necessary corrections, and resubmits promptly. We also provide monthly denial analysis reports to help identify patterns and implement process improvements to reduce future denials.",
    },
    {
      question: "What is your average collection rate?",
      answer:
        "Our clients typically experience a 96-98% collection rate on clean claims, which is significantly higher than the industry average. We achieve this through rigorous claim scrubbing, timely filing, and aggressive follow-up on all submitted claims.",
    },
    {
      question: "How do you ensure HIPAA compliance?",
      answer:
        "We maintain strict HIPAA compliance through regular staff training, secure systems with encryption and access controls, annual security assessments, and comprehensive policies and procedures. We also sign Business Associate Agreements (BAAs) with all clients and undergo regular compliance audits.",
    },
    {
      question: "Can I see reports on my practice's financial performance?",
      answer:
        "Yes, we provide comprehensive reporting through a secure online portal where you can access real-time data on claims, payments, denials, and key performance indicators. We also deliver monthly detailed reports with analysis and recommendations for improving your revenue cycle.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            className="inline-block px-4 py-1 bg-[#f0ebe4] text-[#735739] rounded-full text-sm font-medium mb-4"
          >
            Common Questions
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our medical billing services. If you don't see your question here,
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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <motion.div
            className="inline-block bg-[#735739] text-white px-6 py-3 rounded-full font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Support Team
          </motion.div>
        </div>
      </div>
    </section>
  )
}

