import React from 'react';
import { teamMembers2025, teamMembers2026 } from '../team/Team.js';
import { TeamCard } from '../team/TeamCard.jsx';

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center animate-fade-in-down ">
      <div className="text-3xl font-bold my-8 font-serif animate-pulse">Batch 2025</div>
      <div className="flex flex-wrap justify-center">
        {teamMembers2025.map((member, index) => (
          <div key={index} className="m-4">
            <TeamCard member={member} />
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold my-8 font-serif  animate-pulse">Batch 2026</div>
      <div className="flex flex-wrap justify-center">
        {teamMembers2026.map((member, index) => (
          <div key={index} className="m-4">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
