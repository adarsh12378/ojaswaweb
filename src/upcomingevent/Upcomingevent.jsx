import React from "react";
import { motion } from "framer-motion";
import image1 from './images/Stage 1.png';
import image2 from './images/Stage 2.png';
import image3 from './images/Stage 3.png';
import image4 from './images/prep1.png';
import image5 from './images/prep2.png';
import image6 from './images/prep3.png';
import image7 from './images/prep4.png';
import image8 from './images/prep5.png';
import image9 from './images/prep6.png';
import logo from './images/logo.png'

const UpcomingEventPage = () => {
  const eventDetails = {
    name: "'Spire' The Pinnacle of Power",
    date: "17 October 2024",
    time: "10:00 AM - 8:00 PM",
    location: "Silveria, SGSITS INDORE",
    description:
      "SPIRE is a comprehensive platform that goes beyond identifying individual strengths, promising to create a moment to treasure and a memory to hold. It will take you to a height where you can ascertain your talent and grow your knowledge. Take the challenge, build unbreakable bonds, and unlock your true potential.",
    eventFlow: [
      { time: "Stage 1", activity: "Evaluating participants' task solving abilities, time management, and critical thinking." },
      { time: "Stage 2", activity: "A brainstorming session where presence of mind plays a crucial role in advancement to the next stage." },
      { time: "Stage 3", activity: "The final showdown will culminate in testing monetary control, asset management, and strategic thinking of the participants." },
    ],
    gallery: [image1, image2, image3],
    gallery1: [image4, image9, image6, image7, image8, image5],
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdhuXzRaDWlfOpKPa-UG9CpOrhEmzEI3rWDNrr5bh7V5jQK9g/viewform" // Replace with your Google Form link
  };

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <motion.h1
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, duration: 1 }}
        className="text-center text-4xl sm:text-6xl font-extrabold shadow-lg bg-opacity-70 p-4 sm:p-6 rounded-lg font-serif text-brown-600"
      >
        {eventDetails.name}
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 sm:mt-8 bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-2xl"
      >
        <p className="text-gray-700 text-lg sm:text-xl font-serif">
          <span className="font-bold">📅 Date:</span> {eventDetails.date}
        </p>
        <p className="text-gray-700 text-lg sm:text-xl font-serif">
          <span className="font-bold">🕒 Time:</span> {eventDetails.time}
        </p>
        <p className="text-gray-700 text-lg sm:text-xl font-serif">
          <span className="font-bold">📍 Location:</span> {eventDetails.location}
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="mt-4 sm:mt-6 text-gray-900 text-lg sm:text-2xl leading-relaxed bg-white bg-opacity-80 p-4 sm:p-6 rounded-lg font-serif"
      >
        {eventDetails.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 sm:mt-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center font-serif text-brown-600">Event Flow</h2>

        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6">
          {eventDetails.eventFlow.map((item, index) => (
            <motion.div
  key={index}
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: index * 0.3, duration: 0.5 }}
  className="flex-1 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center relative"
  style={{
    backgroundImage: `url(${eventDetails.gallery[index % eventDetails.gallery.length]})`,
    backgroundSize: "cover",            // Ensures the image covers the entire area
    backgroundPosition: "center",       // Centers the background image
    backgroundRepeat: "no-repeat",      // Prevents repeating of the background image
    objectFit: "cover",                 // Ensures the image maintains its aspect ratio while filling the container
    minHeight: "200px",                 // Reduced height for mobile, adjust if necessary
    height: "300px",                    // Consistent height for stages on larger screens
    borderRadius: "10px",               // Keeps rounded corners
  }}
>
  {/* Dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
  <div className="relative z-10 p-2 sm:p-4">
    <p className="text-lg sm:text-xl font-bold text-white font-serif">{item.time}</p>
    <p className="text-sm sm:text-lg text-white mt-2 font-serif">{item.activity}</p>
  </div>
</motion.div>

          ))}
        </div>
      </motion.div>

      <div className="mt-8 sm:mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center font-serif text-brown-600">Pre-Event Activities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {eventDetails.gallery1.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-2 sm:p-4 rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-32 sm:h-48 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 sm:mt-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-brown-600 font-serif">Register for the Event</h2>

        <motion.a
          href={eventDetails.googleFormLink}
          target="_blank" // Open in a new tab
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-[#C79C7B] via-[#D3B89E] to-[#8B6E4D] text-white rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300 font-serif"
        >
          Register Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default UpcomingEventPage;
