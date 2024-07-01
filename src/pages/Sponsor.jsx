import React from 'react';
import { Link } from 'react-router-dom';
import SponserGallery from '../sponser/SponserGallery.jsx';

const Sponsorship = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">About Sponsorship</h2>
      <p className="mb-4 text-2xl font-md font-Roboto">
      Club Ojaswa, the distinguished personality development club of SGSITS, Indore, proudly acknowledges the support of our esteemed sponsors: Time, Your Global Mentors, Universal Informatics, Sajo Consultancy, D-lion, Shiva Chinese Wok, Pintola Butter, Habit, ADYNEE, Cafe Around the Corner, Code Mantra, EFAI, Oppo, Lakme Salon, Baskin Robbins, Subway, Bank of Maharashtra, 92.7 Big FM, Codemantra, Mind Body Resolve, and Habit Coffee Lounge. 
We offer unparalleled benefits to our sponsors, including brand visibility on our official merchandise. Sponsors can host sessions or seminars to engage directly with our college audience. Their brand is prominently showcased across all our social media platforms, official emails, and event videos, ensuring extensive outreach. Sponsors also benefit from promotion in all official communications to participants, facilitating enhanced engagement and brand recognition. Additionally, we generate significant online presence for our sponsors with Google reviews and Instagram followers.
      </p>
      <p className="mb-4 mt-8 text-center text-xl font-medium">
        For Collaboration as a Sponsor
      </p>
      <div className="text-center">
        <Link to="/sponsorship-form">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Click here
          </button>
        </Link>
      </div>
      <SponserGallery/>
    </section>
  );
}
export default Sponsorship;
