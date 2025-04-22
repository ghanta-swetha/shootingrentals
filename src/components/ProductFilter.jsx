"use client"

import { useState } from "react"
import { FiFilter, FiX } from "react-icons/fi"

const ProductFilter = ({ categories, onFilterChange, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilter = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryChange = (category) => {
    onFilterChange("category", category)
  }

  const handleAvailabilityChange = (e) => {
    onFilterChange("availability", e.target.checked)
  }

  const handleSortChange = (e) => {
    onFilterChange("sort", e.target.value)
  }

  const clearFilters = () => {
    onFilterChange("clear")
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif font-bold text-brown-800">Equipment</h2>
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 text-brown-700 hover:text-brown-900 md:hidden"
        >
          <FiFilter />
          <span>Filter</span>
        </button>
      </div>

      <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-brown-800">Filters</h3>
            <button onClick={clearFilters} className="text-sm text-brown-600 hover:text-brown-800">
              Clear all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={activeFilters.category === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                      className="rounded text-brown-700 focus:ring-brown-500"
                    />
                    <span className="ml-2 text-brown-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Availability</h4>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.availability}
                  onChange={handleAvailabilityChange}
                  className="rounded text-brown-700 focus:ring-brown-500"
                />
                <span className="ml-2 text-brown-700">Show only available</span>
              </label>
            </div>

            <div>
              <h4 className="font-medium mb-2">Sort By</h4>
              <select value={activeFilters.sort} onChange={handleSortChange} className="input">
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {Object.keys(activeFilters).some((key) => activeFilters[key] !== "" && activeFilters[key] !== false) && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {activeFilters.category && (
                  <div className="bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm flex items-center">
                    Category: {categories.find((c) => c.id === activeFilters.category)?.name}
                    <button
                      onClick={() => handleCategoryChange("")}
                      className="ml-2 text-brown-600 hover:text-brown-800"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                )}
                {activeFilters.availability && (
                  <div className="bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm flex items-center">
                    Available Only
                    <button
                      onClick={() => handleAvailabilityChange({ target: { checked: false } })}
                      className="ml-2 text-brown-600 hover:text-brown-800"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
