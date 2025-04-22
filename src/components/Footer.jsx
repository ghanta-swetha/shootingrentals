import { Link } from "react-router-dom"
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube, FiMail, FiPhone, FiMapPin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo-white.svg" alt="CinemaGear Rentals" className="h-12" />
              {/* Removed the company name text */}
            </Link>
            <p className="mt-4 text-brown-200">
              Professional film equipment rentals for productions of all sizes. From indie shorts to feature films,
              we've got you covered.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com" className="text-brown-200 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-brown-200 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-brown-200 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://youtube.com" className="text-brown-200 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brown-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brown-200 hover:text-white transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brown-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brown-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-brown-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-brown-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Equipment Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=cameras" className="text-brown-200 hover:text-white transition-colors">
                  Cameras
                </Link>
              </li>
              <li>
                <Link to="/products?category=lenses" className="text-brown-200 hover:text-white transition-colors">
                  Lenses
                </Link>
              </li>
              <li>
                <Link to="/products?category=lighting" className="text-brown-200 hover:text-white transition-colors">
                  Lighting
                </Link>
              </li>
              <li>
                <Link to="/products?category=audio" className="text-brown-200 hover:text-white transition-colors">
                  Audio Equipment
                </Link>
              </li>
              <li>
                <Link to="/products?category=grip" className="text-brown-200 hover:text-white transition-colors">
                  Grip & Rigging
                </Link>
              </li>
              <li>
                <Link to="/products?category=drones" className="text-brown-200 hover:text-white transition-colors">
                  Drones & Stabilizers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-brown-300" />
                <span className="text-brown-200">123 Film Studio Street, Hollywood, CA 90028</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-brown-300" />
                <span className="text-brown-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-brown-300" />
                <span className="text-brown-200">info@cinemagear.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Business Hours</h4>
              <p className="text-brown-200">Monday - Friday: 8am - 6pm</p>
              <p className="text-brown-200">Saturday: 10am - 4pm</p>
              <p className="text-brown-200">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-800 text-center text-brown-300">
          <p>&copy; {new Date().getFullYear()} CinemaGear Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
