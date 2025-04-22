"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FiArrowLeft, FiCalendar, FiCheck, FiHeart, FiShoppingCart } from "react-icons/fi"
import ImageGallery from "../components/ImageGallery"
import { productsData } from "../data/products"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [rentalPeriod, setRentalPeriod] = useState("day")
  const [quantity, setQuantity] = useState(1)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [wishlist, setWishlist] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Find the product by ID
    const foundProduct = productsData.find((p) => p.id === id)

    if (foundProduct) {
      setProduct(foundProduct)

      // Find related products (same category, excluding current product)
      const related = productsData.filter((p) => p.category === foundProduct.category && p.id !== id).slice(0, 3)

      setRelatedProducts(related)
    }

    setLoading(false)
  }, [id])

  const toggleWishlist = () => {
    setWishlist(!wishlist)
  }

  const calculatePrice = () => {
    if (!product) return 0

    let multiplier = 1
    if (rentalPeriod === "week") {
      multiplier = 5 // 5 days price for a week
    } else if (rentalPeriod === "month") {
      multiplier = 15 // 15 days price for a month
    }

    return product.price * multiplier * quantity
  }

  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown-700"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif font-bold text-brown-800 mb-4">Product Not Found</h1>
        <p className="text-lg text-brown-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Browse All Equipment
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-brown-700 hover:text-brown-900">
            <FiArrowLeft className="mr-2" />
            Back to Equipment
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <ImageGallery images={product.images} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="sticky top-24">
              <div className="flex items-center mb-2">
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${product.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {product.available ? "Available" : "Unavailable"}
                </span>
                {product.new && (
                  <span className="ml-2 inline-block px-3 py-1 text-sm font-medium rounded-full bg-brown-100 text-brown-800">
                    New
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-2">{product.name}</h1>

              <p className="text-brown-600 mb-4">
                Category:{" "}
                <Link to={`/products?category=${product.category}`} className="text-brown-700 hover:underline">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Link>
              </p>

              <div className="text-3xl font-bold text-brown-800 mb-6">
                ${product.price}/{rentalPeriod}
              </div>

              <p className="text-lg text-brown-700 mb-8">{product.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label htmlFor="rental-period" className="block text-sm font-medium text-brown-700 mb-1">
                    Rental Period
                  </label>
                  <select
                    id="rental-period"
                    value={rentalPeriod}
                    onChange={(e) => setRentalPeriod(e.target.value)}
                    className="input"
                  >
                    <option value="day">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-brown-700 mb-1">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                    className="input"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="start-date" className="block text-sm font-medium text-brown-700 mb-1">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="start-date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="input pl-10"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brown-500" />
                  </div>
                </div>

                <div>
                  <label htmlFor="end-date" className="block text-sm font-medium text-brown-700 mb-1">
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="end-date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="input pl-10"
                      min={startDate || new Date().toISOString().split("T")[0]}
                    />
                    <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brown-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  className={`btn ${product.available ? "btn-primary" : "bg-gray-300 text-gray-500 cursor-not-allowed"} flex-1 flex items-center justify-center`}
                  disabled={!product.available}
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>

                <button
                  onClick={toggleWishlist}
                  className={`btn btn-outline flex-1 flex items-center justify-center ${wishlist ? "bg-brown-100" : ""}`}
                >
                  <FiHeart className={`mr-2 ${wishlist ? "fill-brown-700" : ""}`} />
                  {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
                </button>
              </div>

              <div className="bg-brown-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-serif font-semibold text-brown-800 mb-4">Rental Summary</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-brown-700">Equipment:</span>
                  <span className="text-brown-800 font-medium">{product.name}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-brown-700">Quantity:</span>
                  <span className="text-brown-800 font-medium">{quantity}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-brown-700">Rental Period:</span>
                  <span className="text-brown-800 font-medium">
                    {rentalPeriod.charAt(0).toUpperCase() + rentalPeriod.slice(1)}
                  </span>
                </div>
                {startDate && endDate && (
                  <div className="flex justify-between mb-2">
                    <span className="text-brown-700">Dates:</span>
                    <span className="text-brown-800 font-medium">
                      {startDate} to {endDate}
                    </span>
                  </div>
                )}
                <div className="border-t border-brown-200 my-4 pt-4 flex justify-between">
                  <span className="text-brown-800 font-medium">Total:</span>
                  <span className="text-brown-800 font-bold">${calculatePrice()}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center text-brown-700">
                  <FiCheck className="mr-2 text-green-600" />
                  Free delivery and pickup in Los Angeles area
                </div>
                <div className="flex items-center text-brown-700">
                  <FiCheck className="mr-2 text-green-600" />
                  Technical support included
                </div>
                <div className="flex items-center text-brown-700">
                  <FiCheck className="mr-2 text-green-600" />
                  Insurance options available
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-4">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="mr-2 mt-1 text-brown-700" />
                  <span className="text-brown-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-4">Specifications</h2>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="text-brown-600 font-medium">
                    {key.charAt(0).toUpperCase() +
                      key
                        .slice(1)
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                    :
                  </div>
                  <div className="text-brown-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-brown-800 mb-4">What's Included</h2>
          <div className="bg-brown-50 rounded-lg p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="mr-2 mt-1 text-brown-700" />
                  <span className="text-brown-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-6">Related Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <Link key={product.id} to={`/products/${product.id}`} className="card group">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {product.new && (
                      <div className="absolute top-4 left-4 bg-brown-700 text-white text-sm font-medium px-2 py-1 rounded">
                        New
                      </div>
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
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
