"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { productsData } from "../data/products"

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  
  useEffect(() => {
    // Filter featured products
    const featured = productsData.filter((product) => product.featured).slice(0, 4)
    setFeaturedProducts(featured)
  }, [])
  
  return (
    <section className="section max-w-[1440px] mx-auto bg-brown-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800">Featured Equipment</h2>
          <p className="mt-4 text-lg text-brown-600 max-w-3xl mx-auto">
            Discover our most popular and high-quality film equipment available for rent
          </p>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  to={`/products/${product.id}`}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="btn bg-white text-brown-800 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">View Details</span>
                </Link>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brown-800">{product.name}</h3>
                    <p className="text-brown-600">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-brown-800">${product.price}/day</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-brown-700 font-medium hover:text-brown-900 transition-colors"
          >
            View All Equipment
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts