"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import FeaturedProducts from "../components/FeaturedProducts"
import CategorySection from "../components/CategorySection"
import Testimonials from "../components/Testimonials"
import ContactForm from "../components/ContactForm"
import { FiAward, FiCamera, FiClock, FiTruck } from "react-icons/fi"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiCamera className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Professional Equipment</h3>
              <p className="text-brown-600">
                Top-of-the-line film equipment from industry-leading manufacturers, meticulously maintained.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiAward className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Expert Support</h3>
              <p className="text-brown-600">
                Our team of experienced technicians provides comprehensive support for all your production needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiTruck className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Delivery & Pickup</h3>
              <p className="text-brown-600">
                Convenient delivery and pickup options to fit your production schedule and location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiClock className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Flexible Rental Periods</h3>
              <p className="text-brown-600">
                Daily, weekly, and monthly rental options to accommodate projects of any duration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      <CategorySection />

      {/* About Section */}
      <section className="py-20 bg-brown-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/assets/crew.jpg" alt="Film crew on set" className="rounded-lg shadow-xl w-full h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-6">
                Empowering Filmmakers Since 2005
              </h2>
              <p className="text-lg text-brown-700 mb-6">
                CinemaGear Rentals has been providing top-quality film equipment to productions of all sizes for over 15
                years. Our mission is to empower filmmakers with the tools they need to bring their creative visions to
                life.
              </p>
              <p className="text-lg text-brown-700 mb-8">
                From indie shorts to feature films, commercials to music videos, our extensive inventory and
                knowledgeable staff ensure that you have access to the best equipment and support for your project.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-brown-700">15+</span>
                  </div>
                  <span className="text-brown-700">Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-brown-700">500+</span>
                  </div>
                  <span className="text-brown-700">Productions Served</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-brown-700">1000+</span>
                  </div>
                  <span className="text-brown-700">Equipment Items</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-brown-700">24/7</span>
                  </div>
                  <span className="text-brown-700">Technical Support</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary inline-block">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-brown-600 max-w-3xl mx-auto">
              Contact us today to discuss your equipment needs and get a personalized quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203615917!2d-118.34034492357152!3d34.0901349211481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf20e4c82873%3A0x14015754d926dadb!2sParamount%20Pictures!5e0!3m2!1sen!2sus!4v1659896254897!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-brown-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-brown-800 mb-4">Los Angeles Office</h3>
                  <p className="text-brown-700 mb-2">123 Film Studio Street</p>
                  <p className="text-brown-700 mb-2">Hollywood, CA 90028</p>
                  <p className="text-brown-700 mb-2">Phone: (555) 123-4567</p>
                  <p className="text-brown-700">Email: info@cinemagear.com</p>
                </div>

                <div className="bg-brown-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-brown-800 mb-4">Business Hours</h3>
                  <p className="text-brown-700 mb-2">Monday - Friday: 8am - 6pm</p>
                  <p className="text-brown-700 mb-2">Saturday: 10am - 4pm</p>
                  <p className="text-brown-700 mb-2">Sunday: Closed</p>
                  <p className="text-brown-700">After-hours support available</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
