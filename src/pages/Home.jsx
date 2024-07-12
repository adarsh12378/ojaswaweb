import React from 'react';
import SliderComponent from '../slider/Slider';
import Gallery from '../gallery/Gallery.jsx';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <SliderComponent />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-10 mx-4 p-6 rounded-xl shadow-lg ">
        <div className="p-4 animate-fade-in-down">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 font-serif animate-pulse">Our Vision</h1>
          <p className="text-xl mb-4 bg-white p-4 rounded-lg shadow-md text-gray-700 font-serif">
            At Club Ojaswa, we envision a world where everyone is inspired to achieve their highest potential and make meaningful contributions to society. Our mission is to lead in the realm of personality development, equipping students with the essential skills and mindset needed for future success. Rooted in the belief that essential soft skills are key to success, we strive to shape a generation of leaders who excel in their careers and contribute to society. Together, we aim to break barriers, overcome obstacles,create future brimming with endless possibilities.
          </p>
        </div>
        <div className="p-4 animate-fade-in-up delay-100">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 font-serif animate-pulse">Our Motto</h1>
          <p className="text-xl bg-white p-4 rounded-lg shadow-md text-gray-700 font-serif">
            At Club Ojaswa, our motto, "Enhancing personality, Nurturing humanity," embodies our commitment to fostering both personal and communal growth. We strive to empower individuals to unlock their potential, encouraging them to become agents of positive change. As we build a community where personal achievements contribute to the greater good, igniting a passion for self-improvement and transformation, we aim to cultivate a community of individuals who are driven to make a meaningful impact in their communities and beyond.
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
