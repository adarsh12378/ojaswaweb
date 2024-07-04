import React from 'react';
import myImage from '../assets/ojaswa5.jpg';
import mentor1 from '../assets/mentor2.jpg';
import mentor2 from '../assets/mentor1.png';
import mentor3 from '../assets/mentor3.png';
import mentor4 from '../assets/mentor4.jpg';

const mentors = [
  { 
    name: 'Professor R. K. Saxena', 
    image: mentor1,
    description: 'Professor R. K. Saxena, Director of SGSITS Indore, holds a Ph.D. in Electrical Engineering and has been a key figure at the institution since 1986. Leading the Electrical Engineering Department, he excels in Power Electronics, Digital Controls, and Power Quality. He has published extensively and holds patents in solar energy-driven motor control, enhancing SGSITS academic and research standards.'
  },
  { 
    name: 'Dr. Anuradha Purohit', 
    image: mentor2,
    description: 'Dr. Anuradha Purohit, a Professor in the Department of Computer Engineering and mentor at Club Ojaswa, excels in Soft Computing, Machine Learning, and Software Engineering. Since 2007, she has guided numerous projects, published widely, and developed key software for examination management.'
  },
  { 
    name: 'Dr. R. C. Gurjar', 
    image: mentor3,
    description: 'Dr. R. C. Gurjar, an Associate Professor at SGSITS Indore since 2007 and mentor at Club Ojaswa . With expertise in RFICs, VCO, PLL, and FPGA-Based Digital Design, he has led numerous research projects and published extensively in esteemed journals and conferences since 2011. Dr. Gurjar is committed to advancing knowledge in his field through rigorous research and mentoring students in their academic pursuits.'
  },
  { 
    name: 'Dr. Urmila Raghuvanshi', 
    image: mentor4,
    description: 'Dr. Urmila Raghuvanshi, an Assistant Professor with a Ph.D. in Computational Chemistry and mentor at club Ojaswa, specializes in Computer-Aided Drug Design and Molecular Docking, focusing on developing novel HIV-1 inhibitors.'
  },
];

const MentorCard = ({ name, image, description }) => {
  return (
    <div className="mentor-card bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in-up">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm font-serif">{description}</p>
      </div>
    </div>
  );
};


const AboutPage = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
        <div className="about-content animate-fade-in-left">
          <h2 className="text-4xl font-bold mb-4 font-serif">About Club Ojaswa</h2>
          <p className="text-xl mt-6 font-serif">
            Established on July 14, 2014, Club Ojaswa stands as the official personality development club of our college, dedicated to the motto "Enhancing Personality, Nurturing Humanity." We aim to empower individuals to unlock their potential and become agents of positive change, fostering a community of compassionate and successful leaders. Our diverse activities include intellectually stimulating events like the Battle of Intellects and Espionage, along with impactful community engagements such as orphanage visits and scholarship aptitude tests. We have also pioneered signature events like TEDxSGSITS and GS-MUN, which create dynamic platforms for knowledge exchange and personal growth. Additionally, our seminars keep us at the forefront of educational advancements, equipping students with essential skills for future success. At Club Ojaswa, we believe in the holistic development of our members, preparing them to excel both personally and professionally.
          </p>
        </div>
        <div className="about-image animate-fade-in-right">
          <img src={myImage} alt="About Club Ojaswa" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mentors-section p-12 ">
        <h2 className="text-4xl font-bold mb-8 text-center font-serif ">Our Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} name={mentor.name} image={mentor.image} description={mentor.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
