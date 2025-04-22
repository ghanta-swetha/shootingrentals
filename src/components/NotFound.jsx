import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-brown-800 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-brown-600 max-w-lg mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="inline-flex items-center btn btn-primary">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
