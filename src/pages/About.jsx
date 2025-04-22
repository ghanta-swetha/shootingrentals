"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiUsers, FiTruck, FiSettings, FiAward } from "react-icons/fi"

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img src="/assets/crewbanner.jpg" alt="Film crew on set" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-brown-900/90 to-brown-900/60"></div>
          </div>

          <div className="relative py-20 px-6 md:px-12 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">About CinemaGear Rentals</h1>
              <p className="text-xl text-brown-100 mb-8">
                Empowering filmmakers with professional equipment and exceptional service since 2005
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn btn-primary">
                  Browse Equipment
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-brown-900"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-6">Our Story</h2>
            <p className="text-lg text-brown-700 mb-6">
              CinemaGear Rentals was founded in 2005 by a group of passionate filmmakers who recognized the need for
              accessible, high-quality equipment in the independent film community. What began as a small collection of
              cameras and lenses has grown into one of the most comprehensive film equipment rental houses in Los
              Angeles.
            </p>
            <p className="text-lg text-brown-700 mb-6">
              Our founders' vision was simple: create a rental house that treats every project, regardless of budget or
              scale, with the same level of care and attention. This philosophy continues to guide our business today as
              we serve productions ranging from student films to major studio features.
            </p>
            <p className="text-lg text-brown-700">
              Over the years, we've built strong relationships with manufacturers, allowing us to continually update our
              inventory with the latest technology. We've also assembled a team of experienced technicians and
              production professionals who understand the unique challenges of filmmaking and are dedicated to helping
              our clients succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/about-story.jpg"
              alt="CinemaGear founders"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-brown-50 p-6 rounded-lg shadow-lg">
              <p className="text-brown-800 font-serif italic">
                "We started CinemaGear because we believe that great equipment should be accessible to all filmmakers,
                regardless of budget."
              </p>
              <p className="mt-2 text-brown-700 font-medium">— Michael Chen, Founder</p>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">Our Values</h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiUsers className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Customer First</h3>
              <p className="text-brown-700">
                We prioritize our clients' needs and go above and beyond to ensure their success. Our team is always
                available to provide support and guidance throughout the rental process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiAward className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Quality Excellence</h3>
              <p className="text-brown-700">
                We maintain the highest standards for our equipment, ensuring that every item is thoroughly tested,
                cleaned, and calibrated before each rental. We only offer gear that we would use ourselves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiTruck className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Reliability</h3>
              <p className="text-brown-700">
                We understand that production schedules are tight and delays can be costly. That's why we ensure on-time
                delivery and pickup, and maintain backup equipment for critical rentals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-brown-50 rounded-lg p-6"
            >
              <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center mb-4">
                <FiSettings className="w-8 h-8 text-brown-700" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Innovation</h3>
              <p className="text-brown-700">
                We continuously update our inventory with the latest technology and stay informed about industry trends
                to provide our clients with cutting-edge equipment options.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-brown-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="/images/team-1.jpg" alt="Michael Chen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-brown-800">Michael Chen</h3>
                <p className="text-brown-600 mb-4">Founder & CEO</p>
                <p className="text-brown-700">
                  With over 20 years of experience as a cinematographer, Michael founded CinemaGear to make professional
                  equipment accessible to filmmakers of all levels.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="/images/team-2.jpg" alt="Sarah Johnson" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-brown-800">Sarah Johnson</h3>
                <p className="text-brown-600 mb-4">Operations Director</p>
                <p className="text-brown-700">
                  Sarah oversees all rental operations, ensuring smooth logistics and exceptional customer service for
                  every client.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img src="/images/team-3.jpg" alt="David Rodriguez" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-brown-800">David Rodriguez</h3>
                <p className="text-brown-600 mb-4">Technical Director</p>
                <p className="text-brown-700">
                  A former camera technician for major studios, David leads our technical team and ensures all equipment
                  meets our rigorous quality standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-brown-800 text-white rounded-xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">CinemaGear by the Numbers</h2>
            <p className="text-lg text-brown-200 max-w-3xl mx-auto">Our impact on the filmmaking community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-brown-100 mb-2">15+</div>
              <p className="text-xl text-brown-300">Years in Business</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-brown-100 mb-2">1,000+</div>
              <p className="text-xl text-brown-300">Equipment Items</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-brown-100 mb-2">5,000+</div>
              <p className="text-xl text-brown-300">Projects Supported</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-bold text-brown-100 mb-2">98%</div>
              <p className="text-xl text-brown-300">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-brown-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your equipment needs and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn btn-primary">
              Browse Equipment
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
