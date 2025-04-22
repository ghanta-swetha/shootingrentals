"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import ProductCard from "../components/ProductCard"
import ProductFilter from "../components/ProductFilter"
import { productsData, categories } from "../data/products"

const Products = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryParam = queryParams.get("category")

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeFilters, setActiveFilters] = useState({
    category: categoryParam || "",
    availability: false,
    sort: "name",
  })

  useEffect(() => {
    // Set initial products
    setProducts(productsData)

    // Apply initial filters
    filterProducts(productsData, activeFilters)
  }, [])

  useEffect(() => {
    // Update filtered products when active filters change
    filterProducts(products, activeFilters)
  }, [activeFilters, products])

  const filterProducts = (products, filters) => {
    let filtered = [...products]

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Filter by availability
    if (filters.availability) {
      filtered = filtered.filter((product) => product.available)
    }

    // Sort products
    switch (filters.sort) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => (b.new === a.new ? 0 : b.new ? 1 : -1))
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }

  const handleFilterChange = (type, value) => {
    if (type === "clear") {
      setActiveFilters({
        category: "",
        availability: false,
        sort: "name",
      })
    } else {
      setActiveFilters((prev) => ({
        ...prev,
        [type]: value,
      }))
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-4">Professional Film Equipment</h1>
          <p className="text-lg text-brown-600 max-w-3xl mx-auto">
            Browse our extensive collection of high-quality film equipment available for rent
          </p>
        </motion.div>

        <ProductFilter categories={categories} onFilterChange={handleFilterChange} activeFilters={activeFilters} />

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-brown-800 mb-2">No products found</h3>
            <p className="text-brown-600">Try adjusting your filters or browse all equipment</p>
            <button onClick={() => handleFilterChange("clear")} className="mt-4 btn btn-outline">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
