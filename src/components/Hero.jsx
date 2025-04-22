"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/bannerimage.jpg" alt="Film set" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 to-brown-900/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Professional Film Equipment for Your Vision
          </h1>
          <p className="mt-6 text-xl text-brown-100">
            From indie shorts to feature films, we provide top-quality equipment rentals to bring your creative vision
            to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn btn-primary text-center">
              Browse Equipment
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-brown-900 text-center"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
