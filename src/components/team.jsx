import React from 'react';
import { StarsCanvas } from "../components";
import { teamMembers } from "../constants";

const Team = () => {
  return (
    <div className="relative z-0 bg-dark py-16"> {/* Added padding for more space */}
      <div className="relative z-10">
        {/* Title Section */}
        <h2 className="text-center text-transparent text-4xl sm:text-5xl font-extrabold mb-6 mt-16 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
          Meet Our Team
        </h2>
        
        {/* Subtitle or Description */}
        <p className="text-center text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
          Our team is a diverse group of passionate and talented individuals, working together to bring innovative solutions to life. 
          Meet the incredible people behind our success.
        </p>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-tertiary rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-36 h-36 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover transition-all duration-200 transform hover:scale-110"
                  />
                </div>

                <h3 className="text-white font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-teal-500 text-lg mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.college}</p>

                {/* Button */}
                <a
                  href={member.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-white bg-teal-500 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* StarsCanvas Background */}
      <StarsCanvas />
    </div>
  );
};

export default Team;
