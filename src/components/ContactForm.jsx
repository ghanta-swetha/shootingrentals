"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Form field configuration for better organization
const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your name",
    required: true,
    colSpan: "col-span-1"
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Your email",
    required: true,
    colSpan: "col-span-1"
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Your phone number",
    required: false,
    colSpan: "col-span-1"
  },
  {
    id: "projectType",
    label: "Project Type",
    type: "select",
    placeholder: "Select project type",
    required: false,
    colSpan: "col-span-1",
    options: [
      { value: "", label: "Select project type" },
      { value: "feature", label: "Feature Film" },
      { value: "short", label: "Short Film" },
      { value: "commercial", label: "Commercial" },
      { value: "music", label: "Music Video" },
      { value: "documentary", label: "Documentary" },
      { value: "other", label: "Other" }
    ]
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us about your project and equipment needs",
    required: true,
    colSpan: "col-span-2",
    rows: 5
  }
]

const ContactForm = () => {
  // Initialize form state from field config
  const initialFormState = formFields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    errors: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors when user types
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: null
        }
      }));
    }
  }

  const validateForm = () => {
    const errors = {};
    
    // Validate required fields
    formFields.forEach(field => {
      if (field.required && !formData[field.id]) {
        errors[field.id] = `${field.label} is required`;
      }
    });
    
    // Email validation
    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors
      }));
      return;
    }
    
    setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }));

    // Simulate API call
    setTimeout(() => {
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        errors: {}
      });
      
      // Reset form data
      setFormData(initialFormState);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  }

  // Render form field based on type
  const renderField = (field) => {
    const { id, label, type, placeholder, required, colSpan, options, rows } = field;
    const error = formState.errors[id];
    
    return (
      <div key={id} className={`${colSpan} mb-4`}>
        <label htmlFor={id} className="block text-sm font-medium text-brown-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        {type === "select" ? (
          <select
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500`}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleChange}
            rows={rows}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500`}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={formData[id]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-brown-500`}
          />
        )}
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-brown-700 rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-serif font-bold text-brown-800 mb-6">Get in Touch</h3>

      {formState.isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="font-medium">Thank you for your message!</p>
          </div>
          <p className="mt-1 ml-7">We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {formFields.map(renderField)}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full bg-brown-700 text-white hover:bg-brown-800 font-medium py-2.5 px-4 rounded-md transition duration-300 flex justify-center items-center"
            >
              {formState.isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      )}
    </div>
  )
}

export default ContactForm