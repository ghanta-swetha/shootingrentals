"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Independent Filmmaker",
    image: "/images/testimonial-1.jpg",
    quote:
      "CinemaGear has been my go-to equipment rental service for the past three years. Their inventory is extensive, the gear is always in pristine condition, and their team is incredibly knowledgeable and helpful.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Director of Photography",
    image: "/images/testimonial-2.jpg",
    quote:
      "As a DP working on commercial projects, I need reliable equipment that delivers consistent results. CinemaGear has never let me down. Their technical support is also outstanding when I need advice on specific setups.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Production Manager",
    image: "/images/testimonial-3.jpg",
    quote:
      "Managing equipment for large productions can be a logistical nightmare, but CinemaGear makes it easy. Their online inventory system, flexible rental periods, and delivery options save us valuable time and resources.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-brown-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-brown-200 max-w-3xl mx-auto">
            Hear from filmmakers and production professionals who trust us with their equipment needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-brown-700 rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl italic text-brown-100">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-serif font-semibold text-xl">{testimonials[currentIndex].name}</p>
                    <p className="text-brown-300">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-brown-600 hover:bg-brown-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-brown-600 hover:bg-brown-500 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
