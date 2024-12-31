import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { gifLogo } from "../assets";  // Path to your GIF

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const Communitya = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Google Developer Group (GDG)</p>
        <h5 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Community Page
        </h5>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Google Developer Group (GDG) at PES College of Engineering, Mandya, is a vibrant community that connects students and tech enthusiasts with cutting-edge technology and global opportunities. As a part of the global GDG network, it hosts events that cover a wide range of topics, including mobile app development, web development, and participation in global competitions like the Google Solution Challenge. These activities are aimed at fostering innovation and technical excellence among its members.

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the highlights of the community is its focus on practical learning through expert-led sessions and hands-on workshops. For instance, events like the Flutter Development Pathway introduce members to cross-platform app development using Flutter, while sessions on web development provide foundational knowledge and prepare students for international competitions. These initiatives not only enhance technical skills but also encourage problem-solving and creativity​.

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The leadership team of GDG PESCE includes dedicated individuals such as Kushala M Gowda, Gowtham CK, and others who organize and manage these activities. Their commitment ensures members can connect with industry experts, explore real-world applications, and build innovative projects. This community serves as a platform for networking, skill enhancement, and showcasing talents on a global stage.
          <br />

          To learn more about the GDG program and how to get involved, visit the official GDG website:{" "}
          <a
            href="https://developers.google.com/community"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            GDG Official Site
          </a>.
        </p>
        {/* Replacing SpinningTextCanvas with GIF */}
        <div className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <img
            src={gifLogo}
            alt="Community Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Communitya, "Communitya");
