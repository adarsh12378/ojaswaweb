import React from 'react';
import { motion } from 'framer-motion';
import { images } from './Sponser';

const SponserGallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className='text-2xl text-center font-bold py-1 mt-2 mb-7 font-serif'>Past Sponsors of Club Ojaswa</div>
      <div className="grid grid-cols-4 grid-rows-3">
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

export default SponserGallery;