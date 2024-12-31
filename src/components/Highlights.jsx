import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./achivement.css";
import { Highlights } from "../constants"; 

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <p className={styles.sectionSubText}>Check it out</p>
      <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
        Event Highlights
      </h2>
      <Slider {...settings}>
        {Highlights.map((event, index) => ( // Use Highlights here
          <div key={event.id} className="carousel-slide">
            <motion.div
              variants={fadeIn("", "spring", index * 0.5, 0.75)}
              className="relative"
            >
              <img src={event.image} alt={event.title} className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-white text-center font-bold text-lg">{event.title}</h3>
                <p className="text-white text-center text-sm">{event.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const EventHighlights = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default SectionWrapper(EventHighlights, "Feedbacks");
