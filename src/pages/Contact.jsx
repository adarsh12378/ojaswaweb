import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import image from "../assets/logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contact') {
      if (isNaN(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contact: 'Contact must be a number',
        }));
      } else if (value.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contact: 'Contact must be 10 digits or less',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          contact: '',
        }));
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.contact) {
      return;
    }

    setIsLoading(true);

    axios.post('https://backendojaswa-2.onrender.com/api/contact', formData)
      .then(response => {
        console.log('Form Data Submitted:', response.data);

        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          subject: '',
          message: '',
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="order-2 md:order-1">
          {isSubmitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Message Sent!
            </div>
          )}
          <h2 className="text-2xl font-bold mb-6 text-center font-serif">Contact Us</h2>
          <p className="text-center text-gray-700 mb-8 text-md font-semibold">
            We're here to help you with any questions or concerns.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.contact ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                required
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img src={image} alt="Logo" className="w-full h-full object-fit rounded-lg" />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
