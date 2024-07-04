import React from 'react';
import { motion } from 'framer-motion';
import { images } from './Gallery';

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className='text-4xl text-center font-bold py-1 mt-2 mb-4 font-serif'>Gallery</div>
        <div>
          <p className="text-xl mb-6 animate-fade-in-up bg-white p-6 rounded-lg shadow-md text-gray-700 font-serif">Welcome to our gallery, where each photograph encapsulates the warmth, joy, and camaraderie that define our club. These images, rich with unforgettable moments, reflect our collective journey, celebrating both significant milestones and everyday triumphs. Experience the treasured memories that illustrate the unique spirit and vibrancy of our community.</p>
        </div>
      <div className="grid grid-cols-3 grid-rows-3">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="col-span-1 row-span-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              alt={`gallery-${index}`}
              className="block object-cover object-center w-full h-full rounded-lg"
              src={src}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;




