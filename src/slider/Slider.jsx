// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/ojaswa2.jpg';
import image2 from '../assets/ojaswa3.jpg';
import image3 from "../assets/ojaswa4.jpg";
import image4 from "../assets/ojaswa5.jpg";
import image5 from "../assets/ojaswa6.jpg";




// Import more images as needed

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Transition speed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Autoplay speed (in milliseconds)
    arrows: false,
  };

  const images = [image5, image2 ,image3,image4,image1/* Add more images here */];

  return (
    <div className="h-full w-70vh overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-full w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover h-70% w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
