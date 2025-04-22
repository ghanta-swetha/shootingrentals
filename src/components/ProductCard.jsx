"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
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
          <span className="btn btn-primary">View Details</span>
        </Link>
        {product.new && (
          <div className="absolute top-4 left-4 bg-brown-700 text-white text-sm font-medium px-2 py-1 rounded">New</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-serif font-semibold text-brown-800">{product.name}</h3>
            <p className="text-brown-600">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-brown-800">${product.price}/day</p>
            {product.available ? (
              <span className="text-sm text-green-600">Available</span>
            ) : (
              <span className="text-sm text-red-600">Unavailable</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
