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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server
    axios.post('http://localhost:8000/api/contact', formData)
      .then(response => {
        console.log('Form Data Submitted:', response.data);
        // Reset form
        setFormData({
          name: '',
          email: '',
          contact: '',
          subject: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
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
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8 text-md font-semibold">
            We're here to help you with any questions or concerns.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
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
              <label className="block text-gray-700">Email</label>
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
              <label className="block text-gray-700">Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
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
              <label className="block text-gray-700">Message</label>
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
            >
              Send Message
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
