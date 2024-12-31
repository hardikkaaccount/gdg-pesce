import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Events } from "../constants";  
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { code1 } from "../assets"; 

const EventCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={event.date}
      iconStyle={{ background: "#3e3e3e" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={event.icon || code1}  // Use default code1 icon if icon isn't defined
            alt={event.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        
        <h3 className="text-white text-[24px] font-bold">{event.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {event.eventType}
        </p>
        {/* Event Image */}
        {event.image && (
          <img
            src={event.image}
            alt={`${event.title} Image`}
            className="w-full h-[250px] object-cover rounded-lg mt-4"  // Adjust the height to a fixed size
          />
        )}
        <p className="text-white text-[14px] mt-2">{event.location}</p>
      </div>

      {/* Event Details */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {event.details.split("\n").map((point, index) => (
          <li
            key={`event-detail-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Register Button */}
      {event.isUpcoming && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block py-2 px-4 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-white font-bold rounded-lg hover:bg-gradient-to-l"
        >
          View Details and Register
        </a>
      )}
    </VerticalTimelineElement>
  );
};

const UpcomingEvents = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          GDG PESCE
        </p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
        >
          Upcoming Events
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Events.filter(event => event.isUpcoming).map((event, index) => (
            <EventCard
              key={`upcoming-event-${index}`}
              event={event}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(UpcomingEvents, "upcoming-events");
