"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const categories = [
  {
    id: "cameras",
    name: "Cameras",
    image: "/assets/camera.jpg",
    description: "Professional cinema cameras from ARRI, RED, Sony, and more",
  },
  {
    id: "lenses",
    name: "Lenses",
    image: "/assets/lenses.jpg",
    description: "Prime and zoom lenses from top manufacturers",
  },
  {
    id: "lighting",
    name: "Lighting",
    image: "/assets/lightings.jpg",
    description: "LED panels, HMIs, tungsten lights, and modifiers",
  },
  {
    id: "audio",
    name: "Audio",
    image: "/assets/audio.jpg",
    description: "Microphones, recorders, mixers, and wireless systems",
  },
  {
    id: "grip",
    name: "Grip & Rigging",
    image: "/assets/grips.jpg",
    description: "Dollies, jibs, tripods, and support systems",
  },
  {
    id: "drones",
    name: "Drones & Stabilizers",
    image: "/assets/drones.jpg",
    description: "Gimbals, drones, and camera stabilization systems",
  },
]

const CategorySection = () => {
  return (
    <section className="section max-w-[1440px] mx-auto">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800">Equipment Categories</h2>
          <p className="mt-4 text-lg text-brown-600 max-w-3xl mx-auto">
            Browse our extensive collection of professional film equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg h-64"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white">{category.name}</h3>
                <p className="text-brown-100 mt-2">{category.description}</p>
                <Link
                  to={`/products?category=${category.id}`}
                  className="mt-4 inline-block text-white font-medium hover:underline"
                >
                  Browse {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
