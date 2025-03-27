"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
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
  Code, // Example icon
  Scale, // Example icon
  TrendingUp, // Example icon
  HelpCircle, // Example icon
  Calendar, // Example icon
  MessageSquare, // Example icon
} from "lucide-react"

function ServiceCard({ icon, title, slug }) {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { backgroundColor: "#f0fdfa", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  }

  const iconVariants = {
    whileHover: { scale: 1.2, rotate: 10 },
  }

  return (
    <Link href={`/services/${slug}`} className="block"> {/* Removed h-full as it can cause layout issues */}
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 py-20 px-6 text-center transition-colors"
        variants={cardVariants}
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="mx-auto"
          style={{
            width: "80px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(204, 251, 241, 0.5)",
            borderRadius: "50%",
            background: "linear-gradient(to right, #17918a, #275086)",
          }}
          variants={iconVariants}
          whileHover="whileHover"
        >
          {icon}
        </motion.div>

        <motion.h3 className="text-lg font-bold mt-4 text-gray-800" style={{ color: '#006a64' }}>
          {title}
        </motion.h3>
      </motion.div>
    </Link>
  )
}

export default function ServiceCards() {
  const [showAll, setShowAll] = useState(false)
  const initialVisibleCount = 12;

  const services = [
    { icon: <FileText size={40} color="white" />, title: "Medical Coding", slug: "medical-coding" },
    { icon: <ClipboardCheck size={40} color="white" />, title: "Claims Processing", slug: "claims-processing" },
    { icon: <CreditCard size={40} color="white" />, title: "Payment Posting", slug: "payment-posting" },
    { icon: <BarChart4 size={40} color="white" />, title: "Revenue Analysis", slug: "revenue-analysis" },
    { icon: <Shield size={40} color="white" />, title: "Compliance Services", slug: "compliance-services" },
    { icon: <Users size={40} color="white" />, title: "Credentialing", slug: "credentialing" },
    { icon: <Database size={40} color="white" />, title: "Practice Management", slug: "practice-management" },
    { icon: <FileCheck size={40} color="white" />, title: "Audit Support", slug: "audit-support" },
    { icon: <Stethoscope size={40} color="white" />, title: "Provider Education", slug: "provider-education" },
    { icon: <Receipt size={40} color="white" />, title: "Patient Billing", slug: "patient-billing" },
    { icon: <HeartPulse size={40} color="white" />, title: "Denial Management", slug: "denial-management" },
    { icon: <Phone size={40} color="white" />, title: "24/7 Support", slug: "support" },

    // Example of services icon, be more intuitive
    { icon: <Code size={40} color="white" />, title: "EHR Integration", slug: "ehr-integration" },
    { icon: <Scale size={40} color="white" />, title: "Contract Negotiation", slug: "contract-negotiation" },
    { icon: <TrendingUp size={40} color="white" />, title: "Performance Reporting", slug: "performance-reporting" },
    { icon: <HelpCircle size={40} color="white" />, title: "Coding Consultation", slug: "coding-consultation" },
    { icon: <Calendar size={40} color="white" />, title: "Appointment Scheduling", slug: "appointment-scheduling" },
    { icon: <MessageSquare size={40} color="white" />, title: "Patient Communication", slug: "patient-communication" },
    { icon: <FileText size={40} color="white" />, title: "Claims Submission", slug: "claims-submission" },
        { icon: <ClipboardCheck size={40} color="white" />, title: "Eligibility Verification", slug: "eligibility-verification" },
    { icon: <CreditCard size={40} color="white" />, title: "Payment Reconciliation", slug: "payment-reconciliation" },
    { icon: <BarChart4 size={40} color="white" />, title: "Financial Analysis", slug: "financial-analysis" },
        { icon: <Shield size={40} color="white" />, title: "Regulatory Compliance", slug: "regulatory-compliance" },
    { icon: <Users size={40} color="white" />, title: "Provider Credentialing", slug: "provider-credentialing" },
    { icon: <Database size={40} color="white" />, title: "Database Management", slug: "database-management" },
    { icon: <FileCheck size={40} color="white" />, title: "Record Auditing", slug: "record-auditing" },
        { icon: <Stethoscope size={40} color="white" />, title: "Clinical Documentation", slug: "clinical-documentation" },
    { icon: <Receipt size={40} color="white" />, title: "Revenue Cycle", slug: "revenue-cycle" },
    { icon: <HeartPulse size={40} color="white" />, title: "Patient Outreach", slug: "patient-outreach" },
        { icon: <Phone size={40} color="white" />, title: "Customer Support", slug: "customer-support" },
    { icon: <Code size={40} color="white" />, title: "Data Integration", slug: "data-integration" },
    { icon: <Scale size={40} color="white" />, title: "Performance Analytics", slug: "performance-analytics" },
    { icon: <TrendingUp size={40} color="white" />, title: "Reporting and Analysis", slug: "reporting-analysis" },
    { icon: <HelpCircle size={40} color="white" />, title: "Account Management", slug: "account-management" },
        { icon: <Calendar size={40} color="white" />, title: "Claims Appeal", slug: "claims-appeal" },
    { icon: <MessageSquare size={40} color="white" />, title: "Payment Posting", slug: "payment-posting" },
    { icon: <FileText size={40} color="white" />, title: "Medical Billing", slug: "medical-billing" },
    { icon: <ClipboardCheck size={40} color="white" />, title: "Compliance Program", slug: "compliance-program" },
        { icon: <CreditCard size={40} color="white" />, title: "HIPAA Compliance", slug: "hipaa-compliance" },
    { icon: <BarChart4 size={40} color="white" />, title: "Consulting Services", slug: "consulting-services" },
    { icon: <Shield size={40} color="white" />, title: "Charge Entry", slug: "charge-entry" },
    { icon: <Users size={40} color="white" />, title: "Custom Solutions", slug: "custom-solutions" },
        { icon: <Database size={40} color="white" />, title: "Denial Management", slug: "denial-management" },
    { icon: <FileCheck size={40} color="white" />, title: "Coding Education", slug: "coding-education" },
    { icon: <Stethoscope size={40} color="white" />, title: "AR Management", slug: "ar-management" },
        { icon: <Receipt size={40} color="white" />, title: "Data Analysis", slug: "data-analysis" },
  ];

  const visibleServices = showAll ? services : services.slice(0, initialVisibleCount);

  return (
    <section className="py-16 md:py-24 bg-teal-50">
      <div className="container mx-auto px-4">
        {/* Your title and description section from the original code */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {visibleServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              slug={service.slug}
            />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-white font-medium rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#17918a",
                color: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};