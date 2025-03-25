"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  FileText,
  BarChart4,
  Shield,
  Users,
  CreditCard,
  ClipboardCheck,
  Stethoscope,
  HeartPulse,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  const timeoutRef = useRef(null)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const solutions = [
    {
      icon: <FileText className="h-5 w-5 text-teal-600" />,
      title: "Medical Coding",
      description: "Accurate coding for all specialties",
      link: "/solutions/medical-coding",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-teal-600" />,
      title: "Claims Processing",
      description: "Efficient claims submission and follow-up",
      link: "/solutions/claims-processing",
    },
    {
      icon: <CreditCard className="h-5 w-5 text-teal-600" />,
      title: "Payment Posting",
      description: "Accurate payment reconciliation",
      link: "/solutions/payment-posting",
    },
    {
      icon: <BarChart4 className="h-5 w-5 text-teal-600" />,
      title: "Revenue Analysis",
      description: "Detailed financial reporting",
      link: "/solutions/revenue-analysis",
    },
    {
      icon: <Shield className="h-5 w-5 text-teal-600" />,
      title: "Compliance Services",
      description: "Stay compliant with regulations",
      link: "/solutions/compliance-services",
    },
    {
      icon: <Users className="h-5 w-5 text-teal-600" />,
      title: "Credentialing",
      description: "Provider enrollment services",
      link: "/solutions/credentialing",
    },
    {
      icon: <Stethoscope className="h-5 w-5 text-teal-600" />,
      title: "Telehealth Billing",
      description: "Specialized remote care billing",
      link: "/solutions/telehealth-billing",
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-teal-600" />,
      title: "Specialty Billing",
      description: "Tailored for specialty practices",
      link: "/solutions/specialty-billing",
    },
  ]

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSolutionsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle mouse enter with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsSolutionsOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Hide/show navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Set a threshold to determine if we should hide the navbar
      // This helps prevent the navbar from hiding when just slightly scrolling down
      const isScrollingDown = prevScrollPos < currentScrollPos && currentScrollPos > 50

      setVisible(!isScrollingDown)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -100,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/utopia-logo.png"
                alt="Utopia Medical Billing Logo"
                width={150}
                height={40}
                className="h-16 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="px-2"
            >
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative py-2 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="px-2"
            >
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative py-2 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            {/* Solutions Dropdown */}
            <motion.div
              className="relative px-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                ref={buttonRef}
                className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative py-2 group"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions
                <motion.span animate={{ rotate: isSolutionsOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-[600px] max-w-[90vw] bg-white rounded-lg shadow-lg border border-gray-200 z-[1000]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={solution.link}
                            className="flex items-start p-3 rounded-lg hover:bg-teal-50 transition-colors"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="mr-3 mt-0.5 bg-teal-100 p-2 rounded-full flex-shrink-0">
                              {solution.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{solution.title}</div>
                              <div className="text-sm text-gray-500">{solution.description}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-teal-50 p-3 rounded-b-lg border-t border-gray-100">
                      <Link
                        href="/solutions"
                        className="text-teal-600 font-medium hover:underline flex items-center justify-center"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        View All Solutions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="px-2"
            >
              <Link
                href="/services"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative py-2 group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="px-2"
            >
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 relative py-2 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="flex items-center gap-2 rounded-full bg-teal hover:bg-teal-700 text-white">
                <Phone size={16} className="text-white" />
                <a href="tel:+923186264059">Call Us</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <motion.div
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-teal focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/"
                className="block text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                >
                  <span>Solutions</span>
                  <motion.span animate={{ rotate: isSolutionsOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-4 w-4 text-teal" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div
                      className="pl-4 mt-2 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 50 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={solution.link}
                            className="flex items-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="mr-3 bg-teal-100 p-1.5 rounded-full">{solution.icon}</div>
                            <span>{solution.title}</span>
                          </Link>
                        </motion.div>
                      ))}
                      <Link
                        href="/solutions"
                        className="block text-teal-600 font-medium py-2 mt-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View All Solutions
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/services"
                className="block text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-teal-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="flex items-center gap-2 w-full justify-center rounded-full mt-4 bg-teal hover:bg-teal-700 text-white">
                  <Phone size={16} className="text-white" />
                  <a href="tel:+923186264059">Call Us</a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

