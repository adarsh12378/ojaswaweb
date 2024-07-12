import React, { useState } from 'react';
import axios from 'axios';

const Collaboration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sponsorshipType: '',
    sponsorshipLevel: '',
    contactNumber: '',
    Feedback: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for name to contain only alphabets
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name must contain only alphabets',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }));
    }

    // // Validation for email to not contain numbers
    // if (name === 'email' && /\d/.test(value)) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     email: 'Email must not contain numbers',
    //   }));
    // } else {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     email: '',
    //   }));
    // }

    // Validation for contactNumber to contain only numbers
    if (name === 'contactNumber' && isNaN(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactNumber: 'Contact Number must be a number',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactNumber: '',
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.name || errors.email || errors.contactNumber) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('https://backendojaswa-2.onrender.com/api/Collaboration', formData);
      console.log('Form data submitted:', response.data);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        sponsorshipType: '',
        sponsorshipLevel: '',
        contactNumber: '',
        Feedback: '',
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form data', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-10 mb-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transform transition-all hover:scale-105"
      >
        {isSubmitted && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent!
          </div>
        )}
        <h2 className="text-3xl font-bold mb-6 text-center font-serif animate-pulse">Sponsorship Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'}`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'}`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="sponsorshipType">
            Sponsorship Type
          </label>
          <div className="relative">
            <select
              id="sponsorshipType"
              name="sponsorshipType"
              value={formData.sponsorshipType}
              onChange={handleChange}
              className="max-w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select a Type</option>
              <option value="Educational Sponsor">Educational Sponsor</option>
              <option value="Food Sponsor">Food Sponsor</option>
              <option value="Cafe Sponsor">Cafe Sponsor</option>
              <option value="Gym Sponsor">Gym Sponsor</option>
              <option value="Startup Sponsor">Startup Sponsor</option>
              <option value="Merchandise Sponsor">Merchandise Sponsor</option>
              <option value="Book/Gift Sponsor">Book/Gift Sponsor</option>
              <option value="Any Other Sponsor">Any Other Sponsor</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="sponsorshipLevel">
            Sponsorship Amount
          </label>
          <input
            type="text"
            id="sponsorshipLevel"
            name="sponsorshipLevel"
            value={formData.sponsorshipLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.contactNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'}`}
            required
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="feedback">
            Tell About Yourself
          </label>
          <textarea
            id="feedback"
            name="Feedback"
            value={formData.Feedback}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transform transition-transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Collaboration;
