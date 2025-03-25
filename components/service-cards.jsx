"use client"
import { motion } from "framer-motion"
import {
  FileText,
  ClipboardCheck,
  CreditCard,
  BarChart4,
  Shield,
  Users,
  Database,
  FileCheck,
  Stethoscope,
  Receipt,
  HeartPulse,
  Phone,
} from "lucide-react"
import Link from "next/link"

// Update the ServiceCard component to add cursor-pointer on hover
function ServiceCard({ icon, title, description, features, index, slug }) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="p-6 md:p-8">
          <motion.div
            className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ backgroundColor: ["#ccfbf1", "#99f6e4", "#ccfbf1"] }}
            transition={{
              backgroundColor: { repeat: Number.POSITIVE_INFINITY, duration: 3 },
              scale: { type: "spring", stiffness: 300 },
              rotate: { type: "spring", stiffness: 200 },
            }}
          >
            <div className="text-teal-600">{icon}</div>
          </motion.div>

          <motion.h3 className="text-xl md:text-2xl font-bold text-center mb-4" whileHover={{ color: "#0d9488" }}>
            {title}
          </motion.h3>

          <p className="text-gray-600 text-center mb-6">{description}</p>

          <div className="border-t border-teal-100 pt-4 mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
                >
                  {feature.split(" ").slice(0, 2).join(" ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ServiceCards() {
  const services = [
    {
      icon: <FileText size={32} />,
      title: "Medical Coding",
      description: "Expert coding services for all medical specialties to ensure proper reimbursement.",
      features: [
        "ICD-10 and CPT coding expertise",
        "Specialty-specific coding knowledge",
        "Regular updates on coding changes",
        "Coding audit and optimization",
      ],
      slug: "medical-coding",
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Claims Processing",
      description: "Efficient claims submission and follow-up to minimize rejections and denials.",
      features: [
        "Electronic claims submission",
        "Claim scrubbing and error detection",
        "Rejection analysis and correction",
        "Timely filing management",
      ],
      slug: "claims-processing",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Posting",
      description: "Timely and accurate posting of payments to maintain financial records.",
      features: [
        "ERA/EOB reconciliation",
        "Payment variance identification",
        "Contractual adjustment posting",
        "Patient payment processing",
      ],
      slug: "payment-posting",
    },
    {
      icon: <BarChart4 size={32} />,
      title: "Revenue Analysis",
      description: "Detailed financial reporting and analysis to identify revenue opportunities.",
      features: [
        "Practice performance metrics",
        "Provider productivity analysis",
        "Payer mix optimization",
        "Revenue cycle KPI tracking",
      ],
      slug: "revenue-analysis",
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance Services",
      description: "Ensuring adherence to healthcare regulations and billing requirements.",
      features: [
        "HIPAA compliance monitoring",
        "Documentation review",
        "Regulatory updates and training",
        "Audit preparation assistance",
      ],
      slug: "compliance-services",
    },
    {
      icon: <Users size={32} />,
      title: "Credentialing",
      description: "Provider enrollment services with insurance companies and government programs.",
      features: [
        "Payer enrollment management",
        "CAQH profile maintenance",
        "Credentialing status tracking",
        "Re-credentialing management",
      ],
      slug: "credentialing",
    },
    {
      icon: <Database size={32} />,
      title: "Practice Management",
      description: "Comprehensive solutions to streamline your practice operations.",
      features: [
        "Appointment scheduling",
        "Patient eligibility verification",
        "Prior authorization management",
        "Patient communication tools",
      ],
      slug: "practice-management",
    },
    {
      icon: <FileCheck size={32} />,
      title: "Audit Support",
      description: "Expert assistance during payer audits to minimize financial impact.",
      features: [
        "Audit response preparation",
        "Documentation compilation",
        "Appeal process management",
        "Post-audit process improvement",
      ],
      slug: "audit-support",
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Provider Education",
      description: "Training for healthcare providers on documentation best practices.",
      features: [
        "Documentation improvement training",
        "Coding education for providers",
        "Compliance workshops",
        "Specialty-specific guidance",
      ],
      slug: "provider-education",
    },
    {
      icon: <Receipt size={32} />,
      title: "Patient Billing",
      description: "Professional handling of patient statements and payment collection.",
      features: [
        "Patient statement generation",
        "Online payment portal setup",
        "Payment plan management",
        "Collection process oversight",
      ],
      slug: "patient-billing",
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Denial Management",
      description: "Strategic approach to reduce claim denials and increase collections.",
      features: [
        "Root cause analysis",
        "Appeal letter preparation",
        "Denial trend identification",
        "Process improvement implementation",
      ],
      slug: "denial-management",
    },
    {
      icon: <Phone size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your medical billing needs.",
      features: [
        "Dedicated account manager",
        "Emergency support line",
        "Regular check-in meetings",
        "Rapid response protocols",
      ],
      slug: "support",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-teal-50">
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
            className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4"
          >
            Comprehensive Solutions
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Our Medical Billing Services</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of medical billing services tailored to your practice's unique needs. Each service
            is designed to optimize your revenue cycle and improve your bottom line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

