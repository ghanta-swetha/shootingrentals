"use client"

import { motion } from "framer-motion"
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown-800 mb-4">Contact Us</h1>
          <p className="text-lg text-brown-600 max-w-3xl mx-auto">
            Have questions about our equipment or need a quote for your project? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-brown-50 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-brown-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Our Location</h3>
                    <p className="text-brown-700">123 Film Studio Street</p>
                    <p className="text-brown-700">Hollywood, CA 90028</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-brown-50 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-brown-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Phone</h3>
                    <p className="text-brown-700">Main: (555) 123-4567</p>
                    <p className="text-brown-700">Support: (555) 987-6543</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-brown-50 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiMail className="w-6 h-6 text-brown-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Email</h3>
                    <p className="text-brown-700">info@cinemagear.com</p>
                    <p className="text-brown-700">support@cinemagear.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-brown-50 p-6 rounded-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <FiClock className="w-6 h-6 text-brown-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brown-800 mb-2">Business Hours</h3>
                    <p className="text-brown-700">Monday - Friday: 8am - 6pm</p>
                    <p className="text-brown-700">Saturday: 10am - 4pm</p>
                    <p className="text-brown-700">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-brown-50 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-brown-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-brown-800 mb-1">What is your rental process?</h4>
                  <p className="text-brown-700">
                    Our rental process is simple: browse our inventory, request a quote, confirm your order, and pick up
                    or have your equipment delivered. We'll provide a thorough check-out to ensure you're comfortable
                    with the gear.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-brown-800 mb-1">Do you require insurance?</h4>
                  <p className="text-brown-700">
                    Yes, we require all renters to provide proof of insurance that covers the full replacement value of
                    the equipment being rented. We can recommend insurance providers if needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-brown-800 mb-1">Do you offer delivery?</h4>
                  <p className="text-brown-700">
                    Yes, we offer delivery and pickup services throughout the Los Angeles area. Delivery fees vary based
                    on location and equipment volume.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
