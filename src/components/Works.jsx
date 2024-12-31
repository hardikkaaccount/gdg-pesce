import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Events } from "../constants";  // Ensure this is correctly importing from constants

// Event card component
const EventCard = ({ date, eventType, title, details, link, location, image, isUpcoming }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        
        {/* "Past Event" label for past events */}
        {!isUpcoming && (
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-teal-500 text-white text-xs sm:text-sm font-semibold p-2 sm:p-3 rounded-md z-10 max-w-max">
            Past Event
          </div>
        )}
      </div>

      <div className="mt-5">
        {/* Date */}
        <p className="text-gray-400 text-sm font-medium">{date}</p>

        {/* Event Type */}
        <span
          className={`text-sm font-semibold ${isUpcoming ? "text-teal-500" : "text-gray-400"}`}
        >
          {eventType}
        </span>

        {/* Title */}
        <h3 className="text-white font-bold text-2xl mt-2">{title}</h3>

        {/* Description */}
        <p className="mt-2 text-secondary text-lg h-[8rem] overflow-y-scroll">{details}</p>
      </div>

      {/* Location */}
      {location && <p className="mt-2 text-sm text-gray-500">Location: {location}</p>}

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-teal-500 underline text-sm font-medium"
      >
        → View details
      </a>
    </Tilt>
  );
};

// Main component for displaying events
const EventsSection = () => {
  return (
    <section id="events" className="bg-dark p-8">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className="text-lg font-medium text-gray-500">GDG PESCE</p>
        <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text">
          Past Events
        </h2>
      </motion.div>

      {/* Past Events */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Events.filter(event => !event.isUpcoming).map((event, index) => (
            <EventCard key={`past-event-${index}`} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(EventsSection, "events");
