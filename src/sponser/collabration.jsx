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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/Collaboration', formData);
      console.log('Form data submitted:', response.data);
      setFormData({
        name: '',
        email: '',
        company: '',
        sponsorshipType: '',
        sponsorshipLevel: '',
        contactNumber: '',
        Feedback: '',
      });
    } catch (error) {
      console.error('Error submitting form data', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-10 mb-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transform transition-all hover:scale-105"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sponsorship Form</h2>
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
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
            Sponsorship Level
          </label>
          <select
            id="sponsorshipLevel"
            name="sponsorshipLevel"
            value={formData.sponsorshipLevel}
            onChange={handleChange}
            className="max-w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select a level</option>
            <option value="100k to 50k">100k to 50k</option>
            <option value="50k to 30k">50k to 30k</option>
            <option value="30k to 10k">30k to 10k</option>
          </select>
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="feedback">
            Feedback
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Collaboration;
