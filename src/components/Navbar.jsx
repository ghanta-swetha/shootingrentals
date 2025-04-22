"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Equipment", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]
  
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="CinemaGear Rentals" className="h-12" />
          {/* Removed the company name text */}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-brown-700 border-b-2 border-brown-700"
                  : "text-brown-600 hover:text-brown-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brown-700 text-white px-4 py-2 rounded-md border-2 border-brown-700 hover:bg-brown-800 hover:border-brown-800 transition-colors">
            Rent Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-brown-800 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 font-medium ${
                  location.pathname === link.path
                    ? "text-brown-700 border-l-4 border-brown-700 pl-2"
                    : "text-brown-600 hover:text-brown-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brown-700 text-white py-2 px-4 rounded-md border-2 border-brown-700 hover:bg-brown-800 hover:border-brown-800 transition-colors text-center">
              Rent Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar