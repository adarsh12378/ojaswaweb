import React from 'react';
import SliderComponent from '../slider/Slider';
import Gallery from '../gallery/Gallery.jsx';
const Home = () => {
  return (
    <div className='min-h-screen'>
      <SliderComponent  />
      <div className="text-center mt-10 mx-4 p-6 rounded-xl shadow-lg">
  <h1 className="text-5xl font-bold mb-6 animate-fade-in-down text-gray-800">Our Vision</h1>
  <p className="text-2xl mb-6 animate-fade-in-up bg-white p-6 rounded-lg shadow-md text-gray-700 font-Roboto">
  At Club Ojaswa, we envision a world where everyone is inspired to achieve their highest potential and make meaningful contributions to society. Our mission is to lead in the realm of personality development, equipping students with the essential skills and mindset needed for future success. Rooted in the belief that essential soft skills are key to success, we strive to shape a generation of leaders who excel in their careers and contribute to society. Together, we aim to break barriers, overcome obstacles, and create a future brimming with endless possibilities.
  </p>
  <h1 className="text-5xl font-bold mb-6 animate-fade-in-down text-gray-800">Our Moto</h1>
  <p className="text-2xl animate-fade-in-up delay-100 bg-white p-6 rounded-lg shadow-md text-gray-700 font-Roboto ">
  At Club Ojaswa, our motto, "Enhancing personality, Nurturing humanity," embodies our commitment to fostering both personal and communal growth. We strive to empower individuals to unlock their potential, encouraging them to become agents of positive change. As we build a community where personal achievements contribute to the greater good, igniting a passion for self-improvement and transformation, we aim to cultivate a community of individuals who are driven to make a meaningful impact in their communities and beyond.
</p>
</div>
<Gallery/>
    </div>
  );
};

export default Home;
