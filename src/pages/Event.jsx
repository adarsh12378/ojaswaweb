import React from 'react';
import { events } from '../events/eventdata';

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
        <div className="text-4xl font-bold text-center font-serif animate-pulse">Club Events</div>
        {events.map((event, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div
              className="p-6 bg-gray-300 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in-right"
            >
              <h2 className="text-2xl font-bold mb-2 font-serif">{event.title}</h2>
              <p className="text-gray-700 text-lg md:text-xl font-serif">{event.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {event.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-full h-52 bg-gray-300 rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 animate-fade-in-left"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
