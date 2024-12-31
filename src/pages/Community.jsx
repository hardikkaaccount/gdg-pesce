import React from "react";
import {
  Experience,
  Feedbacks,
  Works,
  StarsCanvas,
  Footer,
  Navbar,
  Communitya,
  NavigationBar,
} from "../components";

const Community = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="relative z-0">
        <Communitya />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
        <Experience />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
        <Works />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
        <Feedbacks />
        <StarsCanvas />
      </div>
      <NavigationBar />
      <Footer />
    </div>
  );
};

export default Community;
