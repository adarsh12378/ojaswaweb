import React from "react";

const TeamCard = ({ member}) => {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 w-full">
        <img className="object-cover h-48 w-48" src={member.photo} alt={member.name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2">{member.name}</div>
        <p className="text-gray-700 text-sm font-bold">{member.position}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center space-x-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            className="h-6 w-6"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
          />
        </a>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
          <img
            className="h-6 w-6"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export { TeamCard };
