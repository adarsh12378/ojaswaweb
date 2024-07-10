
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-blue-light-blue-darkBlue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-center md:justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg mb-2 font-serif">Contact Details</h4>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:club.ojaswa@gmail.com" target='_blank' className="font-serif hover:text-white transition duration-300">club.ojaswa@gmail.com</a>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span className='font-serif'>Aru Agrawal :</span>
            <span>+91 79996 08275</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <span className='font-serif'>Nitesh Gurjar :</span>
            <span>+91 81099 03959</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <a href='https://www.sgsits.ac.in/' target='_blank'> 
            <span className='font-serif'>Shri Govindram Seksaria Institute of Technology and Science, Indore, Madhya Pradesh, India</span>
            </a>
          </div>
        </div>
        
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg mb-2 font-serif">Useful Links</h4>
          <ul className="text-md">
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-white transition duration-300 font-serif">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-300 hover:text-white transition duration-300 font-serif">About</NavLink>
            </li>
            <li>
              <NavLink to="/team" className="text-gray-300 hover:text-white transition duration-300 font-serif">Team</NavLink>
            </li>
            <li>
              <NavLink to="/sponsor" className="text-gray-300 hover:text-white transition duration-300 font-serif">Sponsor</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-300 hover:text-white transition duration-300 font-serif">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg mb-2 font-serif">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/club.ojaswa.sgsits/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-400 transition duration-300" style={{ color: '#3b5998' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-400 transition duration-300" style={{ color: '#1da1f2' }} />
            </a>
            <a href="https://www.instagram.com/clubojaswa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-400 transition duration-300" style={{ color: '#e1306c' }} />
            </a>
            <a href="https://www.linkedin.com/company/ojaswa-enhancing-personality-nurturing-humanity/mycompany/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-400 transition duration-300" style={{ color: '#0077b5' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
