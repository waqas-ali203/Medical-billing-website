"use client"

import type React from "react"

import { motion } from "framer-motion"
import { HeartPulse, Brain, Bone, Microscope, Stethoscope, Eye, TreesIcon as Lungs, Baby } from "lucide-react"
import Image from "next/image"

interface SpecialtyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  index: number
}

function SpecialtyCard({ icon, title, description, image, index }: SpecialtyCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-pink-100 p-2 rounded-full">
            <div className="text-pink-600">{icon}</div>
          </div>
          <h3 className="font-bold text-gray-900">{title} Billing</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default function SpecialtyServices() {
  const specialties = [
    {
      icon: <HeartPulse size={24} />,
      title: "Cardiology",
      description:
        "Specialized billing for cardiac catheterizations, echocardiograms, stress tests, and other cardiology procedures.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Brain size={24} />,
      title: "Neurology",
      description:
        "Expert billing for EEGs, EMGs, nerve conduction studies, and other neurological diagnostic procedures.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Bone size={24} />,
      title: "Orthopedics",
      description:
        "Comprehensive billing for fracture care, joint injections, arthroscopies, and other orthopedic procedures.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Microscope size={24} />,
      title: "Pathology",
      description: "Accurate billing for laboratory tests, tissue examinations, and other pathology services.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Internal Medicine",
      description:
        "Specialized billing for chronic disease management, preventive care, and complex medical decision-making.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Eye size={24} />,
      title: "Ophthalmology",
      description:
        "Expert billing for eye exams, diagnostic tests, surgical procedures, and other ophthalmology services.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Lungs size={24} />,
      title: "Pulmonology",
      description:
        "Comprehensive billing for pulmonary function tests, bronchoscopies, and other respiratory procedures.",
      image: "https://images.unsplash.com/photo-1584555613483-3b107aa8ba42?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <Baby size={24} />,
      title: "Pediatrics",
      description:
        "Specialized billing for well-child visits, immunizations, developmental screenings, and pediatric procedures.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
    },
  ]

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
            className="inline-block px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4"
          >
            Our Specialties
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Billing Services</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer tailored billing solutions for a wide range of medical specialties, each with its own unique coding
            and documentation requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              icon={specialty.icon}
              title={specialty.title}
              description={specialty.description}
              image={specialty.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

